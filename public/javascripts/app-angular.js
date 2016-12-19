var app = angular.module('App', ['ngResource']);

//angular.module('App').controller('MainController', ctrlFunc);

app.controller('MainController', ['$scope','stateDevice', function($scope, stateDevice) {

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

    $scope.testImage = function(){
        console.log('got into testImage');
        $scope.showImage = true;
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

app.factory('ServiceStateDevice', ['$resource', function($resource) {
    return $resource("/state/:state", {state: '@state'}, {
        details: {
            method: 'GET'
        }
    });
}]);


