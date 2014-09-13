'use strict';

var $ = require('jquery');

module.exports = function(app) {
    app.factory('setWindowHeight', function() {
        return function() {
            var windowHeight,
                navHeight,
                heroContentHeight,
                heroHeight,
                topMargin;

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
            $('.heroWrapper').css({ 'height': heroHeight });
            $('.navPlaceholder').css({ 'height': navHeight });
            $('.heroContent').css({ 'margin-top': topMargin });
        };
    });
};