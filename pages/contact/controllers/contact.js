'use strict';

angular.module('scotchApp')

	// create the controller and inject Angular's $scope
	.controller('contactController', function($scope, dataService) {

	    //get absences list upon pageload
    	dataService.getAbsences(function(response) {
        	$scope.absences = response.data;
            console.log($scope.absences);
    	});

		$scope.newArray = 
			{"name" : "",
			"start_date" : "",
			"start_time" : "",
			"end_date" : "",
			"end_time" : "",
			"type" : "",
			"notes" : "",
			"status" : ""}
			;

		$scope.reset = function(absence){
			$scope.newArray.name = "";	
			$scope.newArray.type = "";
			$scope.newArray.notes = "";
			$scope.newArray.start_date = "";	
			$scope.newArray.start_time = "";
			$scope.newArray.end_date = "";	
			$scope.newArray.end_time = "";
			$scope.newArray.notes = "";	
		}

      	$scope.update = function(absence) {
      		console.log("This will push another object into the array.");
      		$scope.new = $scope.newArray;
      		$scope.absences.push($scope.new);
            console.log($scope.absences);
            alert("Your absence has been requested."); 
            //$scope.reset($scope.new);		
      	};

    })
