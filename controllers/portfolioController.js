Portfolio.controller('portfolioController',
    ['$scope', 'portfolioModel',
    function ($scope, portfolioModel) {
        $scope.projects = portfolioModel.getProjects();
    }
]);