/**
 * Cambridge C1/C2 Text Assessment Engine
 * Evaluates written submissions according to official Cambridge English C1 Advanced (CAE)
 * and C2 Proficiency (CPE) assessment scales:
 * 1. Content (0-5)
 * 2. Communicative Achievement (0-5)
 * 3. Organisation (0-5)
 * 4. Language (0-5)
 */

import { CAMBRIDGE_CEFR_DESCRIPTORS } from '../data/topics.js';

// Advanced CEFR C1/C2 Academic Markers & Collocations
const ACADEMIC_C1_MARKERS = [
  "furthermore", "consequently", "nevertheless", "notwithstanding", "conversely",
  "inasmuch", "albeit", "predominantly", "manifestly", "unequivocally",
  "compelling", "scrutiny", "ramifications", "paradigm", "delineate",
  "substantiate", "corroborate", "imperative", "pivotal", "catalyst",
  "concomitant", "ubiquitous", "salient", "paramount", "myopic",
  "unprecedented", "inexorable", "disconcerting", "ameliorate", "tenable"
];

// Informal expressions penalized in Cambridge C1/C2 formal essays
const INFORMAL_PATTERNS = [
  /\b(gonna|wanna|kinda|sorta|dunno)\b/i,
  /\b(a lot of|lots of|tons of|heaps of)\b/i,
  /\b(kids|guys|cops|stuff|things)\b/i,
  /\b(can't|don't|won't|isn't|aren't|didn't|doesn't|haven't|hasn't|hadn't)\b/i // Contractions discouraged in formal Cambridge essays
];

// Complex C1/C2 Syntactic Patterns
const SYNTACTIC_PATTERNS = {
  negativeInversion: {
    name: "Negative / Limiting Inversion",
    description: "Seldom / Rarely / Under no circumstances / Not only... inversion",
    regex: /\b(seldom|rarely|scarcely|hardly|under no circumstances|on no account|in no way|at no time|little did|not only)\s+(did|does|do|had|have|has|is|was|were|can|could|should|will|would)\s+[a-z]+/i,
    weight: 1.2
  },
  cleftSentence: {
    name: "Cleft / Focus Structure",
    description: "What [clause] is/was... or It is/was [focus] that/who...",
    regex: /\b(what\s+[a-z\s]{3,25}\s+(is|was|remains|proves)|it\s+(is|was)\s+[a-z\s]{3,25}\s+(that|who|which))\b/i,
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
    regex: /\b(were\s+[a-z\s]{2,20}\s+to\s+[a-z]+|had\s+[a-z\s]{2,20}\s+[a-z]+ed|should\s+[a-z\s]{2,20}\s+[a-z]+)\b/i,
    weight: 1.1
  },
  complexConcession: {
    name: "Advanced Concession / Contrast Marker",
    description: "Notwithstanding, Albeit, Inasmuch as, Be that as it may",
    regex: /\b(notwithstanding\s+the|albeit\s+|inasmuch\s+as|be\s+that\s+as\s+it\s+may|for\s+all\s+that|much\s+as\s+[a-z]+)\b/i,
    weight: 0.9
  },
  participleClause: {
    name: "Fronted Participle / Gerund Clause",
    description: "Having considered... / Confronted with... / Bearing in mind...",
    regex: /^(having\s+[a-z]+ed|confronted\s+with|bearing\s+in\s+mind|given\s+the|judging\s+by)\s+[a-z\s,]+/im,
    weight: 0.8
  }
};

/**
 * Check if a target word or any of its stems/variants exists in the text
 */
