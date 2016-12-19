"use strict"
var express = require('express');
var app = express();
var twilio = require('twilio');
var accountSid = 'AC4af2d1d9ea89fab22b21ff18a2348c99';
var authToken = '7b1c09ae1c0c491f2b0dead446766d06';


var self = module.exports = {

	sendMMS: function (options) {

		var client = new twilio.RestClient(accountSid, authToken);

		client.messages.create({
		    body: 'The plant got irrigated',
		    to: '+17543669331',  // Text this number
		    from: '+18134131741', // From a valid Twilio number
		    mediaUrl: "https://s-media-cache-ak0.pinimg.com/236x/e1/9a/72/e19a722a96542551e4cc68ce079baace.jpg"
		}, function(err, message) {

		    if(err) {
		        console.error(err.message);
		        return false;
		    }
		    
		    console.log('Message Sent: ' , message);
		    return true;
		})

	}
};
