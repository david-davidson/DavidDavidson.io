var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/:path', function(req, res) {
	res.redirect(301, '/#/' + req.params.path); // So that Angular can handle requests like /portfolio
});

var server = http.createServer(app);

var port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('Lookin legit on port ' + port);
});