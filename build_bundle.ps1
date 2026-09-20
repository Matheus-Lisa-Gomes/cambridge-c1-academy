# Build script to regenerate js/bundle.js from modular source files

$topicsContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/data/topics.js", [System.Text.Encoding]::UTF8)
$evaluatorContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/modules/evaluator.js", [System.Text.Encoding]::UTF8)
$speechContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/modules/speech.js", [System.Text.Encoding]::UTF8)
$appContent = [System.IO.File]::ReadAllText("$PSScriptRoot/js/app.js", [System.Text.Encoding]::UTF8)

# 1. Topics
$topicsClean = $topicsContent -replace '(?m)^\s*export\s+const\s+', 'const '

# 2. Evaluator
$evaluatorClean = $evaluatorContent -replace '(?m)^\s*import\s+[^;]+;\s*\r?\n', ''
$evaluatorClean = $evaluatorClean -replace '(?m)^\s*export\s+function\s+', 'function '

# 3. Speech
$speechClean = $speechContent -replace '(?m)^\s*export\s+class\s+', 'class '

# 4. App
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
  // 1. TOPICS & CEFR DATA
  // ==========================================
$topicsClean

  // ==========================================
  // 2. C1/C2 EVALUATOR ENGINE
  // ==========================================
$evaluatorClean

  // ==========================================
  // 3. SPEECH & PRONUNCIATION ENGINE
  // ==========================================
$speechClean

  // ==========================================
  // 4. MAIN APP LOGIC
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
