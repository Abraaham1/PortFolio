# Run after: gh auth login
$ErrorActionPreference = "Stop"
$gh = "C:\Program Files\GitHub CLI\gh.exe"

& $gh auth status
git branch -M main

# Create repo on GitHub and push (skip if origin already exists)
$remote = git remote get-url origin 2>$null
if (-not $remote) {
  & $gh repo create portfolio --public --source=. --remote=origin --push
} else {
  git push -u origin main
}

Write-Host ""
Write-Host "GitHub repo ready. Deploying to Vercel..."
Write-Host "Run: npx vercel --prod"
Write-Host "Or import https://github.com/Abraaham1/portfolio at https://vercel.com/new"
npx vercel --prod
