'use strict';
// script.js

    // create the module and name it absenceReportAngularJSApp
    // also include ngRoute for all our routing needs
    var absenceReportAngularJSApp = angular.module('absenceReportAngularJSApp', ['ngRoute']);

    // configure our routes
    absenceReportAngularJSApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home/home.html',
                controller  : "mainController as main"
            })

            // route for the about page
            .when('/absences', {
                templateUrl : 'pages/absences/absences.html',
                controller  : "absencesController as absences"
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/book/book.html',
                controller  : "bookController as book"
            });
    });
