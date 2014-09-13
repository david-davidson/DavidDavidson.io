'use strict';

module.exports = function(app) {
		app.controller('contactController',
		    [ '$scope', 'setWindowHeight', function($scope, setWindowHeight) {
		        // $scope.$on('$viewContentLoaded', app.setWindowHeight());
		        $scope.$on('$viewContentLoaded', setWindowHeight());
		    }
		]);
};