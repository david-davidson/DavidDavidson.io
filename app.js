// Set up routing
var portfolioConfig = function($routeProvider) {
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
};

// Set up the Portfolio namespace
var Portfolio = angular.module('Portfolio', []).config(portfolioConfig);

// Set up bullet-points directive
Portfolio.directive('ddBullets', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/bulletsDirective.html'
    };
});

// Set up the slider directive
Portfolio.directive('ddSlider', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/sliderDirective.html',
        controller: 'sliderController'
    };
});