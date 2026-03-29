@echo off
echo.
echo ================================================
echo  Wiser Generations - Clean GitHub Push
echo ================================================
echo.

echo Step 1: Removing old git history...
rmdir /s /q .git

echo Step 2: Removing script files with secrets...
del /f /q setup-stripe.js 2>nul
del /f /q deploy-vercel.js 2>nul
del /f /q setup-stripe-clean.js 2>nul
del /f /q deploy-vercel-clean.js 2>nul

echo Step 3: Starting fresh git repo...
git init
git branch -M main
git remote add origin https://github.com/D4CGDBEMWS/wisergenerations-website.git

echo Step 4: Staging all files...
git add .

echo Step 5: Committing...
git commit -m "Initial deployment: wisergenerations.com"

echo.
echo ================================================
echo  Now you need to push to GitHub.
echo  Run this command:
echo.
echo  git push -u origin main --force
echo.
echo  Username: D4CGDBEMWS
echo  Password: your ghp_ token from github.com/settings/tokens
echo ================================================
echo.
pause
