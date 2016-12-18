var express = require('express');
var gpio = require('rpi-gpio');
var path = require('path');
var app = express();
var pin = 16;
var port = process.env.PORT || 80;

app.use(express.static(__dirname +'/public'));

require('/public/auto-irrigation.js').setCron();

app.get('/', function(req, res) {

	res.sendFile(__dirname + '/public/index.html');
		
});

app.get('/state/:state', function(req, res) {

		if(req.params.state === 'on') {

			console.log('going to setup ON')

			gpio.setup(pin, gpio.DIR_OUT, function(err) {

		        gpio.write(pin, true, function(err) {

		            if (err) throw err
		        	res.redirect(req.get('referer'));
		        	console.log('Led => ON')

		        })
			})
		}

		if(req.params.state === 'off') {

			console.log('going to setup OFF')

			gpio.setup(pin, gpio.DIR_OUT, function(err) {

				gpio.write(pin, false, function(err) {

					if (err) throw err
			    	res.redirect(req.get('referer'))
			    	console.log('Led => OFF')

			    })

			})
		}

		return;
	
});

app.listen(port);


