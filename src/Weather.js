import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let weatherData = {
    city: "Scottsdale",
    tempHigh: 90,
    tempLow: 78,
    date: "Tuesday, November 8",
    description: "Sunny",
    imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
    humidity: 10,
    wind: 5,
  };

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
          </div>

          <div className="col-5">
            <div className="currentDate">{weatherData.date}</div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-4 todayWeather">
            <span className="currentWeatherText">Current weather in:</span>
            <br />
            <span className="currentCity">{weatherData.city}</span>
            <br />
            <span className="mainTempHigh">
              {" "}
              <span>{weatherData.tempHigh}</span>/{" "}
            </span>
            <span className="mainTempLow">
              <span>{weatherData.tempLow}</span>
              <span className="farenheit">°F</span>
            </span>
          </div>
          <div className="col-4">
            <img
              alt="weather icon"
              src={weatherData.imgUrl}
              className="mainWeatherIcon"
            />
          </div>

          <div className="col-4 weatherDetails">
            <span className="description">{weatherData.description}</span>
            <br />
            Humidity: <span>{weatherData.humidity}</span>%
            <br />
            Wind: <span>{weatherData.wind}</span>mph
          </div>
        </div>
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
}
