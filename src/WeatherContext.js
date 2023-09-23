import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

 
  useEffect(() => {
    const savedLatitude = localStorage.getItem('latitude');
    const savedLongitude = localStorage.getItem('longitude');
    
    if (savedLatitude && savedLongitude) {
      setLatitude(parseFloat(savedLatitude)); 
      setLongitude(parseFloat(savedLongitude)); 
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('latitude', latitude.toString()); 
    localStorage.setItem('longitude', longitude.toString()); 
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
