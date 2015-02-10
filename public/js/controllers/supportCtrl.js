var app = angular.module('textSupport');

app.controller('supportCtrl', function ($scope, mainService, $firebase) {

var sync = $firebase(new Firebase('https://textsupportjeff.firebaseio.com/numbers'));
$scope.numbers = sync.$asArray();
console.log($scope.numbers)

$scope.postReq = function(response, num, number) {
	console.log(response, num);
	mainService.postReq(response, num).then(function(res) {
		$scope.response = '';
		number.response = response;
		number.responseTime
		$scope.numbers.$save(number);
	});
}

});