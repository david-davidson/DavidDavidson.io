Portfolio.controller('contactController',
    ['$scope',
    function ($scope) {
    		console.log('contact controller fired');
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);