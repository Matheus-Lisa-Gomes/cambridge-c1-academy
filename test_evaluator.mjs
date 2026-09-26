// Automated verification for FluentEdge Assessment Evaluator
import { TOPICS, MAIN_SUBJECTS, SUB_THEMES, generateRandomTreeTopic, generateTopicFromTree, getDefaultStartingTopic, checkTopicAdherence } from './js/data/topics.js';
import { evaluateEssay, analyzeQuickMetrics, generateAiEssayPrompt } from './js/modules/evaluator.js';

const topicAI = TOPICS[0]; // AI topic (C1/C2)
const topicC2 = TOPICS.find(t => t.id === 'epistemic-authority-truth') || TOPICS[10];

console.log("=== TEST 1: Authentic C1 Model Essay in C1 Mode ===");
const c1ModelEssay = `Seldom has human ingenuity produced an instrument as transformative yet contentious as autonomous machine intelligence. While the ubiquitous integration of algorithmic computing promises unprecedented economic productivity, what remains of paramount concern is the inexorable dilution of human moral agency across critical decision-making sectors. Inasmuch as automated tools become deeply embedded within legal, financial, and educational institutions, civic stability and public trust inevitably hinge upon transparent, accountable, and democratically audited governance.

It is widely contended that without stringent legislative benchmarks to delineate institutional accountability, contemporary society risks delegating vital ethical adjudications to probabilistic systems devoid of human conscience. Were governments to fail to establish statutory oversight, irreparable societal harm and systemic disenfranchisement would inevitably ensue. Furthermore, robust regulatory frameworks are imperative to mitigate algorithmic bias and firmly establish boundaries between human authority and automated execution. Without such safeguards, commercial incentives and private monopolies will continue to prioritize unchecked optimization over collective well-being, social equity, and equitable access for vulnerable populations.

Notwithstanding the substantial financial and computational dividends promised by digital automation, technological acceleration must never supersede fundamental democratic values. It is imperative that global regulatory bodies enforce binding compliance protocols before autonomous architectures become irreversibly entrenched across modern infrastructure. Ultimately, only through proactive statutory oversight, continuous ethical vigilance, and inclusive civic engagement can modern democratic societies successfully harness machine intelligence while permanently preserving human dignity and fundamental civil liberties.`;

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
const c2ModelEssay = `The traditional gatekeepers having been superseded, contemporary public discourse operates without centralized arbitration. The rapid delegitimization of institutional expertise, accompanied by the concomitant proliferation of synthetic information, has fundamentally compromised modern deliberative spheres. While the decentralization of knowledge initially promised genuine democratic emancipation, its unchecked progression has engendered an insidious epistemic fragmentation that threatens the stability of civic institutions.

What is of paramount importance is the alarming mechanism through which algorithmic echo chambers actively obfuscate objective reality. By prioritizing sensationalism to maximize user engagement, commercial platforms incentivize fringe actors to promulgate unverified hypotheses with impunity. As a consequence, citizens become sequestered within ideologically fortified enclaves wherein empirical veracity is routinely subordinated to confirmation bias. This dynamic induces a pernicious cynicism that steadily dissolves collective trust in scientific methodologies, rendering constructive policy debates virtually impossible.

Furthermore, it is widely contended that the weaponization of artificial intelligence exacerbates this predicament by facilitating the automated fabrication of compelling yet deceitful narratives. It is not merely that false claims circulate rapidly; rather, the sheer volume of synthetic discourse renders discernment arduous for even the most discerning citizens. When the boundaries between authentic documentation and algorithmic fabrication are blurred, democratic deliberation is reduced to a battle of affective tribalism rather than rational persuasion.

Notwithstanding legitimate critiques regarding historical elitism within academic spheres, peer-reviewed consensus established a vital epistemic anchor for public policy. Under no circumstances can a deliberative democracy endure when the fundamental criteria for factual truth are dismantled into subjective opinion. Were societies to accept this chaotic trajectory as irreversible, participatory self-governance would collapse. Rigorous algorithmic accountability, verifiable empirical standards, and institutional revival must therefore be pursued with uncompromising determination by international leaders.`;
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

