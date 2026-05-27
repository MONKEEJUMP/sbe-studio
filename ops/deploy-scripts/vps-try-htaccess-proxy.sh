#!/bin/bash
# Attempt #1: .htaccess-driven reverse proxy via mod_rewrite [P].
# If Apache loaded mod_proxy + mod_proxy_http for this vhost, this works
# without any DreamHost panel change. If not, we get a clean error in
# the log and we know to escalate.
set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"
LOG="$(readlink -f /home/dh_isibk9/logs/sbe.studio/http)"

echo "############### WRITE NEW .htaccess (mod_proxy attempt) ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Reverse-proxy everything to local Next.js on 127.0.0.1:3000.
# Uses mod_rewrite [P] (proxy) flag, which requires mod_proxy +
# mod_proxy_http to be loaded for this vhost.
RewriteEngine On

# Don't proxy /.well-known (Let's Encrypt ACME challenges) so SSL renewals
# can write challenge files to the document root if needed.
RewriteRule ^\.well-known/ - [L]

# Pass everything else (including the bare /) to Node.
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
HT

echo "new .htaccess:"
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### CURL FROM VPS (loopback Apache vhost via Host header) ###############"
# Apache binds to public IP only, so we hit it via the public IP with a Host
# header to test what an external visitor sees.
echo "--- HEAD via VPS public IP ---"
curl -sI --max-time 10 -H "Host: sbe.studio" http://69.163.199.91/ 2>&1 | head -10
echo ""
echo "--- GET / first 400 chars ---"
curl -s --max-time 10 -H "Host: sbe.studio" http://69.163.199.91/ 2>&1 | head -c 400
echo ""

echo ""
echo "############### APACHE ERROR LOG (last 20 lines after our request) ###############"
sleep 1
tail -20 "$LOG/error.log" 2>&1

echo ""
echo "############### APACHE ACCESS LOG (last 5) ###############"
tail -5 "$LOG/access.log" 2>&1

echo ""
echo "############### IF mod_proxy MISSING, ERROR WILL SAY SO ###############"
echo "Looking for the smoking-gun error pattern:"
tail -30 "$LOG/error.log" 2>&1 | grep -iE "proxy|module" | head -5

echo ""
echo "############### DONE ###############"
