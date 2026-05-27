#!/bin/bash
# Extract the uploaded tarball into /home/dh_isibk9/sbe.studio/,
# install production deps with pnpm, and trigger Passenger restart.
# Idempotent: can be re-run.

set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"
TARBALL="/home/dh_isibk9/deploy.tar.gz"

echo "################ LOAD NVM ################"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20 2>&1 | tail -3
echo "node: $(node --version)"
echo "pnpm: $(pnpm --version)"

echo ""
echo "################ VERIFY TARBALL PRESENT ################"
ls -la "$TARBALL"
echo "tarball file count:"
tar tzf "$TARBALL" | wc -l

echo ""
echo "################ EXTRACT INTO SITE DIR ################"
cd "$SITE_DIR" || { echo "ERROR: cannot cd to $SITE_DIR"; exit 1; }
# Remove any old build artifacts (safe: sbe.studio dir is ours)
# Keep the .dh-diag symlink (DreamHost diagnostics)
find "$SITE_DIR" -mindepth 1 -not -name '.dh-diag' -not -path "$SITE_DIR/.dh-diag/*" -print0 2>/dev/null | xargs -0 rm -rf 2>/dev/null

echo "Site dir state before extract:"
ls -la "$SITE_DIR"

tar xzf "$TARBALL" -C "$SITE_DIR"
EXTRACT=$?
echo "tar extract exit: $EXTRACT"

echo ""
echo "################ SITE DIR AFTER EXTRACT ################"
ls -la "$SITE_DIR"
echo ""
echo ".next/BUILD_ID exists?"
ls -la "$SITE_DIR/.next/BUILD_ID" 2>&1
echo ""
echo ".htaccess content:"
cat "$SITE_DIR/.htaccess"
echo ""
echo "app.js content (first 15 lines):"
head -15 "$SITE_DIR/app.js"

echo ""
echo "################ INSTALL PRODUCTION DEPS ################"
cd "$SITE_DIR" || exit 1
pnpm install --prod --frozen-lockfile 2>&1 | tail -40
INSTALL_EXIT=$?
echo "pnpm install exit: $INSTALL_EXIT"

echo ""
echo "################ node_modules SUMMARY ################"
ls "$SITE_DIR/node_modules" | wc -l
echo "next/package.json:"
cat "$SITE_DIR/node_modules/next/package.json" 2>/dev/null | head -5

echo ""
echo "################ PREPARE PASSENGER ################"
mkdir -p "$SITE_DIR/tmp"
touch "$SITE_DIR/tmp/restart.txt"
ls -la "$SITE_DIR/tmp/"

echo ""
echo "################ CLEANUP TARBALL ################"
rm -fv "$TARBALL"

echo ""
echo "################ DEPLOY SCRIPT COMPLETE ################"
