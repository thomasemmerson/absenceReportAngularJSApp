'use strict';

angular.module('absenceReportAngularJSApp')

	// create the controller and inject Angular's $scope
	.controller('mainController', function($scope, dataService) {

	    //get absences list upon pageload
    	dataService.getAbsences(function(response) {
        	$scope.absences = response.data;
        	console.log($scope.absences);
    	});

	})