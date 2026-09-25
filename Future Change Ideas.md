# Future Change Ideas

A working backlog and brainstorm document for upcoming enhancements, architectural refinements, and feature ideas for **FluentEdge: C1–C2 English Training**.

---

## Perpetual Enhancements 

- **Perpetual Enhancements - Expand Topics**: Add more C1/C2 writing prompts themes to the `topics.js` file. Provide more variety in the types of essays. Ensure that the prompts are not too repetitive. Try to cover a range of domains and subject areas.
- **Perpetual Enhancements - Improve Essay Analysis**: Focus on the creation of new systems to analyze text and voice over to guarantee the best possible results. The analysis should not only be limited to grammar and lexis, but also cover aspects such as coherence, cohesion, tone, register, and style. 

## 1. Topic & Curriculum Enhancements

- [x] **C2 Proficiency Dedicated Mode**: Introduce C2 essay prompts with stricter word count limits (280–320 words) and higher syntactic thresholds. *(Completed: added dedicated C2 prompts in `topics.js`, 280–320 word count targets with live guidance, and stricter C2 evaluation thresholds)*
- [ ] **Required Save States**: If any text is written inside the editor-wrapper, any other action that would change the page or close the application should be blocked until the user clicks chooses either "Save" button or "Cancel" button. If the user clicks the "Save" button the text should be saved in the local storage and remove the warning. If the user clicks the "Cancel" button the text should be deleted and the warning should be removed.
- [ ] **Test Mode with Countdown**: Create a test mode for the user to practice writing essays under timed conditions. Timer must be placed close to the writing box. 
- [x] **AI Generated Essay Prompt Button**: Create a button that give a AI prompt copy so that the user generate the text with all the compulsory target lexis words in any LLM of his choice, in order to go straight to the reading part if they don't want to write the essay. *(Completed: added 1-click 'AI Prompt' button (Alt+P), preview modal with 10 compulsory lexis mini-chips & syntax radar rules, clipboard copy feedback, and shortcut inside the Requirement Alert modal)*

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

## 5. Accessibility Features

- [ ] **Screen Reader Support & ARIA Live Regions**:
  - Add `aria-live="polite"` announcements for dynamic metric updates (word count thresholds, detected complex syntax structures, and lexis fulfillment counter).
  - Add accessible names and descriptions for all icon-only buttons, modal dialogues, and audio visualizer controls.
  - Implement proper ARIA landmark roles (`role="main"`, `role="region"`, `role="alertdialog"`) across writing, speaking, and history drawer panels.
- [ ] **Keyboard Navigation & Modal Focus Trapping**:
  - Implement full keyboard accessibility with visible high-contrast focus rings (`:focus-visible`) across all interactive cards, chips, and buttons.
  - Add strict focus trapping inside modals (`#evalModalBackdrop`, `#reqAlertBackdrop`) and the training history drawer so Tab navigation does not bleed into the background document.
  - Add a "Skip to Writing Editor" bypass link at the top of the page for keyboard-first and screen-reader users.
- [ ] **Keyboard Shortcuts Help Modal**:
  - Add an accessible hotkeys reference modal triggered by pressing <kbd>?</kbd> or clicking a header shortcut indicator, clearly detailing all keyboard shortcuts (<kbd>Ctrl+Enter</kbd>, <kbd>Alt+M</kbd>, <kbd>Alt+←</kbd>, <kbd>Alt+→</kbd>, <kbd>Esc</kbd>).
  - Allow remapping or disabling hotkeys to avoid collisions with assistive software or custom browser bindings.
- [ ] **Typography & Visual Accommodations**:
  - Add an optional toggle for Dyslexia-friendly fonts (e.g. OpenDyslexic or Atkinson Hyperlegible) in the essay editor, prompt card, and speaking teleprompter.
  - Add font size scaling controls (A- / A+) for the editor textarea and teleprompter text.
  - High-contrast color mode option compliant with WCAG 2.1 AAA contrast ratios.
- [ ] **Reduced Motion Support**:
  - Implement full `@media (prefers-reduced-motion: reduce)` rules across all CSS animations (chip pulsing, modal scaling transitions, radar badge animations, and teleprompter scrolling).
