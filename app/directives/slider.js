'use strict';

// "Kind words" slider
module.exports = function(app) {
	app.directive('ddSlider', function() {
	    return {
	        restrict: 'E',
	        templateUrl: '../views/directives/sliderDirective.html',
	        controller: 'sliderController'
	    };
	});
};