import React, { useState, useEffect } from "react";

const WeatherAPI = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "964da9b43e2b4cf2a578f417cfc66d3e";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Sukkur&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Weather in Sukkur</h2>
      {weather ? (
        <div>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>🌍 Condition: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>🌅 Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherAPI;