console.log("\n=== TEST 5: 10-Word Vocabulary Generator (3 Verbs, 3 Nouns, 2 Adjectives, 2 Adverbs) ===");
import { getRandomVocabularySet } from './js/data/vocabulary.js';

const vocabSetC1 = getRandomVocabularySet('C1');
const vocabSetC2 = getRandomVocabularySet('C2');

const c1Verbs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'verb');
const c1Nouns = vocabSetC1.filter(w => w.pos.toLowerCase() === 'noun');
const c1Adjs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'adjective');
const c1Advs = vocabSetC1.filter(w => w.pos.toLowerCase() === 'adverb');

console.log("C1 Vocab Count:", vocabSetC1.length, "(Expected: 10)");
console.log("Verbs:", c1Verbs.length, "(Expected: 3)");
console.log("Nouns:", c1Nouns.length, "(Expected: 3)");
console.log("Adjectives:", c1Adjs.length, "(Expected: 2)");
console.log("Adverbs:", c1Advs.length, "(Expected: 2)");

const c2Verbs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'verb');
const c2Nouns = vocabSetC2.filter(w => w.pos.toLowerCase() === 'noun');
const c2Adjs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'adjective');
const c2Advs = vocabSetC2.filter(w => w.pos.toLowerCase() === 'adverb');

const structureValid = vocabSetC1.length === 10 &&
                       c1Verbs.length === 3 &&
                       c1Nouns.length === 3 &&
                       c1Adjs.length === 2 &&
                       c1Advs.length === 2 &&
                       vocabSetC2.length === 10 &&
                       c2Verbs.length === 3 &&
                       c2Nouns.length === 3 &&
                       c2Adjs.length === 2 &&
                       c2Advs.length === 2 &&
                       // Verify paired 5-row x 2-col distribution:
                       vocabSetC1[0].pos.toLowerCase() === 'verb' &&
                       vocabSetC1[1].pos.toLowerCase() === 'noun' &&
                       vocabSetC1[2].pos.toLowerCase() === 'verb' &&
                       vocabSetC1[3].pos.toLowerCase() === 'noun' &&
                       vocabSetC1[4].pos.toLowerCase() === 'verb' &&
                       vocabSetC1[5].pos.toLowerCase() === 'noun' &&
                       vocabSetC1[6].pos.toLowerCase() === 'adverb' &&
                       vocabSetC1[7].pos.toLowerCase() === 'adjective' &&
                       vocabSetC1[8].pos.toLowerCase() === 'adverb' &&
                       vocabSetC1[9].pos.toLowerCase() === 'adjective';

console.log("Paired 2-Column Row Layout Valid:", structureValid);

// Test evaluation with active vocabulary
const sampleCustomText = `Seldom has society encountered such challenges. The authorities concurred and decided to alleviate the burden gracefully. This remarkable scenario proves that the outcome was an extraordinarily effective catalyst.`;
const customVocab = [
  { headword: "concur", pos: "verb", cefr: "C1", stems: ["concur", "concurs", "concurred", "concurring"] },
  { headword: "alleviate", pos: "verb", cefr: "C1", stems: ["alleviate", "alleviates", "alleviated", "alleviating"] },
  { headword: "perpetuate", pos: "verb", cefr: "C1", stems: ["perpetuate", "perpetuates", "perpetuated"] },
  { headword: "scenario", pos: "noun", cefr: "C1", stems: ["scenario", "scenarios"] },
  { headword: "burden", pos: "noun", cefr: "C1", stems: ["burden", "burdens"] },
  { headword: "catalyst", pos: "noun", cefr: "C1", stems: ["catalyst", "catalysts"] },
  { headword: "remarkable", pos: "adjective", cefr: "C1", stems: ["remarkable"] },
  { headword: "effective", pos: "adjective", cefr: "C1", stems: ["effective"] },
  { headword: "gracefully", pos: "adverb", cefr: "C1", stems: ["gracefully"] },
  { headword: "extraordinarily", pos: "adverb", cefr: "C1", stems: ["extraordinarily"] }
];

