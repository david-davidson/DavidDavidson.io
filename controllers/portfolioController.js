Portfolio.controller('portfolioController',
    ['$scope', '$window', 'portfolioModel',
    function ($scope, $window, portfolioModel) {
        $scope.projects = portfolioModel.getProjects();
        $scope.copy = portfolioModel.getCopy();
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);