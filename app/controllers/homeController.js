'use strict';

module.exports = function(app) {
	app.controller('homeController',
	    [ '$scope', 'homeModel',
	    function($scope, homeModel) {
	        $scope.skills = homeModel.getSkills();
	    }
	]);
};