const quickMetrics = analyzeQuickMetrics(sampleCustomText, customVocab, 'C1');
console.log("Quick Metrics words detected:", quickMetrics.targetWordsUsed, "/ 10");

console.log("\n=== TEST 6: 100% Compulsory Target Lexis Guard (10/10 Fulfillment) ===");
const missingWordsPartial = quickMetrics.vocabStatus.filter(v => !v.used).map(v => v.headword || v.word);
const isPartialBlocked = quickMetrics.targetWordsUsed < quickMetrics.targetWordsTotal;
console.log("Partial (9/10) Blocked:", isPartialBlocked, "| Missing words detected:", missingWordsPartial);

// Text with the missing word 'perpetuate' added
const completeCustomText = sampleCustomText + " We must not perpetuate these difficulties.";
const completeMetrics = analyzeQuickMetrics(completeCustomText, customVocab, 'C1');
const missingWordsComplete = completeMetrics.vocabStatus.filter(v => !v.used).map(v => v.headword || v.word);
const isCompleteFulfilled = completeMetrics.targetWordsUsed === completeMetrics.targetWordsTotal;
console.log("Complete (10/10) Fulfilled:", isCompleteFulfilled, "| Words used:", completeMetrics.targetWordsUsed, "/ 10");

console.log("\n=== TEST 7: AI Essay Generator Prompt Builder ===");
const promptC1 = generateAiEssayPrompt(topicAI, customVocab, 'C1');
const promptC2 = generateAiEssayPrompt(topicC2, customVocab, 'C2');

const promptC1HasTitle = promptC1.includes(topicAI.title);
const promptC1HasC1Standard = promptC1.includes("CEFR C1 Advanced") && promptC1.includes("220 and 260 words");
const promptC2HasC2Standard = promptC2.includes("CEFR C2 Proficiency (Mastery)") && promptC2.includes("280 and 320 words");
const promptHasAllWords = customVocab.every(v => promptC1.includes(v.headword || v.word));
const promptHasSyntaxRules = promptC1.includes("Negative / Limiting Inversion") && promptC1.includes("Cleft / Focus Structure");
const promptHasOutputRule = promptC1.includes("Output ONLY the raw essay text");
const promptHasAdherenceGate = promptC1.includes("OBLIGATORY TOPIC ADHERENCE") && promptC1.includes("Root Subject");

console.log("C1 Prompt contains topic title:", promptC1HasTitle);
console.log("C1 Prompt contains C1 word range (220-260):", promptC1HasC1Standard);
console.log("C2 Prompt contains C2 word range (280-320):", promptC2HasC2Standard);
console.log("Prompt embeds all 10 compulsory words:", promptHasAllWords);
console.log("Prompt includes syntax radar requirements:", promptHasSyntaxRules);
console.log("Prompt specifies clean raw output:", promptHasOutputRule);
console.log("Prompt specifies Obligatory Topic Adherence gate:", promptHasAdherenceGate);

console.log("\n=== TEST 8: Tree Topic Architecture (Main Subject + 2 Sub-Themes) ===");
const randomTreeTopic = generateRandomTreeTopic('C1');
console.log("Random Tree Topic ID:", randomTreeTopic.id);
console.log("Random Tree Topic Title:", randomTreeTopic.title);
console.log("Root Subject:", randomTreeTopic.mainSubject.name);
console.log("Sub-Theme 1:", randomTreeTopic.subTheme1.name);
console.log("Sub-Theme 2:", randomTreeTopic.subTheme2.name);
console.log("Directive:", randomTreeTopic.directive);

