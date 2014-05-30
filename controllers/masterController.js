Portfolio.controller('masterController',
    ['$scope', '$window', '$location', '$timeout',
    function ($scope, $window, $location, $timeout) {
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
        setHeight = function() {
            totalHeight = $(window).height();
            navHeight = $('nav').height();
            h1Height = $('h1').height();
            topPadding = totalHeight / 2.25;
            halfHeight = totalHeight / 2;
            halfTopPadding = halfHeight / 2.25;
            $('.heroWrapper').css({"height": totalHeight});
            $('.halfWrapper').css({"height": halfHeight});
            $('.heroWrapper h1').css({"padding-top": topPadding});
            $('.heroWrapper h2').css({"padding-top": halfTopPadding});
            $('.halfWrapper h2').css({"padding-top": halfTopPadding});
        };
        angular.element($window).bind("resize",function(){
            setHeight();
        });
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
]);