import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInputGroup,
    MDBRadio,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";

const WeatherList = ({ data }) => {
  if (!data) {
    return (
    // <MDBRow className="justify-content-center align-items-center h-10">
    //     <MDBCol md="8" lg="6" xl="4">
    //         <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
    //             No data available
    //         </MDBTypography>
    //     </MDBCol>
    // </MDBRow>   
    <MDBRow className="justify-content-center align-items-center mt-3">
        <MDBCol md="8" lg="6" xl="4">
            <MDBTypography className="text-center mb-4 pb-2 fw-normal">
                Check the weather forecast
            </MDBTypography>

            <MDBInputGroup className="mb-3">
                
            </MDBInputGroup>

            {/* <div className="mb-4 p-2">
                <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Celcius"
                defaultChecked
                />
                <MDBRadio
                inline
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Farenheit"
                />
            </div> */}
        </MDBCol>
    </MDBRow>

    );

  }

  return ( 
    <div>
      <p>Weather Information for {data.name}</p>
      <ul>
        <li>Longitude: {data.coord.lon}</li>
        <li>Latitude: {data.coord.lat}</li>
        <li>Temperature: {data.main.temp}°C</li>
        <li>Feels Like: {data.main.feels_like}°C</li>
        <li>Min Temperature: {data.main.temp_min}°C</li>
        <li>Max Temperature: {data.main.temp_max}°C</li>
        <li>Pressure: {data.main.pressure} hPa</li>
        <li>Humidity: {data.main.humidity}%</li>
        <li>Visibility: {data.visibility} meters</li>
        <li>Wind Speed: {data.wind.speed} m/s</li>
        <li>Wind Direction: {data.wind.deg}°</li>
        <li>Cloudiness: {data.clouds.all}%</li>
        <li>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</li>
        <li>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</li>
      </ul>
      <h2>Weather Conditions:</h2>
      <ul>
        {data.weather.map((condition, index) => (
          <li key={index}>
            <p>Main: {condition.main}</p>
            <p>Description: {condition.description}</p>
            <p>Icon: <img src={`http://openweathermap.org/img/wn/${condition.icon}.png`} alt={condition.description} /></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
