import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += char;
    }
  }
  result.push(cur.trim());
  return result;
}

const csvPath = path.join(rootDir, 'data', 'vocabulary.csv');
const raw = fs.readFileSync(csvPath, 'utf8');
const lines = raw.split(/\r?\n/).filter(line => line.trim().length > 0);

const entries = [];
for (let i = 1; i < lines.length; i++) {
  const parts = parseCSVLine(lines[i]);
  if (!parts[0]) continue;
  let headword = parts[0].trim();
  let pos = (parts[1] || '').trim();
  if (pos === 'vern') pos = 'verb';
  let cefr = (parts[2] || '').trim().toUpperCase();

  entries.push({
    headword,
    pos,
    cefr
  });
}

const helperFunctions = `
/**
 * Automatically generate common English inflections and stems for headwords
 */
export function generateWordStems(rawHeadword, pos = '') {
  if (!rawHeadword) return [];
  const stems = new Set();
  const baseWords = rawHeadword.split('/').map(w => w.trim().toLowerCase()).filter(Boolean);

  for (const base of baseWords) {
    stems.add(base);

    // If multi-word or phrasal (e.g., "mull over", "dole out", "glory in")
    const parts = base.split(/\\s+/);
    if (parts.length > 1) {
      const [vHead, ...rest] = parts;
      const vStems = getBasicVerbStems(vHead);
      for (const vs of vStems) {
        stems.add(\`\${vs} \${rest.join(' ')}\`);
        stems.add(vs);
      }
      continue;
    }

    const p = (pos || '').toLowerCase();
    if (p.includes('verb')) {
      getBasicVerbStems(base).forEach(s => stems.add(s));
    } else if (p.includes('noun')) {
      getBasicNounStems(base).forEach(s => stems.add(s));
    } else if (p.includes('adjective')) {
      getBasicAdjStems(base).forEach(s => stems.add(s));
    } else if (p.includes('adverb')) {
      stems.add(base);
    }
  }

  return Array.from(stems);
}

function getBasicVerbStems(verb) {
  const s = new Set([verb]);
  if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
    s.add(verb.slice(0, -1) + 'ies');
  } else if (/(s|sh|ch|x|z)$/.test(verb)) {
    s.add(verb + 'es');
  } else {
    s.add(verb + 's');
  }

  if (verb.endsWith('e')) {
    s.add(verb + 'd');
  } else if (verb.endsWith('y') && !/[aeiou]y$/.test(verb)) {
    s.add(verb.slice(0, -1) + 'ied');
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmnprstvz]$/.test(verb) && verb.length <= 5) {
    const last = verb.slice(-1);
    s.add(verb + last + 'ed');
  } else {
    s.add(verb + 'ed');
  }

  if (verb.endsWith('ie')) {
    s.add(verb.slice(0, -2) + 'ying');
  } else if (verb.endsWith('ee')) {
    s.add(verb + 'ing');
  } else if (verb.endsWith('e')) {
    s.add(verb.slice(0, -1) + 'ing');
  } else if (/[bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmnprstvz]$/.test(verb) && verb.length <= 5) {
    const last = verb.slice(-1);
    s.add(verb + last + 'ing');
  } else {
    s.add(verb + 'ing');
  }

  return Array.from(s);
}

function getBasicNounStems(noun) {
  const s = new Set([noun]);
  if (noun.endsWith('y') && !/[aeiou]y$/.test(noun)) {
    s.add(noun.slice(0, -1) + 'ies');
  } else if (/(s|sh|ch|x|z)$/.test(noun)) {
    s.add(noun + 'es');
  } else {
    s.add(noun + 's');
  }
  return Array.from(s);
}

function getBasicAdjStems(adj) {
  const s = new Set([adj]);
  if (adj.endsWith('y')) {
    s.add(adj.slice(0, -1) + 'ier');
    s.add(adj.slice(0, -1) + 'iest');
    s.add(adj.slice(0, -1) + 'ily');
  } else if (adj.endsWith('e')) {
    s.add(adj + 'r');
    s.add(adj + 'st');
    s.add(adj + 'ly');
  } else {
    s.add(adj + 'er');
    s.add(adj + 'est');
    s.add(adj + 'ly');
  }
  return Array.from(s);
}

function sampleUnique(arr, count) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

/**
 * Select exactly 9 words confined by:
 * - 3 Verbs
 * - 2 Nouns
 * - 2 Adjectives
 * - 2 Adverbs
 * Independent of topics.js.
 */
export function getRandomVocabularySet(level = 'C1') {
  const isC2 = (level || '').toUpperCase() === 'C2';
  const pool = (isC2 ? VOCABULARY_BY_LEVEL.C2 : VOCABULARY_BY_LEVEL.C1) || VOCABULARY_LEXICON;

  const verbs = pool.filter(w => (w.pos || '').toLowerCase() === 'verb');
  const nouns = pool.filter(w => (w.pos || '').toLowerCase() === 'noun');
  const adjs = pool.filter(w => (w.pos || '').toLowerCase() === 'adjective');
  const advs = pool.filter(w => (w.pos || '').toLowerCase() === 'adverb');

  const allVerbs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'verb');
  const allNouns = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'noun');
  const allAdjs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'adjective');
  const allAdvs = VOCABULARY_LEXICON.filter(w => (w.pos || '').toLowerCase() === 'adverb');

  const selectedVerbs = sampleUnique(verbs.length >= 3 ? verbs : allVerbs, 3);
  const selectedNouns = sampleUnique(nouns.length >= 2 ? nouns : allNouns, 2);
  const selectedAdjs = sampleUnique(adjs.length >= 2 ? adjs : allAdjs, 2);
  const selectedAdvs = sampleUnique(advs.length >= 2 ? advs : allAdvs, 2);

  const selected9 = [
    ...selectedVerbs,
    ...selectedNouns,
    ...selectedAdjs,
    ...selectedAdvs
  ];

  return selected9.map(item => ({
    ...item,
    word: item.headword,
    stems: generateWordStems(item.headword, item.pos)
  }));
}
`;

const outContent = `/**
 * FluentEdge C1/C2 Vocabulary Lexicon
 * Auto-generated from data/vocabulary.csv
 * Total entries: ${entries.length}
 */

export const VOCABULARY_LEXICON = ${JSON.stringify(entries, null, 2)};

export const VOCABULARY_BY_LEVEL = {
  C1: VOCABULARY_LEXICON.filter(v => v.cefr === 'C1'),
  C2: VOCABULARY_LEXICON.filter(v => v.cefr === 'C2')
};
${helperFunctions}
`;

const jsPath = path.join(rootDir, 'js', 'data', 'vocabulary.js');
fs.writeFileSync(jsPath, outContent, 'utf8');
console.log(`Successfully generated ${jsPath} with ${entries.length} vocabulary items and random selection helpers!`);
