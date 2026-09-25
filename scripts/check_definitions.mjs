import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const csvPath = path.join(rootDir, 'data', 'vocabulary.csv');
const defsDir = path.join(rootDir, 'data', 'definitions');

const rawCsv = fs.readFileSync(csvPath, 'utf8');
const lines = rawCsv.split(/\r?\n/).filter(l => l.trim().length > 0).slice(1);

// Load all def files in data/definitions/
const defFiles = fs.existsSync(defsDir) ? fs.readdirSync(defsDir).filter(f => f.endsWith('.json')) : [];
const definitions = {};

for (const file of defFiles) {
  try {
    const content = JSON.parse(fs.readFileSync(path.join(defsDir, file), 'utf8'));
    Object.assign(definitions, content);
  } catch (err) {
    console.error(`Error loading ${file}:`, err.message);
  }
}

let totalRows = lines.length;
let definedRows = 0;
const missing = [];

for (const line of lines) {
  const parts = line.split(',').map(s => s.trim().replace(/^"|"$/g, ''));
  const word = parts[0].toLowerCase();
  const pos = (parts[1] || '').toLowerCase();
  const note = (parts[3] || '');

  const keyExact = `${word}_${pos}`;
  const keyBase = word.split('/')[0].trim();
  const keyBaseExact = `${keyBase}_${pos}`;

  const def = definitions[keyExact] || definitions[keyBaseExact] || definitions[word] || definitions[keyBase] || note;
  if (def && def.length > 0) {
    definedRows++;
  } else {
    missing.push({ word, pos });
  }
}

console.log(`Definitions loaded: ${Object.keys(definitions).length}`);
console.log(`CSV Rows: ${totalRows}`);
console.log(`Defined Rows: ${definedRows} (${Math.round((definedRows / totalRows) * 100)}%)`);
console.log(`Missing Rows: ${missing.length}`);
if (missing.length > 0) {
  console.log('Sample missing (first 10):', missing.slice(0, 10));
}
