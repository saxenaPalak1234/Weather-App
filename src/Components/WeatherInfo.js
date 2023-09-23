import React from "react";
import "./Weather.css";

function CurrentWeather({ data }) {
  if (!data) {
    return null;
  }

  // Combine the city, state, and country into a single string
  const locationString = `${data.location.name}, ${data.location.region}, ${data.location.country}`;

  return (
    <div className="div1" style={{
      display: "flex",
      width: "fit-content",
      position: "absolute",
      marginTop: "-350px",
    }}>
      <div className="card1">
        <div className="container3">
          <div className="cloud front">
            <span className="left-front" />
            <span className="right-front" />
          </div>
          <span className="sun sunshine" />
          <span className="sun" />
          <div className="cloud back">
            <span className="left-back" />
            <span className="right-back" />
          </div>
        </div>
        <div className="card-header">
          <h2>Current Weather</h2>
          <span>
            {locationString}
            <br />
          </span>
          <span>{data.current.condition.text}</span>
        </div>
        <span className="temp" style={{
          color: "black",
        }}>
          {data.current.temp_c}
        </span>
        <div className="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </div>
  );
}

function WeatherHistory({ weatherHistory }) {
  return (
    <div className="weather-history" style={{
      display: "flex",
    }}>
      {weatherHistory.map((report, index) => (
        <div key={index} className="card">
          <div className="container3">
            <div className="cloud front">
              <span className="left-front" />
              <span className="right-front" />
            </div>
            <span className="sun sunshine" />
            <span className="sun" />
            <div className="cloud back">
              <span className="left-back" />
              <span className="right-back" />
            </div>
          </div>
          <div className="card-header">
            <h2>{`${report.data.location.name}, ${report.data.location.region}, ${report.data.location.country}`}</h2>
            <span>{report.data.current.condition.text}</span>
          </div>
          <span className="temp">{report.data.current.temp_c}</span>
          <div className="temp-scale">
            <span>Celcius</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CurrentWeather, WeatherHistory };

