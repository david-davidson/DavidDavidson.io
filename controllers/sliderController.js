Portfolio.controller('sliderController',
    function ($scope, $timeout, homeModel) {
        // Get the testimonials
        $scope.testimonials = homeModel.getTestimonials();
        $scope.currentIndex = 0; 
        function next() {
            if ($scope.currentIndex == $scope.testimonials.length - 1) {
                // From final slide, tick over to first
                $scope.currentIndex = 0;
            }
            else {
            // Otherwise, just add one
            $scope.currentIndex ++;
            }
        };
        // Fire when someone clicks a nav dot
        $scope.activate = function(index) {
            $scope.currentIndex = index;
            $scope.timer = 0;
        };
        // Build a one-second timer...
        $scope.timer = 0;
        function newTimer() {
            $scope.timer++;
            $timeout(newTimer, 1000);
        };
        // ... and start it
        newTimer();
        // When 15 seconds are up, change slides
        $scope.$watch('timer', function() {
            if ($scope.timer > 15) {
                $scope.timer = 0;
                next();
            }
        });
        // Hide all the testimonials as default
        $scope.$watch('currentIndex', function() {
            $scope.testimonials.forEach(function(item) {
                item.visible = false; 
            });
            // Then show the current testimonial
            $scope.testimonials[$scope.currentIndex].visible = true; 
        });
    }
);   