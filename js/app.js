/**
 * FluentEdge: C1–C2 English Training - Main Application Controller
 */

import { TOPICS } from './data/topics.js';
import { getRandomVocabularySet } from './data/vocabulary.js';
import { analyzeQuickMetrics, evaluateEssay, checkTargetWordUsage, generateAiEssayPrompt } from './modules/evaluator.js';
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
    this.currentStage = 1;

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
    this.updateEducationalRequirementsCard();
    this.setStage(1);
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

      // Workspaces & Stages
      mainWritingWorkspace: document.getElementById('mainWritingWorkspace'),
      stage1Panel: document.getElementById('stage1Panel'),
      stage2Panel: document.getElementById('stage2Panel'),
      speakingStudio: document.getElementById('speakingStudio'),
      proceedToStage2Btn: document.getElementById('proceedToStage2Btn'),
      backToStage1Btn: document.getElementById('backToStage1Btn'),
      writingTopicPill: document.getElementById('writingTopicPill'),
      stage2VocabDock: document.getElementById('stage2LexisDock'),
      stage2VocabChips: document.getElementById('stage2VocabChips'),
      stage2VocabCountDisplay: document.getElementById('stage2VocabCountDisplay'),

      // Educational Requirements Card
      stage1ReqsCard: document.getElementById('stage1ReqsCard'),
      reqsLevelIndicator: document.getElementById('reqsLevelIndicator'),
      reqsLevelTagline: document.getElementById('reqsLevelTagline'),
      reqsHeaderCallout: document.getElementById('reqsHeaderCallout'),
      reqsWordMetric: document.getElementById('reqsWordMetric'),
      reqsWordDesc: document.getElementById('reqsWordDesc'),
      reqsLexisMetric: document.getElementById('reqsLexisMetric'),
      reqsLexisDesc: document.getElementById('reqsLexisDesc'),
      reqsSyntaxMetric: document.getElementById('reqsSyntaxMetric'),
      reqsSyntaxDesc: document.getElementById('reqsSyntaxDesc'),
      reqsPassMetric: document.getElementById('reqsPassMetric'),
      reqsPassDesc: document.getElementById('reqsPassDesc'),

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
      toastContainer: document.getElementById('toastContainer'),

      // AI Essay Prompt Generator
      copyAiPromptBtn: document.getElementById('copyAiPromptBtn'),
      copyAiPromptBtnText: document.getElementById('copyAiPromptBtnText'),
      previewAiPromptBtn: document.getElementById('previewAiPromptBtn'),
      reqAlertCopyAiBtn: document.getElementById('reqAlertCopyAiBtn'),
      reqAlertCopyAiBtnText: document.getElementById('reqAlertCopyAiBtnText'),
      aiPromptModalBackdrop: document.getElementById('aiPromptModalBackdrop'),
      aiPromptModalCard: document.getElementById('aiPromptModalCard'),
      closeAiPromptModalBtn: document.getElementById('closeAiPromptModalBtn'),
      copyPromptInsideModalBtn: document.getElementById('copyPromptInsideModalBtn'),
      modalCopyBtnText: document.getElementById('modalCopyBtnText'),
      primaryCopyAiPromptBtn: document.getElementById('primaryCopyAiPromptBtn'),
      primaryCopyBtnLabel: document.getElementById('primaryCopyBtnLabel'),
      aiPromptLevelBadge: document.getElementById('aiPromptLevelBadge'),
      aiPromptWordTargetBadge: document.getElementById('aiPromptWordTargetBadge'),
      aiPromptVocabChips: document.getElementById('aiPromptVocabChips'),
      aiPromptVocabCount: document.getElementById('aiPromptVocabCount'),
      aiPromptTextarea: document.getElementById('aiPromptTextarea')
    };
  }

  bindEvents() {
    // Mode toggle events (overlapping card stack toggle)
    const toggleStandard = () => {
      this.setTargetLevel(this.targetLevel === 'C1' ? 'C2' : 'C1');
    };

    if (this.dom.modeC1Btn) {
      this.dom.modeC1Btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStandard();
      });
    }
    if (this.dom.modeC2Btn) {
      this.dom.modeC2Btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleStandard();
      });
    }
    const cefrSwitch = document.querySelector('.cefr-toggle-switch');
    if (cefrSwitch) {
      cefrSwitch.addEventListener('click', toggleStandard);
    }

    // Topic events
    if (this.dom.prevTopicBtn) {
      this.dom.prevTopicBtn.addEventListener('click', () => this.cyclePrevTopic());
    }
    if (this.dom.nextTopicBtn) {
      this.dom.nextTopicBtn.addEventListener('click', () => this.cycleNextTopic());
    }
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

    // Stepper navigation events
    if (this.dom.stepIndicator1) {
      this.dom.stepIndicator1.addEventListener('click', () => this.setStage(1));
      this.dom.stepIndicator1.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(1); }
      });
    }
    if (this.dom.stepIndicator2) {
      this.dom.stepIndicator2.addEventListener('click', () => this.setStage(2));
      this.dom.stepIndicator2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(2); }
      });
    }
    if (this.dom.stepIndicator3) {
      this.dom.stepIndicator3.addEventListener('click', () => this.setStage(3));
      this.dom.stepIndicator3.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.setStage(3); }
      });
    }

    // Stage transition buttons
    if (this.dom.proceedToStage2Btn) {
      this.dom.proceedToStage2Btn.addEventListener('click', () => this.setStage(2));
    }
    if (this.dom.backToStage1Btn) {
      this.dom.backToStage1Btn.addEventListener('click', () => this.setStage(1));
    }

    // AI Essay Prompt Generator events
    if (this.dom.copyAiPromptBtn) {
      this.dom.copyAiPromptBtn.addEventListener('click', () => this.handleQuickCopyAiPrompt());
    }
    if (this.dom.previewAiPromptBtn) {
      this.dom.previewAiPromptBtn.addEventListener('click', () => this.openAiPromptModal());
    }
    if (this.dom.closeAiPromptModalBtn) {
      this.dom.closeAiPromptModalBtn.addEventListener('click', () => this.closeAiPromptModal());
    }
    if (this.dom.copyPromptInsideModalBtn) {
      this.dom.copyPromptInsideModalBtn.addEventListener('click', () => this.handleModalCopyAiPrompt());
    }
    if (this.dom.primaryCopyAiPromptBtn) {
      this.dom.primaryCopyAiPromptBtn.addEventListener('click', () => this.handleModalCopyAiPrompt());
    }
    if (this.dom.aiPromptModalBackdrop) {
      this.dom.aiPromptModalBackdrop.addEventListener('click', (e) => {
        if (e.target === this.dom.aiPromptModalBackdrop) this.closeAiPromptModal();
      });
    }
    if (this.dom.reqAlertCopyAiBtn) {
      this.dom.reqAlertCopyAiBtn.addEventListener('click', () => {
        this.closeRequirementAlert();
        this.handleQuickCopyAiPrompt(true);
      });
    }
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

      const aiPromptOpen = this.dom.aiPromptModalBackdrop && (
        this.dom.aiPromptModalBackdrop.classList.contains('open') ||
        this.dom.aiPromptModalBackdrop.style.display === 'flex'
      );

      // Escape / Enter when AI prompt modal is open
      if (aiPromptOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          this.closeAiPromptModal();
          return;
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          this.handleModalCopyAiPrompt();
          return;
        }
      }

      const modalOpen = (this.dom.evalModalBackdrop.classList.contains('visible') ||
                        this.dom.evalModalBackdrop.style.display === 'flex' ||
                        this.dom.evalModalBackdrop.classList.contains('open')) ||
                        Boolean(reqAlertOpen) ||
                        Boolean(aiPromptOpen);
      const inTextField = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName);

      // Alt+1  →  Stage 1 (Topic & Lexis Educational Guide)
      if (e.altKey && e.key === '1' && !modalOpen) {
        e.preventDefault();
        this.setStage(1);
        return;
      }

      // Alt+2  →  Stage 2 (Writing & Evaluation Studio)
      if (e.altKey && e.key === '2' && !modalOpen) {
        e.preventDefault();
        this.setStage(2);
        return;
      }

      // Alt+3  →  Stage 3 (Speaking Studio)
      if (e.altKey && e.key === '3' && !modalOpen) {
        e.preventDefault();
        this.setStage(3);
        return;
      }

      // Enter on Stage 1 (when outside of text inputs/buttons) -> Proceed to Stage 2
      if (e.key === 'Enter' && this.currentStage === 1 && !inTextField && !modalOpen && !reqAlertOpen) {
        e.preventDefault();
        this.setStage(2);
        return;
      }

      // Alt+P  →  Copy AI Prompt
      if (e.altKey && (e.key === 'p' || e.key === 'P') && !modalOpen) {
        e.preventDefault();
        this.handleQuickCopyAiPrompt();
        return;
      }

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
        ? "C2 Standards, Criteria & Workflow"
        : "C1 Standards, Criteria & Workflow";
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

    this.updateEducationalRequirementsCard();

    if (this.dom.essayInput) {
      this.refreshRandomVocabulary(true);
      this.handleEditorInput();
    }
  }

  updateEducationalRequirementsCard() {
    const isC2 = this.targetLevel === 'C2';

    if (this.dom.reqsLevelIndicator) {
      this.dom.reqsLevelIndicator.textContent = isC2 ? 'CEFR C2 STANDARD' : 'CEFR C1 STANDARD';
    }
    if (this.dom.reqsLevelTagline) {
      this.dom.reqsLevelTagline.textContent = isC2
        ? 'Mastery Level Academic Benchmark'
        : 'Effective Operational Proficiency Standard';
    }
    if (this.dom.reqsHeaderCallout) {
      this.dom.reqsHeaderCallout.textContent = isC2
        ? 'The pinnacle of linguistic proficiency: effortless spontaneous expression, conceptual nuance, dialectical argumentation, and authoritative academic rhythm.'
        : 'Academic writing standard: demonstrate clear, smoothly flowing discourse with sophisticated lexical variety, cohesive transitions, and complex syntactic control.';
    }
    if (this.dom.reqsWordMetric) {
      this.dom.reqsWordMetric.textContent = isC2 ? '280 – 360+ words' : '220 – 260 words';
    }
    if (this.dom.reqsWordDesc) {
      this.dom.reqsWordDesc.textContent = isC2
        ? 'Extended discursive architecture across 4–5 paragraphs. Complex dialectical framing: thesis, counter-argument refutation, conceptual nuance, and authoritative synthesis.'
        : 'Concise, balanced synthesis structured across 3–4 coherent paragraphs. Direct thesis formulation, analytical body arguments, and clear concluding deduction.';
    }
    if (this.dom.reqsLexisMetric) {
      this.dom.reqsLexisMetric.textContent = '10 / 10 Obligatory Words';
    }
    if (this.dom.reqsLexisDesc) {
      this.dom.reqsLexisDesc.textContent = isC2
        ? 'Incorporate all 10 allocated C2 words demonstrating mastery of subtle semantic shades, idiomatic academic collocations, and perfect morphological adaptation.'
        : 'Incorporate all 10 allocated C1 words (3 verbs, 3 nouns, 2 adj, 2 adv) into natural, unforced collocation. Every item is locked with zero grammatical distortion.';
    }
    if (this.dom.reqsSyntaxMetric) {
      this.dom.reqsSyntaxMetric.textContent = isC2 ? 'Minimum 6 Structures Required' : 'Minimum 4 Structures Required';
    }
    if (this.dom.reqsSyntaxDesc) {
      this.dom.reqsSyntaxDesc.textContent = isC2
        ? 'Demonstrate elevated syntactic mastery: Mandative Subjunctives, Nominative Absolute Clauses, Mixed Unreal Conditionals, Prepositional Relatives, and Inverted Concessions.'
        : 'Incorporate diverse advanced patterns: Negative Inversions, Cleft Sentences, Passive Reporting Clauses, Inverted Conditionals without "if", and Concession markers.';
    }
    if (this.dom.reqsPassMetric) {
      this.dom.reqsPassMetric.textContent = isC2 ? '≥ 85% Overall Score Required' : '≥ 75% Overall Score Required';
    }
    if (this.dom.reqsPassDesc) {
      this.dom.reqsPassDesc.textContent = isC2
        ? 'Authoritative scholarly voice with sophisticated epistemic stance (hedging), elegant parallelism, varied clause cadences, and seamless conceptual coherence.'
        : 'Strict formal academic register. Objective third-person stance, seamless transitional cohesion, zero informal contractions or colloquial shortcuts.';
    }
  }

  setStage(stageNum) {
    if (stageNum === 3) {
      const text = this.dom.essayInput ? this.dom.essayInput.value.trim() : "";
      if (!text) {
        this.showToast("Please draft your essay in Stage 2 before entering Speaking practice.", "warning");
        this.setStage(2);
        return;
      }
    }

    this.currentStage = stageNum;

    // Toggle Stage 1 Active class on body (hides history drawer on Stage 1)
    document.body.classList.toggle('stage-1-active', stageNum === 1);
    if (this.dom.historyDrawerBtn) {
      this.dom.historyDrawerBtn.style.display = stageNum === 1 ? 'none' : 'inline-flex';
    }

    // Toggle Stage views
    if (this.dom.stage1Panel) {
      this.dom.stage1Panel.style.display = stageNum === 1 ? 'block' : 'none';
      this.dom.stage1Panel.classList.toggle('active-stage', stageNum === 1);
    }
    if (this.dom.stage2Panel) {
      this.dom.stage2Panel.style.display = stageNum === 2 ? 'block' : 'none';
      this.dom.stage2Panel.classList.toggle('active-stage', stageNum === 2);
    }
    if (this.dom.speakingStudio) {
      this.dom.speakingStudio.style.display = stageNum === 3 ? 'block' : 'none';
      this.dom.speakingStudio.classList.toggle('active-stage', stageNum === 3);
    }

    // Update Stepper indicators
    if (this.dom.stepIndicator1) {
      this.dom.stepIndicator1.classList.toggle('active', stageNum === 1);
      this.dom.stepIndicator1.classList.toggle('completed', stageNum > 1);
    }
    if (this.dom.stepIndicator2) {
      this.dom.stepIndicator2.classList.toggle('active', stageNum === 2);
      this.dom.stepIndicator2.classList.toggle('completed', stageNum > 2);
    }
    if (this.dom.stepIndicator3) {
      this.dom.stepIndicator3.classList.toggle('active', stageNum === 3);
      if (stageNum === 3 && this.dom.step3LockIcon) {
        this.dom.step3LockIcon.innerHTML = "3";
      }
    }

    // Stage-specific actions
    if (stageNum === 1) {
      this.updateEducationalRequirementsCard();
    } else if (stageNum === 2) {
      setTimeout(() => {
        if (this.dom.essayInput) this.dom.essayInput.focus();
      }, 50);
      this.handleEditorInput();
    } else if (stageNum === 3) {
      const text = this.dom.essayInput ? this.dom.essayInput.value.trim() : "";
      if (text) {
        this.speechEngine.setTargetText(text);
        this.renderTeleprompterTokens(this.speechEngine.targetTokens);
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    if (this.dom.topicCounterCurrent) this.dom.topicCounterCurrent.textContent = index + 1;
    if (this.dom.topicCounterTotal) this.dom.topicCounterTotal.textContent = this.topics.length;

    if (this.dom.topicCategory) this.dom.topicCategory.textContent = this.currentTopic.category;
    if (this.dom.topicType) this.dom.topicType.textContent = this.currentTopic.type;
    if (this.dom.topicTime) this.dom.topicTime.textContent = this.currentTopic.recommendedTime;
    if (this.dom.topicTitle) this.dom.topicTitle.textContent = this.currentTopic.title;

    if (this.dom.writingTopicPill) {
      this.dom.writingTopicPill.textContent = this.currentTopic.title;
      this.dom.writingTopicPill.title = this.currentTopic.title;
    }

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

    // Stage 1 Vocab Grid
    if (this.dom.vocabGrid) {
      this.dom.vocabGrid.innerHTML = this.activeVocabulary.map((v) => {
        const usage = checkTargetWordUsage(v, text);
        const headword = v.headword || v.word;
        const posClass = `pos-${(v.pos || 'noun').toLowerCase()}`;
        const definition = v.definition || '';
        return `
          <div class="vocab-chip ${usage.used ? 'used' : ''}" data-word="${headword}">
            <div class="vocab-chip-top">
              <div class="vocab-word-title">
                <span class="vocab-word-text">${headword}</span>
              </div>
              <div class="vocab-chip-actions">
                <span class="vocab-used-check">✓</span>
                <button class="vocab-audio-btn" data-speak="${headword}" title="Listen to RP British pronunciation" aria-label="Listen to pronunciation of ${headword}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
              </div>
            </div>
            ${definition ? `<div class="vocab-definition">${definition}</div>` : ''}
            <div class="vocab-pills-row">
              <span class="vocab-pos-pill ${posClass}">${v.pos}</span>
              <span class="vocab-cefr-pill">${v.cefr}</span>
            </div>
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

    // Stage 2 Compact Chips Strip
    if (this.dom.stage2VocabChips) {
      this.dom.stage2VocabChips.innerHTML = this.activeVocabulary.map((v) => {
        const usage = checkTargetWordUsage(v, text);
        const headword = v.headword || v.word;
        const posClass = `pos-${(v.pos || 'noun').toLowerCase()}`;
        const definition = v.definition || '';
        const tooltip = definition ? `${headword} (${v.pos}): ${definition}` : headword;
        return `
          <div class="stage2-mini-chip ${usage.used ? 'used' : ''}" data-word="${headword}" data-tooltip="${tooltip}">
            <span class="stage2-mini-word">${headword}</span>
            <span class="stage2-mini-pos ${posClass}">${v.pos}</span>
            <span class="stage2-mini-check" style="${usage.used ? '' : 'display: none;'}">✓</span>
            <button class="stage2-mini-audio-btn" data-speak="${headword}" title="Listen to pronunciation of ${headword}" aria-label="Listen to pronunciation of ${headword}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
          </div>
        `;
      }).join('');

      this.dom.stage2VocabChips.querySelectorAll('.stage2-mini-audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const word = btn.getAttribute('data-speak');
          this.speechEngine.speakText(word, 0.85);
        });
      });
    }
  }

  // ==========================================
  // WRITING STUDIO & REAL-TIME C1 RADAR
  // ==========================================

  handleEditorInput() {
    const text = this.dom.essayInput ? this.dom.essayInput.value : "";
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

    // Update target vocabulary chips & counter in both Stage 1 and Stage 2
    this.dom.vocabUsedCounter.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    if (this.dom.stage2VocabCountDisplay) {
      this.dom.stage2VocabCountDisplay.textContent = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal}`;
    }

    metrics.vocabStatus.forEach(status => {
      // Stage 1 chips
      if (this.dom.vocabGrid) {
        const chip = this.dom.vocabGrid.querySelector(`[data-word="${status.word}"]`);
        if (chip) {
          chip.classList.toggle('used', status.used);
        }
      }
      // Stage 2 compact chips
      if (this.dom.stage2VocabChips) {
        const chip2 = this.dom.stage2VocabChips.querySelector(`[data-word="${status.word}"]`);
        if (chip2) {
          chip2.classList.toggle('used', status.used);
          const check = chip2.querySelector('.stage2-mini-check');
          if (check) check.style.display = status.used ? 'inline-flex' : 'none';
        }
      }
    });

    // Real-time grammar radar with obligatory minimum structure threshold (4 for C1, 6 for C2)
    const minRequiredStructures = metrics.minRequiredStructures;
    const detectedStructuresCount = metrics.detectedGrammar.length;
    const structuresMet = detectedStructuresCount >= minRequiredStructures;
    const levelLabel = isC2 ? 'C2' : 'C1';

    if (this.dom.radarCountDisplay) {
      if (detectedStructuresCount === 0) {
        this.dom.radarCountDisplay.textContent = `0/${minRequiredStructures} Structures Required (${levelLabel})`;
        this.dom.radarCountDisplay.className = 'radar-count-badge zero';
      } else if (!structuresMet) {
        const needed = minRequiredStructures - detectedStructuresCount;
        this.dom.radarCountDisplay.textContent = `${detectedStructuresCount}/${minRequiredStructures} Structures Required (Need ${needed} more)`;
        this.dom.radarCountDisplay.className = 'radar-count-badge in-progress';
      } else {
        if (detectedStructuresCount === minRequiredStructures) {
          this.dom.radarCountDisplay.textContent = `✓ ${detectedStructuresCount}/${minRequiredStructures} Structures Met (${levelLabel} Requirement Fulfilled)`;
        } else {
          const extra = detectedStructuresCount - minRequiredStructures;
          this.dom.radarCountDisplay.textContent = `✓ ${detectedStructuresCount}/${minRequiredStructures} Structures Met (Minimum Achieved +${extra} Extra)`;
        }
        this.dom.radarCountDisplay.className = 'radar-count-badge fulfilled';
      }
    }

    if (this.dom.radarBadgesRow) {
      if (detectedStructuresCount > 0) {
        this.dom.radarBadgesRow.innerHTML = metrics.detectedGrammar.map(g => `
          <span class="radar-badge active">
            ✓ ${g.name}
          </span>
        `).join('');
      } else {
        this.dom.radarBadgesRow.innerHTML = `
          <span class="radar-badge-empty">
            No advanced structures detected yet. Incorporate at least ${minRequiredStructures} complex patterns (${levelLabel} standard) to unlock evaluation.
          </span>
        `;
      }
    }

    // Update Evaluate Essay Button state based on BOTH compulsory lexis AND minimum syntax fulfillment
    const allLexisFulfilled = metrics.targetWordsTotal > 0 && metrics.targetWordsUsed >= metrics.targetWordsTotal;
    const allSyntaxFulfilled = structuresMet;
    const allReady = allLexisFulfilled && allSyntaxFulfilled;

    if (this.dom.evaluateEssayBtn) {
      if (allReady) {
        this.dom.evaluateEssayBtn.classList.remove('btn-locked-lexis');
        this.dom.evaluateEssayBtn.classList.add('btn-lexis-ready');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'false');
        this.dom.evaluateEssayBtn.title = `All ${metrics.targetWordsTotal} compulsory target words and ${detectedStructuresCount}/${minRequiredStructures} syntactic structures fulfilled! Click or press Ctrl+Enter to evaluate.`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Evaluate Text (All Lexis &amp; Syntax Fulfilled)
          <kbd class="hotkey-badge">Ctrl+↵</kbd>
        `;
      } else {
        this.dom.evaluateEssayBtn.classList.remove('btn-lexis-ready');
        this.dom.evaluateEssayBtn.classList.add('btn-locked-lexis');
        this.dom.evaluateEssayBtn.setAttribute('aria-disabled', 'true');

        let statusSummary = '';
        if (!allLexisFulfilled && !allSyntaxFulfilled) {
          statusSummary = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal} Lexis • ${detectedStructuresCount}/${minRequiredStructures} Syntax`;
        } else if (!allLexisFulfilled) {
          statusSummary = `${metrics.targetWordsUsed}/${metrics.targetWordsTotal} Lexis • Syntax Met`;
        } else {
          statusSummary = `Lexis Met • ${detectedStructuresCount}/${minRequiredStructures} Syntax`;
        }

        this.dom.evaluateEssayBtn.title = `Incorporate all ${metrics.targetWordsTotal} compulsory target words and at least ${minRequiredStructures} syntactic structures to unlock evaluation (currently ${metrics.targetWordsUsed}/${metrics.targetWordsTotal} words, ${detectedStructuresCount}/${minRequiredStructures} structures).`;
        this.dom.evaluateEssayBtn.innerHTML = `
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Evaluate Text (${statusSummary})
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

  showRequirementAlert({
    isTextEmpty,
    isUnderMinWords,
    wordCount,
    minWords,
    targetWordsUsed,
    targetWordsTotal,
    missingLexis,
    detectedStructures = [],
    detectedStructuresCount = 0,
    minRequiredStructures = 4,
    isMissingStructures = false
  }) {
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
      const missingChipsHtml = missingLexis.map(item => {
        const tooltip = item.definition ? `${item.word}: ${item.definition}` : `Missing compulsory word: ${item.word}`;
        return `
        <span class="req-missing-chip" title="${tooltip}">
          ${item.pos ? `<span class="pos-tag pos-${(item.pos || '').toLowerCase()}">${item.pos}</span>` : ''}
          ${item.word}
        </span>
      `;
      }).join('');

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

    // 3. Syntactic Complexity Requirement Item (Obligatory minimum structures: 4 for C1, 6 for C2)
    if (isMissingStructures) {
      const structuresNeeded = minRequiredStructures - detectedStructuresCount;
      const detectedChipsHtml = (detectedStructures && detectedStructures.length > 0)
        ? detectedStructures.map(g => `<span class="req-structure-chip detected">✓ ${g.name}</span>`).join('')
        : '<span style="font-size: 12px; color: #94a3b8; font-style: italic;">No advanced structures detected yet.</span>';

      const suggestedPatterns = [
        { name: "Inverted Conditional", example: 'Were governments to act... / Had society recognized...' },
        { name: "Negative Inversion", example: 'Seldom has... / Under no circumstances should...' },
        { name: "Cleft / Focus Structure", example: 'What remains of paramount concern is...' },
        { name: "Passive Reporting Clause", example: 'It is widely contended that...' },
        { name: "Advanced Concession Marker", example: 'Notwithstanding the..., / Albeit arduous,...' },
        { name: "Mandative Subjunctive", example: 'It is imperative that authorities remain...' },
        { name: "Correlative Comparative", example: 'The more interconnected platforms become, the greater...' }
      ];

      const detectedNames = new Set((detectedStructures || []).map(g => g.name));
      const unfulfilledSuggestions = suggestedPatterns.filter(p => !detectedNames.has(p.name)).slice(0, 3);

      const suggestionsHtml = unfulfilledSuggestions.map(p => `
        <div style="font-size: 11.5px; color: #cbd5e1; margin-bottom: 4px;">
          <strong style="color: #93c5fd;">• ${p.name}:</strong> <span style="color: #94a3b8; font-style: italic;">e.g. "${p.example}"</span>
        </div>
      `).join('');

      itemsHtml += `
        <div class="req-item item-missing">
          <div class="req-item-icon">✕</div>
          <div class="req-item-content">
            <div class="req-item-title">
              <span>Syntactic Complexity (${this.targetLevel} Requirement)</span>
              <span style="font-size: 11px; color: #fbbf24; font-weight: 700;">${detectedStructuresCount} / ${minRequiredStructures} Met (${structuresNeeded} More Needed)</span>
            </div>
            <div class="req-item-subtitle">
              ${this.targetLevel === 'C2' ? 'C2 Proficiency' : 'C1 Advanced'} standards demand at least ${minRequiredStructures} distinct complex syntactic structures to demonstrate grammatical control (currently ${detectedStructuresCount} detected).
            </div>
            <div class="req-missing-chips-box">
              <div class="req-chips-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Structures Detected So Far:
              </div>
              <div class="req-chips-flex" style="margin-bottom: 10px;">
                ${detectedChipsHtml}
              </div>
              <div class="req-chips-label" style="color: #93c5fd; margin-top: 8px;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Recommended Structures to Incorporate:
              </div>
              <div>
                ${suggestionsHtml}
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
              <span>Syntactic Complexity Satisfied</span>
              <span style="font-size: 11px; color: #34d399; font-weight: 700;">${detectedStructuresCount} / ${minRequiredStructures} Structures Met</span>
            </div>
            <div class="req-item-subtitle">
              Minimum ${this.targetLevel} syntactic complexity requirement achieved (${detectedStructuresCount} advanced pattern${detectedStructuresCount === 1 ? '' : 's'} detected).
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
      pos: v.pos || '',
      definition: v.definition || ''
    }));

    const isTextEmpty = !text || words.length === 0;
    const isUnderMinWords = !isTextEmpty && words.length < 50;
    const isMissingLexis = missingLexis.length > 0;
    const detectedStructuresCount = metrics.detectedGrammar.length;
    const minRequiredStructures = metrics.minRequiredStructures;
    const isMissingStructures = detectedStructuresCount < minRequiredStructures;

    // Front-and-Center Alert when requirements are not met yet
    if (isTextEmpty || isUnderMinWords || isMissingLexis || isMissingStructures) {
      this.showRequirementAlert({
        isTextEmpty,
        isUnderMinWords,
        wordCount: words.length,
        minWords: 50,
        targetWordsUsed: metrics.targetWordsUsed,
        targetWordsTotal: metrics.targetWordsTotal,
        missingLexis,
        detectedStructures: metrics.detectedGrammar,
        detectedStructuresCount,
        minRequiredStructures,
        isMissingStructures
      });
      return;
    }

    // Confirmation before moving forward to evaluation and assessment modal
    if (!confirm(`Are you ready to submit your essay for evaluation? All ${metrics.targetWordsTotal} compulsory target words and ${detectedStructuresCount} complex syntactic structures have been fulfilled. Your draft will be assessed against the CEFR scales.`)) {
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

    this.setStage(3);

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
    this.setStage(2);
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
  // AI ESSAY PROMPT GENERATOR
  // ==========================================

  getAiEssayPrompt() {
    return generateAiEssayPrompt(this.currentTopic, this.activeVocabulary, this.targetLevel);
  }

  async copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Fallback to execCommand below
      }
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let successful = false;
    try {
      successful = document.execCommand('copy');
    } catch (err) {
      successful = false;
    }
    document.body.removeChild(textArea);
    return successful;
  }

  async handleQuickCopyAiPrompt(fromAlert = false) {
    const promptText = this.getAiEssayPrompt();
    const success = await this.copyTextToClipboard(promptText);

    if (success) {
      // Animate toolbar button
      if (this.dom.copyAiPromptBtn && this.dom.copyAiPromptBtnText) {
        this.dom.copyAiPromptBtn.classList.add('copied');
        const origText = this.dom.copyAiPromptBtnText.textContent;
        this.dom.copyAiPromptBtnText.textContent = "✓ Prompt Copied!";
        setTimeout(() => {
          this.dom.copyAiPromptBtn.classList.remove('copied');
          this.dom.copyAiPromptBtnText.textContent = origText;
        }, 2600);
      }

      // Animate alert button if triggered from requirement alert
      if (fromAlert && this.dom.reqAlertCopyAiBtnText) {
        this.dom.reqAlertCopyAiBtnText.textContent = "✓ Copied to Clipboard!";
      }

      this.showToast("✓ AI Prompt copied! Paste into ChatGPT, Claude, or Gemini.", "success");
    } else {
      // Fallback: open modal so user can view/copy manually
      this.openAiPromptModal();
      this.showToast("Clipboard write restricted — copy prompt directly from preview.", "info");
    }
  }

  openAiPromptModal() {
    if (!this.dom.aiPromptModalBackdrop) return;

    const isC2 = this.targetLevel === 'C2';
    const promptText = this.getAiEssayPrompt();

    // Badges
    if (this.dom.aiPromptLevelBadge) {
      this.dom.aiPromptLevelBadge.textContent = isC2 ? "C2 PROFICIENCY PROMPT" : "C1 ADVANCED PROMPT";
    }
    if (this.dom.aiPromptWordTargetBadge) {
      this.dom.aiPromptWordTargetBadge.textContent = isC2 ? "280–320 Words Target" : "220–260 Words Target";
    }
    if (this.dom.aiPromptVocabCount) {
      this.dom.aiPromptVocabCount.textContent = `${this.activeVocabulary.length} items`;
    }

    // Render 10 mini vocabulary chips
    if (this.dom.aiPromptVocabChips) {
      this.dom.aiPromptVocabChips.innerHTML = this.activeVocabulary.map(v => {
        const word = v.headword || v.word || '';
        const pos = v.pos || 'lex';
        const posClass = `pos-${pos.toLowerCase()}`;
        const def = v.definition || '';
        const tooltip = def ? `${word} (${pos}) — ${def}` : word;
        return `
          <div class="ai-mini-chip" title="${tooltip}">
            <span class="ai-mini-pos ${posClass}">${pos}</span>
            <span>${word}</span>
          </div>
        `;
      }).join('');
    }

    // Populate textarea
    if (this.dom.aiPromptTextarea) {
      this.dom.aiPromptTextarea.value = promptText;
    }

    // Reset copy button labels
    if (this.dom.modalCopyBtnText) {
      this.dom.modalCopyBtnText.textContent = "Copy Prompt";
    }
    if (this.dom.primaryCopyBtnLabel) {
      this.dom.primaryCopyBtnLabel.textContent = "Copy Prompt to Clipboard";
    }

    // Open modal
    this.dom.aiPromptModalBackdrop.style.display = 'flex';
    void this.dom.aiPromptModalBackdrop.offsetWidth;
    this.dom.aiPromptModalBackdrop.classList.add('open');

    if (this.dom.primaryCopyAiPromptBtn) {
      this.dom.primaryCopyAiPromptBtn.focus();
    }
  }

  closeAiPromptModal() {
    if (!this.dom.aiPromptModalBackdrop) return;
    this.dom.aiPromptModalBackdrop.classList.remove('open');
    setTimeout(() => {
      this.dom.aiPromptModalBackdrop.style.display = 'none';
      if (this.dom.essayInput) {
        this.dom.essayInput.focus();
      }
    }, 250);
  }

  async handleModalCopyAiPrompt() {
    const promptText = this.dom.aiPromptTextarea ? this.dom.aiPromptTextarea.value : this.getAiEssayPrompt();
    const success = await this.copyTextToClipboard(promptText);

    if (success) {
      if (this.dom.modalCopyBtnText) {
        this.dom.modalCopyBtnText.textContent = "✓ Copied!";
      }
      if (this.dom.primaryCopyBtnLabel) {
        this.dom.primaryCopyBtnLabel.textContent = "✓ Prompt Copied to Clipboard!";
      }
      if (this.dom.primaryCopyAiPromptBtn) {
        this.dom.primaryCopyAiPromptBtn.classList.add('copied');
      }

      this.showToast("✓ AI Prompt copied! Paste into ChatGPT, Claude, or Gemini.", "success");

      setTimeout(() => {
        if (this.dom.modalCopyBtnText) this.dom.modalCopyBtnText.textContent = "Copy Prompt";
        if (this.dom.primaryCopyBtnLabel) this.dom.primaryCopyBtnLabel.textContent = "Copy Prompt to Clipboard";
        if (this.dom.primaryCopyAiPromptBtn) this.dom.primaryCopyAiPromptBtn.classList.remove('copied');
      }, 3000);
    } else {
      if (this.dom.aiPromptTextarea) {
        this.dom.aiPromptTextarea.select();
      }
      this.showToast("Prompt selected — press Ctrl+C to copy manually.", "info");
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
