import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div class="row weather-forecast" id="forecast">
        <div className="col-2 4 ml-4">
          <div className="card text-center">
            <div className="card-header">THURS</div>
            <div className="card-body">
              <WeatherIcon code="01d" size={30} />
            </div>
            <div className="card-footer text-body-secondary currentTempHigh">
              90° <span className="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div className="col-2 4">
          <div className="card text-center">
            <div className="card-header">FRI</div>
            <div className="card-body">
              <WeatherIcon code="01d" size={30} />
            </div>
            <div className="card-footer text-body-secondary currentTempHigh">
              90° <span className="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div className="col-2 4">
          <div className="card text-center">
            <div className="card-header">SAT</div>
            <div className="card-body">
              <WeatherIcon code="01d" size={30} />
            </div>
            <div className="card-footer text-body-secondary currentTempHigh">
              90° <span className="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div className="col-2 4">
          <div className="card text-center">
            <div className="card-header">SUN</div>
            <div className="card-body">
              <WeatherIcon code="01d" size={30} />
            </div>
            <div className="card-footer text-body-secondary currentTempHigh">
              90° <span className="currentTempLow">78°</span>
            </div>
          </div>
        </div>
        <div className="col-2 4">
          <div className="card text-center">
            <div className="card-header">MON</div>
            <div className="card-body">
              <WeatherIcon code="01d" size={30} />
            </div>
            <div className="card-footer text-body-secondary currentTempHigh">
              90° <span className="currentTempLow">78°</span>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
