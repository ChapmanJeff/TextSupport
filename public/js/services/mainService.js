var app = angular.module('textSupport');

app.service('mainService', function($http) {

this.postReq = function(response, number) {
	return $http({
		method: 'POST',
		url: 'http://localhost:8080/api/support/messages',
		data: {
			number: number,
			response: response
		}
	})
}

});