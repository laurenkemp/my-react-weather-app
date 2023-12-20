import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherInfo">
        <div className="row p-4">
          <div className="col-4 todayWeather">
            <span className="currentWeatherText">Current weather in:</span>
            <br />
            <span className="currentCity">{props.data.city}</span>
            <br />
            <span className="mainTempHigh">
              {" "}
              <span>{Math.round(props.data.tempHigh)}</span>{" "}
            </span>
            <span className="mainTempLow">
              <span> /{Math.round(props.data.tempLow)}</span>
              <span className="farenheit">°F</span>
            </span>
          </div>
          <div className="col-4 mt-3">
            <WeatherIcon code={props.data.icon} size={65} />
          </div>

          <div className="col-4 weatherDetails">
            <span className="description">{props.data.description}</span>
            <br />
            Humidity: <span>{props.data.humidity}</span>%
            <br />
            Wind: <span>{props.data.wind}</span>mph
          </div>
        </div>
      </div>
    </div>
  );
}
