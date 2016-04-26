'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope
	.controller('contactController', function($scope, dataService) {

		$scope.absence = {"name" : "",
			"start_date" : "",
			"start_time" : "",
			"end_date" : "",
			"end_time" : "",
			"type" : "",
			"notes" : "",
			"status" : ""};

		$scope.reset = function(absence){
			$scope.absence.name = "";	
			$scope.absence.type = "";
			$scope.absence.notes = "";
			$scope.absence.start_date = "";	
			$scope.absence.start_time = "";
			$scope.absence.end_date = "";	
			$scope.absence.end_time = "";
			$scope.absence.notes = "";	
		}

      	$scope.update = function(absence) {
      		console.log("This will push another object into the array.");
      	};

    })
