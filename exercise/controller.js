var express = require('express');
var app = express();

// Menggunakan middleware json dan urlencoded dari express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routing
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

// Modules post
app.post('/user', function (req, res) {
  const response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

// Modules get
app.get('/user', function (req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
    gender: req.query.gender
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

// Server
var server = app.listen(8888, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Running Apps listening at ", host, port);
});
