'use strict';

module.exports = function(app) {
		app.controller('homeController',
		    [ '$scope', 'homeModel', 'setWindowHeight',
		    function($scope, homeModel, setWindowHeight) {
		        $scope.skills = homeModel.getSkills();
		        $scope.testimonials = homeModel.getTestimonials();

		        $scope.$on('$viewContentLoaded', setWindowHeight());
		    }
		]);
};