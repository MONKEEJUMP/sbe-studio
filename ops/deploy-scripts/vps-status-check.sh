#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"
export XDG_RUNTIME_DIR="/run/user/$(id -u)"

echo "############### NODE SERVICE STATE ###############"
loginctl show-user "$(whoami)" 2>&1 | grep "Linger="
systemctl --user is-active sbe-studio.service 2>&1
systemctl --user is-enabled sbe-studio.service 2>&1
systemctl --user status sbe-studio.service --no-pager 2>&1 | head -15

echo ""
echo "############### PORT 3000 ###############"
ss -tlnp 2>&1 | grep ":3000" | head -3

echo ""
echo "############### LOCAL CURL TO :3000 ###############"
curl -sI --max-time 8 http://127.0.0.1:3000/ 2>&1 | head -10
echo "--- body length ---"
curl -s --max-time 8 http://127.0.0.1:3000/ 2>&1 | wc -c

echo ""
echo "############### SITE FOLDER CONTENT ###############"
ls -la "$SITE_DIR/" 2>&1
echo ""
echo "--- .htaccess ---"
cat "$SITE_DIR/.htaccess" 2>&1
echo ""
echo "--- app.js head ---"
head -10 "$SITE_DIR/app.js" 2>&1
echo ""
echo "--- .next/BUILD_ID ---"
cat "$SITE_DIR/.next/BUILD_ID" 2>&1

echo ""
echo "############### WHAT APACHE ACTUALLY SERVES ###############"
echo "--- via 127.0.0.1 with Host: sbe.studio (Apache) ---"
curl -sI --max-time 8 -H "Host: sbe.studio" http://127.0.0.1/ 2>&1 | head -10
echo "--- body first 200 chars ---"
curl -s --max-time 8 -H "Host: sbe.studio" http://127.0.0.1/ 2>&1 | head -c 200
echo ""

echo ""
echo "############### APACHE ERROR LOG TAIL ###############"
LOGLINK="/home/dh_isibk9/logs/sbe.studio/http"
RESOLVED=$(readlink -f "$LOGLINK")
echo "log dir: $RESOLVED"
ls -la "$RESOLVED/" 2>&1 | head -10
echo ""
echo "--- error.log last 30 lines ---"
tail -30 "$RESOLVED/error.log" 2>&1
echo ""
echo "--- access.log last 20 lines ---"
tail -20 "$RESOLVED/access.log" 2>&1

echo ""
echo "############### DONE ###############"
