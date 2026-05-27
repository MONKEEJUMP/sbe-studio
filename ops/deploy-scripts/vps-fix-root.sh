#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "############### TAIL NODE STDOUT TO SEE WHAT URL ARRIVES ###############"
# Snapshot the log size; we'll diff after the curl.
PRE=$(wc -l < "$SITE_DIR/tmp/stdout.log" 2>/dev/null || echo 0)
echo "stdout.log line count before: $PRE"

# We can't easily stream stdout while curling externally, so just check after.

echo ""
echo "############### REWRITE .htaccess (explicit root rule) ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Reverse-proxy to local Next.js on 127.0.0.1:3000.
# Uses mod_rewrite [P] (proxy) flag.
RewriteEngine On

# Skip Let's Encrypt ACME challenges so SSL renewal can work.
RewriteRule ^\.well-known/ - [L]

# Explicit rule for the bare root path. The previous catch-all
# `^(.*)$` matched an empty string for `/` and the proxied URL
# was being rewritten in a way that produced a 404 from Next.js.
RewriteRule ^$ http://127.0.0.1:3000/ [P,L]

# Everything else, preserving the path.
RewriteRule ^(.+)$ http://127.0.0.1:3000/$1 [P,L]
HT
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### VERIFY HTTPS / IMMEDIATELY ###############"
sleep 1
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -10
echo ""
echo "--- body length / ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | wc -c
echo "--- looking for headline text in / body ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | grep -oE 'the same.{0,30}' | head -3

echo ""
echo "############### NODE STDOUT (delta) ###############"
POST=$(wc -l < "$SITE_DIR/tmp/stdout.log" 2>/dev/null || echo 0)
echo "stdout.log line count after: $POST"
if [ "$POST" -gt "$PRE" ]; then
  tail -$((POST - PRE)) "$SITE_DIR/tmp/stdout.log"
fi

echo ""
echo "############### DONE ###############"