- [ ] **Audio & Speaking Studio Accommodations**:
  - Provide visual captions and word-by-word highlighted text alternatives alongside model audio playback.
  - Add configurable microphone sensitivity thresholds and manual pacing controls for speech practice.
  - [ ] **Screen Reader Support & ARIA Live Regions**:
  - Add `aria-live="polite"` announcements for dynamic updates such as word count, save status, spell-check results, and writing-assistance suggestions.
  - Add accessible names and descriptions for all icon-only buttons, dialogs, toolbars, text-editing controls, audio controls, and status messages.
  - Use semantic HTML and appropriate ARIA roles for headings, paragraphs, lists, links, buttons, form controls, dialogs, and document structure.
  - Ensure screen readers can identify the current cursor position, text selection, formatting state, and active editing mode.
- [ ] **Keyboard Navigation & Focus Management**:
  - Ensure all core reading and writing functions are fully operable using the keyboard without requiring a mouse or touchscreen.
  - Provide a visible focus indicator for every interactive element.
  - Maintain a logical and predictable focus order throughout the application.
  - Prevent unintended keyboard traps within dialogs, menus, toolbars, and editing areas.
  - Return focus to a logical element when dialogs, popovers, or panels are closed.
  - Provide keyboard shortcuts for frequently used actions such as save, undo, redo, search, read aloud, and dictation.
- [ ] **Text-to-Speech & Read-Aloud**:
  - Provide an accessible `Read Aloud` control that can read the entire document, selected text, or content from the current cursor position.
  - Add accessible controls for play, pause, resume, stop, and speech-speed adjustment.
  - Provide a visible indication of the sentence or word currently being read.
  - Ensure text-to-speech controls are fully operable using both keyboard navigation and assistive technologies.
  - Preserve the user's reading position when pausing or resuming playback.
- [ ] **Speech-to-Text & Dictation**:
  - Provide an accessible `Dictate` control that clearly indicates when microphone input is active.
  - Provide non-audio feedback when dictation starts, stops, fails, or loses microphone access.
  - Insert transcribed text at the current cursor position without replacing unrelated content.
  - Allow users to edit, undo, and correct dictated text using standard editing functionality.
  - Provide clear instructions when microphone permissions are denied or unavailable.
- [ ] **Text Size, Zoom & Magnification**:
  - Allow users to increase and decrease text size without loss of content or functionality.
  - Support application and system/browser zoom without causing text overlap, clipping, or inaccessible controls.
  - Provide adjustable zoom controls with accessible labels and a clear indication of the current zoom level.
  - Ensure enlarged text remains readable without requiring unnecessary horizontal scrolling.
- [ ] **Typography & Reading Customization**:
  - Provide controls for font family, font size, line height, letter spacing, word spacing, paragraph spacing, and content width.
  - Allow users to customize the visual presentation of text without changing the document's semantic structure.
  - Provide a clear method to restore default typography settings.
  - Ensure typography changes do not cause text clipping, overlapping controls, or loss of document content.
- [ ] **Color Contrast & Visual Accessibility**:
  - Ensure text and essential interface elements meet applicable WCAG contrast requirements.
  - Provide accessible light, dark, and high-contrast presentation options where appropriate.
  - Do not communicate errors, status, selection, or other information through color alone.
  - Provide visible and distinguishable states for focused, selected, active, disabled, and error controls.
  - Ensure links and interactive elements remain distinguishable without relying exclusively on color.
- [ ] **Dyslexia-Friendly Reading Options**:
  - Provide adjustable font, text size, line height, letter spacing, word spacing, and paragraph spacing.
  - Provide controls for adjusting content width and visual density.
  - Provide optional text-to-speech and reading-focus features.
  - Avoid requiring users to use a single predefined "dyslexia font"; allow users to choose the presentation that works for them.
  - Ensure all reading customizations can be changed independently and reset to defaults.
- [ ] **Cognitive Accessibility & Distraction Reduction**:
  - Maintain consistent navigation, terminology, layout, and interaction patterns throughout the application.
  - Provide a distraction-free or focus-reading mode that hides nonessential interface elements.
  - Provide autosave and clear save-state feedback.
  - Provide undo and redo for normal editing operations.
  - Avoid unnecessary animation and provide a way to reduce or disable nonessential motion.
  - Use clear, concise instructions and avoid ambiguous labels.
- [ ] **Document Structure & Semantic Formatting**:
  - Support semantic heading levels such as Heading 1, Heading 2, and Heading 3.
  - Provide semantic paragraph, ordered-list, unordered-list, block-quote, link, and table structures.
  - Ensure visual formatting does not replace semantic document structure.
  - Ensure assistive technologies can navigate the document by headings and other structural elements.
  - Preserve semantic structure when exporting to accessible document formats.
