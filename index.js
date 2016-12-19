var express = require('express');
var gpio = require('rpi-gpio');
var path = require('path');
var app = express();
var pin = 16;
var port = process.env.PORT || 80;

require(__dirname + '/public/auto-irrigation.js').setCron();

app.use(express.static(__dirname +'/public'));

app.get('/', function(req, res) {

	res.sendFile(__dirname + '/public/index.html');
		
});

app.get('/state/:state', function(req, res) {

		console.log('resp', req);

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

app.get('/notification/:options', function(req, res) {


	console.log('notifications nodejs', req.params.options);
	return;

});

app.get('/reboot/:reboot', function(req, res) {

	console.log('llego al nodejs express');
	console.log(res);

	if(req.params.reboot === 'true') {

		//reboot the device
		console.log('rebiiting');


	}

});

console.log('Listening Port...' + port);
app.listen(port);


