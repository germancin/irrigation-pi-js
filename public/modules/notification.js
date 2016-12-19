"use strict"
var express = require('express');
var app = express();

var accountSid = 'AC4af2d1d9ea89fab22b21ff18a2348c99';
var authToken = '7b1c09ae1c0c491f2b0dead446766d06';


var self = module.exports = {

	sendMMS: function (options, res) {

		var twilio = require('twilio');
		var twiml = new twilio.TwimlResponse();

		twiml.message(function() {

			  this.body('The Robots are coming! Head for the hills!');
			  this.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');

	    });

	    res.writeHead(200, {'Content-Type': 'text/xml'});
	    res.end(twiml.toString());

	}
};
