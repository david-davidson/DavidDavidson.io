Portfolio.controller('portfolioController',
    ['$scope', 'portfolioModel',
    function ($scope, portfolioModel) {
        $scope.projects = portfolioModel.getProjects();
        $scope.filteredProjects = $scope.projects;
        $scope.copy = portfolioModel.getCopy();
        $scope.$watch('technology', function() {
             // To avoid a flicker on slow connections, we build the new array behind the scenes and then switch over all at once, rather than emptying and rebuilding it while it's live in the view.
            function filterNewProjects() {
                newProjects = [];
                escapedTechnology = $scope.technology.replace(/[^\w]/g, '\\$&');
                angular.forEach($scope.projects, function(project) { 
                    found = false;
                    angular.forEach(project.technologies, function(technologies) {
                        if (technologies.bullet.toLowerCase().search(escapedTechnology.toLowerCase()) != -1) {
                            found = true;
                        }
                    });
                    if (found === true) {
                        newProjects.push(project);
                    }
                });
                return newProjects;
            }
            // Don't filter when there's nothing to filter against, just to keep the console happy:
            if (typeof $scope.technology != 'undefined') {
                $scope.filteredProjects = filterNewProjects();
            }
        });
        $scope.noContentVisible = function() {
            if ($scope.filteredProjects.length === 0) {
                return true;
            } else {
                return false;
            }
        };
    }
]);