const treeSubjectsValid = MAIN_SUBJECTS.length >= 15;
const treeSubThemesValid = SUB_THEMES.length >= 15;
const topicHasTreeProps = Boolean(
  randomTreeTopic.mainSubject &&
  randomTreeTopic.subTheme1 &&
  randomTreeTopic.subTheme2 &&
  randomTreeTopic.subTheme1.id !== randomTreeTopic.subTheme2.id &&
  randomTreeTopic.directive &&
  randomTreeTopic.title
);

const treePrompt = generateAiEssayPrompt(randomTreeTopic, customVocab, 'C1');
const treePromptIncludesSubject = treePrompt.includes(randomTreeTopic.mainSubject.name);
const treePromptIncludesDirective = treePrompt.includes(randomTreeTopic.directive);

console.log("Main Subjects Pool Count >= 15:", treeSubjectsValid, `(${MAIN_SUBJECTS.length})`);
console.log("Sub-Themes Pool Count >= 15:", treeSubThemesValid, `(${SUB_THEMES.length})`);
console.log("Random Tree Topic Has 2 Distinct Sub-Themes:", topicHasTreeProps);
console.log("AI Prompt embeds Root Subject:", treePromptIncludesSubject);
console.log("AI Prompt embeds Directive:", treePromptIncludesDirective);

const treeTopicTestPassed = treeSubjectsValid && treeSubThemesValid && topicHasTreeProps && treePromptIncludesSubject && treePromptIncludesDirective;

const aiPromptTestPassed = promptC1HasTitle && promptC1HasC1Standard && promptC2HasC2Standard && promptHasAllWords && promptHasSyntaxRules && promptHasOutputRule && promptHasAdherenceGate;

const lexisGuardPassed = isPartialBlocked && 
                         missingWordsPartial.length === 1 && 
                         missingWordsPartial[0] === 'perpetuate' &&
                         isCompleteFulfilled &&
                         missingWordsComplete.length === 0;

console.log("\n=== TEST 9: Obligatory Topic Adherence Guard (Root Subject + 2 Sub-Themes) ===");
const adherenceC1Pass = checkTopicAdherence(c1ModelEssay, topicAI);
const adherenceOffTopic = checkTopicAdherence("Culinary traditions require fresh herbs and delicate seasoning.", topicAI);
const adherenceC2Pass = checkTopicAdherence(c2ModelEssay, topicC2);

console.log("C1 Essay on AI Topic Passes:", adherenceC1Pass.passes, "(Expected: true)");
console.log("C1 Subject Terms Found:", adherenceC1Pass.subjectFound.length, "(Expected: >= 2)");
console.log("C1 Theme 1 Terms Found:", adherenceC1Pass.theme1Found.length, "(Expected: >= 1)");
console.log("C1 Theme 2 Terms Found:", adherenceC1Pass.theme2Found.length, "(Expected: >= 1)");
console.log("Off-Topic Essay Passes:", adherenceOffTopic.passes, "(Expected: false)");
console.log("Off-Topic Feedback:", adherenceOffTopic.feedback);
console.log("C2 Essay on Epistemic Topic Passes:", adherenceC2Pass.passes, "(Expected: true)");

const topicAdherenceTestPassed = adherenceC1Pass.passes &&
                                 adherenceC1Pass.subjectOk &&
                                 adherenceC1Pass.theme1Ok &&
                                 adherenceC1Pass.theme2Ok &&
                                 !adherenceOffTopic.passes &&
                                 adherenceC2Pass.passes;

console.log("\n=== TEST 10: Topic Difficulty Tier Filter (Easy, Medium, Hard, All) ===");
const easyFilterTopic = generateRandomTreeTopic('C1', null, Math.random, 1);
const medFilterTopic = generateRandomTreeTopic('C1', null, Math.random, 2);
const hardFilterTopic = generateRandomTreeTopic('C1', null, Math.random, 3);
const allFilterTopic = generateRandomTreeTopic('C1', null, Math.random, 'all');

