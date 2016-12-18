"use strict"

var gpio = require('rpi-gpio');
var cron = require('cron').CronJob;
var pin = 16;
var delay = 5000;
var timeZone = 'America/New_York';


var self = module.exports = {

	setCron: function () {

		console.log('====Watering Plant - Powered by: RASPBERRY PI====');

		new cron('00 38 13 * * 0', function() {

			console.log('Start Watering Plant.')
			self.wateringPlant();

		}, null, true, timeZone);

	},
	wateringPlant: function() {

	    gpio.setup(pin, gpio.DIR_OUT, function(err) {
		        gpio.write(pin, true, function(err) {
					if (err) throw err

					//remains on for the delay time.
					setTimeout(function() {
						self.turnOff();
					}, delay)
		        })
	    })

	},
	turnOff: function() {

		console.log(':::The Irrigation is About To Finish::: ');
		gpio.write(pin, 0, function(err) {
			if (err) throw err
			self.sendMessage()
		})

	},
	sendMessage: function () {

		var twilio = require('twilio');
		var accountSid = 'AC4af2d1d9ea89fab22b21ff18a2348c99';
		var authToken = '7b1c09ae1c0c491f2b0dead446766d06';  
		var client = new twilio.RestClient(accountSid, authToken)

		console.log('::Sending Confirmation Message::');

		client.messages.create({
		    body: 'Your Plant just got irrigated.',
		    to: '+17543669331',  // Text this number
		    from: '+18134131741' // From a valid Twilio number
		}, function(err, message) {

		    console.log('Message Sent: ' + message.sid)

		})

	}
};















