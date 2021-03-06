'use strict';

(function() {
    require('angular/angular');
    require('angular-route/angular-route');

    var Portfolio = angular.module('Portfolio', [
            'ngRoute'
        ]);

    // Models
    require('./models/homeModel')(Portfolio);
    require('./models/portfolioModel')(Portfolio);
    require('./models/resumeModel')(Portfolio);

    // Controllers
    require('./controllers/globalController')(Portfolio);
    require('./controllers/homeController')(Portfolio);
    require('./controllers/portfolioController')(Portfolio);
    require('./controllers/resumeController')(Portfolio);
    require('./controllers/sliderController')(Portfolio);

    // Filters
    require('./filters/toHTML')(Portfolio);

    // Directives
    require('./directives/nav')(Portfolio);
    require('./directives/arrow')(Portfolio);
    require('./directives/slider')(Portfolio);

    // Routes
    Portfolio.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'views/homeView.html'
        })
        .when('/resume', {
            controller: 'resumeController',
            templateUrl: 'views/resumeView.html'
        })
        .when('/copy', {
            controller: 'portfolioController',
            templateUrl: 'views/copyView.html'
        })
        .when('/portfolio', {
            controller: 'portfolioController',
            templateUrl: 'views/portfolioView.html'
        })
        .when('/contact', {
            templateUrl: 'views/contactView.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    } ]);

}());