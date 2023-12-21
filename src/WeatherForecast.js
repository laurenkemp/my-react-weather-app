import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div class="row weather-forecast" id="forecast">
          <div className="col-2 4 ml-4">
            <div className="card text-center">
              <WeatherForecastDay data={forecast[0]} />
            </div>
          </div>
          <div className="col-2 4">
            <div className="card text-center">
              <WeatherForecastDay data={forecast[1]} />
            </div>
          </div>
          <div className="col-2 4">
            <div className="card text-center">
              <WeatherForecastDay data={forecast[2]} />
            </div>
          </div>
          <div className="col-2 4">
            <div className="card text-center">
              <WeatherForecastDay data={forecast[3]} />
            </div>
          </div>
          <div className="col-2 4">
            <div className="card text-center">
              <WeatherForecastDay data={forecast[4]} />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  } else {
    let apiKey = "5681b3c5ae7587462a23eaa5ab9c8b23";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
