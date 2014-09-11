'use strict';

module.exports = function(app) {
		app.controller('contactController',
		    [ '$scope', function($scope) {
		        $scope.$on('$viewContentLoaded', app.setHeight());
		    }
		]);
};