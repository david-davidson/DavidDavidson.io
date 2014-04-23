DavidDavidson.io
================

For fun and practice, I rewrote my personal site (previously PHP/gross) in Angular. There&rsquo;s no database involved, but I do follow the MVC paradigm: most of the the HTML and CSS lives in /views, the data itself lives in /models, and the controllers live in /controllers and put the two together.

You&rsquo;ll need Grunt (and, therefore, <a href="http://nodejs.org/" target="_blank">Node.js/NPM</a>) to run it. (If you&rsquo;re not sure you have Grunt, run `grunt --version`; if you don&rsquo;t, run `npm install -g grunt-cli`.) Then grab all the dependencies: in the same directory as `Gruntfile.js`, run `npm install`. Now you&rsquo;re ready: run `grunt` to concatenate and minify the JS, fire up a local server on port 9000, and watch for changes with livereload!