var express = require('express');
var app = express();

app.use('/kode', function(req, res, next) {
  console.log("request ke kode sudah di terima pada " + Date.now());
  console.log("START")
  next(); 
});

app.get('/kode', function(req, res, next) {
  res.send('KODE MIDDLE');
  next(); 
});

app.use('/kode', function(req, res) {
  console.log("END")
});

app.listen(3000);