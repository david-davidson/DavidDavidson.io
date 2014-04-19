
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
  .otherwise({
    controller: '404Controller',
    redirectTo: '/'
  })
  ;
};
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
      scope.currentIndex = 0; // Start on the first slider
      // Then
      scope.next = function() {
        if (scope.currentIndex == scope.testimonials.length - 1) {
          scope.currentIndex = 0;
        }
        else {
          scope.currentIndex++;
        }
      };
      scope.$watch('currentIndex', function() {
        scope.testimonials.forEach(function(item) {
          item.visible = false; // make every image invisible
        });
        scope.testimonials[scope.currentIndex].visible = true; // make the current image visible
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
        $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
      });
    },
    templateUrl: 'views/sliderView.html'
  };
});