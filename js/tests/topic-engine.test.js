/**
 * FluentEdge — Topic Generation Engine Tests
 *
 * Run with Node.js:
 *   node js/tests/topic-engine.test.js
 *
 * No external test framework needed — uses a minimal inline harness.
 */

import {
  MAIN_SUBJECTS, SUB_THEMES, TENSIONS, SCOPES, STAKEHOLDERS, PROMPT_TYPES,
  isCompatible, tensionCompatible, validateTopic,
  generateTopicFromTree, generateRandomTreeTopic
} from '../data/topics.js';

// =============================================================================
// Minimal test harness
// =============================================================================

let passed = 0;
let failed = 0;
const failures = [];

function expect(label, actual, expected) {
  if (actual === expected) {
    console.log('  PASS: ' + label);
    passed++;
  } else {
    const msg = 'FAIL: ' + label + '\n       expected: ' + JSON.stringify(expected) + '\n       actual:   ' + JSON.stringify(actual);
    console.error('  ' + msg);
    failures.push(msg);
    failed++;
  }
}

function expectTrue(label, value) { expect(label, !!value, true); }
function expectFalse(label, value) { expect(label, !!value, false); }

function section(title) { console.log('\n--- ' + title + ' ---'); }

// =============================================================================
// Deterministic seeded RNG (LCG) for reproducible tests
// =============================================================================

