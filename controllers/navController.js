Portfolio.controller('navController',
    ['$scope', '$location', '$timeout',
    function ($scope, $location, $timeout) {
        $scope.$on('$routeChangeSuccess', function () {
            var currentPage = $location.path();
            if (currentPage == '/resume') {
                $scope.page = 'resume';
                $scope.title = 'R&eacute;sum&eacute; | David Davidson';
            }
            else if (currentPage == '/copy') {
                $scope.page = 'copy';
                $scope.title = 'Portfolio | David Davidson';
            }
            else if (currentPage == '/portfolio') {
                $scope.page = 'portfolio';
                $scope.title = 'Portfolio | David Davidson';
            }
            else if (currentPage == '/contact') {
                $scope.page = 'contact';
                $scope.title = 'Contact | David Davidson';
            }
            else {
                $scope.page = 'home';
                $scope.title = 'David Davidson | web development, copywriting, marketing';
            }
        });
        // On its own, ng-mouseout fires closeDropDown() way too readily, so we add one more boolean: $scope.dropdownHover, which (on mouseout) we 1. set to false *before* the timeout and 2. then check again before actually hiding the dropdown
        $scope.hideDropdown = function() {
            if ($scope.dropdownHover === false) {
                $scope.dropdown = false;
            }
        };
        $scope.closeDropdown = function() {
            $scope.dropdownHover = false;
            $timeout($scope.hideDropdown, 750); // 750ms delay after leaving the dropdown
        };
        $scope.openDropdown = function() {
            $scope.dropdown = true;
            $scope.dropdownHover = true;
        };
    }
]);