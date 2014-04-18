Portfolio.controller('homeController',
    function ($scope, homeModel) {
        $scope.skills = homeModel.getSkills();
        $scope.values = homeModel.getValues();
        $scope.testimonials = homeModel.getTestimonials();
    }
);