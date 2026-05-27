#!/bin/bash
# Verify the deploy from the VPS itself: Passenger status, app logs,
# local curl against Apache on :80 with Host: sbe.studio header, and
# a content-match grep for the new headline.

set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "################ DREAMHOST LOGS DIR ################"
ls -la /home/dh_isibk9/logs/sbe.studio/ 2>&1 | head -20
echo ""
echo "=== last 40 lines of any error log found ==="
for f in /home/dh_isibk9/logs/sbe.studio/*error* /home/dh_isibk9/logs/sbe.studio/*.log; do
  if [ -f "$f" ]; then
    echo "----- $f -----"
    tail -40 "$f" 2>&1
  fi
done

echo ""
echo "################ SITE TREE ################"
ls -la "$SITE_DIR/"
echo "tmp/:"
ls -la "$SITE_DIR/tmp/" 2>&1

echo ""
echo "################ LOCAL CURL: http://127.0.0.1 with Host header ################"
curl -sI --max-time 15 -H "Host: sbe.studio" http://127.0.0.1/ 2>&1 | head -20
echo ""
echo "=== local curl http://69.163.199.91 with Host header ==="
curl -sI --max-time 15 -H "Host: sbe.studio" http://69.163.199.91/ 2>&1 | head -20

echo ""
echo "################ LOCAL CURL: https://sbe.studio (may fail if SSL not provisioned) ################"
curl -sI --max-time 15 -k https://127.0.0.1/ -H "Host: sbe.studio" 2>&1 | head -10

echo ""
echo "################ CONTENT MATCH CHECK ################"
BODY=$(curl -s --max-time 15 -H "Host: sbe.studio" http://127.0.0.1/ 2>&1)
echo "body length: ${#BODY} bytes"
echo "headline match 'the same ai we build':"
echo "$BODY" | grep -c "the same ai we build" || true
echo "headline match '< the same':"
echo "$BODY" | grep -oE '.{0,60}the same ai.{0,60}' | head -3 || true

echo ""
echo "################ API CHECK ################"
curl -s --max-time 15 -H "Host: sbe.studio" http://127.0.0.1/api/stats 2>&1 | head -c 400
echo ""

echo ""
echo "################ PASSENGER PROCESS (if visible to our user) ################"
ps -u dh_isibk9 -f | head -30

echo ""
echo "################ VERIFY SCRIPT COMPLETE ################"
