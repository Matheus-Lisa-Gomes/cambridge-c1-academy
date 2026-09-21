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

const allPassed = evalPassC1.meetsThreshold && 
                  !evalFailB1.meetsThreshold && 
                  evalPassC2.meetsThreshold && 
                  !evalC1inC2.meetsThreshold;

if (allPassed) {
  console.log("\n>>> ALL TESTS PASSED: FluentEdge Assessment Evaluator accurately handles C1 and C2 standards! <<<");
} else {
  console.error("\n>>> TEST FAILED! <<<", {
    evalPassC1: evalPassC1.meetsThreshold,
    evalFailB1: evalFailB1.meetsThreshold,
    evalPassC2: evalPassC2.meetsThreshold,
    evalC1inC2: evalC1inC2.meetsThreshold
  });
  process.exit(1);
}