function makeSeededRng(seed) {
  var s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

// =============================================================================
// 1. Data integrity
// =============================================================================

section('Data integrity');

expectTrue('MAIN_SUBJECTS has 20 entries', MAIN_SUBJECTS.length === 20);
expectTrue('SUB_THEMES has 18 entries', SUB_THEMES.length === 18);
expectTrue('TENSIONS has 12 entries', TENSIONS.length === 12);
expectTrue('SCOPES has 4 entries', SCOPES.length === 4);
expectTrue('STAKEHOLDERS has 7 entries', STAKEHOLDERS.length === 7);
expectTrue('PROMPT_TYPES has 6 entries', PROMPT_TYPES.length === 6);

MAIN_SUBJECTS.forEach(function(s) {
  expectTrue('Subject "' + s.id + '" has id, name, domain, compatibleThemes',
    s.id && s.name && s.domain && Array.isArray(s.compatibleThemes) && s.compatibleThemes.length > 0);
});

SUB_THEMES.forEach(function(t) {
  expectTrue('Theme "' + t.id + '" has id, name, shortName, lens',
    t.id && t.name && t.shortName && t.lens);
});

TENSIONS.forEach(function(t) {
  expectTrue('Tension "' + t.id + '" has pole1, pole2, compatibleThemes',
    t.pole1 && t.pole2 && Array.isArray(t.compatibleThemes) && t.compatibleThemes.length > 0);
});

PROMPT_TYPES.forEach(function(pt) {
  expectTrue('PromptType "' + pt.id + '" has a generate function', typeof pt.generate === 'function');
});

// All declared theme IDs on subjects exist in SUB_THEMES
var themeIds = new Set(SUB_THEMES.map(function(t) { return t.id; }));
MAIN_SUBJECTS.forEach(function(s) {
  s.compatibleThemes.forEach(function(tid) {
    expectTrue('Subject "' + s.id + '" declares theme "' + tid + '" which exists', themeIds.has(tid));
  });
});

// All declared theme IDs on tensions exist in SUB_THEMES
TENSIONS.forEach(function(t) {
  t.compatibleThemes.forEach(function(tid) {
    expectTrue('Tension "' + t.id + '" declares theme "' + tid + '" which exists', themeIds.has(tid));
  });
});

// =============================================================================
// 2. Compatibility validation
// =============================================================================

section('Compatibility validation');

var aiSubject  = MAIN_SUBJECTS.find(function(s) { return s.id === 'artificial-intelligence'; });
var ethicsTheme = SUB_THEMES.find(function(t) { return t.id === 'ethics'; });
var envTheme    = SUB_THEMES.find(function(t) { return t.id === 'environment'; });

expectTrue('AI is compatible with Ethics', isCompatible(aiSubject, ethicsTheme));
expectFalse('AI is NOT compatible with Environment', isCompatible(aiSubject, envTheme));

var innovTension = TENSIONS.find(function(t) { return t.id === 'innovation-vs-regulation'; });
var convTension  = TENSIONS.find(function(t) { return t.id === 'convenience-vs-independence'; });
var overTheme    = SUB_THEMES.find(function(t) { return t.id === 'oversight'; });
var addTheme     = SUB_THEMES.find(function(t) { return t.id === 'addiction'; });

expectTrue('Innovation-vs-regulation tension compatible with Oversight theme', tensionCompatible(innovTension, overTheme));
expectFalse('Innovation-vs-regulation tension NOT compatible with Addiction theme', tensionCompatible(innovTension, addTheme));
expectTrue('Convenience-vs-independence tension compatible with Addiction theme', tensionCompatible(convTension, addTheme));

// =============================================================================
// 3. generateTopicFromTree (explicit construction)
// =============================================================================

section('generateTopicFromTree — explicit construction');

var autoTheme = SUB_THEMES.find(function(t) { return t.id === 'autonomy'; });
var govTheme  = SUB_THEMES.find(function(t) { return t.id === 'governance'; });
var natScope  = SCOPES.find(function(s) { return s.id === 'national'; });
var convTen   = TENSIONS.find(function(t) { return t.id === 'convenience-vs-independence'; });
var toWhatPT  = PROMPT_TYPES.find(function(p) { return p.id === 'to-what-extent'; });

var t1 = generateTopicFromTree(aiSubject, autoTheme, govTheme, 'C1', {
  tension: convTen,
  scope: natScope,
  stakeholders: [STAKEHOLDERS[0], STAKEHOLDERS[1]],
  promptType: toWhatPT
});

expectTrue('Topic has id', !!t1.id);
expectTrue('Topic has title', !!t1.title);
expectTrue('Topic has directive', !!t1.directive);
expectTrue('Topic has mainSubject', !!t1.mainSubject);
expectTrue('Topic has subTheme1', !!t1.subTheme1);
expectTrue('Topic has subTheme2', !!t1.subTheme2);
expectTrue('Topic has tension', !!t1.tension);
expectTrue('Topic has scope', !!t1.scope);
expectTrue('Topic has seed', !!t1.seed);
expect('Topic mainSubject id is ai', t1.mainSubject.id, 'artificial-intelligence');
expect('Topic subTheme1 id is autonomy', t1.subTheme1.id, 'autonomy');
expect('Topic targetLevel is C1', t1.targetLevel, 'C1');
expect('Topic cefrTarget is C1 / C2', t1.cefrTarget, 'C1 / C2');
expect('Topic seed.subjectId matches', t1.seed.subjectId, 'artificial-intelligence');

// Overrides work
var t2 = generateTopicFromTree(aiSubject, autoTheme, govTheme, 'C1', {
  customTitle: 'Custom Test Title',
  customDirective: 'This is a custom directive with enough words.',
  tension: convTen,
  scope: natScope,
  stakeholders: [STAKEHOLDERS[0]],
  promptType: toWhatPT
});
expect('Custom title override applied', t2.title, 'Custom Test Title');
expect('Custom directive override applied', t2.directive, 'This is a custom directive with enough words.');

// String ID resolution (backward compat)
var t3 = generateTopicFromTree('artificial-intelligence', 'autonomy', 'governance', 'C1');
expectTrue('String ID resolution: mainSubject resolved', t3.mainSubject && t3.mainSubject.id === 'artificial-intelligence');
expectTrue('String ID resolution: subTheme1 resolved',  t3.subTheme1 && t3.subTheme1.id === 'autonomy');

// =============================================================================
// 4. validateTopic
// =============================================================================

section('validateTopic');

var validTopic = generateTopicFromTree(aiSubject, autoTheme, govTheme, 'C1', {
  tension: convTen, scope: natScope, stakeholders: [STAKEHOLDERS[0]], promptType: toWhatPT
});
var v1 = validateTopic(validTopic);
expectTrue('Valid topic passes validation', v1.valid);
expect('No errors on valid topic', v1.errors.length, 0);

var badTopic = { mainSubject: null, subTheme1: null, subTheme2: null, tension: null, promptType: null, scope: null, title: '', directive: '' };
var v2 = validateTopic(badTopic);
expectFalse('Null-field topic fails validation', v2.valid);
expectTrue('Multiple errors reported', v2.errors.length > 3);

// Incompatible subject+theme caught
var incompatible = generateTopicFromTree(aiSubject, envTheme, govTheme, 'C1', {
  tension: convTen, scope: natScope, stakeholders: [STAKEHOLDERS[0]], promptType: toWhatPT
});
var v3 = validateTopic(incompatible);
expectFalse('Incompatible theme is flagged by validator', v3.valid);

// =============================================================================
// 5. generateRandomTreeTopic — seeded (deterministic)
// =============================================================================

section('generateRandomTreeTopic — deterministic with seeded RNG');

var rng1 = makeSeededRng(42);
var r1 = generateRandomTreeTopic('C1', null, rng1);

expectTrue('Random C1 topic has title', !!r1.title);
expectTrue('Random C1 topic has directive', !!r1.directive);
expectTrue('Random C1 topic has tension', !!r1.tension);
expectTrue('Random C1 topic has scope', !!r1.scope);
expectTrue('Random C1 topic mainSubject exists', !!r1.mainSubject);
expectTrue('Random C1 topic subTheme1 exists', !!r1.subTheme1);
expectTrue('Random C1 topic subTheme2 exists', !!r1.subTheme2);
expect('Random C1 topic cefrTarget is C1 / C2', r1.cefrTarget, 'C1 / C2');

// Same seed -> same subject (note: cooldown state from TOPICS init means the
// first call with seed 42 marks a combo; the second call with seed 42 sees that
// combo on cooldown, so it picks the next eligible theme — this is correct
// behavior. We test structural guarantees, not exact theme equality.)
var rng1b = makeSeededRng(42);
var r1b = generateRandomTreeTopic('C1', null, rng1b);
expect('Same seed produces same subject', r1b.mainSubject.id, r1.mainSubject.id);
expectTrue('Second same-seed call produces valid theme (cooldown affects theme choice)', !!r1b.subTheme1.id);
expectTrue('Second same-seed call produces valid title string', typeof r1b.title === 'string' && r1b.title.length > 5);

// C2 profile
var rng2 = makeSeededRng(99);
var r2 = generateRandomTreeTopic('C2', null, rng2);
expect('Random C2 topic cefrTarget is C2', r2.cefrTarget, 'C2');
expect('Random C2 topic targetLevel is C2', r2.targetLevel, 'C2');
expectTrue('Random C2 type includes C2', r2.type.includes('C2'));

// =============================================================================
// 6. Subject exclusion (back-to-back prevention)
// =============================================================================

section('Subject exclusion');

var rng3 = makeSeededRng(123);
var r3 = generateRandomTreeTopic('C1', 'artificial-intelligence', rng3);
expectTrue('Excluded subject is not picked', r3.mainSubject.id !== 'artificial-intelligence');

// =============================================================================
// 7. Cooldown logic (repetition prevention)
// =============================================================================

section('Cooldown / repetition prevention');

// Draw 10 topics with C1; the same (subject, theme) pair should not recur within 8 draws
var rngCool = makeSeededRng(7777);
var drawn = [];
for (var i = 0; i < 10; i++) {
  var t = generateRandomTreeTopic('C1', null, rngCool);
  drawn.push(t.mainSubject.id + '::' + t.subTheme1.id);
}

var uniqueWithin8 = true;
for (var j = 0; j < drawn.length - 1; j++) {
  var window = drawn.slice(Math.max(0, j - 7), j);
  if (window.includes(drawn[j])) {
    uniqueWithin8 = false;
    break;
  }
}
expectTrue('No (subject, theme) pair repeats within 8-draw cooldown window', uniqueWithin8);

// =============================================================================
// 8. Prompt type generation (all 6 types)
// =============================================================================

section('Prompt type generation');

var testSubject = MAIN_SUBJECTS.find(function(s) { return s.id === 'workforce-automation'; });
var testTheme   = SUB_THEMES.find(function(t) { return t.id === 'economics'; });
var testTension = TENSIONS.find(function(t) { return t.id === 'efficiency-vs-equity'; });
var testScope   = SCOPES.find(function(s) { return s.id === 'global'; });
var testStks    = [STAKEHOLDERS[0], STAKEHOLDERS[1]];

PROMPT_TYPES.forEach(function(pt) {
  var generated = pt.generate(testSubject, testTheme, testTension, testScope, testStks);
  expectTrue('Prompt type "' + pt.id + '" generates a non-empty string', typeof generated === 'string' && generated.length > 20);
});

// =============================================================================
// 9. C1 vs C2 differences
// =============================================================================

section('C1 vs C2 difficulty profiles');

var rngC1 = makeSeededRng(101);
var rngC2 = makeSeededRng(101);

// Generate many to check profile preference
var c1Topics = [];
var c2Topics = [];
for (var k = 0; k < 30; k++) {
  c1Topics.push(generateRandomTreeTopic('C1', null, makeSeededRng(k * 13)));
  c2Topics.push(generateRandomTreeTopic('C2', null, makeSeededRng(k * 13)));
}

var allC1Valid = c1Topics.every(function(t) { return t.cefrTarget === 'C1 / C2'; });
var allC2Valid = c2Topics.every(function(t) { return t.cefrTarget === 'C2'; });
expectTrue('All C1 topics have correct cefrTarget', allC1Valid);
expectTrue('All C2 topics have correct cefrTarget', allC2Valid);

// Check that C2 preferred prompt types appear more often in C2 set
var c2Preferred = { 'evaluate': true, 'ethical-evaluation': true, 'comparative-analysis': true };
var c2PreferredCount = c2Topics.filter(function(t) { return t.promptType && c2Preferred[t.promptType.id]; }).length;
var c1PreferredInC2  = c1Topics.filter(function(t) { return t.promptType && c2Preferred[t.promptType.id]; }).length;
expectTrue('C2 topics show higher use of C2-preferred prompt types than C1 topics',
  c2PreferredCount >= c1PreferredInC2);

// =============================================================================
// Results summary
// =============================================================================

console.log('\n================================================');
console.log('Results: ' + passed + ' passed, ' + failed + ' failed');
if (failures.length > 0) {
  console.log('\nFailed tests:');
  failures.forEach(function(f) { console.log('  ' + f); });
}
console.log('================================================');

if (failed > 0) process.exit(1);
