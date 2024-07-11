const express = require('express');
const request = require('request');
const app = express();

const apiKey = '4bee3a8f8f41a65ba428fd556d47d985';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { weather: null, error: null});
});

app.post('/', function(req, res) {
  let city = req.body.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${apiKey}`;
  request(url, function(err, response, body){
    if(err) {
      res.render('index', {weather: null, error: 'Error, Please try again'});
    } else {
      let weather = JSON.parse(body);
      res.render('index', { weather: JSON.stringify(weather, null, 2), error: null });
      // if(weather.main == undefined) {
      //   res.render('index', {weather: null, error: 'Error, Please try again'});
      // } else {
      //   let weatherText = `It's ${weather.weather.main} ${weather.main.temp} degrees in ${weather.name}`;
      //   res.render('index', { weather: weatherText, error: null });
      // }
    }
  });
});

app.listen(3000, function() {
  console.log("weather code listening on port 3000");
});
