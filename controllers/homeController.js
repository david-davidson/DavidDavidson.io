Portfolio.controller('homeController',
    ['$scope', '$window', 'homeModel',
    function ($scope, $window, homeModel) {
        $scope.skills = homeModel.getSkills();
        $scope.values = homeModel.getValues();
        $scope.testimonials = homeModel.getTestimonials();
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);