# irrigation-pi-js

##Raspberry Pi Installation

#### Flash the memory of the raspberry : https://www.udemy.com/rpi-full-stack/learn/v4/t/lecture/3109460?start=555
#### Get into the raspberry / ssh pi@192.168.1.149
#### Password: raspberry
#### sudo apt-get update
#### OPtional: sudo apt-get upgrade (It will take like 30 - 40 minutes)
#### Install raspi-config to config the raspberry operation system
#### sudo apt-get install -y build-essential npm git tree vim python-rpi.gpio
#### sudo apt-get install -y raspi-config
#### Installing NodeJs:  wget http://node-arm.herokuapp.com/node_latest_armhf.deb
#### sudo dpkg -i node_latest_armhf.deb 
#### sudo su (to get root permissions)
#### sudo npm install -y rpi-gpio cron twilio --save
#### sudo npm install express --save
#### sudo npm install express-generator -g    (Installs the framework skeleton)
#### To create a skeleton project is: express forlder_project_name
#### cd irr
#### sudo npm install
#### ***sudo npm install --unsafe-perm --verbose -g raspi-io
#### ***sudo npm install --unsafe-perm --verbose -g johnny-five
#### Type: git clone git://github.com/quick2wire/quick2wire-gpio-admin.git
#### cd quick2wire-gpio-admin
#### make
#### sudo make install
#### sudo adduser pi gpio


Do not forget that the quick2wire-gpio-admin you have to change a file /src/gpio….c
What you have to change is : https://github.com/quick2wire/quick2wire-gpio-admin/pull/6/files
Check the documentation