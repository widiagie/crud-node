var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Halo dari server ini!');
})

app.post('/', function(req, res) {
  console.log('from POST dari Homepage');
  res.send('Hello POST');
})

app.get('/ko*de', function(req, res) {
  console.log('from GET dari /ko*de');
  res.send('Hello GET match');
})

var server = app.listen(8010, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Basic Routing Listening pada port: ', host, port);
})