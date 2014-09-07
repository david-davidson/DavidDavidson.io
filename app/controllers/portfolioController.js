Portfolio.controller('portfolioController',
    ['$scope', 'portfolioModel',
    function ($scope, portfolioModel) {
        console.log('portfolio controller fired');
        $scope.projects = portfolioModel.getProjects();
        $scope.filteredProjects = $scope.projects;
        $scope.copy = portfolioModel.getCopy();
        $scope.$watch('technology', function() {
             // To avoid a flicker on slow connections, we build the new array behind the scenes and then switch over all at once, rather than emptying and rebuilding it while it's live in the view.
            function filterNewProjects() {
                var newProjects = [];
                angular.forEach($scope.projects, function(project) {
                    var found = false;
                    // Since we only need one match, let's stop looping after we find it: some, not forEach
                    found = project.technologies.some(function(technologies) {
                        return (technologies.bullet.toLowerCase().indexOf($scope.technology.toLowerCase()) != -1);
                    });
                    if (found) {
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
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);