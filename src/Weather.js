import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [date, setDate] = useState("");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      tempHigh: response.data.main.temp_max,
      tempLow: response.data.main.temp_min,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Weather border container ml-5 mt-5 mb-2">
          <div className="row p-4">
            <div className="col-6">
              <form action="submit" name="city">
                <label className="citySearch"> City </label>
                <br />
                <input type="search" placeholder="Search" autofocus="on" />
                <input type="submit" value="Submit" className="button" />
              </form>
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5681b3c5ae7587462a23eaa5ab9c8b23";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
