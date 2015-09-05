(function() {
	'use strict';
	// Initialize module
	var module = angular.module('Starter', []);

	function controller($scope, $http) {

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
})();