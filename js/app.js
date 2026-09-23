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

    this.dom = {};
    this.init();
  }

  init() {
    this.cacheDomElements();
    this.bindEvents();
    this.bindHotkeys();
    this.setupSpeechEngineCallbacks();
    this.setTargetLevel(this.targetLevel, true);
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
      prevTopicBtn: document.getElementById('prevTopicBtn'),
      nextTopicBtn: document.getElementById('nextTopicBtn'),
      topicCategory: document.getElementById('topicCategory'),
      topicType: document.getElementById('topicType'),
      topicTime: document.getElementById('topicTime'),
      topicTitle: document.getElementById('topicTitle'),
      vocabGrid: document.getElementById('vocabGrid'),
      vocabUsedCounter: document.getElementById('vocabUsedCounter'),
      rerollVocabBtn: document.getElementById('rerollVocabBtn'),

      // Writing Studio
      essayInput: document.getElementById('essayInput'),
      liveWordCount: document.getElementById('liveWordCount'),
      liveParaCount: document.getElementById('liveParaCount'),
      lengthGuidanceBadge: document.getElementById('lengthGuidanceBadge'),
      radarBadgesRow: document.getElementById('radarBadgesRow'),
      radarCountDisplay: document.getElementById('radarCountDisplay'),
      evaluateEssayBtn: document.getElementById('evaluateEssayBtn'),
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

      // Front-and-Center Requirement Alert Modal
      reqAlertBackdrop: document.getElementById('reqAlertBackdrop'),
      reqAlertCard: document.getElementById('reqAlertCard'),
      reqAlertPill: document.getElementById('reqAlertPill'),
      reqAlertTitle: document.getElementById('reqAlertTitle'),
      reqAlertDesc: document.getElementById('reqAlertDesc'),
      reqAlertBody: document.getElementById('reqAlertBody'),
      reqAlertActionBtn: document.getElementById('reqAlertActionBtn'),
      closeReqAlertBtn: document.getElementById('closeReqAlertBtn'),

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
    if (this.dom.rerollVocabBtn) {
      this.dom.rerollVocabBtn.addEventListener('click', () => {
        if (this.hasEssayContent()) {
          if (!confirm("You have an essay in progress. Rerolling compulsory target lexis will generate a new set of 10 words, and words you have already written may no longer count. Are you sure you want to reroll?")) {
            return;
          }
        }
        this.refreshRandomVocabulary(true);
      });
    }

    // Editor events
    this.dom.essayInput.addEventListener('input', () => this.handleEditorInput());
    this.dom.clearEssayBtn.addEventListener('click', () => this.clearEssay());
    this.dom.evaluateEssayBtn.addEventListener('click', () => this.triggerEvaluation());

    // Modal events
    this.dom.closeEvalModalBtn.addEventListener('click', () => this.closeEvaluationModal());
    this.dom.evalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === this.dom.evalModalBackdrop) this.closeEvaluationModal();
    });
    this.dom.gatekeeperActionBtn.addEventListener('click', () => this.handleGatekeeperAction());

    // Front-and-Center Requirement Alert Modal events
    if (this.dom.closeReqAlertBtn) {
      this.dom.closeReqAlertBtn.addEventListener('click', () => this.closeRequirementAlert());
    }
    if (this.dom.reqAlertActionBtn) {
      this.dom.reqAlertActionBtn.addEventListener('click', () => this.closeRequirementAlert());
    }
    if (this.dom.reqAlertBackdrop) {
      this.dom.reqAlertBackdrop.addEventListener('click', (e) => {
        if (e.target === this.dom.reqAlertBackdrop) this.closeRequirementAlert();
      });
    }

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

    // Guard against accidental window/tab close or refresh when draft exists
    window.addEventListener('beforeunload', (e) => {
      if (this.hasEssayContent()) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  bindHotkeys() {
    document.addEventListener('keydown', (e) => {
      const reqAlertOpen = this.dom.reqAlertBackdrop && (
        this.dom.reqAlertBackdrop.classList.contains('open') ||
        this.dom.reqAlertBackdrop.style.display === 'flex'
      );

      // Escape / Enter when requirement alert is open -> close alert & focus editor
      if (reqAlertOpen && (e.key === 'Escape' || e.key === 'Enter')) {
        e.preventDefault();
        this.closeRequirementAlert();
        return;
      }

      const modalOpen = (this.dom.evalModalBackdrop.classList.contains('visible') ||
                        this.dom.evalModalBackdrop.style.display === 'flex' ||
                        this.dom.evalModalBackdrop.classList.contains('open')) ||
                        Boolean(reqAlertOpen);
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
    };
  }

  setTargetLevel(level, force = false) {
    if (!force && level === this.targetLevel) {
      return;
    }
    if (!force && this.hasEssayContent()) {
      if (!confirm("You have an essay in progress. Switching target standards between C1 and C2 will reconfigure your word count target and compulsory vocabulary. Are you sure you want to switch standards?")) {
        return;
      }
    }
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

    // Draw 10 random target vocabulary items (3 Verbs, 3 Nouns, 2 Adj, 2 Adv)
    this.refreshRandomVocabulary(true);

    // Reset editor analysis for new topic
    this.handleEditorInput();
  }

  cyclePrevTopic() {
    if (this.hasEssayContent()) {
      if (!confirm("You have an essay in progress. Navigating to another topic will discard your current draft. Are you sure you want to leave this prompt?")) {
        return;
      }
    }
    const prevIndex = (this.currentTopicIndex - 1 + this.topics.length) % this.topics.length;
    if (this.dom.essayInput) this.dom.essayInput.value = "";
    this.loadTopic(prevIndex);
  }

  cycleNextTopic() {
    if (this.hasEssayContent()) {
      if (!confirm("You have an essay in progress. Navigating to another topic will discard your current draft. Are you sure you want to leave this prompt?")) {
        return;
      }
    }
    const nextIndex = (this.currentTopicIndex + 1) % this.topics.length;
    if (this.dom.essayInput) this.dom.essayInput.value = "";
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
              <button class="vocab-audio-btn" data-speak="${headword}">
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
        <span class="radar-badge active">
          ✓ ${g.name}
        </span>
      `).join('');
    } else {
      this.dom.radarCountDisplay.textContent = `0 structures detected`;
      this.dom.radarBadgesRow.innerHTML = '';
    }

    // Update Evaluate Essay Button state based on compulsory lexis fulfillment
    const allLexisFulfilled = metrics.targetWordsTotal > 0 && metrics.targetWordsUsed >= metrics.targetWordsTotal;
    if (this.dom.evaluateEssayBtn) {
      if (allLexisFulfilled) {
        this.dom.evaluateEssayBtn.classList.remove('btn-locked-lexis');
        this.dom.evaluateEssayBtn.classList.add('btn-lexis-ready');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'false');
        this.dom.evaluateEssayBtn.title = `All ${metrics.targetWordsTotal} compulsory target words fulfilled! Click or press Ctrl+Enter to evaluate.`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Evaluate Text (All ${metrics.targetWordsTotal} Lexis Fulfilled)
          <kbd class="hotkey-badge">Ctrl+↵</kbd>
        `;
      } else {
        this.dom.evaluateEssayBtn.classList.remove('btn-lexis-ready');
        this.dom.evaluateEssayBtn.classList.add('btn-locked-lexis');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'true');
        this.dom.evaluateEssayBtn.title = `Incorporate all ${metrics.targetWordsTotal} compulsory target words to unlock evaluation (currently ${metrics.targetWordsUsed}/${metrics.targetWordsTotal} used).`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Evaluate Text (${metrics.targetWordsUsed}/${metrics.targetWordsTotal} Lexis Used)
          <kbd class="hotkey-badge">Ctrl+↵</kbd>
        `;
      }
    }
  }

  highlightMissingVocabChips(missingNames) {
    if (!missingNames || missingNames.length === 0 || !this.dom.vocabGrid) return;

    missingNames.forEach(name => {
      const chip = this.dom.vocabGrid.querySelector(`[data-word="${name}"]`);
      if (chip) {
        chip.classList.remove('chip-missing-pulse');
        void chip.offsetWidth; // Force reflow to re-trigger CSS animation
        chip.classList.add('chip-missing-pulse');
        setTimeout(() => {
          chip.classList.remove('chip-missing-pulse');
        }, 1200);
      }
    });

    const vocabSection = document.querySelector('.vocabulary-section');
    if (vocabSection && window.innerWidth <= 1024) {
      vocabSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  hasEssayContent() {
    return Boolean(this.dom.essayInput && this.dom.essayInput.value.trim().length > 0);
  }

  clearEssay() {
    if (this.hasEssayContent()) {
      if (!confirm("Are you sure you want to clear your essay draft? This action cannot be undone.")) {
        return;
      }
    }
    this.dom.essayInput.value = "";
    this.handleEditorInput();
  }

  // ==========================================
  // FLUENTEDGE C1/C2 WRITING ASSESSMENT & GATEKEEPER
  // ==========================================

  showRequirementAlert({ isTextEmpty, isUnderMinWords, wordCount, minWords, targetWordsUsed, targetWordsTotal, missingLexis }) {
    if (!this.dom.reqAlertBackdrop || !this.dom.reqAlertBody) return;

    this.pendingMissingLexis = missingLexis ? missingLexis.map(m => m.word) : [];

    let itemsHtml = '';

    // 1. Word Count Requirement Item
    if (isTextEmpty) {
      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Essay Draft Required</span>
              <span style="font-size: 11px; color: #f87171; font-weight: 700;">0 Words Written</span>
            </div>
            <div class="req-item-subtitle">
              Your essay editor is currently empty. Please write your response to the topic prompt before submitting for evaluation.
            </div>
          </div>
        </div>
      `;
    } else if (isUnderMinWords) {
      const wordsNeeded = minWords - wordCount;
      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Minimum Length Required</span>
              <span style="font-size: 11px; color: #f87171; font-weight: 700;">${wordCount} / ${minWords} Words</span>
            </div>
            <div class="req-item-subtitle">
              Your draft contains ${wordCount} words. A minimum of ${minWords} words is required for rigorous CEFR assessment (needs ${wordsNeeded} more word${wordsNeeded === 1 ? '' : 's'}).
            </div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="req-item item-met">
          <div class="req-item-icon">✓</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Length Requirement Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${wordCount} Words</span>
            </div>
            <div class="req-item-subtitle">
              Draft satisfies the minimum length requirement (${minWords}+ words).
            </div>
          </div>
        </div>
      `;
    }

    // 2. Compulsory Target Lexis Requirement Item
    if (missingLexis && missingLexis.length > 0) {
      const missingChipsHtml = missingLexis.map(item => `
        <span class="req-missing-chip" title="Missing compulsory word: ${item.word}">
          ${item.pos ? `<span class="pos-tag pos-${(item.pos || '').toLowerCase()}">${item.pos}</span>` : ''}
          ${item.word}
        </span>
      `).join('');

      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Compulsory Target Lexis</span>
              <span style="font-size: 11px; color: #fbbf24; font-weight: 700;">${targetWordsUsed} / ${targetWordsTotal} Used (${missingLexis.length} Missing)</span>
            </div>
            <div class="req-item-subtitle">
              You must incorporate all ${targetWordsTotal} compulsory target words (verbs, nouns, adjectives, adverbs) before evaluation can proceed.
            </div>
            <div class="req-missing-chips-box">
              <div class="req-chips-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Missing Words to Incorporate:
              </div>
              <div class="req-chips-flex">
                ${missingChipsHtml}
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="req-item item-met">
          <div class="req-item-icon">✓</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Compulsory Target Lexis Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${targetWordsTotal} / ${targetWordsTotal} Used</span>
            </div>
            <div class="req-item-subtitle">
              All ${targetWordsTotal} compulsory target words have been successfully incorporated into your draft.
            </div>
          </div>
        </div>
      `;
    }

    this.dom.reqAlertBody.innerHTML = itemsHtml;

    // Show modal front and center
    this.dom.reqAlertBackdrop.style.display = 'flex';
    void this.dom.reqAlertBackdrop.offsetWidth; // Force reflow
    this.dom.reqAlertBackdrop.classList.add('open');
    if (this.dom.reqAlertActionBtn) {
      this.dom.reqAlertActionBtn.focus();
    }
  }

  closeRequirementAlert() {
    if (!this.dom.reqAlertBackdrop) return;
    this.dom.reqAlertBackdrop.classList.remove('open');
    setTimeout(() => {
      this.dom.reqAlertBackdrop.style.display = 'none';
      if (this.dom.essayInput) {
        this.dom.essayInput.focus();
      }
      if (this.pendingMissingLexis && this.pendingMissingLexis.length > 0) {
        this.highlightMissingVocabChips(this.pendingMissingLexis);
        this.pendingMissingLexis = null;
      }
    }, 250);
  }

  triggerEvaluation() {
    const text = this.dom.essayInput.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean) : [];
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);
    const missingVocab = metrics.vocabStatus.filter(v => !v.used);
    const missingLexis = missingVocab.map(v => ({
      word: v.headword || v.word,
      pos: v.pos || ''
    }));

    const isTextEmpty = !text || words.length === 0;
    const isUnderMinWords = !isTextEmpty && words.length < 50;
    const isMissingLexis = missingLexis.length > 0;

    // Front-and-Center Alert when requirements are not met yet
    if (isTextEmpty || isUnderMinWords || isMissingLexis) {
      this.showRequirementAlert({
        isTextEmpty,
        isUnderMinWords,
        wordCount: words.length,
        minWords: 50,
        targetWordsUsed: metrics.targetWordsUsed,
        targetWordsTotal: metrics.targetWordsTotal,
        missingLexis
      });
      return;
    }

    // Confirmation before moving forward to evaluation and assessment modal
    if (!confirm(`Are you ready to submit your essay for evaluation? All ${metrics.targetWordsTotal} compulsory target words have been fulfilled. Your draft will be assessed against the CEFR scales.`)) {
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

    // Strict Guard: Compulsory Target Lexis must be completely fulfilled
    const metrics = analyzeQuickMetrics(text, this.activeVocabulary, this.targetLevel);
    if (metrics.targetWordsTotal > 0 && metrics.targetWordsUsed < metrics.targetWordsTotal) {
      this.showToast(`Cannot advance: All ${metrics.targetWordsTotal} compulsory target words must be used (${metrics.targetWordsUsed}/${metrics.targetWordsTotal} used).`, "warning");
      return;
    }

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
  }

  renderTeleprompterTokens(tokens) {
    this.dom.teleprompterText.innerHTML = tokens.map(token => `
      <span class="teleprompter-word ${token.status}" data-index="${token.index}">
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
    if (confirm("Clear your FluentEdge training logs?")) {
      localStorage.removeItem('fluentedge_history');
      localStorage.removeItem('fluentedge_topic_progress');
      this.renderHistory();
      this.showToast("History cleared.", "info");
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
