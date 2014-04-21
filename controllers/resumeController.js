Portfolio.controller('resumeController',
    function ($scope, resumeModel) {
        $scope.jobs = resumeModel.getJobs();
        $scope.schools = resumeModel.getSchools();
        $scope.isEven = function(index) {
        if (index % 2 == 0) {
            return true;
        }
        else {
            return false;
        };
    };
    }
);