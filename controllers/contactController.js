Portfolio.controller('contactController',
    ['$scope',
    function ($scope) {
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);