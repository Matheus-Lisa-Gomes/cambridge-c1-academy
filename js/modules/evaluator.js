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
  const optimalMax = isC2 ? 340 : 280;

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
    optimalMax
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

  if (isC2) {
    // C2 Target: 280-320 words
    if (wordCount < 240) {
      contentScore -= 2.0;
      feedbackContent.push(`Essay length (${wordCount} words) is critically below C2 Proficiency requirement (280-320 words). Complex discourse demands thorough multi-angle elaboration.`);
    } else if (wordCount < 280) {
      contentScore -= 0.8;
      feedbackContent.push(`Below the 280-word C2 threshold (${wordCount} words). Synthesize both prompt dimensions with deeper analytical nuance.`);
    } else if (wordCount > 380) {
      contentScore -= 0.5;
      feedbackContent.push(`Essay is overly verbose (${wordCount} words). C2 examiners penalize circumlocution and lack of concision.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to C2 Proficiency standards.`);
    }

    if (paragraphs.length < 4) {
      contentScore -= 0.8;
      feedbackContent.push("C2 discursive essays require a sophisticated 4-stage architecture (Introduction, Opposing Arguments, Synthesis/Evaluation, and Conclusion).");
    } else {
      feedbackContent.push(`Flawless essay architecture with ${paragraphs.length} balanced paragraphs.`);
    }
  } else {
    // C1 Target: 220-260 words
    if (wordCount < 180) {
      contentScore -= 2.0;
      feedbackContent.push(`Essay length (${wordCount} words) is critically below C1 recommendation (220-260 words). Insufficient development of arguments.`);
    } else if (wordCount < 220) {
      contentScore -= 0.8;
      feedbackContent.push(`Slightly under the 220-word threshold (${wordCount} words). Expand on your analytical justifications.`);
    } else if (wordCount > 340) {
      contentScore -= 0.5;
      feedbackContent.push(`Essay is verbose (${wordCount} words). Advanced academic writing standards penalize lack of conciseness and redundancy.`);
    } else {
      feedbackContent.push(`Optimal word length (${wordCount} words) adhering strictly to C1 guidelines.`);
    }

    if (paragraphs.length < 3) {
      contentScore -= 1.0;
      feedbackContent.push("Needs clear separation into Introduction, Body Arguments (covering both prompt points), and Conclusion.");
    } else {
      feedbackContent.push(`Strong essay architecture with ${paragraphs.length} structured paragraphs.`);
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
  const requiredStructs = isC2 ? 3 : 2;
  if (identifiedStructures.length >= requiredStructs) {
    langScore += 1.0;
    feedbackLang.push(`High grammatical ambition demonstrated: successfully incorporated ${identifiedStructures.length} advanced syntactic structures (${identifiedStructures.map(s => s.name).join(', ')}).`);
  } else if (identifiedStructures.length >= 1) {
    langScore += 0.4;
    feedbackLang.push(`Used advanced syntax (${identifiedStructures[0].name}). Incorporating ${isC2 ? 'additional inverted conditionals or participle clauses' : 'an inverted conditional or cleft'} is required for C2 mastery.`);
  } else {
    langScore -= 0.6;
    feedbackLang.push(`Syntax relies on basic structures. ${targetLevel} requires varied complex patterns (inversions, clefts, or participle clauses).`);
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

  if (normalizedPercentage >= CEFR_DESCRIPTORS.C2.minScore && targetThresholdMetC2 && identifiedStructures.length >= 2) {
    cefrResult = CEFR_DESCRIPTORS.C2;
    meetsC1 = true;
    meetsC2 = true;
  } else if (normalizedPercentage >= CEFR_DESCRIPTORS.C1.minScore && targetThresholdMetC1) {
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
    ? (meetsC2 && normalizedPercentage >= 85 && targetGateMet && identifiedStructures.length >= 2 && wordCount >= 260)
    : meetsC1;

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
      informalMatches
    }
  };
}

/**
 * Generates an optimized prompt for external LLMs (ChatGPT, Claude, Gemini, etc.)
 * to craft an essay adhering to FluentEdge's C1/C2 standards and incorporating
 * all compulsory target lexis items.
 */
export function generateAiEssayPrompt(topic, targetVocabulary = [], targetLevel = 'C1') {
  const isC2 = targetLevel === 'C2';
  const levelStandard = isC2 ? 'CEFR C2 Proficiency (Mastery)' : 'CEFR C1 Advanced';
  const minWords = isC2 ? 280 : 220;
  const maxWords = isC2 ? 320 : 260;
  const topicTitle = topic ? topic.title : 'Contemporary Issues & Ethics';
  const topicCategory = topic ? topic.category : 'General Academic';
  const topicType = topic ? topic.type : (isC2 ? 'C2 Proficiency Discursive Essay' : 'C1/C2 Academic Essay');

  const vocabItems = targetVocabulary.map((v, i) => {
    const word = v.headword || v.word || '';
    const pos = v.pos ? `[${v.pos}]` : '';
    const def = v.definition ? ` — ${v.definition}` : '';
    const colloc = v.collocation ? ` (collocation: "${v.collocation}")` : '';
    return `${i + 1}. ${word} ${pos}${def}${colloc}`;
  }).join('\n');

  return `Write an academic essay at the ${levelStandard} standard in response to the following topic:

ESSAY TOPIC:
- Title: "${topicTitle}"
- Category: ${topicCategory}
- Genre: ${topicType}

MANDATORY CRITERIA & CONSTRAINTS:

1. STRICT LENGTH TARGET:
   - The essay MUST be strictly between ${minWords} and ${maxWords} words.
   - Do not write fewer than ${minWords} words, and do not exceed ${maxWords} words.

2. COMPULSORY TARGET LEXIS (10/10 REQUIRED):
   Incorporate ALL 10 of the following target vocabulary words into the essay. Each word must be used accurately in its exact form or a natural grammatical inflection (e.g., conjugated verb, plural noun, participial form):
${vocabItems}

3. SOPHISTICATED SYNTACTIC STRUCTURES:
   Include at least 3 to 5 of the following C1/C2 grammatical structures to satisfy syntactic complexity benchmarks:
   - Negative / Limiting Inversion (e.g. "Seldom has...", "Under no circumstances should...", "Not only is...")
   - Cleft / Focus Structure (e.g. "What remains of paramount concern is...", "It is this systemic flaw that...")
   - Passive Reporting Clause (e.g. "It is widely contended that...", "It is commonly maintained that...")
   - Inverted Conditional (e.g. "Were authorities to intervene...", "Had society recognized...")
   - Advanced Concession / Contrast Marker (e.g. "Notwithstanding the...", "Albeit challenging,...", "Inasmuch as...")
   - Fronted Participle Clause (e.g. "Having considered the ramifications,...", "Confronted with mounting evidence,...")

4. FORMAL REGISTER & TONE:
   - Maintain a formal, analytical academic register.
   - DO NOT use informal contractions (write "do not", "cannot", "will not", "it is" — avoid "don't", "can't", "won't", "it's").
   - DO NOT use colloquialisms or informal phrasing (avoid "a lot of", "kids", "things", "stuff").

5. PARAGRAPH STRUCTURE:
   - Structure the essay into 3 to 4 distinct, cohesive paragraphs: an introduction with a clear thesis, 2 balanced and critical analytical body paragraphs, and a conclusive synthesis.

OUTPUT INSTRUCTION:
Output ONLY the raw essay text. Do not include a title, heading, introduction, word count notes, commentary, or markdown quotes. Begin immediately with the first sentence of the essay.`;
}

