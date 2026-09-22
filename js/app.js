/**
 * FluentEdge: C1–C2 English Training - Main Application Controller
 */

import { TOPICS } from './data/topics.js';
import { getRandomVocabularySet } from './data/vocabulary.js';
import { analyzeQuickMetrics, evaluateEssay, checkTargetWordUsage } from './modules/evaluator.js';
import { SpeechEngine } from './modules/speech.js';

class FluentEdgeApp {
  constructor() {
    this.topics = TOPICS;
    this.currentTopicIndex = 0;
    this.currentTopic = this.topics[0];
    this.targetLevel = 'C1';
    try {
      this.targetLevel = localStorage.getItem('fluentedge_target_level') || 'C1';
    } catch (e) {}

    this.activeVocabulary = [];
    this.speechEngine = new SpeechEngine();
    this.lastEvaluationResult = null;
    this.meetsC1Threshold = false;
    this.topicProgress = this.loadTopicProgress();

    this.dom = {};
    this.init();
  }

  init() {
    this.cacheDomElements();
    this.bindEvents();
    this.bindHotkeys();
    this.setupSpeechEngineCallbacks();
    this.setTargetLevel(this.targetLevel);
    this.loadTopic(0);
    this.renderHistory();
  }

  cacheDomElements() {
    this.dom = {
      // Header
      historyDrawerBtn: document.getElementById('historyDrawerBtn'),
      historyDrawer: document.getElementById('historyDrawer'),
      closeHistoryBtn: document.getElementById('closeHistoryBtn'),
      clearHistoryBtn: document.getElementById('clearHistoryBtn'),
      historyList: document.getElementById('historyList'),
      brandCrest: document.getElementById('brandCrest'),
      modeC1Btn: document.getElementById('modeC1Btn'),
      modeC2Btn: document.getElementById('modeC2Btn'),

      // Stepper
      stepIndicator1: document.getElementById('stepIndicator1'),
      stepIndicator2: document.getElementById('stepIndicator2'),
      stepIndicator3: document.getElementById('stepIndicator3'),
      step3LockIcon: document.getElementById('step3LockIcon'),
      step1LexisHint: document.getElementById('step1LexisHint'),
      step2WordCountHint: document.getElementById('step2WordCountHint'),
      targetWordCountHint: document.getElementById('targetWordCountHint'),

      // Workspaces
      mainWritingWorkspace: document.getElementById('mainWritingWorkspace'),
      speakingStudio: document.getElementById('speakingStudio'),

      // Topic Card
      topicCounterCurrent: document.getElementById('topicCounterCurrent'),
      topicCounterTotal: document.getElementById('topicCounterTotal'),
      topicStatusBadge: document.getElementById('topicStatusBadge'),
      topicProgressTracker: document.getElementById('topicProgressTracker'),
      trackerStats: document.getElementById('trackerStats'),
      trackerBentoStrip: document.getElementById('trackerBentoStrip'),
      trackerPrevBtn: document.getElementById('trackerPrevBtn'),
      trackerNextBtn: document.getElementById('trackerNextBtn'),
      topicJumpSelect: document.getElementById('topicJumpSelect'),
      prevTopicBtn: document.getElementById('prevTopicBtn'),
      nextTopicBtn: document.getElementById('nextTopicBtn'),
      topicCategory: document.getElementById('topicCategory'),
      topicType: document.getElementById('topicType'),
      topicTime: document.getElementById('topicTime'),
      topicTitle: document.getElementById('topicTitle'),
      topicContext: document.getElementById('topicContext'),
      topicPoints: document.getElementById('topicPoints'),
      topicTask: document.getElementById('topicTask'),
      vocabGrid: document.getElementById('vocabGrid'),
      vocabUsedCounter: document.getElementById('vocabUsedCounter'),
      rerollVocabBtn: document.getElementById('rerollVocabBtn'),
      toggleStructuresBtn: document.getElementById('toggleStructuresBtn'),
      structuresBody: document.getElementById('structuresBody'),
      structuresCaret: document.getElementById('structuresCaret'),
      toggleSampleExcerptBtn: document.getElementById('toggleSampleExcerptBtn'),
      sampleExcerptBox: document.getElementById('sampleExcerptBox'),

      // Writing Studio
      essayInput: document.getElementById('essayInput'),
      liveWordCount: document.getElementById('liveWordCount'),
      liveParaCount: document.getElementById('liveParaCount'),
      lengthGuidanceBadge: document.getElementById('lengthGuidanceBadge'),
      radarBadgesRow: document.getElementById('radarBadgesRow'),
      radarCountDisplay: document.getElementById('radarCountDisplay'),
      evaluateEssayBtn: document.getElementById('evaluateEssayBtn'),
      loadSampleEssayBtn: document.getElementById('loadSampleEssayBtn'),
      clearEssayBtn: document.getElementById('clearEssayBtn'),

      // Evaluation Modal
      evalModalBackdrop: document.getElementById('evalModalBackdrop'),
      closeEvalModalBtn: document.getElementById('closeEvalModalBtn'),
      evalScoreTotal: document.getElementById('evalScoreTotal'),
      evalPercentage: document.getElementById('evalPercentage'),
      evalVerdictTitle: document.getElementById('evalVerdictTitle'),
      evalVerdictDesc: document.getElementById('evalVerdictDesc'),
      scaleContentScore: document.getElementById('scaleContentScore'),
      scaleContentFeedback: document.getElementById('scaleContentFeedback'),
      scaleCommScore: document.getElementById('scaleCommScore'),
      scaleCommFeedback: document.getElementById('scaleCommFeedback'),
      scaleOrgScore: document.getElementById('scaleOrgScore'),
      scaleOrgFeedback: document.getElementById('scaleOrgFeedback'),
      scaleLangScore: document.getElementById('scaleLangScore'),
      scaleLangFeedback: document.getElementById('scaleLangFeedback'),
      gatekeeperBanner: document.getElementById('gatekeeperBanner'),
      gatekeeperHeading: document.getElementById('gatekeeperHeading'),
      gatekeeperSubtext: document.getElementById('gatekeeperSubtext'),
      gatekeeperActionBtn: document.getElementById('gatekeeperActionBtn'),

      // Speaking Studio
      returnToWritingBtn: document.getElementById('returnToWritingBtn'),
      teleprompterText: document.getElementById('teleprompterText'),
      startSpeakingBtn: document.getElementById('startSpeakingBtn'),
      stopSpeakingBtn: document.getElementById('stopSpeakingBtn'),
      playModelAudioBtn: document.getElementById('playModelAudioBtn'),
      stopModelAudioBtn: document.getElementById('stopModelAudioBtn'),
      visualizerCanvas: document.getElementById('visualizerCanvas'),
      liveSpeakingWpm: document.getElementById('liveSpeakingWpm'),
      liveSpeakingAcc: document.getElementById('liveSpeakingAcc'),
      liveSpeakingTime: document.getElementById('liveSpeakingTime'),
      speakingReportPanel: document.getElementById('speakingReportPanel'),

      // Toast
      toastContainer: document.getElementById('toastContainer')
    };
  }

