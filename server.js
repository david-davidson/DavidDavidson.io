var http = require('http'),
	express = require('express'),
	app = express(),
	server,
	port;

app.use(express.static(__dirname + '/dist'));

app.get('/:path(*)', function(req, res) {
	res.redirect(301, '/#/' + req.params.path); // So that Angular can handle requests like /portfolio
});

server = http.createServer(app);

port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('Lookin legit on port %d', port);
});