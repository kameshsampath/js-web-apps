angular.module('personDetails').component('personDetails',{
	templateUrl: 'person-details/person-details.template.html',
	controller: ['$routeParams','Person',
	             function PersonDetailsController($routeParams,Person){
					var self = this;
					this.person = Person.get({personId: $routeParams.personId});
				}
	]
});