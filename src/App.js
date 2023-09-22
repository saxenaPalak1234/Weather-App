import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import {CurrentWeather, WeatherHistory } from './Components/WeatherInfo';
import axios from 'axios';




function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 


  const fetchWeatherData = async ({ latitude, longitude }) => {
    setIsLoading(true);
    try {
      const apiKey = '677fa8ef55msh12c799620d55df4p13296djsn3a8a9901fac2';
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`;
      const headers = {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      };

      const response = await axios.get(url, { headers });

      const newWeatherReport = {
        data: response.data,
        timestamp: new Date().toLocaleString(),
      };
      setWeatherData(response.data);
      setWeatherHistory((prevHistory) => [...prevHistory, newWeatherReport]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    // Load saved coordinates from local storage and fetch weather data on app load
    const savedLatitude = localStorage.getItem('latitude');
    const savedLongitude = localStorage.getItem('longitude');
    if (savedLatitude && savedLongitude) {
      fetchWeatherData({ latitude: savedLatitude, longitude: savedLongitude });
    }
  }, []);

  const handleFormSubmit = ({ latitude, longitude }) => {
    // Save coordinates to local storage
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    fetchWeatherData({ latitude, longitude });
  };

  return (
    <div className="App">
    <Form onSubmit={handleFormSubmit} />
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <CurrentWeather data={weatherData} />
        <WeatherHistory weatherHistory={weatherHistory} />
      </>
    )}
  </div>
  );
}

export default App;
