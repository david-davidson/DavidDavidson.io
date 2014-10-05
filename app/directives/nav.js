'use strict';

// Navigation
module.exports = function(app) {
	app.directive('ddNav', function() {
	    return {
	        restrict: 'E',
	        templateUrl: '../views/directives/navDirective.html'
	    };
	});
};