'use strict';

module.exports = function(app) {
    app.controller('sliderController',
        [ '$scope', '$timeout', 'homeModel', '$interval',
        function($scope, $timeout, homeModel, $interval) {
            $scope.testimonials = homeModel.getTestimonials();
            $scope.index = 0;
            $scope.timer = 0;
            $scope.frequency = 15; // seconds per slide

            // Activate the next slide, and reset the clock
            var next = function(currentIndex, length) {
                if (currentIndex === length - 1) {
                    // From final slide, tick over to first
                    return 0;
                } else {
                    // Otherwise, just add one
                    return currentIndex + 1;
                }
            };

            // Fire when someone clicks a nav dot
            $scope.activate = function(index) {
                $scope.index = index;
                $scope.timer = 0;
            };

            // Start a one-second background timer, and ...
            $interval(function() {
                $scope.timer++;
            }, 1000);

            // ... when 15 seconds are up, change slides
            $scope.$watch('timer', function() {
                if ($scope.timer >= $scope.frequency) {
                    $scope.timer = 0;
                    $scope.index = next($scope.index, $scope.testimonials.length);
                }
            });

            // Hide all the testimonials as default
            $scope.$watch('index', function() {
                $scope.testimonials.forEach(function(slide) {
                    slide.visible = false;
                });
                // But show the current testimonial
                $scope.testimonials[$scope.index].visible = true;
            });
        }
    ]);
};