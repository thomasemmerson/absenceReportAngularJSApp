'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope
	.controller('contactController', function($scope, dataService) {


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
      		console.log("Function to push new object into array will fire here.");
      	};
      	

    })
