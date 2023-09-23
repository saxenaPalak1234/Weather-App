# Weather App ☀️🌦️🌧️

![Weather App Logo](link_to_your_logo_image)

## Overview

The Weather App is a simple yet powerful web application that allows users to check the current weather conditions for a specific location based on latitude and longitude coordinates. This application integrates with the WeatherAPI.com service to provide accurate weather data and also offers additional features like geolocation and local storage persistence.

## Features

### Step 1: Create a Form Component 📝

- Developed a user-friendly form component to input custom latitude and longitude values.

### Step 2: Implement use-formik (optional) for Form Management 📋

- Constructed a form with input fields for latitude and longitude.
- Added validation for fields and ErrorMessage components for valid latitude and longitude input.

### Step 3: Geolocation Browser API 🌐

- Added a button labeled "Get Current Location" to the component.
- On button click, executed the Geolocation API to retrieve the user's current latitude and longitude.
- Automatically populated the latitude and longitude input fields in the form with the obtained values.

### Step 4: API Integration with WeatherAPI.com 🌍

- Added a button labeled "Get Current Weather" to the component.
- Configured an API call to WeatherAPI.com to fetch weather information.

#### WeatherAPI.com Details:
- *Endpoint*: [https://api.weatherapi.com/v1/current.json](https://api.weatherapi.com/v1/current.json)
- *Parameters*: `key` (your API key), `q` (latitude and longitude)
- *Data Retrieved*: Location name, region, country, temperature (Celsius and Fahrenheit), humidity, wind speed, and "feels like" temperature.

### Step 5: Display Weather Information 🌡️

- Upon successful API completion, displayed the fetched weather information.
- Showed details such as location name, region, country, temperature (Celsius and Fahrenheit), humidity, wind speed, and "feels like" temperature.

### Step 6: Local Storage Persistence (use Context for this) 📦

- Saved the last entered latitude and longitude values locally using `localStorage` when the user closes the application.
- Retrieved and pre-filled these values when the application is reopened.

### Step 7: Application Persistence 🔄

- Upon reopening the application, automatically retrieved the saved values and used them to trigger an API call to WeatherAPI.com for the latest weather conditions.

## Usage

To use the Weather App, follow these steps:

1. Clone this repository to your local machine.

   bash
   git clone https://github.com/yourusername/weather-app.git
   

2. Open the project directory.

   bash
   cd weather-app
   

3. Install the required dependencies.

   bash
   npm install
   

4. Create a `.env` file in the project root and add your WeatherAPI.com API key.

   env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   

5. Start the application.

   bash
   npm start
   

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to use the Weather App.

## Technologies Used

- React.js
- Formik (optional)
- WeatherAPI.com
- HTML/CSS
- JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to [WeatherAPI.com](https://www.weatherapi.com/) for providing the weather data API.

---

Enjoy checking the weather with the Weather App! If you have any questions or suggestions, please feel free to open an issue or contribute to the project. Happy coding! 🌦️🌨️☀️
