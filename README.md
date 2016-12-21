# irrigation-pi-js

## Raspberry Pi Installation

## Installing with WGET 

#### Flash the memory of the raspberry : https://www.udemy.com/rpi-full-stack/learn/v4/t/lecture/3109460?start=555
#### Get into the raspberry / ssh pi@192.168.1.149
#### Password: raspberry
1. ``` wget http://german-cv.com/irrigation/setup.sh && wget http://german-cv.com/irrigation/git-pull-repository.sh && wget http://german-cv.com/irrigation/git-sshkey-setup.sh```

##### Then run in this order
```

 2. sh setup.sh

 3. sh git-sshkey-setup.sh

 4. sh git-pull-repository.sh

```

## Installing by .sh files
##### These are the files  you'll download to your rapberry pi dir /home/pi/.
	1. setup.sh
	2. git-sshkey-setup.sh
	3. git-pull-files.sh


###  setup.sh

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

#### git-sshkey-setup.sh
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


#### git-pull-repository.sh
``` bash

	#!/bin/bash

	git init
	git config --global user.name "German Gonzalez"
	git config --global user.email german.gonzalez@zumba.com
	git remote add origin git@github.com:germancin/irrigation-pi-js.git
	git pull origin master
	git config branch.master.remote origin
	git config branch.master.merge refs/heads/master
	ls

```

## Regular Installation

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


## How to make run our script when boot?

#### Run
``` chmod 777 /etc/rc.local```

``` vim /etc/rc.local```

#### At the end of the file add 
``` sudo node /home/pi/index.js```

##### Make sure to change the permissions back to the rc.local 
##### so is always an executable type of file.
``` sudo chmod u+x /etc/rc.local```

### Note: Add commands below the comment, but leave the line exit 0 at the end, then save the file and exit.
![alt text](http://content.screencast.com/users/germancin/folders/Jing/media/5bce8140-43f4-4a21-bda7-f76eebeb8149/00000203.png "line at the end of the rc.local")


## :::: Resources ::::
***

#### Generating a new SSH key for raspberry Pi.
https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

#### Setting a static ip address to Raspberry Pi.
https://github.com/germancin/irrigation-pi-js/wiki/Static-IP-for-Raspberry.


















