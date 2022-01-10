import React from "react";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast.css";

export default function WeatherForecast() {
  return (
    <div className="row weatherForecast">
      <div className="col weatherForcastDay">
        Thu
        <div>
          <WeatherIcon code="01n" size={70} />
        </div>
        <span className="tempHigh">21°</span>
        <span className="tempLow">12°</span>
      </div>
      <div className="col weatherForcastDay">
        Thu
        <div>
          <WeatherIcon code="01n" size={70} />
        </div>
        <span className="tempHigh">21°</span>
        <span className="tempLow">12°</span>
      </div>
      <div className="col weatherForcastDay">
        Thu
        <div>
          <WeatherIcon code="01n" size={70} />
        </div>
        <span className="tempHigh">21°</span>
        <span className="tempLow">12°</span>
      </div>
      <div className="col weatherForcastDay">
        Thu
        <div>
          <WeatherIcon code="01n" size={70} />
        </div>
        <span className="tempHigh">21°</span>
        <span className="tempLow">12°</span>
      </div>
      <div className="col weatherForcastDay">
        Thu
        <div>
          <WeatherIcon code="01n" size={70} />
        </div>
        <span className="tempHigh">21°</span>
        <span className="tempLow">12°</span>
      </div>
    </div>
  );
}
