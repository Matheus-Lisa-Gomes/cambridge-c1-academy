// Automated verification for FluentEdge Assessment Evaluator
import { TOPICS } from './js/data/topics.js';
import { evaluateEssay, analyzeQuickMetrics } from './js/modules/evaluator.js';

const topicAI = TOPICS[0]; // AI topic (C1/C2)
const topicC2 = TOPICS.find(t => t.id === 'epistemic-authority-truth') || TOPICS[10];

console.log("=== TEST 1: Authentic C1 Model Essay in C1 Mode ===");
const c1ModelEssay = topicAI.sampleExcerpt + " Furthermore, robust regulatory frameworks are imperative to mitigate systemic risks and clearly delineate boundaries between algorithmic assistance and unmitigated autonomy. Without such safeguards, the ubiquitous integration of smart tools will serve as a catalyst for disconcerting socio-economic upheaval, accelerating an inexorable transformation of human labor.";

const evalPassC1 = evaluateEssay(c1ModelEssay, topicAI, 'C1');
console.log("Score:", evalPassC1.rawTotal, "/ 20");
console.log("Percentage:", evalPassC1.percentage + "%");
console.log("CEFR Band:", evalPassC1.cefr.band);
console.log("Meets C1:", evalPassC1.meetsC1);
console.log("Meets Threshold:", evalPassC1.meetsThreshold);
console.log("Target words used:", evalPassC1.metrics.usedTargetCount);
console.log("Syntactic structures detected:", evalPassC1.metrics.identifiedStructures.map(s => s.name));

console.log("\n=== TEST 2: Low-Level B1 Draft in C1 Mode ===");
const b1Draft = "I think AI is good and bad. A lot of kids use AI for homework and stuff. It is very fast and cool. We can't stop it because technology is everywhere. I believe governments should do things.";
const evalFailB1 = evaluateEssay(b1Draft, topicAI, 'C1');
console.log("Score:", evalFailB1.rawTotal, "/ 20");
console.log("Percentage:", evalFailB1.percentage + "%");
console.log("CEFR Band:", evalFailB1.cefr.band);
console.log("Meets Threshold:", evalFailB1.meetsThreshold);
console.log("Informalities flagged:", evalFailB1.metrics.informalMatches);

console.log("\n=== TEST 3: Dedicated C2 Model Essay in C2 Mode ===");
const c2ModelEssay = topicC2.sampleExcerpt;
const evalPassC2 = evaluateEssay(c2ModelEssay, topicC2, 'C2');
console.log("Word count:", evalPassC2.metrics.wordCount);
console.log("Score:", evalPassC2.rawTotal, "/ 20");
console.log("Percentage:", evalPassC2.percentage + "%");
console.log("CEFR Band:", evalPassC2.cefr.band);
console.log("Meets C2:", evalPassC2.meetsC2);
console.log("Meets C2 Threshold:", evalPassC2.meetsThreshold);
console.log("Target words used:", evalPassC2.metrics.usedTargetCount);
console.log("Syntactic structures detected:", evalPassC2.metrics.identifiedStructures.map(s => s.name));

console.log("\n=== TEST 4: C1 Essay Evaluated in C2 Mode (Word count & C2 Threshold Gate) ===");
const evalC1inC2 = evaluateEssay(c1ModelEssay, topicAI, 'C2');
console.log("Word count:", evalC1inC2.metrics.wordCount);
console.log("Score:", evalC1inC2.rawTotal, "/ 20");
console.log("Percentage:", evalC1inC2.percentage + "%");
console.log("Meets C2 Threshold:", evalC1inC2.meetsThreshold);
console.log("Content feedback:", evalC1inC2.scales.content.feedback);

console.log("\n=== TEST 5: 9-Word Vocabulary Generator (3 Verbs, 2 Nouns, 2 Adjectives, 2 Adverbs) ===");
import { getRandomVocabularySet } from './js/data/vocabulary.js';

const vocabSetC1 = getRandomVocabularySet('C1');
const vocabSetC2 = getRandomVocabularySet('C2');

const c1Verbs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'verb');
const c1Nouns = vocabSetC1.filter(w => w.pos.toLowerCase() === 'noun');
const c1Adjs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'adjective');
const c1Advs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'adverb');

console.log("C1 Vocab Count:", vocabSetC1.length, "(Expected: 9)");
console.log("Verbs:", c1Verbs.length, "(Expected: 3)");
console.log("Nouns:", c1Nouns.length, "(Expected: 2)");
console.log("Adjectives:", c1Adjs.length, "(Expected: 2)");
console.log("Adverbs:", c1Advs.length, "(Expected: 2)");

const c2Verbs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'verb');
const c2Nouns = vocabSetC2.filter(w => w.pos.toLowerCase() === 'noun');
const c2Adjs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'adjective');
const c2Advs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'adverb');

const structureValid = vocabSetC1.length === 9 &&
                       c1Verbs.length === 3 &&
                       c1Nouns.length === 2 &&
                       c1Adjs.length === 2 &&
                       c1Advs.length === 2 &&
                       vocabSetC2.length === 9 &&
                       c2Verbs.length === 3 &&
                       c2Nouns.length === 2 &&
                       c2Adjs.length === 2 &&
                       c2Advs.length === 2;

// Test evaluation with active vocabulary
const sampleCustomText = `Seldom has society encountered such challenges. The authorities concurred and decided to alleviate the burden gracefully. This remarkable scenario proves that the outcome was extraordinarily effective.`;
const customVocab = [
  { headword: "concur", pos: "verb", cefr: "C1", stems: ["concur", "concurs", "concurred", "concurring"] },
  { headword: "alleviate", pos: "verb", cefr: "C1", stems: ["alleviate", "alleviates", "alleviated", "alleviating"] },
  { headword: "perpetuate", pos: "verb", cefr: "C1", stems: ["perpetuate", "perpetuates", "perpetuated"] },
  { headword: "scenario", pos: "noun", cefr: "C1", stems: ["scenario", "scenarios"] },
  { headword: "burden", pos: "noun", cefr: "C1", stems: ["burden", "burdens"] },
  { headword: "remarkable", pos: "adjective", cefr: "C1", stems: ["remarkable"] },
  { headword: "effective", pos: "adjective", cefr: "C1", stems: ["effective"] },
  { headword: "gracefully", pos: "adverb", cefr: "C1", stems: ["gracefully"] },
  { headword: "extraordinarily", pos: "adverb", cefr: "C1", stems: ["extraordinarily"] }
];

const quickMetrics = analyzeQuickMetrics(sampleCustomText, customVocab, 'C1');
console.log("Quick Metrics words detected:", quickMetrics.targetWordsUsed, "/ 9");

const allPassed = evalPassC1.meetsThreshold && 
                  !evalFailB1.meetsThreshold && 
                  evalPassC2.meetsThreshold && 
                  !evalC1inC2.meetsThreshold &&
                  structureValid &&
                  quickMetrics.targetWordsUsed >= 7;

if (allPassed) {
  console.log("\n>>> ALL TESTS PASSED: FluentEdge Assessment Evaluator & 9-Word Lexicon Engine accurately configured! <<<");
} else {
  console.error("\n>>> TEST FAILED! <<<", {
    evalPassC1: evalPassC1.meetsThreshold,
    evalFailB1: evalFailB1.meetsThreshold,
    evalPassC2: evalPassC2.meetsThreshold,
    evalC1inC2: evalC1inC2.meetsThreshold,
    structureValid,
    targetWordsUsed: quickMetrics.targetWordsUsed
  });
  process.exit(1);
}
