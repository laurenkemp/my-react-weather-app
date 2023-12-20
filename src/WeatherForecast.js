export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row weather-forecast" id="forecast">
        <div class="col-2 4">
          <div class="card text-center">
            <div class="card-header">THURS</div>
            <div class="card-body">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                class="card-text weatherIconFuture"
                alt="weather"
              />
            </div>
            <div class="card-footer text-body-secondary currentTempHigh">
              90° <span class="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div class="col-2 4">
          <div class="card text-center">
            <div class="card-header">FRI</div>
            <div class="card-body">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                class="card-text weatherIconFuture"
                alt="weather"
              />
            </div>
            <div class="card-footer text-body-secondary currentTempHigh">
              90° <span class="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div class="col-2 4">
          <div class="card text-center">
            <div class="card-header">SAT</div>
            <div class="card-body">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                class="card-text weatherIconFuture"
                alt="weather"
              />
            </div>
            <div class="card-footer text-body-secondary currentTempHigh">
              90° <span class="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div class="col-2 4">
          <div class="card text-center">
            <div class="card-header">SUN</div>
            <div class="card-body">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                class="card-text weatherIconFuture"
                alt="weather"
              />
            </div>
            <div class="card-footer text-body-secondary currentTempHigh">
              90° <span class="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div class="col-2 4">
          <div class="card text-center">
            <div class="card-header">MON</div>
            <div class="card-body">
              <img
                src="https://openweathermap.org/img/wn/01d@2x.png"
                class="card-text weatherIconFuture"
                alt="weather"
              />
            </div>
            <div class="card-footer text-body-secondary currentTempHigh">
              90° <span class="currentTempLow">78°</span>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
