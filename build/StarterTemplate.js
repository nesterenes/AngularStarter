(function() {
	'use strict';
	// Initialize module
	var module = angular.module('Starter', []);

	function controller($scope, $http) {

		var model = {
			"AccountName": "Spectrum-Health\\sha18306",
			"FirstName": "Neil",
			"LastName": "Shaffer",
			"MiddleInitial": "E",
			"DisplayName": "Shaffer, Neil E.",
			"PictureUrl": "https://insite.spectrum-health.org:443/ia/Picture/sha18306/",
			"Manager": "Spectrum-Health\\bre79053",
			"WorkEmail": "Neil.Shaffer@spectrumhealth.org"
		}

		$scope.user = model;
		GetUser();

		function GetUser() {
			return	$http.get("StaticJson/user.json")
				.success(function (data) {
					$scope.user2 = data;
					console.log("Success... User2 = " + JSON.stringify(data));
				})
				.error(function (data, status, headers, config) {
					console.log(status + " Data: " + data);
				});
		};


	}
	// Register the controller
	module.controller('StarterCtrl', ['$scope', '$http', controller]);
})();;'use strict';


// Declare app level module which depends on filters, and services
angular.module('StarterApp', [
  'ngRoute',
  'Starter'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Starter', {templateUrl: 'Starter/views/starter.html', controller: 'StarterCtrl'});
  //$routeProvider.when('/call/:CallId', {templateUrl: 'calls/views/call.html', controller: 'CallsCtrl'});
  //$routeProvider.when('/addTask', {templateUrl: 'partials/addTask.html', controller: 'CallsCtrl'});
  //$routeProvider.when('/editCall', {templateUrl: 'partials/editCall.html', controller: 'CallsCtrl'});
  //$routeProvider.when('/addNote', {templateUrl: 'partials/addNote.html', controller: 'CallsCtrl'});
  //$routeProvider.when('/login', {templateUrl: 'login/views/login.html', controller: 'LoginCtrl'});
  $routeProvider.otherwise({redirectTo: '/Starter'});
}]);
