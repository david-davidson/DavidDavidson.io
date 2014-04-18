
var portfolioConfig = function($routeProvider) {
  $routeProvider
    .when('/resume', {
      controller: 'resumeController',
      templateUrl: 'views/resumeView.html'
    })
    // .when('/portfolio', {
    //   controller: 'portfolioController',
    //   templateUrl: 'views/portfolioView.html'
    // })
    .otherwise({
      controller: 'homeController',
      templateUrl: 'views/homeView.html',
      redirectTo: '/'
    })
  ;
};

var Portfolio = angular.module('Portfolio', []).config(portfolioConfig);
