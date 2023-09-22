import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // Load the saved latitude and longitude from localStorage on component mount
  useEffect(() => {
    const savedLatitude = localStorage.getItem('latitude');
    const savedLongitude = localStorage.getItem('longitude');
    
    if (savedLatitude && savedLongitude) {
      setLatitude(parseFloat(savedLatitude)); // Parse as a float
      setLongitude(parseFloat(savedLongitude)); // Parse as a float
    }
  }, []);

  // Save the latitude and longitude to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('latitude', latitude.toString()); // Convert back to string for storage
    localStorage.setItem('longitude', longitude.toString()); // Convert back to string for storage
  }, [latitude, longitude]);

  const updateWeatherLocation = (newLatitude, newLongitude) => {
    setLatitude(newLatitude);
    setLongitude(newLongitude);
  };

  const contextValue = {
    latitude,
    longitude,
    updateWeatherLocation,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
