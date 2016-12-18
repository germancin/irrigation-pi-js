var gpio = require('rpi-gpio');
var cron = require('cron').CronJob;
var pin = 16;
var delay = 5000;
var timeZone = 'America/New_York';

module.exports = {
  foo: function () {
    // whatever
    console.log('Got  into foo' + timeZone);
  },
  bar: function () {
    // whatever
  }
};