- [ ] **Writing Assistance & Suggestions**:
  - Provide accessible spell-checking, grammar checking, autocomplete, dictionary, and word-suggestion functionality where applicable.
  - Clearly distinguish suggested changes from user-authored text.
  - Make suggestions accessible through keyboard navigation and screen readers.
  - Provide accessible controls for accepting, rejecting, or dismissing suggestions.
  - Allow users to disable individual writing-assistance features.
- [ ] **Error Handling & Recovery**:
  - Provide clear, human-readable error messages that explain what happened and how the user can recover.
  - Associate validation errors with the relevant control or document location.
  - Announce important errors to assistive technologies.
  - Do not communicate errors exclusively through color, icons, or sound.
  - Ensure ordinary errors do not cause users to lose their document or unsaved work.
- [ ] **Focus & Cursor Visibility**:
  - Provide a clearly visible keyboard focus indicator with sufficient contrast.
  - Maintain a visible text cursor in the writing area.
  - Avoid unexpectedly moving the user's cursor or keyboard focus during normal editing.
  - Preserve cursor and selection position when opening and closing non-destructive accessibility tools.
  - Ensure focus remains visible when navigating large documents or toolbars.
- [ ] **Notifications & Status Messages**:
  - Announce important dynamic status changes such as `Document saved`, `Saving`, `Save failed`, `Dictation started`, and `Export complete`.
  - Use appropriate ARIA live-region behavior for non-interruptive status updates.
  - Do not automatically move keyboard focus to noncritical notifications.
  - Ensure important notifications are available to users who cannot perceive visual or auditory alerts.
- [ ] **Touch & Pointer Accessibility**:
  - Provide sufficiently large and appropriately spaced interactive targets.
  - Ensure essential functions do not depend on precise pointer movements.
  - Provide keyboard or button alternatives for drag-and-drop interactions.
  - Avoid requiring complex gestures for essential reading or writing functions.
  - Ensure touch interactions do not interfere with text selection, cursor placement, or assistive technology controls.
- [ ] **Audio & Multimedia Accessibility**:
  - Provide captions for spoken video content.
  - Provide transcripts for important audio content.
  - Provide accessible play, pause, stop, volume, and playback-speed controls.
  - Do not communicate important information exclusively through sound.
  - Ensure automatically playing audio can be paused or stopped.
- [ ] **Language & Translation Accessibility**:
  - Identify the language of document content programmatically where supported.
  - Provide accessible language-selection controls when multiple interface languages are supported.
  - Ensure text-to-speech uses the appropriate language for the selected content.
  - Ensure translated interface text does not cause clipping, overlapping, or inaccessible controls.
- [ ] **Save, Autosave & Data Recovery**:
  - Provide visible and accessible feedback indicating whether the current document is saved, saving, or has encountered a save error.
  - Automatically save work where appropriate.
  - Provide document recovery after unexpected application closure where technically feasible.
  - Provide undo and redo functionality for normal editing operations.
  - Warn users before destructive actions that cannot be undone.
- [ ] **Accessible Dialogs, Menus & Toolbars**:
  - Give every dialog an accessible name and, where necessary, an accessible description.
  - Ensure keyboard focus moves into dialogs when they open and returns to a logical control when they close.
  - Ensure menus and toolbars have meaningful accessible names.
  - Ensure every toolbar control has a discernible name, state, and purpose.
  - Ensure dialogs and menus can be closed using standard keyboard interactions.
- [ ] **Accessibility Settings & Preferences**:
  - Provide a centralized accessibility settings area for reading, visual, audio, interaction, and cognitive preferences.
  - Use descriptive labels and accessible controls for every setting.
  - Clearly indicate whether an accessibility feature is enabled or disabled.
  - Persist user accessibility preferences where appropriate.
  - Provide a `Restore Defaults` option without deleting document content or other unrelated user data.
- [ ] **Accessibility Testing & Compliance**:
  - Test the application using keyboard-only navigation.
  - Test core reading and writing workflows with a screen reader.
  - Test text resizing and zoom at the application's supported maximum levels.
  - Test high-contrast and reduced-motion system settings.
  - Test text-to-speech and speech-to-text workflows independently.
  - Test accessibility using representative assistive technologies supported by the application's target platforms.
  - Validate the application against **WCAG 2.2 Level AA** requirements applicable to the product.
  - Include accessibility acceptance criteria in QA test cases and regression testing.
