@echo off
title Cambridge C1+ Academy Launcher
echo =======================================================
echo    Starting Cambridge C1+ Writing & Speaking Academy
echo =======================================================
echo.
start http://localhost:8080
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
