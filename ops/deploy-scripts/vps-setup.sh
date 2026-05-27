#!/bin/bash
# VPS setup: install nvm + Node 20 + corepack/pnpm, clean DreamHost placeholders,
# and print the exact Node binary path so we can wire it into .htaccess.

set +e

echo "################ INSTALL NVM ################"
if [ ! -s "$HOME/.nvm/nvm.sh" ]; then
  curl -sSfLo- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
else
  echo "nvm already present at $HOME/.nvm"
fi

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo ""
echo "################ INSTALL NODE 20 LTS ################"
nvm install 20 2>&1 | tail -20
nvm alias default 20
nvm use 20

echo ""
echo "################ ENABLE COREPACK + PNPM ################"
corepack enable 2>&1 || true
corepack prepare pnpm@latest --activate 2>&1 || true

echo ""
echo "################ VERSIONS ################"
echo "node: $(node --version 2>&1)"
echo "npm: $(npm --version 2>&1)"
echo "pnpm: $(pnpm --version 2>&1)"
NODE_BIN="$(which node)"
echo "which node: $NODE_BIN"
# Print machine-parseable marker so the local script can grep the exact path:
echo "NODE_ABSOLUTE_PATH=$NODE_BIN"

echo ""
echo "################ SITE FOLDER BEFORE CLEANUP ################"
ls -la /home/dh_isibk9/sbe.studio/

echo ""
echo "################ REMOVE DREAMHOST PLACEHOLDERS ################"
rm -fv /home/dh_isibk9/sbe.studio/favicon.gif
rm -fv /home/dh_isibk9/sbe.studio/favicon.ico
# Leave the .dh-diag symlink alone per PROMPT 098 Rule 1

echo ""
echo "################ SITE FOLDER AFTER CLEANUP ################"
ls -la /home/dh_isibk9/sbe.studio/

echo ""
echo "################ SETUP COMPLETE ################"
