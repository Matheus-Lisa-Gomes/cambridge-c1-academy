/**
 * FluentEdge C1/C2 Text Assessment Engine
 * Evaluates written submissions according to CEFR C1 Advanced
 * and C2 Proficiency assessment scales:
 * 1. Content (0-5)
 * 2. Communicative Achievement (0-5)
 * 3. Organisation (0-5)
 * 4. Language (0-5)
 */

import { CEFR_DESCRIPTORS } from '../data/topics.js';

// Advanced CEFR C1/C2 Academic Markers & Collocations
const ACADEMIC_C1_MARKERS = [
  "furthermore", "consequently", "nevertheless", "notwithstanding", "conversely",
  "inasmuch", "albeit", "predominantly", "manifestly", "unequivocally",
  "compelling", "scrutiny", "ramifications", "paradigm", "delineate",
  "substantiate", "corroborate", "imperative", "pivotal", "catalyst",
  "concomitant", "ubiquitous", "salient", "paramount", "myopic",
  "unprecedented", "inexorable", "disconcerting", "ameliorate", "tenable"
];

// Informal expressions penalized in formal C1/C2 essays
const INFORMAL_PATTERNS = [
  /\b(gonna|wanna|kinda|sorta|dunno)\b/i,
  /\b(a lot of|lots of|tons of|heaps of)\b/i,
  /\b(kids|guys|cops|stuff|things)\b/i,
  /\b(can't|don't|won't|isn't|aren't|didn't|doesn't|haven't|hasn't|hadn't)\b/i // Contractions discouraged in formal essays
];

// Complex C1/C2 Syntactic Patterns (12 Comprehensive Structures)
const SYNTACTIC_PATTERNS = {
  negativeInversion: {
    name: "Negative / Limiting Inversion",
    description: "Seldom / Rarely / Under no circumstances / Not only... inversion",
    regex: /\b(seldom|rarely|scarcely|hardly|under no circumstances|on no account|in no way|at no time|little did|not only)\s+(did|does|do|had|have|has|is|was|were|can|could|should|will|would)\s+[a-z]+/i,
    weight: 1.2
  },
  cleftSentence: {
    name: "Cleft / Focus Structure",
    description: "What [clause] is/was/remains... or It is/was [focus] that/who...",
    regex: /\b(what\s+[a-z\s]{1,50}\s+(is|was|remains|proves)|it\s+(is|was)\s+[a-z\s]{1,60}\s+(that|who|which))\b/i,
    weight: 1.0
  },
  passiveReporting: {
    name: "Passive Reporting Clause",
    description: "It is widely contended / maintained / believed / postulated that...",
    regex: /\bit\s+is\s+(widely|frequently|commonly|generally|often)?\s*(contended|maintained|argued|asserted|held|claimed|believed|acknowledged|postulated|purported|surmised)\s+that\b/i,
    weight: 1.0
  },
  invertedConditional: {
    name: "Inverted / Conditional without 'If'",
    description: "Were [subject] to... / Had [subject] [participle]... / Should [subject]...",
    regex: /\b(were\s+[a-z\s]{2,20}\s+to\s+[a-z]+|had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|should\s+[a-z\s]{2,20}\s+[a-z]+)\b/i,
    weight: 1.1
  },
  complexConcession: {
    name: "Advanced Concession / Contrast Marker",
    description: "Notwithstanding, Albeit, Inasmuch as, Be that as it may",
    regex: /\b(notwithstanding(\s+[a-z]+)?|albeit\s+|inasmuch\s+as|be\s+that\s+as\s+it\s+may|for\s+all\s+that|much\s+as\s+[a-z]+)\b/i,
    weight: 0.9
  },
  participleClause: {
    name: "Fronted Participle / Gerund Clause",
    description: "Having considered... / Confronted with... / Bearing in mind...",
    regex: /(^|[.!?]\s+)(having\s+[a-z]+(ed|en|t)|confronted\s+with|bearing\s+in\s+mind|given\s+the|judging\s+by)\s+[a-z\s,]+/i,
    weight: 0.8
  },
  mandativeSubjunctive: {
    name: "Mandative / Formulaic Subjunctive",
    description: "It is imperative / vital / crucial that [subject] be / remain...",
    regex: /\b(imperative|vital|crucial|essential|paramount|mandatory|critical|prerequisite|demands?|insists?|stipulates?)\s+that\s+[a-z\s]{2,25}\s+(be|remain|adopt|curtail|undergo|scrutinize|implement)\b/i,
    weight: 1.1
  },
  absoluteClause: {
    name: "Nominative Absolute Clause",
    description: "The deliberation having concluded... / All things considered...",
    regex: /(^|[.!?]\s+)(the\s+[a-z\s]{2,30}\s+(having\s+(been\s+)?[a-z]+|concluded|exhausted|settled)|all\s+(things|factors|arguments|options)\s+considered|circumstances\s+permitting)/i,
    weight: 1.2
  },
  mixedConditional: {
    name: "Mixed Unreal Conditional",
    description: "Had [past action]... [present result would be]...",
    regex: /\b(had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|if\s+[a-z\s]{2,20}\s+had\s+[a-z]+(ed|en|t))\b.*?\b(would|could|might)\s+(not\s+)?(be|remain|appear|exist|now|currently)\b/i,
    weight: 1.1
  },
  prepositionalRelative: {
    name: "Prepositional / Formal Relative Clause",
    description: "the ramifications of which, by virtue of which, the extent to which",
    regex: /\b(by\s+virtue\s+of\s+which|in\s+light\s+of\s+which|the\s+[a-z]+\s+of\s+which|the\s+extent\s+to\s+which|against\s+which|upon\s+which|under\s+which|whereby)\b/i,
    weight: 0.9
  },
  correlativeComparative: {
    name: "Correlative / Proportional Comparative",
    description: "The more..., the greater... / The higher..., the more...",
    regex: /(^|[.!?]\s+)the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\s+[a-z\s,]{3,35},\s+the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\b/i,
    weight: 1.0
  },
  invertedConcession: {
    name: "Inverted Concession with Though / As",
    description: "Arduous though it may be... / Compelling as it seems...",
    regex: /\b([a-z]+)\s+(though|as)\s+(it|they|this|he|she|one)\s+(may|might|is|are|was|were|seems?|appears?)(\s+be)?\s*,/i,
    weight: 1.0
  }
};

