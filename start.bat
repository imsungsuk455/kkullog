@echo off
cd /d "%~dp0"
echo 의존성 확인 중...
if not exist node_modules (
    echo node_modules 없음. npm install 실행 중...
    npm install
)
echo 블로그2 시작 중...
npm run dev
pause
