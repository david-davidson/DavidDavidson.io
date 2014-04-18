Portfolio.controller('navController',
    function ($scope, $location, $routeParams) {
        var currentPage = $location.path();
        if (currentPage == "/resume") {
            $scope.page = "resume";
        }
        else if (currentPage == "/portfolio") {
            $scope.page = "portfolio";
        }
        else if (currentPage == "/contact") {
            $scope.page = "contact";
        }
        else {
            $scope.page = "home";
        }
        console.log($scope.page);
    }
);