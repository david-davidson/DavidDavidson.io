Portfolio.controller('homeController',
    ['$scope', 'homeModel',
    function ($scope, homeModel) {
        $scope.skills = homeModel.getSkills();
        $scope.testimonials = homeModel.getTestimonials();
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);