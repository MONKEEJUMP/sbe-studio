#!/bin/bash
# Replace the broken .htaccess on the VPS with the IfModule-wrapped version
# piped via stdin (heredoc-safe because bash reads stdin for `bash -s`
# already, so we write the file via a here-string).
set +e

cat > /home/dh_isibk9/sbe.studio/.htaccess <<'EOF_HTACCESS'
# Passenger directives. Wrapped in <IfModule> so Apache does not 500
# if mod_passenger is not loaded for this vhost (DreamHost panel toggle
# "Passenger (Ruby/NodeJS/Python apps only)" must be enabled for sbe.studio).
# Once Passenger is enabled in the panel, these activate automatically.

<IfModule mod_passenger.c>
    PassengerNodejs /home/dh_isibk9/.nvm/versions/node/v20.20.2/bin/node
    PassengerAppRoot /home/dh_isibk9/sbe.studio
    PassengerAppType node
    PassengerStartupFile app.js
</IfModule>
EOF_HTACCESS

echo "################ NEW .htaccess ################"
cat /home/dh_isibk9/sbe.studio/.htaccess
echo ""
echo "################ TOUCH restart.txt ################"
mkdir -p /home/dh_isibk9/sbe.studio/tmp
touch /home/dh_isibk9/sbe.studio/tmp/restart.txt
ls -la /home/dh_isibk9/sbe.studio/tmp/

echo ""
echo "################ CURL SANITY (expect 500 until Passenger enabled, or 403/dir listing) ################"
curl -sI --max-time 10 -H "Host: sbe.studio" http://69.163.199.91/ 2>&1 | head -10

echo ""
echo "################ DONE ################"
