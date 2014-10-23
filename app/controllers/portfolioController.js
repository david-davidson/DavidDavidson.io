'use strict';

module.exports = function(app) {
    app.controller('portfolioController',
        [ '$scope', 'portfolioModel',
        function($scope, portfolioModel) {
            $scope.projects = portfolioModel.getProjects();
            $scope.filteredProjects = $scope.projects;
            $scope.copy = portfolioModel.getCopy();

            // To avoid a flicker on slow connections, we build the new array behind the scenes and then switch over all at once, rather than emptying and rebuilding it while it's live in the view.
            $scope.filterProjects = function(projects, inputTechnology) {
                
                var newProjects = [];

                angular.forEach(projects, function(project) {
                    
                    var found = false;
                    // Since we only need one match, let's stop looping after we find it: some, not forEach
                    found = project.technologies.some(function(technologies) {
                        return (technologies.bullet.toLowerCase().indexOf(inputTechnology.toLowerCase()) != -1);
                    });
                    if (found) {
                        newProjects.push(project);
                    }

                });
                return newProjects;
            };

            $scope.$watch('technology', function() {
                // Don't filter when there's nothing to filter against, just to keep the console happy:
                if (typeof $scope.technology !== 'undefined') {
                    $scope.filteredProjects = $scope.filterProjects($scope.projects, $scope.technology);
                }
            });

            $scope.noContentVisible = function() {
                return (!$scope.filteredProjects.length ? true: false);
            };

        }
    ]);
};