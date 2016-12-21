var app = angular.module('App', ['ngResource']);

//angular.module('App').controller('MainController', ctrlFunc);

app.controller('MainController', ['$scope','stateDevice', 'rebootService', 'notificationService', function($scope, stateDevice, rebootService, notificationService) {

    $scope.status = false;

	$scope.setState = function(state){

		if (state === 'on'){
		 	//turn on the led
		 	stateDevice.on().$promise.then(function(response) {

		 		console.log('Promise State: ON');
                $scope.status = true;

			});

		}else{
		 	//turnoff the led
		 	stateDevice.off().$promise.then(function(response) {

		 		console.log('Promise State: OFF');
                $scope.status = false;

			});
		}

	};

    $scope.rebootDevice = function () {

        console.log(' Reboot Device ');

        $scope.rebooting = true;
        rebootService.rebootDevice();

    };

    $scope.takePicture = function () {

        $scope.showImage = true;

    };

    $scope.sendMsgImage = function(){

        console.log('got into testImage');
        notificationService.sendMsgImage().$promise.then(function(response) {

            console.log('llego notification response: ' ,response);
            $scope.msgSent = response.sent;

        });

    };

}]);

app.service('stateDevice', function(ServiceStateDevice) {
	
	var self = {

        'on': function(){

        	console.log('setting the led on');

        	var params = {
                'state': 'on',
            };

            var response =  ServiceStateDevice.details(params)

            return response

        },
        'off': function() {
        	console.log('setting the led OFF');

        	var params = {
                'state': 'off',
            };

            var response =  ServiceStateDevice.details(params)

            return response
        },
	}

    return self;
});

app.service('rebootService', function(rebootFactory) {

    var self = {

        'reboot' : false,
        'rebootDevice': function(){

            console.log('rebooting device now...');
            self.reboot = true;

            var params = {
                'reboot': self.reboot,
            };

            var response =  rebootFactory.rebootDev(params);

            return response

        },

    }

    return self;
});

app.service('notificationService', function(notificationFactory) {

    var self = {

        'sendMsgImage': function(){

            console.log('going to semd the request to the notificationFactory... to send MMS1');

            var params = {
                'from': '123123123', //will be dynamic
                'to': '12341233', //will be dynamic
                'msg': 'Image Plant Irrigator'
            };

            var response =  notificationFactory.sendMessage(params);

            return response

        },

    }

    return self;
});

// ::::::::::::::: FACTORIES :::::::::::::::
app.factory('notificationFactory', ['$resource', function($resource) {
    return $resource("/notification/", null, {
        sendMessage: {
            method: 'GET'
        }
    });
}]);

app.factory('ServiceStateDevice', ['$resource', function($resource) {
    return $resource("/state/:state", {state: '@state'}, {
        details: {
            method: 'GET'
        }
    });
}]);

app.factory('rebootFactory', ['$resource', function($resource) {
    return $resource("/reboot/", {action: '@reboot'}, {
        rebootDev: {
            method: 'GET'
        }
    });
}]);




