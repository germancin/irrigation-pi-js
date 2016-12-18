# irrigation-pi-js

## Raspberry Pi Installation

#### Flash the memory of the raspberry : https://www.udemy.com/rpi-full-stack/learn/v4/t/lecture/3109460?start=555
#### Get into the raspberry / ssh pi@192.168.1.149
#### Password: raspberry
```sudo apt-get update```
####     *Optional: sudo apt-get upgrade (It will take like 30 - 40 minutes)
#### __Install esential libs for raspberry operation system*
```sudo apt-get install -y build-essential npm git tree vim raspi-config```
#### __Installing NodeJs

``` wget http://node-arm.herokuapp.com/node_latest_armhf.deb```

``` sudo dpkg -i node_latest_armhf.deb ```

``` sudo rm node_latest_armhf.deb```

#### __Get root permission
``` sudo su ```

#### __Installing some Node modules.
``` sudo npm install -y rpi-gpio cron twilio express --save```

#### __Installing express framework skeleton globally.
``` sudo npm install express-generator -g ```

#### __Creating express project skeleton.
``` express forlder_project_name ```

``` cd forlder_project_name```

``` sudo npm install```


## Resources

#### Generating a new SSH key for raspberry Pi 
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

## Installing by .sh files

###  setup.sh
#### First create a file under the directory "home/pi/"
``` vim setup.sh ```

#### Then copy this content
``` bash

	#!/bin/bash

	clear
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
	echo "::::::: DONE :::::::"

```

###  git-sshkey-setup.sh
#### Create the ssh key pair for github
``` vim git-sshkey-setup.sh ```

#### Then copy this content
``` bash

	#!/bin/bash

	DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" 

	echo "Creating keypair"
	ssh-keygen -t rsa -b 4096 -C "german.gonzalez@zumba.com"
	vim ~/.ssh/id_rsa.pub
	eval "$(ssh-agent -s)"
	ssh-add ~/.ssh/id_rsa
	echo "Copies the contents of the id_rsa.pub file to your clipboard"
	echo "In the upper-right corner of any page, click your profile photo, then click Settings."
	echo "In the user settings sidebar, click SSH and GPG keys."
	echo "Click New SSH key or Add SSH key."
	echo "go to https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/"
	echo "And follow the instructions"

```






