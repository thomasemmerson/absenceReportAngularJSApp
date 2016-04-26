'use strict';
// script.js

    // create the module and name it scotchApp
    // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home/home.html',
                controller  : "mainController as main"
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about/about.html',
                controller  : "aboutController as about"
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact/contact.html',
                controller  : "contactController as contact"
            });
    });
