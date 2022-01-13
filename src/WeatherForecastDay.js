import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function weatherForcastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="weatherForcastDay">
      {day()}
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <span className="tempHigh">{maxTemperature()}°</span>
      <span className="tempLow">{minTemperature()}°</span>
    </div>
  );
}