  bindEvents() {
    // Mode toggle events (overlapping card stack toggle)
    if (this.dom.modeC1Btn) {
      this.dom.modeC1Btn.addEventListener('click', () => {
        this.setTargetLevel(this.targetLevel === 'C1' ? 'C2' : 'C1');
      });
    }
    if (this.dom.modeC2Btn) {
      this.dom.modeC2Btn.addEventListener('click', () => {
        this.setTargetLevel(this.targetLevel === 'C2' ? 'C1' : 'C2');
      });
    }

    // Topic events
    this.dom.prevTopicBtn.addEventListener('click', () => this.cyclePrevTopic());
    this.dom.nextTopicBtn.addEventListener('click', () => this.cycleNextTopic());
    if (this.dom.trackerPrevBtn) {
      this.dom.trackerPrevBtn.addEventListener('click', () => this.cyclePrevTopic());
    }
    if (this.dom.trackerNextBtn) {
      this.dom.trackerNextBtn.addEventListener('click', () => this.cycleNextTopic());
    }
    if (this.dom.topicJumpSelect) {
      this.dom.topicJumpSelect.addEventListener('change', (e) => {
        const idx = parseInt(e.target.value, 10);
        if (!isNaN(idx) && idx !== this.currentTopicIndex) {
          this.loadTopic(idx);
        }
      });
    }
    this.dom.toggleStructuresBtn.addEventListener('click', () => this.toggleStructuresAccordion());
    this.dom.toggleSampleExcerptBtn.addEventListener('click', () => this.toggleSampleExcerpt());
    if (this.dom.rerollVocabBtn) {
      this.dom.rerollVocabBtn.addEventListener('click', () => {
        this.refreshRandomVocabulary(true);
        this.showToast("Drawn 9 new random words (3 Verbs, 2 Nouns, 2 Adjectives, 2 Adverbs).", "info");
      });
    }

    // Editor events
    this.dom.essayInput.addEventListener('input', () => this.handleEditorInput());
    this.dom.clearEssayBtn.addEventListener('click', () => this.clearEssay());
    this.dom.loadSampleEssayBtn.addEventListener('click', () => this.loadSampleDraft());
    this.dom.evaluateEssayBtn.addEventListener('click', () => this.triggerEvaluation());

    // Modal events
    this.dom.closeEvalModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.dom.evalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.dom.evalModalBackdrop) this.closeEvaluationModal();
    });
    this.dom.gatekeeperActionBtn.addEventListener('click', () => this.handleGatekeeperAction());

    // Speaking Studio events
    this.dom.returnToWritingBtn.addEventListener('click', () => this.returnToWriting());
    this.dom.startSpeakingBtn.addEventListener('click', () => this.startSpeakingSession());
    this.dom.stopSpeakingBtn.addEventListener('click', () => this.stopSpeakingSession());
    this.dom.playModelAudioBtn.addEventListener('click', () => this.playModelAudio());
    this.dom.stopModelAudioBtn.addEventListener('click', () => this.stopModelAudio());

    // History drawer events
    this.dom.historyDrawerBtn.addEventListener('click', () => this.openHistoryDrawer());
    this.dom.closeHistoryBtn.addEventListener('click', () => this.closeHistoryDrawer());
    this.dom.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
  }

  bindHotkeys() {
    document.addEventListener('keydown', (e) => {
      const modalOpen = this.dom.evalModalBackdrop.classList.contains('visible') ||
                        this.dom.evalModalBackdrop.style.display === 'flex';
      const inTextField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

      // Alt+M  →  Toggle C1 / C2 Standard Mode
      if (e.altKey && (e.key === 'm' || e.key === 'M') && !modalOpen) {
        e.preventDefault();
        const nextMode = this.targetLevel === 'C1' ? 'C2' : 'C1';
        this.setTargetLevel(nextMode);
        return;
      }

      // Alt+ArrowLeft  →  Previous Topic
      if (e.altKey && e.key === 'ArrowLeft' && !inTextField && !modalOpen) {
        e.preventDefault();
        this.cyclePrevTopic();
        return;
      }

      // Alt+ArrowRight  →  Next Topic
      if (e.altKey && e.key === 'ArrowRight' && !inTextField && !modalOpen) {
        e.preventDefault();
        this.cycleNextTopic();
        return;
      }

      // Ctrl+Enter  →  Evaluate (works even from inside the essay textarea)
      if (e.ctrlKey && e.key === 'Enter' && !modalOpen) {
        e.preventDefault();
        this.triggerEvaluation();
      }
    });
  }

  setupSpeechEngineCallbacks() {
    this.speechEngine.onStateChange = ({ status }) => {
      if (status === 'recording') {
        this.dom.startSpeakingBtn.style.display = 'none';
        this.dom.stopSpeakingBtn.style.display = 'inline-flex';
        this.showToast("Microphone active. Read aloud into your mic.", "info");
      } else if (status === 'idle') {
        this.dom.startSpeakingBtn.style.display = 'inline-flex';
        this.dom.stopSpeakingBtn.style.display = 'none';
      } else if (status === 'model_speaking') {
        this.dom.playModelAudioBtn.style.display = 'none';
        this.dom.stopModelAudioBtn.style.display = 'inline-flex';
      }
    };

    this.speechEngine.onWordUpdate = ({ tokens, accuracy, wpm, elapsedSeconds }) => {
      this.updateTeleprompterDisplay(tokens);
      this.dom.liveSpeakingAcc.textContent = `${accuracy}%`;
      this.dom.liveSpeakingWpm.textContent = `${wpm}`;
      this.dom.liveSpeakingTime.textContent = this.formatSeconds(elapsedSeconds);
    };

    this.speechEngine.onMetricsUpdate = ({ elapsedSeconds, wpm }) => {
      this.dom.liveSpeakingTime.textContent = this.formatSeconds(elapsedSeconds);
      this.dom.liveSpeakingWpm.textContent = `${wpm}`;
    };

    this.speechEngine.onError = (message) => {
      this.showToast(message, "error");
    };
  }

  setTargetLevel(level) {
    this.targetLevel = level;
    try {
      localStorage.setItem('fluentedge_target_level', level);
    } catch (e) {}

    const isC2 = level === 'C2';

    if (this.dom.modeC1Btn && this.dom.modeC2Btn) {
      this.dom.modeC1Btn.classList.toggle('active', !isC2);
      this.dom.modeC1Btn.setAttribute('aria-checked', !isC2 ? 'true' : 'false');
      this.dom.modeC2Btn.classList.toggle('active', isC2);
      this.dom.modeC2Btn.setAttribute('aria-checked', isC2 ? 'true' : 'false');
    }

    if (isC2) {
      document.body.classList.add('theme-c2');
    } else {
      document.body.classList.remove('theme-c2');
    }

    if (this.dom.brandCrest) {
      this.dom.brandCrest.textContent = level;
      this.dom.brandCrest.title = isC2
        ? "FluentEdge — Current Standard: C2 Proficiency"
        : "FluentEdge — Current Standard: C1 Advanced";
    }

    if (this.dom.step1LexisHint) {
      this.dom.step1LexisHint.textContent = isC2
        ? "Prompt & Compulsory C2 Vocabulary"
        : "Prompt & Compulsory C1 Vocabulary";
    }
    if (this.dom.step2WordCountHint) {
      this.dom.step2WordCountHint.textContent = isC2
        ? "280-320 Words & Syntactic Complexity"
        : "220-260 Words & Syntactic Complexity";
    }
    if (this.dom.targetWordCountHint) {
      this.dom.targetWordCountHint.textContent = isC2
        ? "(280-320 target)"
        : "(220-260 target)";
    }

    if (this.dom.essayInput) {
      this.refreshRandomVocabulary(true);
      this.handleEditorInput();
    }
  }

  refreshRandomVocabulary(force = false) {
    if (force || !this.activeVocabulary || this.activeVocabulary.length === 0) {
      this.activeVocabulary = getRandomVocabularySet(this.targetLevel);
    }
    this.renderVocabularyChips();
    if (this.dom.essayInput) {
      this.handleEditorInput();
    }
  }

  // ==========================================
  // TOPIC & VOCABULARY ENGINE
  // ==========================================

  loadTopic(index) {
    this.currentTopicIndex = index;
    this.currentTopic = this.topics[index];

    // Update topic counter badge
    this.dom.topicCounterCurrent.textContent = index + 1;
    this.dom.topicCounterTotal.textContent = this.topics.length;

    this.dom.topicCategory.textContent = this.currentTopic.category;
    this.dom.topicType.textContent = this.currentTopic.type;
    this.dom.topicTime.textContent = this.currentTopic.recommendedTime;
    this.dom.topicTitle.textContent = this.currentTopic.title;
    this.dom.topicContext.textContent = this.currentTopic.prompt.context;

    // Points
    this.dom.topicPoints.innerHTML = this.currentTopic.prompt.points
      .map(p => `<li>${p}</li>`)
      .join('');

    this.dom.topicTask.textContent = this.currentTopic.prompt.task;

    // Draw 9 random target vocabulary items (3 Verbs, 2 Nouns, 2 Adj, 2 Adv)
    this.refreshRandomVocabulary(true);

    // Recommended Structures
    this.renderRecommendedStructures();

    // Sample Excerpt
    this.dom.sampleExcerptBox.textContent = `"${this.currentTopic.sampleExcerpt}"`;
    this.dom.sampleExcerptBox.style.display = 'none';

    // Update topic curriculum progress UI & card badge
    this.updateTopicProgressUI();

    // Reset editor analysis for new topic
    this.handleEditorInput();
  }

  cyclePrevTopic() {
    const prevIndex = (this.currentTopicIndex - 1 + this.topics.length) % this.topics.length;
    this.loadTopic(prevIndex);
  }

  cycleNextTopic() {
    const nextIndex = (this.currentTopicIndex + 1) % this.topics.length;
    this.loadTopic(nextIndex);
  }

  renderVocabularyChips() {
    if (!this.activeVocabulary || this.activeVocabulary.length === 0) {
      this.activeVocabulary = getRandomVocabularySet(this.targetLevel);
    }
    const text = this.dom.essayInput ? (this.dom.essayInput.value || "") : "";
    this.dom.vocabGrid.innerHTML = this.activeVocabulary.map((v) => {
      const usage = checkTargetWordUsage(v, text);
      const headword = v.headword || v.word;
      const posClass = `pos-${(v.pos || 'noun').toLowerCase()}`;
      return `
        <div class="vocab-chip ${usage.used ? 'used' : ''}" data-word="${headword}">
          <div class="vocab-chip-top">
            <div class="vocab-word-title">
              <span class="vocab-word-text">${headword}</span>
              <span class="vocab-pos-pill ${posClass}">${v.pos}</span>
              <span class="vocab-cefr-pill">${v.cefr}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span class="vocab-used-check">✓ USED</span>
              <button class="vocab-audio-btn" data-speak="${headword}" title="Hear native pronunciation">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>
          <div class="vocab-type-meta">${(v.pos || '').toUpperCase()} • ${v.cefr} Target Lexis</div>
        </div>
      `;
    }).join('');

    // Attach individual word TTS audio listeners
    this.dom.vocabGrid.querySelectorAll('.vocab-audio-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.getAttribute('data-speak');
        this.speechEngine.speakText(word, 0.85);
      });
    });
  }

  renderRecommendedStructures() {
    this.dom.structuresBody.innerHTML = this.currentTopic.recommendedStructures.map(s => `
      <div class="struct-item">
        <div class="struct-title">${s.name}</div>
        <div class="struct-pattern">${s.pattern}</div>
        <div class="struct-example">"${s.example}"</div>
      </div>
    `).join('');
  }

  toggleStructuresAccordion() {
    const isHidden = this.dom.structuresBody.style.display === 'none';
    this.dom.structuresBody.style.display = isHidden ? 'flex' : 'none';
    this.dom.structuresCaret.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  toggleSampleExcerpt() {
    const isHidden = this.dom.sampleExcerptBox.style.display === 'none';
    this.dom.sampleExcerptBox.style.display = isHidden ? 'block' : 'none';
  }

  // ==========================================
  // WRITING STUDIO & REAL-TIME C1 RADAR
  // ==========================================

  handleEditorInput() {
    const text = this.dom.essayInput.value;
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);

    // Live word count
    this.dom.liveWordCount.textContent = metrics.wordCount;
    this.dom.liveParaCount.textContent = metrics.paragraphCount;

    // Word count color indicator
    this.dom.liveWordCount.className = "metric-live-val";
    const isC2 = this.targetLevel === 'C2';
    const minTarget = isC2 ? 280 : 220;
    const maxTarget = isC2 ? 320 : 260;
    const maxOptimal = isC2 ? 340 : 280;

    if (metrics.wordCount >= minTarget && metrics.wordCount <= maxOptimal) {
      this.dom.liveWordCount.classList.add("optimal");
      this.dom.lengthGuidanceBadge.textContent = isC2
        ? `Optimal C2 Length (${minTarget}-${maxTarget})`
        : `Optimal C1 Length (${minTarget}-${maxTarget})`;
      this.dom.lengthGuidanceBadge.className = "radar-badge active";
    } else if (metrics.wordCount > 0 && metrics.wordCount < minTarget) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = `Need ${minTarget - metrics.wordCount} more words (${this.targetLevel} target: ${minTarget}-${maxTarget})`;
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else if (metrics.wordCount > maxOptimal) {
      this.dom.liveWordCount.classList.add("warning");
      this.dom.lengthGuidanceBadge.textContent = `Exceeding ${this.targetLevel} target (be concise)`;
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    } else {
      this.dom.lengthGuidanceBadge.textContent = "Awaiting input";
      this.dom.lengthGuidanceBadge.className = "radar-badge";
    }

    // Update target vocabulary chips & counter
    this.dom.vocabUsedCounter.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    metrics.vocabStatus.forEach(status => {
      const chip = this.dom.vocabGrid.querySelector(`[data-word="${status.word}"]`);
      if (chip) {
        if (status.used) {
          chip.classList.add('used');
        } else {
          chip.classList.remove('used');
        }
      }
    });

    // Real-time grammar radar
    if (metrics.detectedGrammar.length > 0) {
      this.dom.radarCountDisplay.textContent = `${metrics.detectedGrammar.length} advanced structures detected`;
      this.dom.radarBadgesRow.innerHTML = metrics.detectedGrammar.map(g => `
        <span class="radar-badge active" title="${g.description}">
          ✓ ${g.name}
        </span>
      `).join('');
    } else {
      this.dom.radarCountDisplay.textContent = `0 structures detected`;
      this.dom.radarBadgesRow.innerHTML = `
        <span class="radar-badge-empty">Write complex structures (e.g. "Seldom has...", "What is of paramount...", "It is widely contended that...") to activate radar.</span>
      `;
    }

    // Dynamic card status badge update (e.g. Draft in Progress)
    this.updateCurrentTopicBadge();
  }

  loadSampleDraft() {
    this.dom.essayInput.value = this.currentTopic.sampleExcerpt;
    this.handleEditorInput();
    this.showToast(`Loaded sample ${this.currentTopic.cefrTarget || 'C1/C2'} model draft for evaluation.`, "info");
  }

  clearEssay() {
    if (confirm("Clear your current draft?")) {
      this.dom.essayInput.value = "";
      this.handleEditorInput();
    }
  }

  // ==========================================
  // FLUENTEDGE C1/C2 WRITING ASSESSMENT & GATEKEEPER
  // ==========================================

  triggerEvaluation() {
    const text = this.dom.essayInput.value.trim();
    if (!text) {
      this.showToast("Please write or paste an essay first before evaluating.", "error");
      return;
    }

    if (text.split(/\s+/).length < 50) {
      this.showToast("Essay is too short for a full C1/C2 evaluation. Write at least 150 words.", "error");
      return;
    }

    const evalResult = evaluateEssay(text, this.currentTopic, this.targetLevel, this.activeVocabulary);
    this.lastEvaluationResult = evalResult;
    this.meetsC1Threshold = evalResult.meetsThreshold;

    const isC2 = this.targetLevel === 'C2';

    // Render results into modal
    this.dom.evalScoreTotal.textContent = evalResult.rawTotal;
    this.dom.evalPercentage.textContent = `${evalResult.percentage}%`;
    this.dom.evalVerdictTitle.textContent = evalResult.cefr.band;
    this.dom.evalVerdictTitle.className = `cefr-verdict-title ${evalResult.meetsThreshold ? 'pass' : 'revise'}`;
    this.dom.evalVerdictDesc.textContent = evalResult.cefr.summary;

    // Scales breakdown
    const renderScale = (scoreEl, feedbackEl, scale) => {
      scoreEl.textContent = `${scale.score} / ${scale.max}`;
      feedbackEl.innerHTML = scale.feedback.map(fb => `<li>${fb}</li>`).join('');
    };

    renderScale(this.dom.scaleContentScore, this.dom.scaleContentFeedback, evalResult.scales.content);
    renderScale(this.dom.scaleCommScore, this.dom.scaleCommFeedback, evalResult.scales.communicative);
    renderScale(this.dom.scaleOrgScore, this.dom.scaleOrgFeedback, evalResult.scales.organisation);
    renderScale(this.dom.scaleLangScore, this.dom.scaleLangFeedback, evalResult.scales.language);

    // Gatekeeper Banner
    if (evalResult.meetsThreshold) {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner unlocked";
      this.dom.gatekeeperHeading.textContent = isC2
        ? "✓ C2 Proficiency Confirmed (Mastery)"
        : "✓ C1 Standard Confirmed";
      this.dom.gatekeeperSubtext.textContent = isC2
        ? "Your text demonstrates the 280+ word discursive architecture, lexical sophistication, and complex syntax required for C2 Proficiency. Proceed to read your text aloud for pronunciation evaluation."
        : "Your text demonstrates the syntactic complexity and vocabulary breadth required for C1–C2 mastery. Proceed to read your text aloud for pronunciation evaluation.";
      this.dom.gatekeeperActionBtn.className = "btn btn-emerald";
      this.dom.gatekeeperActionBtn.textContent = "Proceed to Phase 3: Speaking →";
      
      // Update step indicator
      this.dom.stepIndicator2.classList.add('completed');
      this.dom.stepIndicator3.classList.add('active');
      this.dom.step3LockIcon.innerHTML = "3";
    } else {
      this.dom.gatekeeperBanner.className = "gatekeeper-banner locked";
      this.dom.gatekeeperHeading.textContent = `${this.targetLevel} Threshold Not Reached (Revision Recommended)`;
      this.dom.gatekeeperSubtext.textContent = isC2
        ? `Your draft scored ${evalResult.percentage}%. C2 Proficiency requires a score ≥ 85%, at least 6 target vocabulary words, and multiple advanced syntactic structures. We recommend revising your text using the feedback notes above, or you may choose to practice speaking in Practice Mode.`
        : `Your draft scored below C1 requirements (${evalResult.percentage}%). We recommend revising your text using the feedback notes above, or you may choose to practice speaking in Practice Mode.`;
      this.dom.gatekeeperActionBtn.className = "btn btn-secondary";
      this.dom.gatekeeperActionBtn.textContent = "Practice Speaking Anyway (Override)";
    }

    // Open Modal
    this.dom.evalModalBackdrop.classList.add('open');

    // Save to history
    this.saveSessionToHistory({
      type: 'writing',
      topicId: this.currentTopic.id,
      targetLevel: this.targetLevel,
      topicTitle: this.currentTopic.title,
      text: text,
      score: evalResult.rawTotal,
      percentage: evalResult.percentage,
      band: evalResult.cefr.band,
      meetsThreshold: evalResult.meetsThreshold,
      date: new Date().toISOString()
    });

    // Record topic progress
    this.recordTopicEvaluation(this.currentTopic.id, {
      score: evalResult.rawTotal,
      percentage: evalResult.percentage,
      band: evalResult.cefr.band,
      meetsThreshold: evalResult.meetsThreshold,
      targetLevel: this.targetLevel,
      date: new Date().toISOString()
    });
  }

  closeEvaluationModal() {
    this.dom.evalModalBackdrop.classList.remove('open');
  }

  handleGatekeeperAction() {
    this.closeEvaluationModal();
    this.proceedToSpeakingPhase();
  }

  // ==========================================
  // PHASE 3: SPEAKING & PRONUNCIATION STUDIO
  // ==========================================

  proceedToSpeakingPhase() {
    const text = this.dom.essayInput.value.trim();
    if (!text) return;

    this.dom.mainWritingWorkspace.style.display = 'none';
    this.dom.speakingStudio.style.display = 'block';

    // Highlight step 3
    this.dom.stepIndicator1.classList.remove('active');
    this.dom.stepIndicator2.classList.remove('active');
    this.dom.stepIndicator3.classList.add('active');

    // Initialize speech engine with text
    this.speechEngine.setTargetText(text);

    // Render Teleprompter tokens
    this.renderTeleprompterTokens(this.speechEngine.targetTokens);

    // Reset Speaking metrics
    this.dom.liveSpeakingWpm.textContent = '0';
    this.dom.liveSpeakingAcc.textContent = '0%';
    this.dom.liveSpeakingTime.textContent = '00:00';
    this.dom.speakingReportPanel.style.display = 'none';

    this.showToast("Speaking Studio ready. Click words to hear model pronunciation, or press 'Start Reading Aloud'.", "info");
  }

  renderTeleprompterTokens(tokens) {
    this.dom.teleprompterText.innerHTML = tokens.map(token => `
      <span class="teleprompter-word ${token.status}" data-index="${token.index}" title="Click to hear native pronunciation: ${token.text}">
        ${token.text}
      </span>
    `).join(' ');

    // Add click to speak word
    this.dom.teleprompterText.querySelectorAll('.teleprompter-word').forEach(el => {
      el.addEventListener('click', () => {
        const wordText = el.textContent.trim();
        this.speechEngine.speakText(wordText, 0.85);
      });
    });
  }

  updateTeleprompterDisplay(tokens) {
    const spans = this.dom.teleprompterText.querySelectorAll('.teleprompter-word');
    tokens.forEach((token, i) => {
      if (spans[i]) {
        spans[i].className = `teleprompter-word ${token.status}`;
      }
    });
  }

  returnToWriting() {
    this.speechEngine.stopListening();
    this.speechEngine.stopSpeakingModel();
    this.dom.speakingStudio.style.display = 'none';
    this.dom.mainWritingWorkspace.style.display = 'grid';
    this.dom.stepIndicator3.classList.remove('active');
    this.dom.stepIndicator2.classList.add('active');
  }

  async startSpeakingSession() {
    await this.speechEngine.startListening(this.dom.visualizerCanvas);
  }

  stopSpeakingSession() {
    this.speechEngine.stopListening();
    const report = this.speechEngine.getFinalSpeakingAssessment();
    this.renderSpeakingReport(report);

    // Save to history
    this.saveSessionToHistory({
      type: 'speaking',
      topicTitle: this.currentTopic.title,
      accuracy: report.pronunciationAccuracy,
      wpm: report.wpm,
      band: report.speakingBand,
      duration: report.elapsedSeconds,
      date: new Date().toISOString()
    });
  }

  renderSpeakingReport(report) {
    this.dom.speakingReportPanel.style.display = 'block';
    this.dom.speakingReportPanel.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3>C1–C2 Speaking Practice Assessment</h3>
        <span class="cefr-pill ${report.meetsC1Speaking ? 'badge-c1' : 'badge-b2'}">${report.speakingBand}</span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px;">
        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Pronunciation Precision</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--gold-light); font-family: var(--font-serif);">${report.pronunciationAccuracy}%</div>
          <div style="font-size: 12px; color: var(--emerald);">${report.matchedCount} words accurately recognized</div>
        </div>

        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Fluency & Pacing</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--blue-accent); font-family: var(--font-serif);">${report.wpm} <span style="font-size: 14px;">WPM</span></div>
          <div style="font-size: 12px; color: var(--text-secondary);">Target: 130-160 WPM</div>
        </div>

        <div class="scale-card" style="text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; color: var(--text-muted);">Discourse Duration</div>
          <div style="font-size: 32px; font-weight: 800; color: var(--text-primary); font-family: var(--font-mono);">${this.formatSeconds(report.elapsedSeconds)}</div>
          <div style="font-size: 12px; color: var(--text-secondary);">${report.readRatio}% text covered</div>
        </div>
      </div>

      <div class="scales-grid">
        <div class="scale-card">
          <div class="scale-card-header">
            <span class="scale-name">Phonology & Individual Sounds</span>
            <span class="scale-score-pill">${report.scores.pronunciation.score} / 5</span>
          </div>
          <ul class="scale-feedback-list">
            ${report.scores.pronunciation.feedback.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="scale-card">
          <div class="scale-card-header">
            <span class="scale-name">Speech Cadence & Rhythm</span>
            <span class="scale-score-pill">${report.scores.fluency.score} / 5</span>
          </div>
          <ul class="scale-feedback-list">
            ${report.scores.fluency.feedback.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="margin-top: 18px; text-align: center;">
        <button id="retrySpeakingBtn" class="btn btn-secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path></svg>
          Record Another Attempt
        </button>
      </div>
    `;

    document.getElementById('retrySpeakingBtn')?.addEventListener('click', () => {
      this.speechEngine.setTargetText(this.dom.essayInput.value.trim());
      this.renderTeleprompterTokens(this.speechEngine.targetTokens);
      this.dom.speakingReportPanel.style.display = 'none';
      this.startSpeakingSession();
    });
  }

  playModelAudio() {
    const text = this.dom.essayInput.value.trim();
    if (!text) return;
    this.speechEngine.speakText(text, 0.92, () => {
      this.dom.playModelAudioBtn.style.display = 'inline-flex';
      this.dom.stopModelAudioBtn.style.display = 'none';
    });
  }

  stopModelAudio() {
    this.speechEngine.stopSpeakingModel();
    this.dom.playModelAudioBtn.style.display = 'inline-flex';
    this.dom.stopModelAudioBtn.style.display = 'none';
  }

  formatSeconds(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // ==========================================
  // HISTORY & LOCALSTORAGE
  // ==========================================

  saveSessionToHistory(entry) {
    try {
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      history.unshift(entry);
      localStorage.setItem('fluentedge_history', JSON.stringify(history.slice(0, 30)));
      this.renderHistory();
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }
  }

  renderHistory() {
    try {
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      if (history.length === 0) {
        this.dom.historyList.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">No past sessions yet. Complete an essay or speaking test to track your C1 progression.</div>`;
        return;
      }

      this.dom.historyList.innerHTML = history.map(item => `
        <div class="history-item">
          <div class="history-item-top">
            <span>${item.type === 'writing' ? (item.targetLevel ? `${item.targetLevel} Writing` : 'Writing Task') : 'Speaking Test'}</span>
            <span>${new Date(item.date).toLocaleDateString()}</span>
          </div>
          <div class="history-item-title">${item.topicTitle}</div>
          <div class="history-item-scores">
            ${item.type === 'writing' 
              ? `<span>Score: ${item.score}/20 (${item.percentage}%)</span> • <span>${item.band}</span>`
              : `<span>Accuracy: ${item.accuracy}%</span> • <span>${item.wpm} WPM</span>`
            }
          </div>
        </div>
      `).join('');
    } catch (e) {
      // ignore
    }
  }

  openHistoryDrawer() {
    this.dom.historyDrawer.classList.add('open');
  }

  closeHistoryDrawer() {
    this.dom.historyDrawer.classList.remove('open');
  }

  clearHistory() {
    if (confirm("Clear your FluentEdge training logs and topic progress?")) {
      localStorage.removeItem('fluentedge_history');
      localStorage.removeItem('fluentedge_topic_progress');
      this.topicProgress = {};
      this.renderHistory();
      this.updateTopicProgressUI();
      this.showToast("History and topic progress cleared.", "info");
    }
  }

  // ==========================================
  // TOPIC PROGRESS TRACKING & INDICATORS
  // ==========================================

  loadTopicProgress() {
    let progress = {};
    try {
      const saved = localStorage.getItem('fluentedge_topic_progress');
      if (saved) {
        progress = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load topic progress from localStorage", e);
    }

    // Automatically synchronize with existing history if available
    try {
      const history = JSON.parse(localStorage.getItem('fluentedge_history') || '[]');
      let hasNewSync = false;
      history.forEach(item => {
        if (item.type === 'writing') {
          const topic = this.topics.find(t => 
            (item.topicId && t.id === item.topicId) || 
            (item.topicTitle && t.title === item.topicTitle)
          );
          if (topic) {
            const key = topic.id;
            const existing = progress[key];
            if (!existing || (item.percentage !== undefined && item.percentage > (existing.percentage || 0))) {
              progress[key] = {
                evaluated: true,
                score: item.score,
                percentage: item.percentage,
                band: item.band,
                meetsThreshold: item.meetsThreshold,
                targetLevel: item.targetLevel || 'C1',
                date: item.date
              };
              hasNewSync = true;
            }
          }
        }
      });
      if (hasNewSync) {
        localStorage.setItem('fluentedge_topic_progress', JSON.stringify(progress));
      }
    } catch (e) {}

    return progress;
  }

  recordTopicEvaluation(topicId, result) {
    const existing = this.topicProgress[topicId];
    this.topicProgress[topicId] = {
      evaluated: true,
      score: result.score,
      percentage: result.percentage,
      band: result.band,
      meetsThreshold: result.meetsThreshold,
      targetLevel: result.targetLevel,
      date: result.date,
      bestScore: existing && existing.bestScore ? Math.max(existing.bestScore, result.score) : result.score,
      bestPercentage: existing && existing.bestPercentage ? Math.max(existing.bestPercentage, result.percentage) : result.percentage,
      attemptsCount: ((existing && existing.attemptsCount) || 0) + 1
    };

    try {
      localStorage.setItem('fluentedge_topic_progress', JSON.stringify(this.topicProgress));
    } catch (e) {
      console.warn("Could not save topic progress to localStorage", e);
    }

    this.updateTopicProgressUI();
  }

  updateTopicProgressUI() {
    // 1. Update Curriculum Mastery Header Summary
    if (this.dom.trackerStats) {
      const completedCount = this.topics.filter(t => this.topicProgress[t.id]?.meetsThreshold).length;
      const attemptedCount = this.topics.filter(t => this.topicProgress[t.id]?.evaluated).length;
      if (completedCount === this.topics.length) {
        this.dom.trackerStats.textContent = `★ All ${this.topics.length} Prompts Mastered!`;
      } else if (attemptedCount > completedCount) {
        this.dom.trackerStats.textContent = `${completedCount} / ${this.topics.length} Mastered • ${attemptedCount} Attempted`;
      } else {
        this.dom.trackerStats.textContent = `${completedCount} / ${this.topics.length} Prompts Completed`;
      }
    }

    // 2. Synchronize Quick Jump Selector
    if (this.dom.topicJumpSelect) {
      if (this.dom.topicJumpSelect.options.length !== this.topics.length) {
        this.dom.topicJumpSelect.innerHTML = this.topics.map((t, i) => {
          const num = String(i + 1).padStart(2, '0');
          const prog = this.topicProgress[t.id];
          let mark = '○';
          if (prog?.evaluated) {
            mark = prog.meetsThreshold ? '✓' : '⟳';
          }
          return `<option value="${i}">[${mark}] #${num}: ${t.title.substring(0, 30)}...</option>`;
        }).join('');
      } else {
        // Update marks in existing options
        Array.from(this.dom.topicJumpSelect.options).forEach((opt, i) => {
          const t = this.topics[i];
          const num = String(i + 1).padStart(2, '0');
          const prog = this.topicProgress[t.id];
          let mark = '○';
          if (prog?.evaluated) {
            mark = prog.meetsThreshold ? '✓' : '⟳';
          }
          opt.textContent = `[${mark}] #${num}: ${t.title.substring(0, 30)}...`;
        });
      }
      this.dom.topicJumpSelect.value = String(this.currentTopicIndex);
    }

    // 3. Render / Update Fixed Bento Boxes (Slots stay stationary; numbers change)
    if (this.dom.trackerBentoStrip) {
      const offsets = [-2, -1, 0, 1, 2];
      const total = this.topics.length;

      this.dom.trackerBentoStrip.innerHTML = offsets.map(offset => {
        const topicIndex = ((this.currentTopicIndex + offset) % total + total) % total;
        const topic = this.topics[topicIndex];
        const prog = this.topicProgress[topic.id];
        const isCenter = (offset === 0);
        const numStr = String(topicIndex + 1).padStart(2, '0');

        let statusClass = 'status-unattempted';
        let statusIcon = '○';
        let badgeText = 'Not Started';
        let tooltip = `Prompt #${numStr}: ${topic.title} (Not Attempted)`;

        if (prog?.evaluated) {
          if (prog.meetsThreshold) {
            statusClass = 'status-passed';
            statusIcon = '✓';
            const cleanBand = (prog.band || 'C1').replace('Estimated ', '');
            badgeText = `${cleanBand} (${prog.percentage}%)`;
            tooltip = `Prompt #${numStr}: ${topic.title} (Passed: ${prog.score}/20 • ${prog.percentage}%)`;
          } else {
            statusClass = 'status-revision';
            statusIcon = '⟳';
            badgeText = `Revise (${prog.percentage}%)`;
            tooltip = `Prompt #${numStr}: ${topic.title} (Revision: ${prog.score}/20 • ${prog.percentage}%)`;
          }
        } else if (isCenter && this.dom.essayInput && this.dom.essayInput.value.trim().length > 0) {
          statusClass = 'status-draft';
          statusIcon = '✎';
          badgeText = 'Drafting';
          tooltip = `Prompt #${numStr}: ${topic.title} (Draft in Progress)`;
        }

        const boxTypeClass = isCenter ? 'active-bento' : 'adjacent-bento';
        const activePill = isCenter ? `<span class="bento-active-pill">ACTIVE</span>` : '';

        return `
          <div class="bento-box ${boxTypeClass} ${statusClass}" 
               data-target-index="${topicIndex}" 
               role="tab" 
               aria-selected="${isCenter}" 
               title="${tooltip}">
            <div class="bento-top">
              <span class="bento-num">#${numStr}</span>
              <span class="bento-indicator ${statusClass}">${statusIcon}</span>
            </div>
            <div class="bento-title" title="${topic.title}">${topic.title}</div>
            <div class="bento-footer">
              <span class="bento-badge ${statusClass}">${badgeText}</span>
              ${activePill}
            </div>
          </div>
        `;
      }).join('');

      // Add click on bento boxes: clicking an adjacent box shifts that topic to active center
      this.dom.trackerBentoStrip.querySelectorAll('.bento-box').forEach(box => {
        box.addEventListener('click', () => {
          const targetIdx = parseInt(box.getAttribute('data-target-index'), 10);
          if (!isNaN(targetIdx) && targetIdx !== this.currentTopicIndex) {
            this.loadTopic(targetIdx);
          }
        });
      });
    }

    // 4. Update Card Status Badge for current topic
    this.updateCurrentTopicBadge();
  }

  updateCurrentTopicBadge() {
    if (!this.dom.topicStatusBadge) return;

    const currentProg = this.topicProgress[this.currentTopic.id];
    const hasDraft = this.dom.essayInput && this.dom.essayInput.value.trim().length > 0;

    if (currentProg?.evaluated) {
      if (currentProg.meetsThreshold) {
        const cleanBand = (currentProg.band || 'C1').replace('Estimated ', '');
        this.dom.topicStatusBadge.className = 'topic-status-badge status-passed';
        this.dom.topicStatusBadge.title = `Evaluated: ${currentProg.score}/20 (${currentProg.percentage}%) • Standard Met`;
        this.dom.topicStatusBadge.innerHTML = `
          <span class="status-icon">✓</span>
          <span class="status-label">Evaluated • ${cleanBand} (${currentProg.percentage}%)</span>
        `;
      } else {
        this.dom.topicStatusBadge.className = 'topic-status-badge status-revision';
        this.dom.topicStatusBadge.title = `Evaluated: ${currentProg.score}/20 (${currentProg.percentage}%) • Revision Recommended`;
        this.dom.topicStatusBadge.innerHTML = `
          <span class="status-icon">⟳</span>
          <span class="status-label">Evaluated • Needs Revision (${currentProg.percentage}%)</span>
        `;
      }
    } else if (hasDraft) {
      this.dom.topicStatusBadge.className = 'topic-status-badge status-draft';
      this.dom.topicStatusBadge.title = 'Draft in progress for this prompt';
      this.dom.topicStatusBadge.innerHTML = `
        <span class="status-icon">✎</span>
        <span class="status-label">Draft in Progress</span>
      `;
    } else {
      this.dom.topicStatusBadge.className = 'topic-status-badge status-unattempted';
      this.dom.topicStatusBadge.title = 'No evaluation recorded yet for this prompt';
      this.dom.topicStatusBadge.innerHTML = `
        <span class="status-icon">○</span>
        <span class="status-label">Not Attempted</span>
      `;
    }
  }

  // ==========================================
  // TOAST ALERTS
  // ==========================================

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    this.dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
}

// Bootstrap Application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new FluentEdgeApp();
});
