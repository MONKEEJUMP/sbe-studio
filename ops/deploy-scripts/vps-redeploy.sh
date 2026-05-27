#!/bin/bash
# Redeploy: extract new tarball over existing site, preserve .htaccess,
# preserve node_modules (re-run pnpm install only if lockfile changed),
# restart the user systemd service.
set +e

SITE_DIR="/home/dh_isibk9/sbe.studio"
TARBALL="/home/dh_isibk9/deploy.tar.gz"
export XDG_RUNTIME_DIR="/run/user/$(id -u)"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 20 2>&1 | tail -1

echo "############### BEFORE ###############"
ls -la "$SITE_DIR/.htaccess" "$SITE_DIR/.next/BUILD_ID" 2>&1

echo ""
echo "############### EXTRACT ###############"
# Save the current .htaccess (server-side config we want to keep)
cp -p "$SITE_DIR/.htaccess" "/tmp/.htaccess.keep" 2>&1
# Save current pnpm-lock.yaml hash to detect dep changes
LOCK_BEFORE=""
if [ -f "$SITE_DIR/pnpm-lock.yaml" ]; then
  LOCK_BEFORE=$(sha256sum "$SITE_DIR/pnpm-lock.yaml" | awk '{print $1}')
fi

# Replace .next entirely (build output is regenerated each deploy)
rm -rf "$SITE_DIR/.next"

# Extract the new tarball; tarball contains everything except .htaccess
# (intentionally omitted) and node_modules (installed on server).
tar xzf "$TARBALL" -C "$SITE_DIR"
EXTRACT=$?
echo "tar extract exit: $EXTRACT"

# Restore the server-side .htaccess
cp -p "/tmp/.htaccess.keep" "$SITE_DIR/.htaccess"
rm -f "/tmp/.htaccess.keep"

echo ""
echo "############### LOCK CHECK + INSTALL IF NEEDED ###############"
LOCK_AFTER=""
if [ -f "$SITE_DIR/pnpm-lock.yaml" ]; then
  LOCK_AFTER=$(sha256sum "$SITE_DIR/pnpm-lock.yaml" | awk '{print $1}')
fi
echo "lock before: $LOCK_BEFORE"
echo "lock after:  $LOCK_AFTER"
if [ "$LOCK_BEFORE" != "$LOCK_AFTER" ]; then
  echo "Lockfile changed -> running pnpm install --prod"
  cd "$SITE_DIR"
  pnpm install --prod --frozen-lockfile 2>&1 | tail -10
else
  echo "Lockfile unchanged -> skipping pnpm install"
fi

echo ""
echo "############### RESTART SERVICE ###############"
systemctl --user restart sbe-studio.service 2>&1
sleep 4
systemctl --user is-active sbe-studio.service
systemctl --user status sbe-studio.service --no-pager 2>&1 | head -10

echo ""
echo "############### VERIFY LOCAL :3000 ###############"
curl -sI --max-time 10 http://127.0.0.1:3000/about 2>&1 | head -5
echo ""
echo "--- /about body grep for new headline ---"
curl -s --max-time 10 http://127.0.0.1:3000/about 2>&1 | grep -oE '.{0,30}planet earth.{0,30}' | head -2
curl -s --max-time 10 http://127.0.0.1:3000/about 2>&1 | grep -oE '.{0,30}size of a library.{0,30}' | head -2

echo ""
echo "############### CLEANUP ###############"
rm -fv "$TARBALL"

echo ""
echo "############### DONE ###############"
