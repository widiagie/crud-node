const express = require('express')
const request = require('request')
const app = express()
const port = 3000

// metaweather api
const apiKey = '4bee3a8f8f41a65ba428fd556d47d985';

// import library CORS
const cors = require('cors')

// use cors
app.use(cors())

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); // use route posts di Express

app.post('/api/weather', function(req, res) {
  let city = req.body.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${apiKey}`;
  request(url, function(err, response, body){
    if (err) {
      return res.status(500).json({
          status: false,
          message: 'Internal Server Error',
      })
    } else {
        return res.status(200).json({
            status: true,
            message: 'List Data Weather',
            data: JSON.parse(body)
        })
    }
  });
});

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})