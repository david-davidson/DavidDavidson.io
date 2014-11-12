DavidDavidson.io
================

[![Build Status](https://travis-ci.org/david-davidson/DavidDavidson.io.svg?branch=master)](https://travis-ci.org/david-davidson/DavidDavidson.io)

For fun and practice, I rewrote my portfolio site (previously PHP/gross) as an Angular app running on Express and Node. There&rsquo;s no database involved, but I do follow the MVC paradigm: the HTML and CSS live in `app/views`, the data itself lives in `app/models`, and the controllers live in `app/controllers` and glue everything together.

You&rsquo;ll need Gulp installed globally&mdash;if you don&rsquo;t have it, run `npm install -g gulp` and you&rsquo;re good to go. Next, grab the rest of the dependencies with `npm install && bower install`. 

Now you&rsquo;re ready: run `gulp` to build the app (or `gulp test` to run just the tests), and then `node server.js` to get it up and running!