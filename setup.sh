#!/bin/bash

clear
sh git_setup.sh
exit
echo "The script starts now."
sudo apt-get update
echo "Installing Linux appt: build-essential npm git tree vim raspi-config"
sudo apt-get install -y build-essential npm git tree vim raspi-config
echo "Downloading nodejs"
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
sudo rm node_latest_armhf.deb
sudo su
sudo npm install -y rpi-gpio cron twilio express --save
sudo npm install express-generator -g
echo 
echo "Done you are ready to go."
