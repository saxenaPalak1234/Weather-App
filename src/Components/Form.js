import React from 'react';
import { useWeatherContext } from '../WeatherContext';
import './form.css'

export default function Form({ onSubmit }) {
  const { latitude, longitude, updateWeatherLocation } = useWeatherContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ latitude, longitude });
  };

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        updateWeatherLocation(latitude, longitude);
      },
      (error) => {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      }
    );
  };

  return (
    <div className="body">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="head">
            <span>
              <h1>
                Weather App Live
              </h1>
            </span>
          </div>
          <div className='container2'>
            <div className="inputs">
              <input
                type="text"
                placeholder="Latitude"
                className='input1'
                value={latitude || ''}
                onChange={(e) => {
                  updateWeatherLocation(e.target.value, longitude);
                }}
              />
              <input
                type="text"
                placeholder="Longitude"
                className='input1'
                value={longitude || ''}
                onChange={(e) => {
                  updateWeatherLocation(latitude, e.target.value);
                }}
              />
            </div>
            <button type="submit">Get Weather</button>
            <button type="button" onClick={handleGeolocation}>Get Current Location</button>
          </div>
        </form>
      </div>
      <div className="form-footer">
        <p>
          Get the Weather information of a location all over the world.
        </p>
      </div>
    </div>
  );
}
