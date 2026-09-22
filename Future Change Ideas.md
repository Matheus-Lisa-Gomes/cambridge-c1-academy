# Future Change Ideas

A working backlog and brainstorm document for upcoming enhancements, architectural refinements, and feature ideas for **FluentEdge: C1–C2 English Training**.

---

## 1. Topic & Curriculum Enhancements
- [ ] **Expand Topics**: Add more C1/C2 writing prompts to the `topics.js` file.
- [x] **C2 Proficiency Dedicated Mode**: Introduce C2 essay prompts with stricter word count limits (280–320 words) and higher syntactic thresholds. *(Completed: added dedicated C2 prompts in `topics.js`, 280–320 word count targets with live guidance, and stricter C2 evaluation thresholds)*
- [x] **Topic Progress Indicators**: Visual badge or checkmark on the topic card indicating whether an essay has already been written and evaluated for that specific prompt. *(Completed: dynamic card status badge [Passed, Revision, Draft, Not Attempted], interactive 12-prompt curriculum navigator strip with completion summary, localStorage persistence, and history sync)*
- [ ] **Required Save States**: If any text is written inside the editor-wrapper, any other action that would change the page or close the application should be blocked until the user clicks chooses either "Save" button or "Cancel" button. If the user clicks the "Save" button the text should be saved in the local storage and remove the warning. If the user clicks the "Cancel" button the text should be deleted and the warning should be removed.
- [ ] **Test Mode with Countdown**: Create a test mode for the user to practice writing essays under timed conditions. Timer must be placed close to the writing box. 

---

## 2. Writing Studio & Syntax Radar
- [ ] **Compared Essays through time**: When the same topic has two or more essays, the candidate can compare them and see the improvements they have made. 
- [ ] **Auto-Save Drafts**: Automatically persist current essay drafts in `localStorage` keyed by topic ID so progress is not lost upon navigation or refresh.
- [ ] **Export Options**: Export evaluated essays with examiner feedback to PDF, Markdown, or clean TXT.
- [ ] **Expanded Syntax Patterns**: Add detection for additional C1/C2 structures:
  - Absolute clauses (*The conference concluded, delegates departed...*)
  - Nominalization density scoring
  - Subjunctive constructions (*It is critical that authorities be...*)
- [ ] **Grammar & Spelling Linter**: Optional offline/client-side spellchecker or formal register highlighter.
- [ ] **Block Auto Correction and Copied Texts from all outside sources**: Create mechanism to block any auto correction, and copied text that might be produced from any outside source.

---

## 3. Speaking Studio & Audio Engine
- [ ] **Kokoro TTS**: Use Kokoro TTS for generating the audio of the model response. It is more natural and human-like. Source = https://github.com/xenova/kokoro-web
- [ ] **RP Model Audio Speed Adjustment**: Playback rate selector ($0.8\times$, $1.0\times$, $1.2\times$) for the native British English model reading.
- [ ] **Audio Recording Playback**: Allow candidates to listen back to their recorded audio alongside the phonetic transcription to pinpoint pronunciation nuances.
- [ ] **Microphone Input Level Meter**: Add visual gain/clipping indicators to help candidates adjust mic distance before speaking.
- [ ] **Individual Word Practice**: Interactive repeat-after-me drill for words flagged with phonetic deviations or mispronunciations.

---

## 4. UI / UX & Dashboard

- [x] **Change the "Target Standard"**: Change into a toggle button when the C2 dedicated mode is implemented. **It can automatically switch between C1 and C2 depending on the user's selection.** *(Completed: interactive segmented switch in header with localStorage persistence)*

- [ ] **Performance Analytics Dashboard**: Aggregate score history across the 4 assessment scales (Content, Communicative Achievement, Organisation, Language) over time with charts.
- [x] **Theme Preferences**: Define 2 set of colors palettes one for C1 and C2. *(Completed: Royal Gold theme for C1, Imperial Amethyst & Platinum theme for C2)*
- [x] **Keyboard Shortcuts**: Add some future hotkeys when the toggle change between c1 and c2 is implemented. *(Completed: Alt+M to switch between C1 and C2 modes)*
- [ ] **Improve UI/UX testing new Color Combinations, Themes, and Layouts**: After implementation of the C1/C2 toggle switch, try some new UI/UX testing new Color Combinations, Themes, and Layouts for both C1 and C2 and compare them.
---
