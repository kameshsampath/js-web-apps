angular.module('core.person').
factory('Person',['$resource',
function($resource){
	return $resource('http://localhost:8080/rest/person/:personId',{}, {
		query: { method: "GET", isArray: true },
		save: { method: "POST","contentType": "application/json"},
		get: { method: "GET"},
		remove: { method: "DELETE"},
		update: { method: "PUT"}
	});
}                  
]);