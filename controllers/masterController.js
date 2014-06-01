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
        $scope.today = new Date();
        setHeight = function() {
            windowHeight = $(window).height();
            navHeight = $('nav').height();
            heroHeight = windowHeight - navHeight;
            topPadding = heroHeight / 2.5;
            halfTopPadding = topPadding / 1.75;
            minContactHeight = 450;
            $('.heroWrapper').css({'height': heroHeight});
            $('.heroWrapper h1').css({'padding-top': topPadding});
            $('.heroWrapper h2').css({'padding-top': halfTopPadding});
            $('.navPlaceholder').css({'height': navHeight});
            // Don't let the contact view collapse on short screens
            if (heroHeight < minContactHeight) {
                $('.heroWrapper#contact').css({'height': minContactHeight});
            }
        };
        angular.element($window).bind('resize', function(){
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