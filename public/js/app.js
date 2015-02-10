var app = angular.module('textSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html'
	})
	.when('/support', {
		templateUrl: 'pages/support.html',
		controller: 'supportCtrl'
	})
	.otherwise('/');




});