/**
 * Check if a target word or any of its stems/variants exists in the text
 */
export function checkTargetWordUsage(wordObj, text) {
  const normalizedText = text.toLowerCase();
  const rawWord = wordObj.headword || wordObj.word || "";
  const stems = wordObj.stems && wordObj.stems.length > 0 ? wordObj.stems : [rawWord];
  
  for (const stem of stems) {
    if (!stem) continue;
    const regex = new RegExp(`\\b${escapeRegExp(stem.toLowerCase())}\\b`, 'i');
    const match = normalizedText.match(regex);
    if (match) {
      return {
        used: true,
        matchedStem: stem,
        index: match.index
      };
    }
  }
  
  return { used: false, matchedStem: null, index: -1 };
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Real-time quick metrics for the editor
 */
export function analyzeQuickMetrics(text, targetVocabulary = [], targetLevel = 'C1') {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  
  // Paragraphs
  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // Target vocabulary status
  const vocabStatus = targetVocabulary.map(v => {
    const res = checkTargetWordUsage(v, text);
    const word = v.headword || v.word;
    return {
      word: word,
      headword: word,
      pos: v.pos || '',
      cefr: v.cefr || '',
      used: res.used,
      matchedStem: res.matchedStem,
      collocation: v.collocation || '',
      ipa: v.ipa || ''
    };
  });

  const targetWordsUsed = vocabStatus.filter(v => v.used).length;
  const targetWordsTotal = targetVocabulary.length;

  // Grammar detection
  const detectedGrammar = [];
  for (const [key, struct] of Object.entries(SYNTACTIC_PATTERNS)) {
    if (struct.regex.test(text)) {
      detectedGrammar.push({
        id: key,
        name: struct.name,
        description: struct.description
      });
    }
  }

  // Informal checks
  const informalFindings = [];
  INFORMAL_PATTERNS.forEach(pattern => {
    const match = text.match(pattern);
    if (match) {
      informalFindings.push(match[0]);
    }
  });

  const isC2 = targetLevel === 'C2';
  const targetMin = isC2 ? 280 : 220;
  const targetMax = isC2 ? 320 : 260;
  const leniency = 5;
  const allowedMinWords = targetMin - leniency; // 215 for C1, 275 for C2
  const allowedMaxWords = targetMax + leniency; // 265 for C1, 325 for C2
  const minParagraphs = isC2 ? 4 : 3;
  const maxParagraphs = isC2 ? 5 : 4;
  const minRequiredStructures = isC2 ? 6 : 4;
  const structuresMet = detectedGrammar.length >= minRequiredStructures;
  const wordsMet = wordCount >= allowedMinWords && wordCount <= allowedMaxWords;
  const paragraphsMet = paragraphs.length >= minParagraphs && paragraphs.length <= maxParagraphs;

  return {
    wordCount,
    paragraphCount: paragraphs.length,
    targetWordsUsed,
    targetWordsTotal,
    vocabStatus,
    detectedGrammar,
    informalFindings,
    targetLevel,
    targetMin,
    targetMax,
    allowedMinWords,
    allowedMaxWords,
    minParagraphs,
    maxParagraphs,
    wordsMet,
    paragraphsMet,
    minRequiredStructures,
    structuresMet
  };
}

/**
 * Full FluentEdge C1/C2 Assessment Algorithm
 */
export function evaluateEssay(text, currentTopic, targetLevel = 'C1', activeVocabulary = null) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  const isC2 = targetLevel === 'C2';

  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // 1. Target Vocabulary Analysis
  const targetVocabulary = (activeVocabulary && activeVocabulary.length > 0)
    ? activeVocabulary
    : ((currentTopic && currentTopic.targetVocabulary) || []);
  const targetUsageResults = targetVocabulary.map(v => {
    const usage = checkTargetWordUsage(v, text);
    return {
      ...v,
      used: usage.used,
      matchedStem: usage.matchedStem
    };
  });
  const usedTargetCount = targetUsageResults.filter(v => v.used).length;
  const targetCoveragePct = targetVocabulary.length > 0 ? (usedTargetCount / targetVocabulary.length) * 100 : 100;

  // 2. Lexical Sophistication & Academic Marker Density
  let academicMarkerCount = 0;
  const lowerText = text.toLowerCase();
  ACADEMIC_C1_MARKERS.forEach(marker => {
    const regex = new RegExp(`\\b${marker}\\b`, 'gi');
    const matches = lowerText.match(regex);
    if (matches) academicMarkerCount += matches.length;
  });

  // Type-Token Ratio (Lexical Diversity)
  const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''))).size;
  const typeTokenRatio = wordCount > 0 ? (uniqueWords / wordCount) : 0;

  // Average Sentence Length (C1/C2 target: 18 - 28 words per sentence)
  const avgSentenceLength = sentences.length > 0 ? (wordCount / sentences.length) : 0;

  // 3. Syntactic Structure Detection
  const identifiedStructures = [];
  let syntacticScoreBoost = 0;
  for (const [key, struct] of Object.entries(SYNTACTIC_PATTERNS)) {
    const match = text.match(struct.regex);
    if (match) {
      identifiedStructures.push({
        id: key,
        name: struct.name,
        snippet: match[0],
        description: struct.description
      });
      syntacticScoreBoost += struct.weight;
    }
  }

  // 4. Informalisms and Contractions Check
  const informalMatches = [];
  INFORMAL_PATTERNS.forEach(pat => {
    const found = text.match(new RegExp(pat.source, 'gi'));
    if (found) {
      informalMatches.push(...found);
    }
  });

  // ==========================================
  // SCORING ACCORDING TO CEFR SCALES (0-5)
  // ==========================================

  // Scale 1: CONTENT
  let contentScore = 5.0;
  const feedbackContent = [];

  const allowedMinWords = isC2 ? 275 : 215;
  const allowedMaxWords = isC2 ? 325 : 265;
  const minParagraphs = isC2 ? 4 : 3;
  const maxParagraphs = isC2 ? 5 : 4;

  const wordsGateMet = wordCount >= allowedMinWords && wordCount <= allowedMaxWords;
  const paragraphsGateMet = paragraphs.length >= minParagraphs && paragraphs.length <= maxParagraphs;

  if (isC2) {
    // C2 Target: 280-320 words (±5 leniency: 275-325 words)
    if (wordCount < allowedMinWords) {
      const penalty = wordCount < 240 ? 2.5 : 1.5;
      contentScore -= penalty;
      feedbackContent.push(`Essay length (${wordCount} words) is below the obligatory C2 range of 275–325 words (280–320 ± 5 leniency). C2 discourse demands thorough multi-angle elaboration.`);
    } else if (wordCount > allowedMaxWords) {
      contentScore -= 1.5;
      feedbackContent.push(`Essay length (${wordCount} words) exceeds the obligatory C2 maximum of 325 words (280–320 ± 5 leniency). Advanced academic writing strictly penalizes circumlocution and lack of concision.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to obligatory C2 standards (275–325 words).`);
    }

    if (paragraphs.length < minParagraphs) {
      contentScore -= 1.2;
      feedbackContent.push(`Essay contains only ${paragraphs.length} paragraph(s). C2 Proficiency obligatorily requires at least 4 paragraphs (discursive architecture: Introduction, 2 Opposing/Analytical Arguments, and Synthesis).`);
    } else if (paragraphs.length > maxParagraphs) {
      contentScore -= 1.0;
      feedbackContent.push(`Essay contains ${paragraphs.length} paragraphs, exceeding the C2 maximum of 5 paragraphs. Consolidate your arguments into 4–5 paragraphs.`);
    } else {
      feedbackContent.push(`Flawless essay architecture with ${paragraphs.length} balanced paragraphs adhering to C2 requirements (4–5 paragraphs).`);
    }
  } else {
    // C1 Target: 220-260 words (±5 leniency: 215-265 words)
    if (wordCount < allowedMinWords) {
      const penalty = wordCount < 180 ? 2.5 : 1.5;
      contentScore -= penalty;
      feedbackContent.push(`Essay length (${wordCount} words) is below the obligatory C1 range of 215–265 words (220–260 ± 5 leniency). Insufficient development of analytical arguments.`);
    } else if (wordCount > allowedMaxWords) {
      contentScore -= 1.5;
      feedbackContent.push(`Essay length (${wordCount} words) exceeds the obligatory C1 maximum of 265 words (220–260 ± 5 leniency). Advanced writing demands concise synthesis.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to obligatory C1 standards (215–265 words).`);
    }

    if (paragraphs.length < minParagraphs) {
      contentScore -= 1.2;
      feedbackContent.push(`Essay contains only ${paragraphs.length} paragraph(s). C1 Advanced obligatorily requires at least 3 paragraphs (clear separation into Introduction, Body Arguments, and Conclusion).`);
    } else if (paragraphs.length > maxParagraphs) {
      contentScore -= 1.0;
      feedbackContent.push(`Essay contains ${paragraphs.length} paragraphs, exceeding the C1 maximum of 4 paragraphs. Consolidate your discourse into 3–4 cohesive paragraphs.`);
    } else {
      feedbackContent.push(`Strong essay architecture with ${paragraphs.length} structured paragraphs adhering to C1 requirements (3–4 paragraphs).`);
    }
  }
  contentScore = Math.max(1, Math.min(5, contentScore));

  // Scale 2: COMMUNICATIVE ACHIEVEMENT (Academic tone, register, objective stance)
  let commScore = 4.0;
  const feedbackComm = [];
  if (informalMatches.length > 0) {
    const penalty = Math.min(2.5, informalMatches.length * (isC2 ? 0.7 : 0.5));
    commScore -= penalty;
    feedbackComm.push(`Detected informal colloquialisms or contractions: "${informalMatches.slice(0, 4).join(', ')}". In formal ${isC2 ? 'C2 Proficiency' : 'C1 Advanced'} essays, eliminate contractions ("don't", "can't") and sustain an objective scholarly register.`);
  } else {
    commScore += 0.5;
    feedbackComm.push("Flawless formal academic register maintained with no conversational contractions or colloquialisms.");
  }

  if (identifiedStructures.some(s => s.id === 'passiveReporting' || s.id === 'cleftSentence')) {
    commScore += 0.5;
    feedbackComm.push("Masterful use of objective hedging and cleft framing typical of Band 5 essays.");
  }
  commScore = Math.max(1, Math.min(5, commScore));

  // Scale 3: ORGANISATION (Linking devices, cohesion, discourse markers)
  let orgScore = 3.5;
  const feedbackOrg = [];
  if (paragraphs.length >= 4) orgScore += 0.5;
  
  const minMarkers = isC2 ? 5 : 4;
  if (academicMarkerCount >= minMarkers) {
    orgScore += 0.8;
    feedbackOrg.push(`Exceptional deployment of cohesive devices (${academicMarkerCount} advanced discourse markers detected).`);
  } else if (academicMarkerCount >= 2) {
    orgScore += 0.3;
    feedbackOrg.push(`Adequate transitional markers (${academicMarkerCount} detected), but ${isC2 ? 'C2 Proficiency' : 'C1'} requires more nuanced logical connectors (e.g., 'notwithstanding', 'inasmuch as', 'concomitantly').`);
  } else {
    orgScore -= 0.8;
    feedbackOrg.push("Discourse cohesion is underdeveloped. Integrate formal academic cohesive markers to link paragraphs smoothly.");
  }
  orgScore = Math.max(1, Math.min(5, orgScore));

  // Scale 4: LANGUAGE (Lexical range, target vocabulary, complex syntax)
  let langScore = 2.5;
  const feedbackLang = [];

  // Target vocabulary weight (calibrated for 9-word challenge: 3 verbs, 2 nouns, 2 adj, 2 adv)
  const targetRequired = isC2 ? 6 : 4;

  if (targetVocabulary.length === 0) {
    langScore += 0.8;
  } else if (usedTargetCount >= targetRequired) {
    langScore += 1.5;
    feedbackLang.push(`Outstanding command of required ${targetLevel} target vocabulary (${usedTargetCount}/${targetVocabulary.length} words seamlessly integrated).`);
  } else if (usedTargetCount >= (isC2 ? 4 : 2)) {
    langScore += 0.8;
    feedbackLang.push(`Good integration of target vocabulary (${usedTargetCount}/${targetVocabulary.length} words used), but ${isC2 ? 'C2 mode demands at least 6 items' : 'aim for at least 4 to secure top band'}.`);
  } else {
    langScore -= 0.5;
    feedbackLang.push(`Target vocabulary underutilized: only ${usedTargetCount}/${targetVocabulary.length} required words incorporated. ${targetLevel} demands high lexical precision.`);
  }

  // Syntactic complexity
  const minRequiredStructs = isC2 ? 6 : 4;
  const structsGateMetC2 = identifiedStructures.length >= 6;
  const structsGateMetC1 = identifiedStructures.length >= 4;
  const structsGateMet = isC2 ? structsGateMetC2 : structsGateMetC1;

  if (identifiedStructures.length >= minRequiredStructs) {
    langScore += 1.0;
    feedbackLang.push(`High grammatical ambition demonstrated: successfully incorporated ${identifiedStructures.length} advanced syntactic structures (${identifiedStructures.map(s => s.name).join(', ')}). Fulfills ${targetLevel} requirement (minimum ${minRequiredStructs} required).`);
  } else if (identifiedStructures.length >= 2) {
    langScore += 0.4;
    feedbackLang.push(`Adequate syntactic variety (${identifiedStructures.length}/${minRequiredStructs} structures used: ${identifiedStructures.map(s => s.name).join(', ')}). ${targetLevel} standard requires at least ${minRequiredStructs} distinct complex structures.`);
  } else {
    langScore -= 0.6;
    feedbackLang.push(`Syntax relies on basic structures (${identifiedStructures.length}/${minRequiredStructs} detected). ${targetLevel} requires at least ${minRequiredStructs} complex patterns (inversions, clefts, or participle clauses).`);
  }

  // Lexical diversity
  if (typeTokenRatio > 0.55 && wordCount > 150) {
    langScore += 0.3;
  }
  langScore = Math.max(1, Math.min(5, langScore));

  // Total CEFR Score out of 20 (standard 4 scales * 5)
  const rawTotal = contentScore + commScore + orgScore + langScore; // max 20
  const normalizedPercentage = Math.round((rawTotal / 20) * 100);

  // CEFR Determination
  let cefrResult;
  let meetsC1 = false;
  let meetsC2 = false;

  const targetThresholdMetC2 = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(5, Math.ceil(targetVocabulary.length * 0.5)))
    : true;
  const targetThresholdMetC1 = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(4, Math.ceil(targetVocabulary.length * 0.4)))
    : true;

  if (normalizedPercentage >= CEFR_DESCRIPTORS.C2.minScore && targetThresholdMetC2 && structsGateMetC2) {
    cefrResult = CEFR_DESCRIPTORS.C2;
    meetsC1 = true;
    meetsC2 = true;
  } else if (normalizedPercentage >= CEFR_DESCRIPTORS.C1.minScore && targetThresholdMetC1 && structsGateMetC1) {
    cefrResult = CEFR_DESCRIPTORS.C1;
    meetsC1 = true;
    meetsC2 = false;
  } else if (normalizedPercentage >= CEFR_DESCRIPTORS.B2.minScore) {
    cefrResult = CEFR_DESCRIPTORS.B2;
    meetsC1 = false;
    meetsC2 = false;
  } else {
    cefrResult = CEFR_DESCRIPTORS.B1;
    meetsC1 = false;
    meetsC2 = false;
  }

  // Determine gatekeeper success based on active targetLevel
  const targetGateMet = targetVocabulary.length > 0
    ? (usedTargetCount >= Math.min(6, Math.ceil(targetVocabulary.length * 0.6)))
    : true;

  const meetsThreshold = isC2
    ? (meetsC2 && normalizedPercentage >= 85 && targetGateMet && structsGateMetC2 && wordsGateMet && paragraphsGateMet)
    : (meetsC1 && normalizedPercentage >= 75 && structsGateMetC1 && wordsGateMet && paragraphsGateMet);

  return {
    rawTotal: Number(rawTotal.toFixed(1)),
    percentage: normalizedPercentage,
    cefr: cefrResult,
    targetLevel,
    meetsThreshold,
    meetsC1,
    meetsC2,
    scales: {
      content: { score: Number(contentScore.toFixed(1)), max: 5, feedback: feedbackContent },
      communicative: { score: Number(commScore.toFixed(1)), max: 5, feedback: feedbackComm },
      organisation: { score: Number(orgScore.toFixed(1)), max: 5, feedback: feedbackOrg },
      language: { score: Number(langScore.toFixed(1)), max: 5, feedback: feedbackLang }
    },
    metrics: {
      wordCount,
      paragraphsCount: paragraphs.length,
      sentencesCount: sentences.length,
      avgSentenceLength: Math.round(avgSentenceLength),
      typeTokenRatio: Math.round(typeTokenRatio * 100),
      usedTargetCount,
      totalTargetCount: targetVocabulary.length,
      targetUsageResults,
      identifiedStructures,
      informalMatches,
      wordsGateMet,
      paragraphsGateMet,
      allowedMinWords,
      allowedMaxWords,
      minParagraphs,
      maxParagraphs
    }
  };
}

