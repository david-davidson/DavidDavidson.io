'use strict';

// Filter to replicate html-bind-unsafe
// credit: http://stackoverflow.com/questions/19415394/with-ng-bind-html-unsafe-removed-how-do-i-inject-html
module.exports = function(app) {
	app.filter('toHTML',
	    [ '$sce', function($sce) {
	    return function(text) {
	        return $sce.trustAsHtml(text);
	    };
	} ]);
};
