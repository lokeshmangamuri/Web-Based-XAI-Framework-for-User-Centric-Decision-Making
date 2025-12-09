@echo off
setlocal

rem========change the root path
set "ROOT=C:\Users\lokes\OneDrive\Desktop\Subjects &assi\Thewebapp\projectcode"

pushd "%ROOT%" || (
    echo [ERROR] Could not find the folder: %ROOT%
    pause
    exit /b 1
)

start "" cmd /k "node server.js"

timeout /t 3 >nul

start http://localhost:3000/loginpage.html

rem 
popd
exit /b
