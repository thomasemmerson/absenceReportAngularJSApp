'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope
	.controller('mainController', function($scope) {
	    // create a message to display in our view
	    $scope.message = 'Everyone come and see how good I look!';
	})