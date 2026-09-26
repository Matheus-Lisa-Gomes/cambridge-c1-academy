# Build script to regenerate js/bundle.js from modular source files

$vocabContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/vocabulary.js", [System.Text.Encoding]::UTF8)
$topicsContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/topics.js", [System.Text.Encoding]::UTF8)
$evaluatorContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/modules/evaluator.js", [System.Text.Encoding]::UTF8)
$speechContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/modules/speech.js", [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/app.js", [System.Text.Encoding]::UTF8)

# 1. Vocabulary Lexicon
$vocabClean = $vocabContent -replace '(?m)^\s*export\s+const\s+', 'const '
$vocabClean = $vocabClean -replace '(?m)^\s*export\s+function\s+', 'function '

# 2. Topics
$topicsClean = $topicsContent -replace '(?m)^\s*export\s+const\s+', 'const '
$topicsClean = $topicsClean -replace '(?m)^\s*export\s+function\s+', 'function '

# 3. Evaluator
$evaluatorClean = $evaluatorContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''
$evaluatorClean = $evaluatorClean -replace '(?m)^\s*export\s+const\s+', 'const '
$evaluatorClean = $evaluatorClean -replace '(?m)^\s*export\s+function\s+', 'function '

# 4. Speech
$speechClean = $speechContent -replace '(?m)^\s*export\s+class\s+', 'class '

# 5. App
$appClean = $appContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''
$appClean = $appClean -replace '(?s)// Bootstrap Application on DOM ready.*$', ''

$bundle = @"
/**
 * FluentEdge: C1–C2 English Training - Standalone Unified Bundle
 * Works directly on file:// as well as localhost http://
 */

(function() {
  'use strict';

  // ==========================================
  // 1. VOCABULARY LEXICON (2,100+ C1/C2 WORDS)
  // ==========================================
$vocabClean

  // ==========================================
  // 2. TOPICS & CEFR DATA
  // ==========================================
$topicsClean

  // ==========================================
  // 3. C1/C2 EVALUATOR ENGINE
  // ==========================================
$evaluatorClean

  // ==========================================
  // 4. SPEECH & PRONUNCIATION ENGINE
  // ==========================================
$speechClean

  // ==========================================
  // 5. MAIN APP LOGIC
  // ==========================================
$appClean

  // Bootstrap Application on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new FluentEdgeApp();
  });
})();
"@

[System.IO.File]::WriteAllText("$PSScriptRoot/js/bundle.js", $bundle, [System.Text.Encoding]::UTF8)
Write-Host "bundle.js successfully built! Total size: $([System.IO.FileInfo]::new("$PSScriptRoot/js/bundle.js").Length) bytes." -ForegroundColor Green
