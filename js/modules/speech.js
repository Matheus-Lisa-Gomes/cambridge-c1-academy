/**
 * FluentEdge Speaking & Pronunciation Evaluation Engine
 * Uses Web Speech Recognition for live spoken analysis,
 * Web Speech Synthesis for native British English model pronunciation,
 * and Web Audio API for real-time waveform visualization.
 */

export class SpeechEngine {
  constructor() {
    this.recognition = null;
    this.synth = window.speechSynthesis || null;
    this.audioContext = null;
    this.analyser = null;
    this.mediaStream = null;
    this.visualizerAnimationId = null;

    this.isListening = false;
    this.isSpeakingModel = false;
    this.startTime = null;
    this.elapsedSeconds = 0;
    this.durationInterval = null;

    this.targetTokens = []; // Array of word objects { text, clean, status: 'pending'|'matched'|'deviation'|'omitted' }
    this.spokenTranscripts = [];
    this.currentWordIndex = 0;

    // Kokoro Neural TTS & Multi-Voice Engine State
    this.currentVoiceId = 'bf_emma'; // Default: UK English Female (Emma)
    this.currentAccent = 'uk';       // 'uk' | 'us'
    this.currentGender = 'female';   // 'female' | 'male'
    this.engineMode = 'neural';      // 'neural' | 'native'
    try {
      this.engineMode = localStorage.getItem('fluentedge_engine_mode') || 'neural';
    } catch(e) {}
    this.kokoro = null;
    this.kokoroLoading = false;
    this.isKokoroReady = false;
    this.currentAudio = null;
    this.audioCache = new Map();
    this.warmedVoices = new Set();
    this.isPrecaching = false;
    this.vocabPrecacheList = [];

    // Callbacks
    this.onWordUpdate = null;
    this.onStateChange = null;
    this.onMetricsUpdate = null;
    this.onError = null;
    this.onEngineStatusChange = null;
    this.onVoiceChange = null;

    this.initRecognition();
  }

  isSpeechSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("SpeechRecognition API not available in this browser.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-GB'; // British English standard

    this.recognition.onstart = () => {
      this.isListening = true;
      this.startTime = Date.now();
      this.startDurationTracker();
      if (this.onStateChange) this.onStateChange({ status: 'recording' });
    };

    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      const activeText = (finalTranscript + ' ' + interimTranscript).trim();
      if (activeText) {
        this.processSpokenSpeech(activeText);
      }
    };

