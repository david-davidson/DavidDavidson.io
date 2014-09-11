'use strict';

// Down arrows
module.exports = function(app) {
	app.directive('ddArrow', function() {
	    return {
	        restrict: 'E',
	        templateUrl: '../views/directives/arrowDirective.html'
	    };
	});
};