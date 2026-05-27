#!/bin/bash
# SBE STUDIO — Phase 1 VPS Audit (READ-ONLY)
# Runs only read-only inspection commands. Writes to the user's own
# home directory: /home/dh_isibk9/vps-audit-phase1.log.
# No changes to any files outside that log. No sudo. No process signals.

set +e

LOG=/home/dh_isibk9/vps-audit-phase1.log

# Mirror everything to both stdout (for SSH return) and the log file.
exec > >(tee -a "$LOG") 2>&1

ts() { date -u +'%Y-%m-%dT%H:%M:%SZ'; }

run() {
  echo ""
  echo "\$ $1"
  bash -c "$1" 2>&1 || true
}

header() {
  echo ""
  echo "################################################################"
  echo "# $1"
  echo "################################################################"
}

echo ""
echo "================================================================"
echo "SBE STUDIO — VPS AUDIT — PHASE 1 (READ-ONLY)"
echo "Started: $(ts)"
echo "================================================================"

header "BLOCK 1 — System identity and health"
run "whoami"
run "hostname"
run "uname -a"
run "pwd"
run "df -h /"
run "df -h /home"
run "free -h"

header "BLOCK 2 — Home directory layout"
run "ls -la /home/dh_isibk9/"
run "ls -la ~"
echo "---"
run "ls -la /home/dh_isibk9/sbe.studio 2>&1 | head -20"
run "ls -la ~/sbe.studio 2>&1 | head -20"

header "BLOCK 3 — Node.js and toolchain"
run "which node"
run "which npm"
run "which pnpm"
run "which pm2"
run "node --version 2>&1"
run "npm --version 2>&1"
run "pnpm --version 2>&1"
run "pm2 --version 2>&1"
run "ls -la ~/.nvm 2>&1 | head -5"
run "cat ~/.bashrc 2>&1 | tail -40"
run "cat ~/.bash_profile 2>&1 | tail -20"

header "BLOCK 4 — Running processes (user-scoped only)"
run "pm2 list 2>&1"
run "pm2 prettylist 2>&1 | head -80"
run "ps -u dh_isibk9 -f"

header "BLOCK 5 — Port usage"
run "ss -tlnp 2>&1 | head -40"
run "netstat -tlnp 2>&1 | head -40"

header "BLOCK 6 — Web server evidence"
run "which nginx"
run "which apache2"
run "which httpd"
run "ls -la /home/dh_isibk9/ | grep -iE 'logs|public|www|sbe' || true"
run "which passenger"
run "ls -la /home/dh_isibk9/logs 2>&1 | head -10"

header "BLOCK 7 — DreamHost-specific configuration signals"
run "find /home/dh_isibk9/ -maxdepth 3 -name '.htaccess' 2>/dev/null | head -10"
run "find /home/dh_isibk9/ -maxdepth 3 -name 'public' -type d 2>/dev/null | head -10"
run "find /home/dh_isibk9/ -maxdepth 3 -name 'ecosystem.config*' 2>/dev/null | head -5"

header "BLOCK 8 — Network egress sanity"
run "curl -sI --max-time 5 https://registry.npmjs.org 2>&1 | head -3"
run "curl -sI --max-time 5 https://github.com 2>&1 | head -3"
run "getent hosts sbe.studio 2>&1 || nslookup sbe.studio 2>&1 | head -5"

echo ""
echo "================================================================"
echo "AUDIT COMPLETE: $(ts)"
echo "Log written to: $LOG"
echo "================================================================"