/**
 * Generates an optimized prompt for external LLMs (ChatGPT, Claude, Gemini, etc.)
 * to craft an authentic essay strictly conforming to FluentEdge's CEFR C1/C2 standards,
 * obligatory tree topic adherence (Root Subject + 2 Sub-Themes), all 10 compulsory target lexis,
 * and minimum syntactic radar complexity.
 */
export function generateAiEssayPrompt(topic, targetVocabulary = [], targetLevel = 'C1') {
  const isC2 = targetLevel === 'C2';
  const levelStandard = isC2 ? 'CEFR C2 Proficiency (Mastery)' : 'CEFR C1 Advanced';
  const minWords = isC2 ? 280 : 220;
  const maxWords = isC2 ? 320 : 260;
  const minStructures = isC2 ? 6 : 4;
  const topicTitle = topic ? topic.title : 'Contemporary Issues & Ethics';
  const topicCategory = topic ? topic.category : 'General Academic';
  const topicType = topic ? topic.type : (isC2 ? 'C2 Proficiency Discursive Essay' : 'C1/C2 Academic Essay');
  const topicDirective = (topic && topic.directive)
    ? topic.directive
    : 'Write an academic essay examining the implications of this subject for contemporary society.';

  const rootSubjectName = topic?.mainSubject?.name || 'Academic Core';
  const subTheme1Name = topic?.subTheme1?.name || 'Theme 1';
  const subTheme2Name = topic?.subTheme2?.name || 'Theme 2';
  const subTheme1Lens = topic?.subTheme1?.lens ? ` (Analytical Lens: "${topic.subTheme1.lens}")` : '';
  const subTheme2Lens = topic?.subTheme2?.lens ? ` (Analytical Lens: "${topic.subTheme2.lens}")` : '';
  const tensionInfo = topic?.tension
    ? `\n- Core Dialectical Tension: "${topic.tension.name}" (${topic.tension.pole1} vs ${topic.tension.pole2})`
    : '';
  const scopeInfo = topic?.scope?.label
    ? `\n- Societal Scope: ${topic.scope.label}${topic.scope.framing ? ` (${topic.scope.framing})` : ''}`
    : '';
  const stakeholdersInfo = (topic?.stakeholders && topic.stakeholders.length > 0)
    ? `\n- Key Stakeholders to Address: ${topic.stakeholders.map(s => s.name).join(', ')}`
    : '';
  const complexityInfo = topic?.complexityLabel
    ? `\n- Complexity Tier: ${topic.complexityLabel}`
    : '';

  // Specific domain and theme keywords to guarantee topic adherence
  const subjectKws = (topic?.mainSubject?.keywords && topic.mainSubject.keywords.length > 0)
    ? `\n    * Domain concepts to weave in: ${topic.mainSubject.keywords.slice(0, 8).join(', ')}`
    : '';
  const theme1Kws = (topic?.subTheme1?.keywords && topic.subTheme1.keywords.length > 0)
    ? `\n    * Sub-theme 1 concepts: ${topic.subTheme1.keywords.slice(0, 6).join(', ')}`
    : '';
  const theme2Kws = (topic?.subTheme2?.keywords && topic.subTheme2.keywords.length > 0)
    ? `\n    * Sub-theme 2 concepts: ${topic.subTheme2.keywords.slice(0, 6).join(', ')}`
    : '';

  const vocabItems = targetVocabulary.map((v, i) => {
    const word = v.headword || v.word || '';
    const pos = v.pos ? `[${v.pos}]` : '';
    const def = v.definition ? ` — ${v.definition}` : '';
    const colloc = v.collocation ? ` (recommended collocation: "${v.collocation}")` : '';
    return `${i + 1}. ${word} ${pos}${def}${colloc}`;
  }).join('\n');

  return `Write an academic essay at the ${levelStandard} standard in response to the following topic:

ESSAY TOPIC & TREE ARCHITECTURE:
- Title: "${topicTitle}"
- Category: ${topicCategory}${complexityInfo}
- Genre: ${topicType}
- Prompt Directive: "${topicDirective}"
- Root Subject: ${rootSubjectName}
- Sub-Theme 1: ${subTheme1Name}${subTheme1Lens}
- Sub-Theme 2: ${subTheme2Name}${subTheme2Lens}${tensionInfo}${scopeInfo}${stakeholdersInfo}

MANDATORY ASSESSMENT CRITERIA & CONSTRAINTS:

1. OBLIGATORY TOPIC ADHERENCE & THEMATIC FOCUS (CRITICAL GATEKEEPER):
   - The essay MUST directly and substantially focus upon the Root Subject (${rootSubjectName}) and synthesize BOTH Sub-Themes (${subTheme1Name} & ${subTheme2Name}) to answer the Prompt Directive.
   - Address the dialectical tension${topic?.tension ? ` (${topic.tension.pole1} vs ${topic.tension.pole2})` : ''} within the defined scope.
   - To satisfy the automated topic adherence validator, ensure your essay actively incorporates:
     • Root Subject (${rootSubjectName}): at least 2 distinct domain terms/concepts${subjectKws}
     • Sub-Theme 1 (${subTheme1Name}): thematic engagement${theme1Kws}
     • Sub-Theme 2 (${subTheme2Name}): thematic engagement${theme2Kws}

2. STRICT LENGTH TARGET:
   - The essay MUST be strictly between ${minWords} and ${maxWords} words (strictly enforced with ±5 words leniency: ${isC2 ? '275 to 325' : '215 to 265'} words allowed; essays outside this range are rejected).
   - Do not write fewer than ${isC2 ? 275 : 215} words (fails minimum CEFR threshold), and do not exceed ${isC2 ? 325 : 265} words (penalized for verbosity/circumlocution). Count every word precisely.

3. COMPULSORY TARGET LEXIS (10/10 REQUIRED — NO OMISSIONS):
   Incorporate ALL 10 of the following target vocabulary words into the essay. Each word must be naturally integrated into the academic argument in its exact base form or an authentic grammatical inflection (e.g., conjugated verb forms, plural nouns, comparative adjectives):
${vocabItems}

4. SOPHISTICATED SYNTACTIC STRUCTURES (MINIMUM ${minStructures} REQUIRED):
   Include at least ${minStructures} distinct C1/C2 grammatical structures from the list below to satisfy the obligatory ${targetLevel} syntactic complexity radar. Use the specific syntactic formulas provided so the automated analyzer detects them:
   - Negative / Limiting Inversion (e.g. "Seldom has [subject]...", "Under no circumstances should [subject]...", "Not only did [subject]...")
   - Cleft / Focus Structure (e.g. "What remains of paramount concern is...", "It is this systemic deficiency that...")
   - Passive Reporting Clause (e.g. "It is widely contended that...", "It is commonly maintained that...", "It is held that...")
   - Inverted Conditional without 'If' (e.g. "Were governments to act...", "Had authorities intervened earlier...", "Should evidence emerge...")
   - Advanced Concession / Contrast Marker (e.g. "Notwithstanding the apparent benefits,...", "Albeit arduous,...", "Inasmuch as...")
   - Fronted Participle Clause (e.g. "Having evaluated the empirical evidence,...", "Confronted with systemic challenges,...")
   - Mandative Subjunctive (e.g. "It is imperative that authorities remain vigilant...", "vital that oversight be maintained...")
   - Nominative Absolute Clause (e.g. "The regulatory deliberation having concluded, delegates issued...", "All factors considered,...")
   - Mixed Unreal Conditional (e.g. "Had regulators intervened a decade ago, contemporary society would not now be vulnerable...")
   - Complex Prepositional / Formal Relative (e.g. "a dilemma the ramifications of which extend globally...", "the extent to which...")
   - Correlative / Proportional Comparative (e.g. "The more interconnected platforms become, the greater the potential systemic risk...")
   - Inverted Concession with Though / As (e.g. "Arduous though statutory reform may be,...", "Compelling as the premise appears,...")

5. FORMAL ACADEMIC REGISTER (SCALE 2):
   - Maintain a formal, analytical academic register throughout.
   - ABSOLUTELY NO informal contractions (write "do not", "cannot", "will not", "it is" — avoid "don't", "can't", "won't", "it's", "doesn't").
   - ABSOLUTELY NO colloquialisms or vague informal phrases (avoid "a lot of", "kids", "things", "stuff", "guys").
   - Employ sophisticated cohesive transition linkers (e.g. "furthermore", "consequently", "nevertheless", "conversely", "predominantly", "inasmuch as").

6. DISCURSIVE PARAGRAPH ARCHITECTURE:
   ${isC2
     ? `Structure strictly into 4 to 5 distinct, cohesive paragraphs adhering to C2 discursive standards (minimum 4, maximum 5 paragraphs — 1 paragraph more demanding than C1):
   - Paragraph 1: Nuanced introduction contextualizing the prompt's problematized premise with an analytical thesis.
   - Paragraph 2: Comprehensive critical evaluation of the primary argument, systemic mechanisms, and stakeholder interests.
   - Paragraph 3: Counter-perspective or complicating dimension addressing the core tension.
   - Paragraph 4: Decisive evaluative synthesis resolving the dilemma with forward-looking closure.
   - Optional Paragraph 5 (if 5 paragraphs): Extended synthesis or separate stakeholder implication analysis.`
     : `Structure strictly into 3 to 4 well-balanced paragraphs adhering to C1 academic essay standards (minimum 3, maximum 4 paragraphs):
   - Paragraph 1: Introduction establishing topic context, scope, and clear thesis stance.
   - Paragraph 2: Analytical development of the primary sub-theme with concrete justification.
   - Paragraph 3: Examination of the secondary sub-theme and opposing perspective/tension.
   - Paragraph 4 (or integrated into Para 3): Concluding synthesis reinforcing the thesis position.`}

OUTPUT INSTRUCTION:
Output ONLY the raw essay text. Do not include a title, heading, introduction, word count notes, commentary, or markdown quotes. Begin immediately with the first sentence of the essay.`;
}

