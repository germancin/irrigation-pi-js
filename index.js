var express = require('express');
var gpio = require('rpi-gpio');
var path = require('path');
var app = express();
var exec = require('child_process').execFile;
var notification = require(__dirname + '/public/modules/notification.js');
var pin = 16;
var port = process.env.PORT || 80;

require(__dirname + '/public/auto-irrigation.js').setCron();

app.use(express.static(__dirname +'/public'));

app.get('/', function(req, res) {

	res.sendFile(__dirname + '/public/index.html');
		
});

app.get('/state/:state', function(req, res) {

		if(req.params.state === 'on') {

			console.log('ON');

			gpio.setup(pin, gpio.DIR_OUT, function(err) {

		        gpio.write(pin, true, function(err) {

		            if (err) throw err
		        	res.redirect(req.get('referer'));
		        	console.log('GPIO => ON');

		        })
			})
		}

		if(req.params.state === 'off') {

			console.log('OFF')

			gpio.setup(pin, gpio.DIR_OUT, function(err) {

				gpio.write(pin, false, function(err) {

					if (err) throw err
			    	res.redirect(req.get('referer'));
			    	console.log('GPIO => OFF');

			    })

			})
		}

		return;
	
});

app.get('/notification', function(req, res) {

	notification.sendImageMsg(req.query, function (callback) {

		res.send(JSON.stringify({ sent: callback[0].sent }));

	});


});

app.get('/reboot', function(req, res) {

	console.log('llego al nodejs express');
	console.log(res);
	var file = __dirname + '/public/cmds/reboot-device.sh';

	if(req.query.reboot === 'true') {

		//reboot the device
		console.log('rebiiting');


		var cmd = execFile;

		exec(file, function(error, stdout, stderr) {
		  // command output is in stdout
		});


	}

});

console.log('Listening Port...' + port);
app.listen(port);


