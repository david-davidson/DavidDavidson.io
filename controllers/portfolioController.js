
Portfolio.controller('portfolioController',
    function ($scope, portfolioModel) {
        $scope.projects = portfolioModel.getProjects();
    }
);