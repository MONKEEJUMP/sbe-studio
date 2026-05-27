#!/bin/bash
# Diagnose why Apache returns 500 for sbe.studio.
set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "################ RESOLVED LOG DIR ################"
LOGLINK="/home/dh_isibk9/logs/sbe.studio/http"
ls -la "$LOGLINK"
RESOLVED=$(readlink -f "$LOGLINK")
echo "resolved: $RESOLVED"
ls -la "$RESOLVED/" 2>&1 | head -30

echo ""
echo "################ ANY ERROR / ACCESS LOGS ################"
for f in "$RESOLVED"/* "$RESOLVED"/*.log; do
  [ -f "$f" ] || continue
  echo "----- $f (last 60 lines) -----"
  tail -60 "$f" 2>&1
done

echo ""
echo "################ DREAMHOST PASSENGER STATUS ################"
which passenger
passenger -v 2>&1 | head -5 || true
# Check if DreamHost has a per-domain passenger-enabled flag
find /dh -maxdepth 6 -name "*sbe*" -type f 2>/dev/null | head -20
find /dh -maxdepth 6 -name "*passenger*" -type f 2>/dev/null | head -20

echo ""
echo "################ .htaccess content (verify) ################"
cat "$SITE_DIR/.htaccess"
echo ""
echo "### stat .htaccess:"
stat "$SITE_DIR/.htaccess"

echo ""
echo "################ APACHE-CONFIGURED DOCROOT CHECK ################"
# Test if sbe.studio is vhost'd to OUR folder
# (we can't read Apache configs directly, but we can infer)
echo "Index test: curl for /favicon.svg via Host header"
curl -sI --max-time 10 -H "Host: sbe.studio" http://69.163.199.91/favicon.svg 2>&1 | head -10

echo ""
echo "################ RUN app.js MANUALLY TO TEST BOOT ################"
cd "$SITE_DIR"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20 2>&1 | tail -2
echo "--- start app.js boot test (10s timeout) ---"
timeout 10 node app.js 2>&1 | head -30
echo "--- end boot test ---"

echo ""
echo "################ TEST passenger-friendly node shebang ################"
NODE_BIN="$(which node)"
echo "NODE_BIN: $NODE_BIN"
ls -la "$NODE_BIN"
"$NODE_BIN" --version

echo ""
echo "################ DIAGNOSE COMPLETE ################"
