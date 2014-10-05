'use strict';

module.exports = function(app) {
    app.controller('globalController',
        [ '$scope', '$window', '$location', '$timeout',
        function($scope, $window, $location, $timeout) {
            $scope.$on('$routeChangeSuccess', function() {
                if ($location.path() === '/resume') {
                    $scope.page = 'resume';
                    $scope.title = 'R&eacute;sum&eacute; | David Davidson';
                } else if ($location.path() === '/copy') {
                    $scope.page = 'copy';
                    $scope.title = 'Portfolio | David Davidson';
                } else if ($location.path() === '/portfolio') {
                    $scope.page = 'portfolio';
                    $scope.title = 'Portfolio | David Davidson';
                } else if ($location.path() === '/contact') {
                    $scope.page = 'contact';
                    $scope.title = 'Contact | David Davidson';
                } else {
                    $scope.page = 'home';
                    $scope.title = 'David Davidson | web development, copywriting, marketing';
                }

                $window.scrollTo(0,0); // Bumps reader to top of next page
            });

            $scope.today = new Date();

            // On its own, ng-mouseout fires closeDropDown() way too readily, so we add one more boolean: $scope.dropdownHover, which (on mouseout) we 1. set to false *before* the timeout and 2. then check again before actually hiding the dropdown
            $scope.hideDropdown = function() {
                if ($scope.dropdownHover === false) {
                    $scope.dropdown = false;
                }
            };

            $scope.closeDropdown = function() {
                $scope.dropdownHover = false;
                $timeout($scope.hideDropdown, 750);
            };

            $scope.openDropdown = function() {
                $scope.dropdown = true;
                $scope.dropdownHover = true;
            };

        }
    ] );
};