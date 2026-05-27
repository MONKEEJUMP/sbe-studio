#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "############### NEW .htaccess (HTTPS force + HSTS + proxy) ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Apache won't auto-serve a directory index.
DirectoryIndex disabled

RewriteEngine On

# 1. Allow Let's Encrypt ACME challenges through unmodified.
RewriteRule ^\.well-known/ - [L]

# 2. Force HTTPS for everything else. R=301 = permanent.
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [L,R=301]

# 3. Reverse-proxy to local Next.js on 127.0.0.1:3000.
RewriteRule .* http://127.0.0.1:3000%{REQUEST_URI} [P,L,QSA]

# 4. HSTS: tell browsers to always use HTTPS for sbe.studio for the
#    next year, including subdomains. After this header is seen once,
#    browsers refuse to make HTTP requests to this origin.
<IfModule mod_headers.c>
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
HT
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### TEST CURLS ###############"
sleep 1
echo "--- HEAD http://sbe.studio/  (expect 301 to https) ---"
curl -sI --max-time 15 http://sbe.studio/ 2>&1 | head -8
echo ""
echo "--- HEAD https://sbe.studio/  (expect 200 + HSTS) ---"
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -15
echo ""
echo "--- /api/stats first 200 ---"
curl -sk --max-time 15 https://sbe.studio/api/stats 2>&1 | head -c 200
echo ""

echo ""
echo "############### DONE ###############"
