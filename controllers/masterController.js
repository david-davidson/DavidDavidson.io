Portfolio.controller('masterController',
    ['$scope', '$window', '$location', '$timeout', '$anchorScroll',
    function ($scope, $window, $location, $timeout, $anchorScroll) {
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
            // Measure components
            windowHeight = $(window).height();
            navHeight = $('nav').height();
            heroContentHeight = $('.heroContent').height();
            // Calculate heights
            heroHeight = windowHeight - navHeight;
            if (heroContentHeight > heroHeight) {
                heroHeight = heroContentHeight;
            }
            topMargin = (heroHeight - heroContentHeight) / 2.25; // Dividing by 2 exactly makes the content look just a little too low
            // Apply heights
            $('.heroWrapper').css({'height': heroHeight});
            $('.navPlaceholder').css({'height': navHeight});
            $('.heroContent').css({'margin-top': topMargin});
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
        $scope.scrollToParent = function(parentId) {
            $('html,body').animate({scrollTop:$('#' + parentId).offset().top}, 400);
        };
    }
]);