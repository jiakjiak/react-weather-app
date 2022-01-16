import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col dayOne">
            <WeatherForcastDay data={forecast[1]} />
          </div>
          <div className="col dayTwo">
            <WeatherForcastDay data={forecast[2]} />
          </div>
          <div className="col dayThree">
            <WeatherForcastDay data={forecast[3]} />
          </div>
          <div className="col dayFour">
            <WeatherForcastDay data={forecast[4]} />
          </div>
          <div className="col dayFive">
            <WeatherForcastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "56623de7e1f90faf5cccde1396a53f83";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
