import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <div className="container">
        <div className="row p-3">
          <div className="col-lg current-weather-info">
            <span className="currentWeatherText">Current weather in:</span>
            <br />
            <span className="currentCity">{props.data.city}</span>
            <br />
            <div className="current-city-temp">
              <span className="mainTempHigh">
                {" "}
                <span>{Math.round(props.data.tempHigh)}</span>{" "}
              </span>
              <span className="mainTempLow">
                <span> /{Math.round(props.data.tempLow)}</span>
                <span className="farenheit">°F</span>
              </span>
            </div>
          </div>
          <div className="col-lg main-icon">
            <WeatherIcon code={props.data.icon} size={65} />
          </div>

          <div className="col-lg weatherDetails">
            <span className="description">{props.data.description}</span>
            <br />
            Humidity: <span className="description">{props.data.humidity}</span>
            %
            <br />
            Wind: <span className="description">{props.data.wind}</span>mph
          </div>
        </div>
      </div>
    </div>
  );
}
