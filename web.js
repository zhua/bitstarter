var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
//var buf = new Buffer(256);
var buf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send('Hello World 2!');
//  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
