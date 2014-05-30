Portfolio.controller('resumeController',
    ['$scope', '$window', 'resumeModel',
    function ($scope, $window, resumeModel) {
        $scope.jobs = resumeModel.getJobs();
        $scope.schools = resumeModel.getSchools();
        $scope.isEven = function(index) {
            if (index % 2 === 0) {
                return true;
            }
            else {
                return false;
            }
        };
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);