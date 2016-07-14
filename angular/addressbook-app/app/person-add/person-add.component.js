angular.module('personAdd').component('personAdd',{
	templateUrl: 'person-add/person-add.template.html',
	controller: ['Person','$scope',
	             
        function PersonController(Person,$scope){
			var self = this;
			
			self.successTextAlert = "Saved Successfully!";
			self.errorTextAlert = "Error saving Person!";
			
			self.showSuccessAlert = false;
			
			self.showErrorAlert = false;
			
			self.countries = [{"id":"IN","name":"India"},
			                  {"id":"US","name":"US"},
			                  {"id":"EN","name":"England"},
			                  {"id":"FI","name":"Finland"},
			                  {"id":"SG","name":'Singapore'}];
			
			self.person = {"firstName":"X","lastName":"Y"};
		
			self.person.addresses = [{"id":"address1","emailAddress":'a@example.com',"city":"c","country":"US"}];
			
			self.removeAddress = function(){
			   console.log("Remove Address");
			   var lastAddressNo = self.person.addresses.length-1;
			   self.person.addresses.splice(lastAddressNo);
			}
			
			self.addAddress = function(){
				console.log("Add Address");
				var newAddressNo = self.person.addresses.length+1;
				self.person.addresses.push({'id':'address'+newAddressNo});
			}
			
			self.save = function(){
				console.log("Saving Person "+self.person);
				Person.save(this.person, 
					function(success){
						console.log("Success saving record : "+success);
						self.showSuccessAlert = true;
				   },
				   function(error){
					   console.log("Error saving record : "+error);
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