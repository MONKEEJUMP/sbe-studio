#!/bin/bash
set +e
SITE_DIR="/home/dh_isibk9/sbe.studio"

echo "############### NEW .htaccess (REQUEST_URI passthrough) ###############"
cat > "$SITE_DIR/.htaccess" <<'HT'
# Reverse-proxy to local Next.js on 127.0.0.1:3000.
RewriteEngine On

# Let Apache serve real files in /home/dh_isibk9/sbe.studio/
# (e.g. /favicon.svg). Proxy everything else.
RewriteCond %{REQUEST_URI} ^/\.well-known/
RewriteRule .* - [L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule .* http://127.0.0.1:3000%{REQUEST_URI} [P,L,QSA]
HT
cat "$SITE_DIR/.htaccess"

echo ""
echo "############### TEMP-PATCH app.js TO LOG REQ URLS ###############"
# Save the original
cp "$SITE_DIR/app.js" "$SITE_DIR/app.js.bak"
# Insert a console.log before handle(req,res)
sed -i 's|handle(req, res);|console.log("REQ", req.method, req.url, "host=", req.headers.host); handle(req, res);|' "$SITE_DIR/app.js"
echo "patched app.js handler:"
grep -n "console.log" "$SITE_DIR/app.js"

echo ""
echo "############### RESTART SERVICE ###############"
export XDG_RUNTIME_DIR="/run/user/$(id -u)"
systemctl --user restart sbe-studio.service 2>&1
sleep 3
systemctl --user is-active sbe-studio.service

echo ""
echo "############### CURL EXTERNALLY 3 PATHS ###############"
sleep 1
echo "--- /     ---"
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -5
echo "--- /work ---"
curl -skI --max-time 15 https://sbe.studio/work 2>&1 | head -5
echo "--- /api/stats ---"
curl -skI --max-time 15 https://sbe.studio/api/stats 2>&1 | head -5

echo ""
echo "############### NODE STDOUT (last 30 lines) ###############"
tail -30 "$SITE_DIR/tmp/stdout.log"

echo ""
echo "############### REVERT app.js (remove debug log) ###############"
mv "$SITE_DIR/app.js.bak" "$SITE_DIR/app.js"
systemctl --user restart sbe-studio.service 2>&1
sleep 2

echo ""
echo "############### FINAL CHECK ###############"
curl -skI --max-time 15 https://sbe.studio/ 2>&1 | head -5
echo "--- body length / ---"
curl -sk --max-time 15 https://sbe.studio/ 2>&1 | wc -c

echo ""
echo "############### DONE ###############"
