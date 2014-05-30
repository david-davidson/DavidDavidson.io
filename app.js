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
        templateUrl: 'views/contactView.html',
        controller: 'contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
};

// Set up the Portfolio namespace
var Portfolio = angular.module('Portfolio', []).config(portfolioConfig);

// Directives

// Bullet points on /resume
Portfolio.directive('ddBullets', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/directives/bulletsDirective.html'
    };
});

// Down arrows
Portfolio.directive('ddArrow', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/arrowDirective.html'
    };
});

// Slider
Portfolio.directive('ddSlider', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/sliderDirective.html',
        controller: 'sliderController'
    };
});