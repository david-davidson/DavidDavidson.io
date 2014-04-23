Portfolio.controller('sliderController',
    function ($scope, $timeout, homeModel) {
        // Get the testimonials
        $scope.testimonials = homeModel.getTestimonials();
        // Start on the first slider...
        $scope.currentIndex = 0; 
        // ...and then increment from there
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
        // Hide all the testimonials as default
        $scope.$watch('currentIndex', function() {
            $scope.testimonials.forEach(function(item) {
                item.visible = false; 
            });
            // Then show the current testimonial
            $scope.testimonials[$scope.currentIndex].visible = true; 
        });
        // Fired when someone clicks on a nav dot
        $scope.activate = function(index) {
            $scope.currentIndex = index;
        };
        // Tick over every 15 seconds
        var sliderFunc = function() {
            timer = $timeout(function() {
                next();
                timer = $timeout(sliderFunc, 0);
            }, 5000);
        };
        sliderFunc();
    }
);   