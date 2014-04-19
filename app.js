// Set up routing
var portfolioConfig = function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'homeController',
    // controller: 'navController',
    templateUrl: 'views/homeView.html',
  })
  .when('/resume', {
    controller: 'resumeController',
    // controller: 'navController',
    templateUrl: 'views/resumeView.html'
  })
  .when('/portfolio', {
    controller: 'portfolioController',
    templateUrl: 'views/portfolioView.html'
  })
  .otherwise({
    redirectTo: '/'
  })
  ;
};

// Set up the Portfolio namespace
var Portfolio = angular.module('Portfolio', []).config(portfolioConfig);

// Define the slider directive
Portfolio.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      testimonials: '='
    },
    link: function(scope, elem, attrs) {
      // Start on the first slider, and then increment from there
      scope.currentIndex = 0; 
      scope.next = function() {
        if (scope.currentIndex == scope.testimonials.length - 1) {
          scope.currentIndex = 0;
        }
        else {
          scope.currentIndex++;
        }
      };
      // Hide every testimonial
      scope.$watch('currentIndex', function() {
        scope.testimonials.forEach(function(item) {
          item.visible = false; 
        });
        // Then show the current testimonial
        scope.testimonials[scope.currentIndex].visible = true; 
      });
      scope.activate = function(index) {
        scope.currentIndex = index;
      };
      var timer;
      var sliderFunc = function() {
        timer = $timeout(function() {
          scope.next();
          timer = $timeout(sliderFunc, 0);
        }, 15000);
      };
      sliderFunc();
      scope.$on('$destroy', function() {
        $timeout.cancel(timer);
      });
    },
    templateUrl: 'views/sliderView.html'
  };
});