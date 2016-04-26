'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope



	.controller('contactController', function($scope) {
		//console.log($scope.absence);		
		$scope.absence = {"name" : "", "start_date" : "", "start_time" : "", "end_date" : "", "end_time" : "", "type" : "", "notes" : "", "status" : ""},
		//console.log($scope.absence);

		//console.log($scope.absences);
		$scope.reset = function(absence){
			console.log($scope.absence);	
			$scope.absence.name = "";	
			$scope.absence.type = "";
			$scope.absence.notes = "";
			$scope.absence.start_date = "";	
			$scope.absence.start_time = "";
			$scope.absence.end_date = "";	
			$scope.absence.end_time = "";
			$scope.absence.notes = "";	
			console.log($scope.absence);	
		}

      	$scope.update = function(absences) {
        	console.log(absences);
        	$scope.reset();
      	};

    })
