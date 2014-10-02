'use strict';

module.exports = function(app) {
    app.controller('resumeController',
        [ '$scope', 'resumeModel', 'setWindowHeight',
        function($scope, resumeModel, setWindowHeight) {
            $scope.jobs = resumeModel.getJobs();
            $scope.schools = resumeModel.getSchools();

            $scope.isEven = function(index) {
                if (index % 2 === 0) {
                    return true;
                } else {
                    return false;
                }
            };

            // $scope.$on('$viewContentLoaded', setWindowHeight());
        }
    ]);
};