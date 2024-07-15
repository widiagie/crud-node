const express = require('express');
const axios = require('axios');
const router = express.Router();

// metaweather api
const apiKey = '4bee3a8f8f41a65ba428fd556d47d985';

router.post('/', async (req, res) => {
  let city = req.body.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return res.status(200).json({
      status: true,
      message: 'List Data Weather',
      data: response.data
    });
  } catch (error) {
    if (error.response) {
      const data = error.response.data;
      const code = data.cod;

      if (code == 400) {
        return res.status(400).json({
          status: false,
          message: 'Data geo not found',
          data: data
        });
      }
    }
    
    return res.status(500).json({
      status: false,
      message: 'Internal Server Error',
      error: error.message
    });
  }
});

module.exports = router;
