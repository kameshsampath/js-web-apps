'use strict';

angular.
module('addressBookApp').
config(['$locationProvider','$routeProvider','$httpProvider',
        function config($locationProvider,$routeProvider,$httpProvider) {
	$locationProvider.hashPrefix('!');
	
	$routeProvider.
	when('/persons', {
		template: '<person-list></person-list>'
	}).
	when('/persons/:personId', {
		template: '<person-details></person-details>'
	}).
	when('/person/add', {
		template: '<person-add></person-add>'
	}).
	otherwise('/persons');
}

]);