
var portfolioConfig = function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeController',
      templateUrl: 'views/homeView.html',
    })
    .when('/resume', {
      controller: 'resumeController',
      templateUrl: 'views/resumeView.html'
    })
    // .when('/portfolio', {
    //   controller: 'portfolioController',
    //   templateUrl: 'views/portfolioView.html'
    // })
    .otherwise({
      controller: '404Controller',
      redirectTo: '/'
    })
  ;
};

var Portfolio = angular.module('Portfolio', []).config(portfolioConfig);
