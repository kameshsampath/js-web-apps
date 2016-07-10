'use strict';

angular.
module('addressBookApp').
config(['$locationProvider','$routeProvider',
        function config($locationProvider,$routeProvider) {
	$locationProvider.hashPrefix('!');
	
	$routeProvider.
	when('/persons', {
		template: '<person-list></person-list>'
	}).
	when('/persons/:personId', {
		template: '<person-details></person-details>'
	}).
	otherwise('/persons');
}

]);