console.log("Easy Tier Topic Subject:", easyFilterTopic.mainSubject.name, "| Complexity:", easyFilterTopic.complexity, "(Expected: 1)");
console.log("Medium Tier Topic Subject:", medFilterTopic.mainSubject.name, "| Complexity:", medFilterTopic.complexity, "(Expected: 2)");
console.log("Hard Tier Topic Subject:", hardFilterTopic.mainSubject.name, "| Complexity:", hardFilterTopic.complexity, "(Expected: 3)");
console.log("All Tiers Topic Subject:", allFilterTopic.mainSubject.name, "| Complexity:", allFilterTopic.complexity, "(Expected: 1, 2, or 3)");

const difficultyFilterTestPassed = easyFilterTopic.complexity === 1 &&
                                   medFilterTopic.complexity === 2 &&
                                   hardFilterTopic.complexity === 3 &&
                                   [1, 2, 3].includes(allFilterTopic.complexity);

console.log("\n=== TEST 11: Obligatory Word Count (±5 Leniency) & Paragraph Count Gating ===");
// Word count boundaries:
// C1 allowed: 215 to 265 words (220-260 ± 5)
// C1 paragraphs allowed: 3 to 4 paragraphs
// C2 allowed: 275 to 325 words (280-320 ± 5)
// C2 paragraphs allowed: 4 to 5 paragraphs (1 paragraph more demanding than C1)

console.log("C1 Model Essay Words:", evalPassC1.metrics.wordCount, "(Allowed: 215-265) | Words Gate Met:", evalPassC1.metrics.wordsGateMet);
console.log("C1 Model Essay Paras:", evalPassC1.metrics.paragraphsCount, "(Allowed: 3-4) | Paras Gate Met:", evalPassC1.metrics.paragraphsGateMet);
console.log("C2 Model Essay Words:", evalPassC2.metrics.wordCount, "(Allowed: 275-325) | Words Gate Met:", evalPassC2.metrics.wordsGateMet);
console.log("C2 Model Essay Paras:", evalPassC2.metrics.paragraphsCount, "(Allowed: 4-5) | Paras Gate Met:", evalPassC2.metrics.paragraphsGateMet);

// Verify that essays violating word boundaries fail threshold
// 1. Under minimum C1 (150 words)
const shortC1Text = c1ModelEssay.split(/\s+/).slice(0, 150).join(" ");
const evalShortC1 = evaluateEssay(shortC1Text, topicAI, 'C1');
console.log("Short C1 Essay (150 words) Fails Threshold:", !evalShortC1.meetsThreshold, "(Expected: true)");

// 2. Over maximum C1 (>265 words)
const longC1Text = c1ModelEssay + " Furthermore, the unmitigated proliferation of autonomous systems across global commercial sectors inevitably triggers widespread socio-economic turbulence and dislocation, eroding foundational institutional trust and disenfranchising marginalized workforces throughout contemporary industrial economies worldwide. Consequently, international regulatory commissions and national policy makers must intervene promptly to avert irreversible structural damage and societal fragmentation.";
const evalLongC1 = evaluateEssay(longC1Text, topicAI, 'C1');
console.log("Long C1 Essay Words:", evalLongC1.metrics.wordCount, "| wordsGateMet:", evalLongC1.metrics.wordsGateMet);
console.log("Long C1 Essay (>265 words) Fails Threshold:", !evalLongC1.meetsThreshold, "(Expected: true)");

// 3. Paragraph count violation for C1: 1 paragraph (below 3)
const singleParaC1Text = c1ModelEssay.replace(/\n\s*\n/g, " ");
const evalSingleParaC1 = evaluateEssay(singleParaC1Text, topicAI, 'C1');
console.log("Single Paragraph C1 Essay Fails Threshold:", !evalSingleParaC1.meetsThreshold, "(Expected: true)");

