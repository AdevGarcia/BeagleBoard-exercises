# From: http://nodered.org/docs/getting-started/installation.html
cd
git clone https://github.com/node-red/node-red.git
cd node-red/
npm install --production	# 4 minutes
cd nodes
git clone https://github.com/node-red/node-red-nodes.git # 2 seconds

# To run
# cd ~/node-red
# node red.js

# More modules, 
# From https://learn.adafruit.com/raspberry-pi-hosting-node-red/installing-further-plugins
npm install -g badwords ntwitter oauth sentiment wordpos xml2js firmata 
npm install -g fs.notify serialport feedparser pushbullet irc simple-xmpp 
npm install -g redis mongodb node-stringprep
npm install -g imap js2xmlparser nodemailer arduino-firmata heatmiser wemo 
npm install -g stomp-client wake_on_lan node-dweetio komponist nma growl 
npm install -g node-prowl pusher pushover-notifications snapchat twilio aws-sdk 
npm install -g node-hue-api level pusher-client mysql sqlite3 suncalc
npm install -g dynamodb-data-types node-postgres-named
# Failed to install: node-blink1 blinkstick node-hid hidstream noble pg
# Installed, but caused node-red not to run: komponist
# To use sensorTag
# From: https://github.com/sandeepmistry/node-sensortag
apt-get install libbluetooth-dev bluez
npm install -g sensortag
hcitool lescan
