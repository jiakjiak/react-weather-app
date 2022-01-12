import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "56623de7e1f90faf5cccde1396a53f83";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col weatherForcastDay">
          Thu
          <div>
            <WeatherIcon code="01n" size={70} />
          </div>
          <span className="tempHigh">21°</span>
          <span className="tempLow">12°</span>
        </div>
      </div>
    </div>
  );
}
