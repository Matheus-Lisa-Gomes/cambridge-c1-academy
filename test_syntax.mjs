const patterns = {
  negativeInversion: {
    name: 'Negative / Limiting Inversion',
    regex: /\b(seldom|rarely|scarcely|hardly|under no circumstances|on no account|in no way|at no time|little did|not only)\s+(did|does|do|had|have|has|is|was|were|can|could|should|will|would)\s+[a-z]+/i
  },
  cleftSentence: {
    name: 'Cleft / Focus Structure',
    regex: /\b(what\s+[a-z\s]{1,50}\s+(is|was|remains|proves)|it\s+(is|was)\s+[a-z\s]{1,60}\s+(that|who|which))\b/i
  },
  passiveReporting: {
    name: 'Passive Reporting Clause',
    regex: /\bit\s+is\s+(widely|frequently|commonly|generally|often)?\s*(contended|maintained|argued|asserted|held|claimed|believed|acknowledged|postulated|purported|surmised)\s+that\b/i
  },
  invertedConditional: {
    name: "Inverted / Conditional without 'If'",
    regex: /\b(were\s+[a-z\s]{2,20}\s+to\s+[a-z]+|had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|should\s+[a-z\s]{2,20}\s+[a-z]+)\b/i
  },
  complexConcession: {
    name: 'Advanced Concession / Contrast Marker',
    regex: /\b(notwithstanding\s+the|albeit\s+|inasmuch\s+as|be\s+that\s+as\s+it\s+may|for\s+all\s+that|much\s+as\s+[a-z]+)\b/i
  },
  participleClause: {
    name: 'Fronted Participle / Gerund Clause',
    regex: /(^|[.!?]\s+)(having\s+[a-z]+(ed|en|t)|confronted\s+with|bearing\s+in\s+mind|given\s+the|judging\s+by)\s+[a-z\s,]+/i
  },
  mandativeSubjunctive: {
    name: 'Mandative / Formulaic Subjunctive',
    regex: /\b(imperative|vital|crucial|essential|paramount|mandatory|critical|prerequisite|demands?|insists?|stipulates?)\s+that\s+[a-z\s]{2,25}\s+(be|remain|adopt|curtail|undergo|scrutinize|implement)\b/i
  },
  absoluteClause: {
    name: 'Nominative Absolute Clause',
    regex: /(^|[.!?]\s+)(the\s+[a-z\s]{2,20}\s+(having\s+been\s+[a-z]+|having\s+[a-z]+(ed|en|t)|concluded|exhausted|settled)|all\s+(things|factors|arguments|options)\s+considered|circumstances\s+permitting)/i
  },
  mixedConditional: {
    name: 'Mixed Unreal Conditional',
    regex: /\b(had\s+[a-z\s]{2,20}\s+[a-z]+(ed|en|t)|if\s+[a-z\s]{2,20}\s+had\s+[a-z]+(ed|en|t))\b.*?\b(would|could|might)\s+(not\s+)?(be|remain|appear|exist|now|currently)\b/i
  },
  prepositionalRelative: {
    name: 'Complex Prepositional / Formal Relative',
    regex: /\b(by\s+virtue\s+of\s+which|in\s+light\s+of\s+which|the\s+[a-z]+\s+of\s+which|the\s+extent\s+to\s+which|against\s+which|upon\s+which|under\s+which|whereby)\b/i
  },
  correlativeComparative: {
    name: 'Correlative / Proportional Comparative',
    regex: /(^|[.!?]\s+)the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\s+[a-z\s,]{3,35},\s+the\s+(more|greater|higher|less|fewer|deeper|further|[a-z]+er)\b/i
  },
  invertedConcession: {
    name: 'Inverted Concession with Though / As',
    regex: /\b([a-z]+)\s+(though|as)\s+(it|they|this|he|she|one)\s+(may|might|is|are|was|were|seems?|appears?)(\s+be)?\s*,/i
  }
};

const tests = [
  ['negativeInversion', 'Seldom has humanity faced such an acute ethical conundrum.'],
  ['cleftSentence', 'What remains of paramount concern is the unchecked autonomy of algorithms.'],
  ['cleftSentence', 'It was the rapid proliferation of synthetic media that compromised civic trust.'],
  ['passiveReporting', 'It is widely contended that statutory oversight must be enacted.'],
  ['invertedConditional', 'Were governments to hesitate, irreparable damage would ensue.'],
  ['invertedConditional', 'Had regulators intervened earlier, this crisis could have been mitigated.'],
  ['complexConcession', 'Notwithstanding the economic utility, personal privacy is imperiled.'],
  ['participleClause', 'Having examined the empirical data, researchers concluded that bias was inherent.'],
  ['mandativeSubjunctive', 'It is imperative that the commission be impartial in its findings.'],
  ['absoluteClause', 'The conference having concluded, the delegates drafted their joint declaration.'],
  ['mixedConditional', 'Had authorities acted a decade ago, contemporary democracy would not now be vulnerable.'],
  ['prepositionalRelative', 'A dilemma the ramifications of which extend far beyond national borders.'],
  ['correlativeComparative', 'The more interconnected platforms become, the greater the potential systemic risk.'],
  ['invertedConcession', 'Arduous though it may be, structural reform cannot be postponed.']
];

let allPass = true;
tests.forEach(([key, sentence]) => {
  const passed = patterns[key].regex.test(sentence);
  if (!passed) allPass = false;
  console.log(`${passed ? '✓ PASS' : '✗ FAIL'} [${patterns[key].name}]: "${sentence}"`);
});

console.log('\nFinal Result:', allPass ? 'ALL 14 SAMPLES PASSED' : 'SOME FAILED');
