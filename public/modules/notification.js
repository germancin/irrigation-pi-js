"use strict"
var express = require('express');
var app = express();
var twilio = require('twilio');
var accountSid = 'AC4af2d1d9ea89fab22b21ff18a2348c99';
var authToken = '7b1c09ae1c0c491f2b0dead446766d06';


var self = module.exports = {

	sendMMS: function (options) {

		console.log('::Sending Confirmation Message::', options);
		var client = new twilio.RestClient(accountSid, authToken);

		client.messages.create({
		    body: 'Hola esto son buas notificaas',
		    to: '+17543669331',  // Text this number
		    from: '+18134131741', // From a valid Twilio number
		    media: __dirname + '/public/img/office-plant.jpg'
		}, function(err, message) {

		    console.log('Message Sent: ' , message.sid);
		    console.log('errors ', err);
		    return true;

		})

	}
};
