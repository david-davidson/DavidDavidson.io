Portfolio.controller('404Controller',
    function ($scope) {
        $window.alert("hi!");
        $location.path('/');
        console.log("404");
    }
);