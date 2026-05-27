#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "############### FINAL .htaccess ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Disable DirectoryIndex so a request for "/" is NOT silently
# rewritten to "/index.html" before mod_rewrite gets to it.
DirectoryIndex disabled

# Reverse-proxy to local Next.js on 127.0.0.1:3000.
RewriteEngine On

# Skip Let's Encrypt ACME challenges (so SSL renewal can write
# challenge files into the document root if needed).
RewriteRule ^\.well-known/ - [L]

# Pass everything through to Node, preserving the original URI
# and any query string. Apache will still serve real files in
# the document root (e.g. /favicon.svg) because mod_proxy is
# only invoked when this rule matches and we don't gate on -f.
RewriteRule .* http://127.0.0.1:3000%{REQUEST_URI} [P,L,QSA]
HT
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### CURL FROM OUTSIDE ###############"
sleep 1
echo "--- HEAD / ---"
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -8
echo ""
echo "--- body length / ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | wc -c
echo ""
echo "--- title in / ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | grep -oE '<title>[^<]+</title>' | head -1
echo ""
echo "--- looking for headline 'the same' in / ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | grep -oE 'the same[^<]{0,40}' | head -2

echo ""
echo "--- HEAD /favicon.svg ---"
curl -skI --max-time 15 https://sbe.studio/favicon.svg 2>&1 | head -4

echo ""
echo "--- /api/stats first 200 bytes ---"
curl -sk --max-time 15 https://sbe.studio/api/stats 2>&1 | head -c 200
echo ""

echo ""
echo "--- HEAD / on www subdomain ---"
curl -skI --max-time 15 https://www.sbe.studio/ 2>&1 | head -5

echo ""
echo "--- HEAD / on plain http ---"
curl -sI --max-time 15 http://sbe.studio/ 2>&1 | head -5

echo ""
echo "############### DONE ###############"
