Portfolio.controller('contactController',
    ['$scope', '$window',
    function ($scope, $window) {
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);