var gpio = require('rpi-gpio');
var cron = require('cron').CronJob;
var pin = 16;
var delay = 5000;
var timeZone = 'America/New_York';

module.exports = {

	setCron: function () {

		//new cron('00 06 07 * * 6', function() {

			console.log('Start Watering Plant.')
			wateringPlant();

		//}, null, true, timeZone);

	},
	wateringPlant: function() {

	    gpio.setup(pin, gpio.DIR_OUT, function(err) {

	        gpio.write(pin, true, function(err) {
	            if (err) throw err
				gpio.read(pin, function(err, value) {
					if(value == true){
						turnOff()
					}
				})
	        }) 
	    })
	}
};













