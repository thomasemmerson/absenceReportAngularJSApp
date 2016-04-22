'use strict';

angular.module('scotchApp')

.service('dataService', function($http) {

    this.getAbsences = function(callback) {
        $http.get('../../../mock/absences.js').then(callback)
    };

});