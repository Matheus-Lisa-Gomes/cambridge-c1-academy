// Automated verification for FluentEdge Assessment Evaluator
import { TOPICS } from './js/data/topics.js';
import { evaluateEssay, analyzeQuickMetrics } from './js/modules/evaluator.js';

const topic = TOPICS[0]; // AI topic

console.log("=== TEST 1: Authentic C1/C2 Model Essay ===");
const c1ModelEssay = topic.sampleExcerpt + " Furthermore, robust regulatory frameworks are imperative to mitigate systemic risks and clearly delineate boundaries between algorithmic assistance and unmitigated autonomy. Without such safeguards, the ubiquitous integration of smart tools will serve as a catalyst for disconcerting socio-economic upheaval, accelerating an inexorable transformation of human labor.";

const evalPass = evaluateEssay(c1ModelEssay, topic);
console.log("Score:", evalPass.rawTotal, "/ 20");
console.log("Percentage:", evalPass.percentage + "%");
console.log("CEFR Band:", evalPass.cefr.band);
console.log("Meets C1:", evalPass.meetsC1);
console.log("Target words used:", evalPass.metrics.usedTargetCount);
console.log("Syntactic structures detected:", evalPass.metrics.identifiedStructures.map(s => s.name));

console.log("\n=== TEST 2: Low-Level B1 Draft ===");
const b1Draft = "I think AI is good and bad. A lot of kids use AI for homework and stuff. It is very fast and cool. We can't stop it because technology is everywhere. I believe governments should do things.";
const evalFail = evaluateEssay(b1Draft, topic);
console.log("Score:", evalFail.rawTotal, "/ 20");
console.log("Percentage:", evalFail.percentage + "%");
console.log("CEFR Band:", evalFail.cefr.band);
console.log("Meets C1:", evalFail.meetsC1);
console.log("Informalities flagged:", evalFail.metrics.informalMatches);

if (evalPass.meetsC1 && !evalFail.meetsC1) {
  console.log("\n>>> ALL TESTS PASSED: FluentEdge Assessment Evaluator accurately distinguishes C1/C2 from B1/B2! <<<");
} else {
  console.error("\n>>> TEST FAILED! <<<");
}
