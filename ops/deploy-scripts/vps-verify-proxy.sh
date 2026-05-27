#!/bin/bash
# Verify current state of the systemd user service for sbe-studio.
# Idempotent: will reload/enable/start if not already running.
set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"
export XDG_RUNTIME_DIR="/run/user/$(id -u)"

echo "################ LINGER ################"
loginctl show-user "$(whoami)" 2>&1 | grep -E "Linger="

echo ""
echo "################ SERVICE UNIT FILE ################"
ls -la "$HOME/.config/systemd/user/sbe-studio.service" 2>&1

echo ""
echo "################ DAEMON RELOAD / ENABLE / START ################"
systemctl --user daemon-reload 2>&1
systemctl --user enable sbe-studio.service 2>&1
systemctl --user start sbe-studio.service 2>&1

echo "--- sleep 5s ---"
sleep 5

echo ""
echo "################ STATUS ################"
systemctl --user is-active sbe-studio.service 2>&1
systemctl --user is-enabled sbe-studio.service 2>&1
systemctl --user status sbe-studio.service --no-pager 2>&1 | head -30

echo ""
echo "################ STDOUT LOG ################"
tail -30 "$SITE_DIR/tmp/stdout.log" 2>&1

echo ""
echo "################ STDERR LOG ################"
tail -30 "$SITE_DIR/tmp/stderr.log" 2>&1

echo ""
echo "################ PROCESS LIST ################"
ps -u dh_isibk9 -o pid,ppid,cmd 2>&1 | grep -E "node|systemd|bash" | head -20

echo ""
echo "################ PORT 3000 LISTENING ################"
ss -tlnp 2>&1 | grep ":3000" | head -5
echo "--- all user-bound ports ---"
ss -tlnp 2>&1 | head -2
ss -tlnp 2>&1 | grep -v "sshd\|127.0.0.53:53\|:22 \|:25 \|:80 \|:443 \|:587 \|:9100\|:9469" | head -15

echo ""
echo "################ LOCAL HTTP CHECK ################"
curl -sI --max-time 10 http://127.0.0.1:3000/ 2>&1 | head -15
echo ""
echo "--- body snippet ---"
curl -s --max-time 10 http://127.0.0.1:3000/ 2>&1 | grep -oE '.{0,40}the same ai we build.{0,40}' | head -2 || true
echo "--- body length ---"
curl -s --max-time 10 http://127.0.0.1:3000/ 2>&1 | wc -c

echo ""
echo "################ /api/stats ################"
curl -s --max-time 10 http://127.0.0.1:3000/api/stats 2>&1 | head -c 300
echo ""

echo ""
echo "################ DONE ################"
