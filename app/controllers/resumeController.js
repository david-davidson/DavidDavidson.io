'use strict';

module.exports = function(app) {
    app.controller('resumeController',
        [ '$scope', 'resumeModel',
        function($scope, resumeModel) {
            $scope.jobs = resumeModel.getJobs();
            $scope.schools = resumeModel.getSchools();
        }
    ]);
};