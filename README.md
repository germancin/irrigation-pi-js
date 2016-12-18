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








