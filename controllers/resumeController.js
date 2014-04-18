Portfolio.controller('resumeController',
    function ($scope, resumeModel) {
        $scope.jobs = resumeModel.getJobs();
    }
);