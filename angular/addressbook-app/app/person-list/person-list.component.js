'use strict';
angular.module('personList').
component('personList',{
	templateUrl: 'person-list/person-list.template.html',
	controller: function AddressBookController(Person){
		var self = this;
		this.persons = Person.query();
		self.orderProp = 'firstName';
	}
});