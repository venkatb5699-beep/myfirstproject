@echo off
cd /d "%~dp0"
echo Starting Luné Parade...
echo.
call npm.cmd run dev -- --host 127.0.0.1 --port 5173
echo.
echo Server stopped. Press any key to close.
pause >nul
