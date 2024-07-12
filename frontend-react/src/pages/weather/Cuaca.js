import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBCard,
  MDBCardBody,
  MDBIcon 
} from "mdb-react-ui-kit";

const App = () => {
  const [city, setCity] = useState('');
  const [validation, setValidation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const storeCity = async (e) => {
    e.preventDefault();

    // Send data to server and get the response
    try {
      const response = await axios.post('http://localhost:3000/api/weather', {
        city: city,
      });

      // Set weather data from the response
      setWeatherData(response.data.data); // Assuming response.data.data contains the weather data
      setValidation(null); // Reset validation if successful
    } catch (error) {
      // Assign validation on state
      setValidation(error.response.data);
    }
  };

  return (
    <section className="vh-100">
        <MDBRow className="justify-content-center text-center align-items-center mt-5">
            <MDBCol md="8" lg="6" xl="4">
                <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
                  <h1>Weather App</h1>
                </MDBTypography>
            
            <form onSubmit={storeCity}>
              <div className="input-group">
                <input
                  className="form-control rounded"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={handleCityChange}
                />
                <button
                  className="btn btn-secondary"
                  id="search-addon"
                  type="submit"
                >
                  Check!
                </button>
              </div>
            </form>
            {weatherData && (
            <MDBCard className="shadow-0 border">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-1 sfw-normal">New York, US</MDBTypography>
                <p className="mb-2">
                  Current temperature: <strong>5.42°C</strong>
                </p>
                <p>
                  Feels like: <strong>4.37°C</strong>
                </p>
                <p>
                  Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong>
                </p>
                {weatherData.weather.map((condition, index) => (
                  <div key={index} className="d-flex flex-row align-items-center align-center">
                    <p className="mb-0 me-4">{condition.description}</p>
                    <img src={`http://openweathermap.org/img/wn/${condition.icon}.png`} alt={condition.description} />
                  </div>
                ))}
              </MDBCardBody>
            </MDBCard>
            )}

            {validation && <p>{validation.message}</p>}
            {weatherData && (
              <div>
                <h5>Weather Information for {weatherData.name}</h5>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Weather: {weatherData.weather[0].description}</p>
                {/* Display other weather data as needed */}
              
              <p>Weather Information for {weatherData.name}</p>
              <ul>
                <li>Longitude: {weatherData.coord.lon}</li>
                <li>Latitude: {weatherData.coord.lat}</li>
                <li>Temperature: {weatherData.main.temp}°C</li>
                <li>Feels Like: {weatherData.main.feels_like}°C</li>
                <li>Min Temperature: {weatherData.main.temp_min}°C</li>
                <li>Max Temperature: {weatherData.main.temp_max}°C</li>
                <li>Pressure: {weatherData.main.pressure} hPa</li>
                <li>Humidity: {weatherData.main.humidity}%</li>
                <li>Visibility: {weatherData.visibility} meters</li>
                <li>Wind Speed: {weatherData.wind.speed} m/s</li>
                <li>Wind Direction: {weatherData.wind.deg}°</li>
                <li>Cloudiness: {weatherData.clouds.all}%</li>
                <li>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</li>
                <li>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</li>
              </ul>
              <h2>Weather Conditions:</h2>
              <ul>
                {weatherData.weather.map((condition, index) => (
                  <li key={index}>
                    <p>Main: {condition.main}</p>
                    <p>Description: {condition.description}</p>
                    <p>Icon: <img src={`http://openweathermap.org/img/wn/${condition.icon}.png`} alt={condition.description} /></p>
                  </li>
                ))}
              </ul>
            </div>
            )}
            {error && <p>{error}</p>}
            </MDBCol>
        </MDBRow>
    </section>
  );
};

export default App;
