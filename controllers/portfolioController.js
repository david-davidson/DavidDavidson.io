Portfolio.controller('portfolioController',
    ['$scope', '$window', '$filter', 'portfolioModel',
    function ($scope, $window, $filter, portfolioModel) {
        $scope.projects = portfolioModel.getProjects();
        $scope.filteredProjects = $scope.projects;
        $scope.copy = portfolioModel.getCopy();
        $scope.$watch('technology', function() {
            if (typeof $scope.technology != 'undefined') {
                $scope.filteredProjects = [];
                angular.forEach($scope.projects, function(project) { 
                    found = false;
                    angular.forEach(project.technologies, function(technologies) {
                        if (technologies.bullet.toLowerCase().indexOf($scope.technology.toLowerCase()) != -1) {
                            found = true;
                        }
                    });
                    if (found === true) {
                        $scope.filteredProjects.push(project);
                        return true;
                    }
                });
            }
        });
        $scope.noContentVisible = function() {
            if ($scope.filteredProjects.length === 0) {
                return true;
            } else {
                return false;
            }
        };
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);