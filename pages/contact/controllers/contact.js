'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope

	.controller('contactController', function($scope) {
	    $scope.message = 'Contact us! JK. This is just a demo.';
	})