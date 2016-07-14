'use strict';
angular.module('personList').
component('personList', {

	templateUrl: 'person-list/person-list.template.html',
	controller: [ 'Person', 
	    function AddressBookController(Person) {
		
		var self = this;

		self.persons = Person.query();

		self.orderProp = 'firstName';

		self.reverse = true;

		self.showSuccessAlert = false;

		self.showErrorAlert = false;

		self.successTextAlert = "Deleted Successfully!";

		self.errorTextAlert = "Error deleting Person!";

		self.deletePerson = function(personIdx){
			
			var personId = self.persons[personIdx].personId;			
			
			console.log("Deleting :"+personId);
			
			var delPerson = {"personId":personId};
			
			self.persons.splice(personIdx,1);
			
			Person.remove(delPerson,
					function(success){
				console.log('Deleted person successfully');
				self.showSuccessAlert = true;
				self.persons.splice(personId,1);
			},
			function(error){
				console.log('Error deleting person');
				self.showErrorAlert = true;
			}
			);
		}

		self.closeAlert = function(value){
			self[value] = !self[value];
		}
	}
	]
});