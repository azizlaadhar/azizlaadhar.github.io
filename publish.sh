#!/usr/bin/env bash
# Publishes this folder to GitHub Pages.
#   bash publish.sh your-github-username
set -euo pipefail

USER="${1:-}"
if [ -z "$USER" ]; then echo "Usage: bash publish.sh your-github-username" >&2; exit 1; fi
REPO="${USER}.github.io"

if [ ! -d .git ]; then git init -q; git branch -M main; fi
git add -A
git commit -q -m "Publish research site" || echo "Nothing new to commit."

if command -v gh >/dev/null 2>&1; then
  if gh repo view "$USER/$REPO" >/dev/null 2>&1; then
    git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$USER/$REPO.git"
    git push -u origin main
  else
    gh repo create "$REPO" --public --source=. --remote=origin --push
  fi
  echo
  echo "Live in a minute or two at: https://$REPO"
else
  echo
  echo "GitHub CLI not found. Create a PUBLIC repo named exactly: $REPO"
  echo "at https://github.com/new — then run:"
  echo "    git remote add origin https://github.com/$USER/$REPO.git"
  echo "    git push -u origin main"
fi