    this.recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      if (event.error === 'no-speech') {
        // Natural pause in speech while reading; do not terminate session
        return;
      }
      if (event.error === 'not-allowed') {
        if (this.onError) this.onError("Microphone permission denied. Please allow microphone access in your browser settings.");
      } else if (event.error === 'network') {
        if (this.onError) this.onError("Speech recognition network error. Note: Brave and Firefox block cloud speech recognition; please use Google Chrome or Microsoft Edge.");
      } else if (event.error === 'audio-capture') {
        if (this.onError) this.onError("Microphone capture failed. Ensure your microphone is connected and not locked by another application.");
      }
      this.stopListening();
    };

    this.recognition.onend = () => {
      // If recognition paused automatically (e.g., brief silence) while session is active, restart it
      if (this.isListening) {
        try {
          this.recognition.start();
          return;
        } catch (e) {
          // If restart fails, proceed to clean teardown
        }
      }
      this.isListening = false;
      this.stopDurationTracker();
      this.stopAudioVisualizer();
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };
  }

  /**
   * Set target essay text to be read aloud
   */
  setTargetText(text) {
    // Break into tokens while preserving original casing and punctuation for display
    const rawWords = text.trim().split(/\s+/);
    this.targetTokens = rawWords.map((word, idx) => ({
      index: idx,
      text: word,
      clean: word.toLowerCase().replace(/[^a-z0-9]/g, ''),
      status: 'pending' // 'pending' | 'matched' | 'deviation' | 'omitted'
    })).filter(w => w.clean.length > 0);

    this.currentWordIndex = 0;
    this.spokenTranscripts = [];
    this.elapsedSeconds = 0;
  }

  /**
   * Align spoken stream with target tokens
   */
  processSpokenSpeech(spokenText) {
    const spokenWords = spokenText.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/);
    if (!spokenWords.length) return;

    let targetIdx = this.currentWordIndex;

    // Scan backwards from recent spoken words to align
    for (const spokenWord of spokenWords) {
      if (targetIdx >= this.targetTokens.length) break;

      const targetWord = this.targetTokens[targetIdx];
      const similarity = calculateWordSimilarity(spokenWord, targetWord.clean);

      if (similarity >= 0.82) {
        targetWord.status = 'matched';
        targetIdx++;
      } else if (similarity >= 0.60) {
        targetWord.status = 'deviation'; // slight pronunciation slant / accent variance
        targetIdx++;
      } else {
        // Check lookahead of up to 2 words in case user skipped or mispronounced one
        let foundAhead = false;
        for (let lookahead = 1; lookahead <= 2 && targetIdx + lookahead < this.targetTokens.length; lookahead++) {
          const aheadWord = this.targetTokens[targetIdx + lookahead];
          if (calculateWordSimilarity(spokenWord, aheadWord.clean) >= 0.80) {
            // Mark skipped words as omitted
            for (let k = 0; k < lookahead; k++) {
              if (this.targetTokens[targetIdx + k].status === 'pending') {
                this.targetTokens[targetIdx + k].status = 'omitted';
              }
            }
            aheadWord.status = 'matched';
            targetIdx = targetIdx + lookahead + 1;
            foundAhead = true;
            break;
          }
        }
        // If not found ahead and current is pending, allow it to remain or mark deviation
      }
    }

    this.currentWordIndex = Math.min(targetIdx, this.targetTokens.length);

    // Calculate real-time metrics
    const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
    const deviationCount = this.targetTokens.filter(t => t.status === 'deviation').length;
    const totalAttempted = Math.max(1, this.currentWordIndex);
    const accuracy = Math.round(((matchedCount + deviationCount * 0.7) / totalAttempted) * 100);

    const minutes = Math.max(0.05, this.elapsedSeconds / 60);
    const wpm = Math.round(matchedCount / minutes);

    if (this.onWordUpdate) {
      this.onWordUpdate({
        tokens: this.targetTokens,
        currentIndex: this.currentWordIndex,
        matchedCount,
        deviationCount,
        accuracy,
        wpm,
        elapsedSeconds: this.elapsedSeconds
      });
    }
  }

  async startListening(canvasElement) {
    if (!this.isSpeechSupported()) {
      if (this.onError) this.onError("Your browser does not support Speech Recognition. Try Chrome, Edge, or Safari.");
      return;
    }

    if (this.isListening) return;

    try {
      if (!this.recognition) {
        this.initRecognition();
      }
      this.recognition.start();
      if (canvasElement) {
        this.startAudioVisualizer(canvasElement).catch(err => {
          console.warn("Visualizer optional mic stream error:", err);
        });
      }
    } catch (err) {
      if (err.name !== 'InvalidStateError') {
        console.error("Failed to start speech recognition:", err);
        if (this.onError) this.onError("Could not start microphone: " + err.message);
      }
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
    this.isListening = false;
    this.stopDurationTracker();
    this.stopAudioVisualizer();
  }

  startDurationTracker() {
    this.stopDurationTracker();
    this.durationInterval = setInterval(() => {
      this.elapsedSeconds++;
      if (this.onMetricsUpdate) {
        const minutes = Math.max(0.05, this.elapsedSeconds / 60);
        const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
        const wpm = Math.round(matchedCount / minutes);
        this.onMetricsUpdate({ elapsedSeconds: this.elapsedSeconds, wpm });
      }
    }, 1000);
  }

  stopDurationTracker() {
    if (this.durationInterval) {
      clearInterval(this.durationInterval);
      this.durationInterval = null;
    }
  }

  /**
   * Final C1/C2 Speaking Assessment based on recorded performance
   */
  getFinalSpeakingAssessment() {
    const totalWords = this.targetTokens.length;
    const matchedCount = this.targetTokens.filter(t => t.status === 'matched').length;
    const deviationCount = this.targetTokens.filter(t => t.status === 'deviation').length;
    const omittedCount = this.targetTokens.filter(t => t.status === 'omitted').length;
    const readRatio = totalWords > 0 ? ((matchedCount + deviationCount) / totalWords) : 0;

    const minutes = Math.max(0.1, this.elapsedSeconds / 60);
    const wpm = Math.round(matchedCount / minutes);

    // Accuracy %
    const pronunciationAccuracy = totalWords > 0 
      ? Math.min(100, Math.round(((matchedCount + (deviationCount * 0.65)) / totalWords) * 100))
      : 0;

    // CEFR Speaking Scales (0-5)
    // 1. Pronunciation (Individual sounds, stress, intelligibility)
    let pronunciationScore = 5.0;
    const pronunciationFeedback = [];
    if (pronunciationAccuracy >= 90) {
      pronunciationScore = 5.0;
      pronunciationFeedback.push("Exceptional phonological precision and phonemic clarity across polysyllabic vocabulary.");
    } else if (pronunciationAccuracy >= 78) {
      pronunciationScore = 4.2;
      pronunciationFeedback.push("Clear intelligibility with natural intonation. Minor phoneme deviations did not impede comprehension.");
    } else if (pronunciationAccuracy >= 65) {
      pronunciationScore = 3.2;
      pronunciationFeedback.push("Noticeable accent interference or slurred word endings on complex C1 terms. Requires stress pattern practice.");
    } else {
      pronunciationScore = 2.0;
      pronunciationFeedback.push("Frequent mispronunciations or omitted clauses requiring deliberate articulation practice.");
    }

    // 2. Fluency & Discourse Speed (C1/C2 Target: 130 - 160 WPM)
    let fluencyScore = 5.0;
    const fluencyFeedback = [];
    if (wpm >= 130 && wpm <= 165) {
      fluencyScore = 5.0;
      fluencyFeedback.push(`Optimal native-speed pacing at ${wpm} WPM with confident, uninterrupted delivery.`);
    } else if ((wpm >= 110 && wpm < 130) || (wpm > 165 && wpm <= 185)) {
      fluencyScore = 4.0;
      fluencyFeedback.push(`Acceptable speaking rate (${wpm} WPM). Aim for consistent 135-150 WPM cadence with natural thought-group pauses.`);
    } else if (wpm < 110) {
      fluencyScore = 3.0;
      fluencyFeedback.push(`Hesitant pace (${wpm} WPM). Work on smooth transitional phrasing to minimize unnatural pauses.`);
    } else {
      fluencyScore = 3.5;
      fluencyFeedback.push(`Rushed pace (${wpm} WPM). Slow down slightly to emphasize rhetorical stress on key academic vocabulary.`);
    }

    // 3. Completion & Discourse Management
    let discourseScore = 5.0;
    const discourseFeedback = [];
    if (readRatio >= 0.90) {
      discourseScore = 5.0;
      discourseFeedback.push("Completed reading full text with coherent rhythm, thought-group boundaries, and steady lung-power control.");
    } else if (readRatio >= 0.70) {
      discourseScore = 3.8;
      discourseFeedback.push(`Read ${Math.round(readRatio * 100)}% of the essay. Strive to complete entire stretch of discourse without fatigue.`);
    } else {
      discourseScore = 2.5;
      discourseFeedback.push(`Incomplete presentation (${Math.round(readRatio * 100)}% completed).`);
    }

    const overallSpeakingTotal = (pronunciationScore + fluencyScore + discourseScore) / 3;
    const overallPercentage = Math.round((overallSpeakingTotal / 5) * 100);

    let speakingBand = "B2 (Vantage)";
    let meetsC1Speaking = false;

    if (overallPercentage >= 85 && pronunciationAccuracy >= 82) {
      speakingBand = "Band 5 (C2 - Exceptional Fluency & Native Cadence)";
      meetsC1Speaking = true;
    } else if (overallPercentage >= 70 && pronunciationAccuracy >= 75) {
      speakingBand = "Band 4 (Estimated C1 - Advanced Level)";
      meetsC1Speaking = true;
    } else if (overallPercentage >= 50) {
      speakingBand = "Band 2-3 (B2 - Competent but Needs Fluidity Practice)";
      meetsC1Speaking = false;
    } else {
      speakingBand = "Band 1 (B1 - Substantial Phonetic Revision Needed)";
      meetsC1Speaking = false;
    }

    return {
      pronunciationAccuracy,
      wpm,
      elapsedSeconds: this.elapsedSeconds,
      matchedCount,
      deviationCount,
      omittedCount,
      totalWords,
      readRatio: Math.round(readRatio * 100),
      speakingBand,
      overallPercentage,
      meetsC1Speaking,
      scores: {
        pronunciation: { score: Number(pronunciationScore.toFixed(1)), max: 5, feedback: pronunciationFeedback },
        fluency: { score: Number(fluencyScore.toFixed(1)), max: 5, feedback: fluencyFeedback },
        discourse: { score: Number(discourseScore.toFixed(1)), max: 5, feedback: discourseFeedback }
      }
    };
  }

  /**
   * Set voice selection and adapt recognition language and accent/gender profile
   * Supported: 'bf_emma' (UK Female), 'bm_george' (UK Male), 'af_sarah' (US Female), 'am_adam' (US Male)
   */
  setVoice(voiceId) {
    if (!voiceId) return;
    this.currentVoiceId = voiceId;

    if (voiceId.startsWith('bf_')) {
      this.currentAccent = 'uk';
      this.currentGender = 'female';
      if (this.recognition) this.recognition.lang = 'en-GB';
    } else if (voiceId.startsWith('bm_')) {
      this.currentAccent = 'uk';
      this.currentGender = 'male';
      if (this.recognition) this.recognition.lang = 'en-GB';
    } else if (voiceId.startsWith('af_')) {
      this.currentAccent = 'us';
      this.currentGender = 'female';
      if (this.recognition) this.recognition.lang = 'en-US';
    } else if (voiceId.startsWith('am_')) {
      this.currentAccent = 'us';
      this.currentGender = 'male';
      if (this.recognition) this.recognition.lang = 'en-US';
    }

    if (this.onVoiceChange) {
      this.onVoiceChange({
        voiceId: this.currentVoiceId,
        accent: this.currentAccent,
        gender: this.currentGender
      });
    }

    // Immediately trigger background warmup for newly chosen voice
    if (this.isKokoroReady && this.kokoro) {
      this.warmupVoice(voiceId).then(() => {
        if (this.vocabPrecacheList && this.vocabPrecacheList.length) {
          this.precacheVocabulary(this.vocabPrecacheList, voiceId);
        }
      });
    }
  }

  updateEngineStatus(state, message) {
    if (this.onEngineStatusChange) {
      this.onEngineStatusChange({ state, message });
    }
  }

  /**
   * Toggle between Kokoro Neural and Fast Native Speech
   */
  toggleEngineMode() {
    this.engineMode = this.engineMode === 'neural' ? 'native' : 'neural';
    try {
      localStorage.setItem('fluentedge_engine_mode', this.engineMode);
    } catch(e) {}

    const isNeural = this.engineMode === 'neural';
    this.updateEngineStatus(
      isNeural ? (this.isKokoroReady ? 'ready' : 'fallback') : 'fallback',
      isNeural ? (this.isKokoroReady ? 'Kokoro Neural' : 'Loading Neural...') : 'Fast Native (0ms)'
    );
    return this.engineMode;
  }

  /**
   * Pre-warm a voice in the background to eliminate the cold-start first-click lag
   */
  async warmupVoice(voiceId) {
    if (!this.isKokoroReady || !this.kokoro) return;
    if (this.warmedVoices.has(voiceId)) return;

    try {
      this.warmedVoices.add(voiceId);
      // Run quick 1-token dot synthesis to load voice tensor into memory and compile WASM graph
      await this.kokoro.generate(".", { voice: voiceId, speed: 1.0 });
      console.log(`[Kokoro TTS] Voice "${voiceId}" pre-warmed successfully.`);
    } catch (err) {
      console.warn(`[Kokoro TTS] Warmup notice for "${voiceId}":`, err);
    }
  }

  /**
   * Pre-cache active vocabulary words in the background for 0ms instant click playback
   */
  async precacheVocabulary(words, voiceId = null) {
    if (!words || !words.length) return;
    this.vocabPrecacheList = [...words];
    const targetVoice = voiceId || this.currentVoiceId;

    if (!this.isKokoroReady || !this.kokoro || this.engineMode !== 'neural') return;
    if (this.isPrecaching) return;

    this.isPrecaching = true;

    try {
      // Ensure voice is warm before synthesizing vocabulary
      await this.warmupVoice(targetVoice);

      for (const word of words) {
        if (!word) continue;
        const cleanWord = word.toLowerCase().trim();
        const cacheKey = `${targetVoice}_0.85_${cleanWord}`;

        // If already cached or voice switched, skip or break
        if (this.audioCache.has(cacheKey)) continue;
        if (this.currentVoiceId !== targetVoice) break;

        // If candidate is listening to speech, pause precache
        while (this.isSpeakingModel) {
          await new Promise(r => setTimeout(r, 200));
        }

        try {
          const result = await this.kokoro.generate(cleanWord, {
            voice: targetVoice,
            speed: 0.85
          });
          const blob = result.toBlob();
          this.audioCache.set(cacheKey, blob);
        } catch (e) {
          // continue
        }

        // 80ms breather between words to ensure completely unhindered main thread
        await new Promise(r => setTimeout(r, 80));
      }
    } finally {
      this.isPrecaching = false;
    }
  }

  /**
   * Initialize Kokoro TTS neural model asynchronously
   */
  async initKokoro() {
    if (this.kokoroLoading || this.kokoro) return;
    this.kokoroLoading = true;
    this.updateEngineStatus('initializing', 'Kokoro: Loading...');

    try {
      let KokoroTTS = window.KokoroTTS;
      if (!KokoroTTS) {
        try {
          const mod = await import('https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm');
          KokoroTTS = mod.KokoroTTS;
          window.KokoroTTS = KokoroTTS;
        } catch (e1) {
          try {
            const mod = await import('https://esm.sh/kokoro-js@1.2.1');
            KokoroTTS = mod.KokoroTTS;
            window.KokoroTTS = KokoroTTS;
          } catch (e2) {
            console.warn("Could not import KokoroTTS module from CDNs:", e2);
          }
        }
      }

      if (KokoroTTS) {
        this.updateEngineStatus('initializing', 'Fetching weights...');
        this.kokoro = await KokoroTTS.from_pretrained('onnx-community/Kokoro-82M-v1.0-ONNX', {
          dtype: 'q8',
          device: 'wasm'
        });
        this.isKokoroReady = true;

        const isNeural = this.engineMode === 'neural';
        this.updateEngineStatus(
          isNeural ? 'ready' : 'fallback',
          isNeural ? 'Kokoro Neural' : 'Fast Native (0ms)'
        );
        console.log('Kokoro TTS initialized successfully with voices: UK (Emma, George) & USA (Sarah, Adam).');

        // Pre-warm initial voice immediately
        await this.warmupVoice(this.currentVoiceId);

        // Pre-cache active vocabulary if available
        if (this.vocabPrecacheList && this.vocabPrecacheList.length) {
          this.precacheVocabulary(this.vocabPrecacheList, this.currentVoiceId);
        }

        // Background pre-warm the remaining 3 voices so voice switches are also cold-start free
        const remainingVoices = ['bf_emma', 'bm_george', 'af_sarah', 'am_adam'].filter(v => v !== this.currentVoiceId);
        setTimeout(async () => {
          for (const vId of remainingVoices) {
            await this.warmupVoice(vId);
            await new Promise(r => setTimeout(r, 200));
          }
        }, 1200);
      } else {
        throw new Error('KokoroTTS module could not be retrieved.');
      }
    } catch (err) {
      console.warn('Kokoro neural model unavailable (file:// protocol or offline). Falling back to browser speech synthesis:', err);
      this.isKokoroReady = false;
      this.kokoro = null;
      this.updateEngineStatus('fallback', 'Native Speech');
    } finally {
      this.kokoroLoading = false;
    }
  }

  /**
   * Play Model Audio using Kokoro Neural TTS (with SpeechSynthesis fallback and instant audioCache)
   */
  async speakText(text, rate = 0.95, onEndCallback = null, onStartCallback = null) {
    this.stopSpeakingModel();

    if (!text || !text.trim()) return;
    const cleanText = text.toLowerCase().trim();
    const cacheKey = `${this.currentVoiceId}_${rate.toFixed(2)}_${cleanText}`;

    // Fast-path: Check in-memory audio cache for 0ms instant playback
    const cachedBlob = this.audioCache.get(cacheKey);
    if (cachedBlob) {
      this.isSpeakingModel = true;
      if (onStartCallback) onStartCallback();
      if (this.onStateChange) this.onStateChange({ status: 'model_speaking' });

      const audioUrl = URL.createObjectURL(cachedBlob);
      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      audio.onended = () => {
        this.isSpeakingModel = false;
        URL.revokeObjectURL(audioUrl);
        this.currentAudio = null;
        if (onEndCallback) onEndCallback();
        if (this.onStateChange) this.onStateChange({ status: 'idle' });
      };

      audio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudio = null;
        this.speakTextBrowserFallback(text, rate, onEndCallback, onStartCallback);
      };

      await audio.play().catch(e => {
        console.warn("Audio play error, using fallback:", e);
        this.speakTextBrowserFallback(text, rate, onEndCallback, onStartCallback);
      });
      return;
    }

    // If candidate opted for Fast Native, skip Kokoro synthesis
    if (this.engineMode === 'native') {
      this.speakTextBrowserFallback(text, rate, onEndCallback, onStartCallback);
      return;
    }

    // 1. Attempt Kokoro Neural TTS if ready
    if (this.isKokoroReady && this.kokoro) {
      try {
        this.isSpeakingModel = true;
        if (onStartCallback) onStartCallback();
        if (this.onStateChange) this.onStateChange({ status: 'model_speaking' });
        this.updateEngineStatus('synthesizing', 'Synthesizing...');

        const result = await this.kokoro.generate(cleanText, {
          voice: this.currentVoiceId,
          speed: rate
        });
        const audioBlob = result.toBlob();

        // Maintain LRU cache
        if (this.audioCache.size > 80) {
          const firstKey = this.audioCache.keys().next().value;
          this.audioCache.delete(firstKey);
        }
        this.audioCache.set(cacheKey, audioBlob);

        // If stopped during generation, do not play
        if (!this.isSpeakingModel) {
          this.updateEngineStatus('ready', 'Kokoro Neural');
          return;
        }

        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        this.currentAudio = audio;

        audio.onended = () => {
          this.isSpeakingModel = false;
          URL.revokeObjectURL(audioUrl);
          this.currentAudio = null;
          this.updateEngineStatus('ready', 'Kokoro Neural');
          if (onEndCallback) onEndCallback();
          if (this.onStateChange) this.onStateChange({ status: 'idle' });
        };

        audio.onerror = (e) => {
          console.warn("Kokoro audio playback failed, falling back to speech synthesis:", e);
          URL.revokeObjectURL(audioUrl);
          this.currentAudio = null;
          this.updateEngineStatus('ready', 'Kokoro Neural');
          this.speakTextBrowserFallback(text, rate, onEndCallback, onStartCallback);
        };

        await audio.play();
        return;
      } catch (err) {
        console.warn("Kokoro generation error, falling back to browser synthesis:", err);
        this.updateEngineStatus('ready', 'Kokoro Neural');
      }
    }

    // 2. Fallback to SpeechSynthesis
    this.speakTextBrowserFallback(text, rate, onEndCallback, onStartCallback);
  }

  /**
   * Native Browser SpeechSynthesis Fallback matching Accent and Gender
   */
  speakTextBrowserFallback(text, rate = 0.95, onEndCallback = null, onStartCallback = null) {
    if (!this.synth) {
      if (this.onError) this.onError("Speech synthesis is not supported in this browser.");
      return;
    }

    this.stopSpeakingModel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voices = this.synth.getVoices();
    const isUK = this.currentAccent === 'uk';
    const isMale = this.currentGender === 'male';

    let selectedVoice = null;

    if (isUK) {
      const ukVoices = voices.filter(v => v.lang === 'en-GB' || v.lang === 'en_GB' || v.lang.startsWith('en-GB'));
      if (isMale) {
        selectedVoice = ukVoices.find(v => /male|george|daniel|oliver|ryan|arthur/i.test(v.name)) || ukVoices[1] || ukVoices[0];
      } else {
        selectedVoice = ukVoices.find(v => /female|victoria|alice|hazel|susan|libby|sonia|emma/i.test(v.name)) || ukVoices[0];
      }
      if (!selectedVoice) selectedVoice = ukVoices[0];
    } else {
      const usVoices = voices.filter(v => v.lang === 'en-US' || v.lang === 'en_US' || v.lang.startsWith('en-US'));
      if (isMale) {
        selectedVoice = usVoices.find(v => /male|david|guy|christopher|mark|eric|alex|adam/i.test(v.name)) || usVoices[1] || usVoices[0];
      } else {
        selectedVoice = usVoices.find(v => /female|samantha|zira|jenny|aria|ava|sara|sarah/i.test(v.name)) || usVoices[0];
      }
      if (!selectedVoice) selectedVoice = usVoices[0];
    }

    if (!selectedVoice) {
      selectedVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      this.isSpeakingModel = true;
      if (onStartCallback) onStartCallback();
      if (this.onStateChange) this.onStateChange({ status: 'model_speaking' });
    };

    utterance.onend = () => {
      this.isSpeakingModel = false;
      if (onEndCallback) onEndCallback();
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };

    utterance.onerror = (e) => {
      console.error("SpeechSynthesis error:", e);
      this.isSpeakingModel = false;
      if (this.onStateChange) this.onStateChange({ status: 'idle' });
    };

    this.synth.speak(utterance);
  }

  stopSpeakingModel() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.isSpeakingModel = false;
  }

  /**
   * Real-time Audio Visualizer with HTML5 Canvas & Web Audio API
   */
  async startAudioVisualizer(canvas) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!this.audioContext || this.audioContext.state === 'closed') {
        this.audioContext = new AudioCtx();
      } else if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }

      // Reuse active media stream if already acquired in this page session
      if (this.mediaStream && this.mediaStream.active) {
        this.mediaStream.getAudioTracks().forEach(track => { track.enabled = true; });
      } else {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        const source = this.audioContext.createMediaStreamSource(this.mediaStream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        source.connect(this.analyser);
      }

      const ctx = canvas.getContext('2d');
      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      if (this.visualizerAnimationId) {
        cancelAnimationFrame(this.visualizerAnimationId);
      }

      const draw = () => {
        if (!this.isListening) return;

        this.visualizerAnimationId = requestAnimationFrame(draw);
        this.analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = (dataArray[i] / 255) * (canvas.height * 0.85);

          // Elegant Gold-to-Cyan gradient
          const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
          gradient.addColorStop(0, 'rgba(223, 177, 91, 0.2)');
          gradient.addColorStop(0.6, 'rgba(223, 177, 91, 0.8)');
          gradient.addColorStop(1, 'rgba(78, 205, 196, 1)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.roundRect(x, canvas.height - barHeight, barWidth - 1, barHeight, [3, 3, 0, 0]);
          ctx.fill();

          x += barWidth + 1;
        }
      };

      draw();
    } catch (err) {
      console.warn("Could not start visualizer audio context:", err);
    }
  }

  stopAudioVisualizer() {
    if (this.visualizerAnimationId) {
      cancelAnimationFrame(this.visualizerAnimationId);
      this.visualizerAnimationId = null;
    }
    // Mute tracks while idle so the indicator goes off without destroying the permission handle
    if (this.mediaStream && this.mediaStream.active) {
      this.mediaStream.getAudioTracks().forEach(track => {
        track.enabled = false;
      });
    }
    if (this.audioContext && this.audioContext.state === 'running') {
      try {
        this.audioContext.suspend();
      } catch (e) {
        // ignore
      }
    }
  }
}

/**
 * Word similarity calculation using normalized Levenshtein distance
 */
function calculateWordSimilarity(s1, s2) {
  if (s1 === s2) return 1.0;
  if (!s1 || !s2) return 0.0;

  // Suffix strip matching (e.g., "mitigating" vs "mitigate", "paradigms" vs "paradigm")
  if (s1.startsWith(s2) || s2.startsWith(s1)) {
    const diff = Math.abs(s1.length - s2.length);
    if (diff <= 3) return 0.88;
  }

  const distance = levenshteinDistance(s1, s2);
  const maxLength = Math.max(s1.length, s2.length);
  return 1 - (distance / maxLength);
}

function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
