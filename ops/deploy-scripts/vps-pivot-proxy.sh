#!/bin/bash
# PROMPT 099 — Pivot from Passenger to DreamHost Proxy + linger + user systemd.
# Steps 1-5 of the execution sequence in one SSH round-trip.

set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"
SVC_DIR="$HOME/.config/systemd/user"
NODE_BIN="/home/dh_isibk9/.nvm/versions/node/v20.20.2/bin/node"

# systemctl --user needs XDG_RUNTIME_DIR even in non-login shells
export XDG_RUNTIME_DIR="/run/user/$(id -u)"

echo "################ STEP 1: REWRITE .htaccess ################"
cd "$SITE_DIR" || { echo "ERROR: cannot cd to $SITE_DIR"; exit 1; }
rm -f .htaccess
cat > .htaccess <<'HT'
# HTTPS redirect (Apache proxy layer). Node/Next.js lives on 127.0.0.1:3000.
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
HT
echo "new .htaccess:"
cat .htaccess

echo ""
echo "################ STEP 2: OVERWRITE app.js (127.0.0.1 bind) ################"
cat > "$SITE_DIR/app.js" <<'APPJS'
// Entry point for Next.js 14 App Router running behind DreamHost's
// Apache Proxy Server. Listens on 127.0.0.1:3000 only; the outside
// world reaches the app via Apache proxying sbe.studio -> :3000.
const { createServer } = require("http");
const next = require("next");

const dev = false;
const port = parseInt(process.env.PORT || "3000", 10);
const listenHostname = process.env.HOSTNAME || "127.0.0.1";
const publicHostname = "sbe.studio";

const app = next({ dev, hostname: publicHostname, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, listenHostname, () => {
    console.log(
      `> Ready on http://${listenHostname}:${port} (public: https://${publicHostname})`
    );
  });
});
APPJS
echo "app.js head:"
head -20 "$SITE_DIR/app.js"
echo ""
echo "Ensure tmp dir:"
mkdir -p "$SITE_DIR/tmp"
ls -la "$SITE_DIR/tmp/"

echo ""
echo "################ STEP 3: ENABLE LINGER ################"
loginctl enable-linger 2>&1
sleep 1
echo "Linger status:"
loginctl show-user "$(whoami)" 2>&1 | grep -E "^Linger=|^UID=|^Name=" || loginctl show-user "$(whoami)"

echo ""
echo "################ STEP 4: CREATE SYSTEMD USER SERVICE ################"
mkdir -p "$SVC_DIR"
cat > "$SVC_DIR/sbe-studio.service" <<SVC
[Unit]
Description=SBE Studio Next.js Production Server
After=network.target

[Service]
Type=simple
WorkingDirectory=$SITE_DIR
Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOSTNAME=127.0.0.1
Environment=PATH=/home/dh_isibk9/.nvm/versions/node/v20.20.2/bin:/usr/local/bin:/usr/bin:/bin
ExecStart=$NODE_BIN $SITE_DIR/app.js
Restart=on-failure
RestartSec=5
StandardOutput=append:$SITE_DIR/tmp/stdout.log
StandardError=append:$SITE_DIR/tmp/stderr.log

[Install]
WantedBy=default.target
SVC
echo "Unit written to: $SVC_DIR/sbe-studio.service"
cat "$SVC_DIR/sbe-studio.service"

echo ""
echo "################ STEP 5: RELOAD / ENABLE / START ################"
systemctl --user daemon-reload 2>&1
systemctl --user enable sbe-studio.service 2>&1
systemctl --user start sbe-studio.service 2>&1
echo ""
echo "--- sleep 4s to let Next.js warm up ---"
sleep 4

echo ""
echo "--- systemctl --user status ---"
systemctl --user status sbe-studio.service --no-pager 2>&1 | head -30

echo ""
echo "--- journalctl --user -u sbe-studio (last 20 lines) ---"
journalctl --user -u sbe-studio.service -n 20 --no-pager 2>&1 || true

echo ""
echo "--- stdout.log ---"
tail -30 "$SITE_DIR/tmp/stdout.log" 2>&1 || true
echo ""
echo "--- stderr.log ---"
tail -30 "$SITE_DIR/tmp/stderr.log" 2>&1 || true

echo ""
echo "################ VERIFY LOCAL :3000 ################"
curl -sI --max-time 10 http://127.0.0.1:3000/ 2>&1 | head -15

echo ""
echo "### body grep ###"
curl -s --max-time 10 http://127.0.0.1:3000/ 2>&1 | grep -oE '.{0,40}the same ai we build.{0,40}' | head -2 || true
echo "full body length:"
curl -s --max-time 10 http://127.0.0.1:3000/ 2>&1 | wc -c

echo ""
echo "### /api/stats ###"
curl -s --max-time 10 http://127.0.0.1:3000/api/stats 2>&1 | head -c 300
echo ""

echo ""
echo "################ LISTENING PORTS (3000 should be bound to 127.0.0.1) ################"
ss -tlnp 2>&1 | grep -E ":3000|State" | head -5

echo ""
echo "################ PIVOT COMPLETE ################"
