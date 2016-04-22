'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope

	.controller('contactController', function($scope) {
	    $scope.message = 'Contact me! My e-mail address is thomasemmerson@sky.com.';
	})