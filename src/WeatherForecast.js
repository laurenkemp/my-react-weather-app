import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="WeatherForecast">
          <div className="row weather-forecast ml-1 mr-1" id="forecast">
            <div className="col-lg 4">
              <div className="card text-center">
                <WeatherForecastDay data={forecast[1]} />
              </div>
            </div>
            <div className="col-lg 4">
              <div className="card text-center">
                <WeatherForecastDay data={forecast[2]} />
              </div>
            </div>
            <div className="col-lg 4">
              <div className="card text-center">
                <WeatherForecastDay data={forecast[3]} />
              </div>
            </div>
            <div className="col-lg 4">
              <div className="card text-center">
                <WeatherForecastDay data={forecast[4]} />
              </div>
            </div>
            <div className="col-lg 4">
              <div className="card text-center">
                <WeatherForecastDay data={forecast[5]} />
              </div>
            </div>
          </div>
          <br />
        </div>
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
