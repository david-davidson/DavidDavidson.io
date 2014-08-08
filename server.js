'use strict';

var http = require('http');
var express = require('express');
// var url = require('url');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/:path', function(req, res) {
	res.redirect(301, '/#/' + req.params.path);
	// var url = __dirname + req.params.path;
	// console.log(url);
	// request.params.
	// res.write('sup');
	// res.end();
})
// app.use(function(request, response, next) {
//    if(request.url.charAt(0) == '/' && request.url.length > 1)
//        response.redirect(301, request.url.slice(0, -1));
//    else
//        next();
// });

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('Lookin legit on port ' + port);
})