DavidDavidson.io
================

[![Build Status](https://travis-ci.org/david-davidson/DavidDavidson.io.svg?branch=master)](https://travis-ci.org/david-davidson/DavidDavidson.io)

For fun and practice, I rewrote my personal site (previously PHP/gross) as an Angular app running on Express and Node. There&rsquo;s no database involved, but I do follow the MVC paradigm: most of the the HTML and CSS lives in /views, the data itself lives in /models, and the controllers live in /controllers and put everything together.

You&rsquo;ll need Grunt (and, therefore, <a href="http://nodejs.org/" target="_blank">Node.js/NPM</a>) to run it. (If you&rsquo;re not sure you have Grunt, run `grunt --version`; if you don&rsquo;t, run `npm install -g grunt-cli`.) Next, grab the dependencies by running `npm install`. 

Now you&rsquo;re ready: run `grunt` to concatenate and minify the JS and CSS and get your localhost copy up and running!