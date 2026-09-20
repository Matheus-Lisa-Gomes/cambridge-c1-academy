# FluentEdge: C1–C2 English Training

> Personal English training web application engineered for advanced academic **C1 Advanced** and **C2 Proficiency** mastery.

[![Live Web App](https://img.shields.io/badge/Live%20Demo-Web%20App-2ea44f?style=for-the-badge&logo=github)](https://matheus-lisa.github.io/fluentedge-c1-c2-english-training/)

🌐 **Live Web Application**: [https://matheus-lisa.github.io/fluentedge-c1-c2-english-training/](https://matheus-lisa.github.io/fluentedge-c1-c2-english-training/)

---

## Features

### 1. C1/C2 Curriculum & Compulsory Lexis
- **Bidirectional Topic Navigation**: Seamlessly navigate through essay prompts with dedicated **Previous Topic** and **Next Topic** controls.
- Academic essay tasks covering contemporary intellectual domains:
  - *Artificial Intelligence Autonomy & Moral Agency*
  - *Sustainable Megacities & High-Density Urban Architecture*
  - *Global Lingua Franca vs The Preservation of Indigenous Languages*
  - *The Commodification of Academia & The Future of Tertiary Education*
  - *Algorithmic Echo Chambers, Disinformation & Modern Democracy*
  - *The Circular Economy vs Planned Obsolescence & Consumer Culture*
  - *Genetic Enhancement, Human Evolution & Social Equality*
  - *The Four-Day Workweek, Productivity & the Future of Employment*
  - *Digital Privacy, Mass Surveillance & Personal Autonomy*
  - *Failure, Resilience & the Pursuit of Success*
- Each topic generates 8 compulsory C1/C2 domain-specific vocabulary items complete with:
  - International Phonetic Alphabet (IPA) transcriptions
  - Part of speech & definitions
  - Native academic collocations
  - Interactive audio button to hear native British English pronunciation (RP)
  - Automatic stem & inflection detection (*mitigate*, *mitigating*, *mitigation*)

### 2. Writing Studio & Real-time C1/C2 Syntax Radar
- **220–260 Word Meter**: Real-time feedback adhering to formal academic essay word counts.
- **Dynamic Vocabulary Tracker**: Automatically detects required vocabulary as you write, turning chips into green "✓ USED" badges.
- **Syntax Radar**: Live detector for advanced grammatical structures:
  - Negative & Limiting Inversions (*Seldom has...*, *Under no circumstances...*)
  - Cleft & Focus Sentences (*What is of paramount importance is...*, *It was... that...*)
  - Passive Reporting Clauses (*It is widely contended that...*)
  - Inverted Conditionals (*Were authorities to...*, *Had we recognized...*)
  - Complex Concession Markers (*Notwithstanding*, *Albeit*, *Inasmuch as*)

### 3. 4-Scale Assessment Engine (The C1 Gatekeeper)
- Evaluates submissions across 4 comprehensive CEFR Assessment scales (each scored 0–5, total /20):
  - **Content**: Word count compliance, thorough development of both prompt points.
  - **Communicative Achievement**: Academic formal register, objective stance, absence of colloquialisms or contractions.
  - **Organisation**: Cohesive markers, logical flow, paragraph architecture.
  - **Language**: Lexical sophistication, coverage of compulsory vocabulary, advanced syntactic complexity.
- **The Gatekeeper**: Achieving **C1 (Band 4)** or **C2 (Band 5)** unlocks the Speaking & Pronunciation phase. Below-threshold submissions receive detailed diagnostic recommendations.

### 4. Speaking & Pronunciation Studio
- **Teleprompter**: Formats your written essay for aloud reading with word-by-word tracking.
- **Native Model Audio (RP)**: SpeechSynthesis engine plays the entire essay or selected words in British English.
- **Live Microphone Speech Recognition**: Real-time phonetic and word-by-word alignment using the Web Speech API:
  - 🟢 **Green**: Accurately pronounced words.
  - 🟡 **Amber**: Minor phonetic deviations.
  - 🔴 **Red**: Omitted or mispronounced words.
- **Audio Waveform Visualizer**: Live HTML5 Canvas visualizer rendering mic frequency dynamics.
- **Speaking Report**: Detailed metrics for Pronunciation Accuracy (%), Cadence (WPM against 130–160 target), and CEFR Speaking Band.

---

## Quick Start

### Option 1: Live Web App
Launch the platform directly in any web browser without installation:
👉 **[FluentEdge Web App](https://matheus-lisa.github.io/fluentedge-c1-c2-english-training/)**

### Option 2: Double-Click Launcher (Windows Local)
Double-click `Start_FluentEdge.bat` to launch the local server and open the web app in your default browser.

### Option 3: Direct File Open
Double-click `index.html` to run the app directly in Chrome, Edge, or Safari. The self-contained universal bundle runs without needing build steps or node modules.

### Option 4: Local Server
Run via PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```
Navigate to `http://localhost:8080/`.

---

## Technology Stack

- **Frontend**: Vanilla HTML5, modern CSS3 (Prestige dark glassmorphism design system), Vanilla JavaScript (ES6+).
- **APIs**: Web Speech API (`SpeechRecognition`, `speechSynthesis`) and Web Audio API (`AudioContext`, `AnalyserNode`).
- **Zero Build Tools Required**: Pure browser-native runtime.

---

## License

MIT License. Developed for C1 Advanced & C2 Proficiency English learners.
