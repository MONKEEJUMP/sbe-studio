#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "############### NEW .htaccess (no-store on 301 + HSTS + proxy) ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Apache won't auto-serve a directory index.
DirectoryIndex disabled

RewriteEngine On

# 1. Allow Let's Encrypt ACME challenges through unmodified.
RewriteRule ^\.well-known/ - [L]

# 2. Force HTTPS for everything else. We mark this 301 as
#    Cache-Control: no-store via an environment variable so browsers
#    don't cache the redirect itself indefinitely (which is what
#    Chrome was doing, per RFC 7231 default cacheability of 301s).
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [L,R=301,E=NOSTORE:1]

# 3. Reverse-proxy to local Next.js on 127.0.0.1:3000.
RewriteRule .* http://127.0.0.1:3000%{REQUEST_URI} [P,L,QSA]

<IfModule mod_headers.c>
    # Set no-store on the 301-redirect response so browsers re-validate
    # the HTTP -> HTTPS hop instead of caching it for months.
    Header always set Cache-Control "no-store" env=NOSTORE

    # HSTS so the redirect isn't even attempted on subsequent visits.
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
HT
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### VERIFY HEADERS ###############"
sleep 1
echo "--- HEAD http://sbe.studio/  (expect 301 + Cache-Control: no-store) ---"
curl -sI --max-time 15 http://sbe.studio/ 2>&1 | head -12
echo ""
echo "--- HEAD https://sbe.studio/  (expect 200 + HSTS) ---"
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -15
echo ""
echo "############### DONE ###############"
