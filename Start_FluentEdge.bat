@echo off
title FluentEdge: C1–C2 English Training Launcher
echo =======================================================
echo    Starting FluentEdge: C1–C2 English Training
echo =======================================================
echo.
start http://localhost:8080
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