export function checkTargetWordUsage(wordObj, text) {
  const normalizedText = text.toLowerCase();
  const stems = wordObj.stems || [wordObj.word];
  
  for (const stem of stems) {
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
export function analyzeQuickMetrics(text, targetVocabulary = []) {
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
    return {
      word: v.word,
      used: res.used,
      matchedStem: res.matchedStem,
      collocation: v.collocation,
      ipa: v.ipa
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

  return {
    wordCount,
    paragraphCount: paragraphs.length,
    targetWordsUsed,
    targetWordsTotal,
    vocabStatus,
    detectedGrammar,
    informalFindings
  };
}

/**
 * Full Cambridge C1/C2 Assessment Algorithm
 */
export function evaluateEssay(text, currentTopic) {
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;

  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const sentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  // 1. Target Vocabulary Analysis
  const targetVocabulary = currentTopic.targetVocabulary || [];
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

  // Average Sentence Length (C1 target: 18 - 28 words per sentence)
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
  // SCORING ACCORDING TO CAMBRIDGE SCALES (0-5)
  // ==========================================

  // Scale 1: CONTENT (Target: 220-260 words, covers prompt points)
  let contentScore = 5.0;
  const feedbackContent = [];
  if (wordCount < 180) {
    contentScore -= 2.0;
    feedbackContent.push(`Essay length (${wordCount} words) is critically below Cambridge C1 recommendation (220-260 words). Insufficient development of arguments.`);
  } else if (wordCount < 220) {
    contentScore -= 0.8;
    feedbackContent.push(`Slightly under the 220-word threshold (${wordCount} words). Expand on your analytical justifications.`);
  } else if (wordCount > 340) {
    contentScore -= 0.5;
    feedbackContent.push(`Essay is verbose (${wordCount} words). Cambridge examiners penalize lack of conciseness and redundancy.`);
  } else {
    feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to Cambridge C1 Part 1 guidelines.`);
  }

  if (paragraphs.length < 3) {
    contentScore -= 1.0;
    feedbackContent.push("Needs clear separation into Introduction, Body Arguments (covering both prompt points), and Conclusion.");
  } else {
    feedbackContent.push(`Strong essay architecture with ${paragraphs.length} structured paragraphs.`);
  }
  contentScore = Math.max(1, Math.min(5, contentScore));

  // Scale 2: COMMUNICATIVE ACHIEVEMENT (Academic tone, register, objective stance)
  let commScore = 4.0;
  const feedbackComm = [];
  if (informalMatches.length > 0) {
    const penalty = Math.min(2.0, informalMatches.length * 0.5);
    commScore -= penalty;
    feedbackComm.push(`Detected informal colloquialisms or contractions: "${informalMatches.slice(0, 4).join(', ')}". In Cambridge C1/C2, avoid contractions ("don't", "can't") and maintain an objective scholarly register.`);
  } else {
    commScore += 0.5;
    feedbackComm.push("Flawless formal academic register maintained with no informal contractions or conversational vernacular.");
  }

  if (identifiedStructures.some(s => s.id === 'passiveReporting' || s.id === 'cleftSentence')) {
    commScore += 0.5;
    feedbackComm.push("Masterful use of objective hedging and cleft framing typical of Cambridge band 5 essays.");
  }
  commScore = Math.max(1, Math.min(5, commScore));

  // Scale 3: ORGANISATION (Linking devices, cohesion, discourse markers)
  let orgScore = 3.5;
  const feedbackOrg = [];
  if (paragraphs.length >= 4) orgScore += 0.5;
  if (academicMarkerCount >= 4) {
    orgScore += 0.8;
    feedbackOrg.push(`Exceptional deployment of cohesive devices (${academicMarkerCount} advanced discourse markers detected).`);
  } else if (academicMarkerCount >= 2) {
    orgScore += 0.3;
    feedbackOrg.push("Adequate transitional markers, but could incorporate more nuanced logical connectors (e.g., 'notwithstanding', 'inasmuch as').");
  } else {
    orgScore -= 0.8;
    feedbackOrg.push("Discourse cohesion is underdeveloped. Integrate formal Cambridge cohesive markers to link paragraphs smoothly.");
  }
  orgScore = Math.max(1, Math.min(5, orgScore));

  // Scale 4: LANGUAGE (Lexical range, target vocabulary, complex syntax)
  let langScore = 2.5;
  const feedbackLang = [];

  // Target vocabulary weight
  const vocabRatio = usedTargetCount / Math.max(1, targetVocabulary.length);
  if (vocabRatio >= 0.75) {
    langScore += 1.5;
    feedbackLang.push(`Outstanding command of required Cambridge C1/C2 topic vocabulary (${usedTargetCount}/${targetVocabulary.length} words seamlessly integrated).`);
  } else if (vocabRatio >= 0.5) {
    langScore += 0.8;
    feedbackLang.push(`Good integration of target vocabulary (${usedTargetCount}/${targetVocabulary.length} words used), but aim for at least 6 to secure higher band.`);
  } else {
    feedbackLang.push(`Target vocabulary underutilized: only ${usedTargetCount}/${targetVocabulary.length} required words incorporated. University examiners look for advanced lexical precision.`);
  }

  // Syntactic complexity
  if (identifiedStructures.length >= 3) {
    langScore += 1.0;
    feedbackLang.push(`High grammatical ambition demonstrated: successfully incorporated ${identifiedStructures.length} advanced syntactic structures (${identifiedStructures.map(s => s.name).join(', ')}).`);
  } else if (identifiedStructures.length >= 1) {
    langScore += 0.4;
    feedbackLang.push(`Used advanced syntax (${identifiedStructures[0].name}). Incorporating an inverted conditional or negative inversion would propel this to C2.`);
  } else {
    langScore -= 0.5;
    feedbackLang.push("Syntax relies predominantly on simple/compound sentences. Cambridge C1 requires varied complex structures such as inversions, clefts, or participle clauses.");
  }

  // Lexical diversity
  if (typeTokenRatio > 0.55 && wordCount > 150) {
    langScore += 0.3;
  }
  langScore = Math.max(1, Math.min(5, langScore));

  // Total Cambridge Score out of 20 (standard Cambridge 4 scales * 5)
  const rawTotal = contentScore + commScore + orgScore + langScore; // max 20
  const normalizedPercentage = Math.round((rawTotal / 20) * 100);

  // CEFR Determination
  let cefrResult;
  let meetsC1 = false;

  if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.C2.minScore && usedTargetCount >= 5 && identifiedStructures.length >= 2) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.C2;
    meetsC1 = true;
  } else if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.C1.minScore && usedTargetCount >= 4) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.C1;
    meetsC1 = true;
  } else if (normalizedPercentage >= CAMBRIDGE_CEFR_DESCRIPTORS.B2.minScore) {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.B2;
    meetsC1 = false;
  } else {
    cefrResult = CAMBRIDGE_CEFR_DESCRIPTORS.B1;
    meetsC1 = false;
  }

  return {
    rawTotal: Number(rawTotal.toFixed(1)),
    percentage: normalizedPercentage,
    cefr: cefrResult,
    meetsC1,
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
      informalMatches
    }
  };
}
