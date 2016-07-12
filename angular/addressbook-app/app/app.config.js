'use strict';

angular.
module('addressBookApp').
config(['$locationProvider','$routeProvider','$httpProvider',
        function config($locationProvider,$routeProvider,$httpProvider) {
	$locationProvider.hashPrefix('!');
	
	//handling CORS
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	  
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