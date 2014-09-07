Portfolio.controller('homeController',
    ['$scope', 'homeModel',
    function ($scope, homeModel) {
        console.log('homepage controller fired');
        $scope.skills = homeModel.getSkills();
        $scope.values = homeModel.getValues();
        $scope.testimonials = homeModel.getTestimonials();
        $scope.$on('$viewContentLoaded', setHeight());
    }
]);