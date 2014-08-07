'use strict';

var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

// app.get('/', function(req, res) {
// 	res.write('sup');
// 	res.end();
// })

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('Lookin legit on port ' + port);
})