// 4. Paragraph count violation for C1: 5 paragraphs (above 4)
const fiveParaC1Text = c1ModelEssay.split(/\n\s*\n/).map(p => p.split(". ").join(".\n\n")).join("\n\n");
const evalFiveParaC1 = evaluateEssay(fiveParaC1Text, topicAI, 'C1');
console.log("Five Paragraph C1 Essay (>4 paras) Fails Threshold:", !evalFiveParaC1.meetsThreshold, "(Expected: true)");

// 5. C2 3 paragraphs (below 4)
const threeParaC2Text = c2ModelEssay.split(/\n\s*\n/).slice(0, 3).join("\n\n");
const evalThreeParaC2 = evaluateEssay(threeParaC2Text, topicC2, 'C2');
console.log("3 Paragraph C2 Essay (<4 paras) Fails Threshold:", !evalThreeParaC2.meetsThreshold, "(Expected: true)");

const wordParaGateTestPassed = evalPassC1.metrics.wordsGateMet &&
                               evalPassC1.metrics.paragraphsGateMet &&
                               evalPassC2.metrics.wordsGateMet &&
                               evalPassC2.metrics.paragraphsGateMet &&
                               !evalShortC1.meetsThreshold &&
                               !evalLongC1.meetsThreshold &&
                               !evalSingleParaC1.meetsThreshold &&
                               !evalFiveParaC1.meetsThreshold &&
                               !evalThreeParaC2.meetsThreshold;

console.log("\n=== TEST 12: Fixed Easy Default Starting Topic ===");
const startTopic = getDefaultStartingTopic('C1');
console.log("Default Starting Topic ID:", startTopic.id);
console.log("Default Starting Topic Title:", startTopic.title);
console.log("Default Root Subject:", startTopic.mainSubject.name, "| Complexity:", startTopic.complexity, "(Expected: 1 / Easy)");
console.log("Default Sub-theme 1:", startTopic.subTheme1.name);
console.log("Default Sub-theme 2:", startTopic.subTheme2.name);

const startTopicValid = startTopic.complexity === 1 &&
                        startTopic.mainSubject.id === 'social-media-daily' &&
                        startTopic.subTheme1.id === 'community' &&
                        startTopic.subTheme2.id === 'family-relationships';

console.log("Default Starting Topic Valid & Easy:", startTopicValid);

const allPassed = evalPassC1.meetsThreshold && 
                  !evalFailB1.meetsThreshold && 
                  evalPassC2.meetsThreshold && 
                  !evalC1inC2.meetsThreshold &&
                  structureValid &&
                  quickMetrics.targetWordsUsed >= 8 &&
                  lexisGuardPassed &&
                  aiPromptTestPassed &&
                  treeTopicTestPassed &&
                  topicAdherenceTestPassed &&
                  difficultyFilterTestPassed &&
                  wordParaGateTestPassed &&
                  startTopicValid;

if (allPassed) {
  console.log("\n>>> ALL TESTS PASSED: FluentEdge Assessment Evaluator, 10-Word Lexicon Engine, 100% Compulsory Lexis Guard, AI Prompt Generator, Tree Topic Architecture, Obligatory Topic Adherence Guard, Topic Difficulty Tier Filter, Obligatory Word/Paragraph Gates & Fixed Easy Starting Topic accurately configured! <<<");
} else {
  console.error("\n>>> TEST FAILED! <<<", {
    evalPassC1: evalPassC1.meetsThreshold,
    evalFailB1: evalFailB1.meetsThreshold,
    evalPassC2: evalPassC2.meetsThreshold,
    evalC1inC2: evalC1inC2.meetsThreshold,
    structureValid,
    targetWordsUsed: quickMetrics.targetWordsUsed,
    lexisGuardPassed,
    aiPromptTestPassed,
    treeTopicTestPassed,
    wordParaGateTestPassed
  });
  process.exit(1);
}

