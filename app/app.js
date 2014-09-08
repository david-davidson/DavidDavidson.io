// Set up routing
var portfolioConfig = function($routeProvider, $locationProvider) {
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
        controller: 'contactController',
        templateUrl: 'views/contactView.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
};

// Set up the Portfolio namespace
var Portfolio = angular.module('Portfolio', []).config([
    '$routeProvider', '$locationProvider',
    portfolioConfig]);

// Directives

// Bullet points on /resume
Portfolio.directive('ddBullets', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/directives/bullets.html'
    };
});

// Down arrows
Portfolio.directive('ddArrow', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/arrow.html'
    };
});

// Slider
Portfolio.directive('ddSlider', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/slider.html',
        controller: 'sliderController'
    };
});