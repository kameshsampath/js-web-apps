angular.module('core.person').
factory('Person',['$resource',
    function($resource){
	return $resource('data/:personId.json',{},{
		query: {
			method: "GET",
			params: {personId: 'persons'},
			isArray: true
		}
	});
}                  
]);