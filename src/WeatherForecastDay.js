import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div>
      <div className="card-header">{day()}</div>
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="card-footer text-body-secondary currentTempHigh">
        {maxTemperature()}{" "}
        <span className="currentTempLow">{minTemperature()}</span>
      </div>
    </div>
  );
}
