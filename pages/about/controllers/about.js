'use strict';

angular.module('scotchApp')

	.controller('aboutController', function($scope, dataService) {

	    //get absences list upon pageload
    	dataService.getAbsences(function(response) {
        	$scope.absences = response.data;

    	});


    	$scope.predicate = 'start_date';
    	$scope.reverse = true;
    	
		$scope.order = function(predicate) {
    		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;	    	
	    	$scope.predicate = predicate;
	  	};

        //when user presses delete
        $scope.cancel = function (absence, $index) {
            $scope.absences.splice($index, 1);
        }
    });
