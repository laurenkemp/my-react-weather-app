import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "5681b3c5ae7587462a23eaa5ab9c8b23";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather border container ml-5 mt-5 mb-2">
          <div className="row p-4">
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <label className="citySearch"> City </label>
                <br />
                <input
                  type="search"
                  placeholder="Search"
                  autofocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" className="button" />
              </form>
            </div>
            <div className="col-5">
              <div className="currentDate">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </div>
        <div className="footnote">
          <a
            href="https://github.com/laurenkemp/my-react-weather-app.git"
            alt="github link"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>{" "}
          by Lauren Kemp
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
