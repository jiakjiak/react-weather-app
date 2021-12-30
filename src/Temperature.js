import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Temperature.css";

export default function Temperature() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState("Go ahead, search it! ☝🏼");

  function handleSearch(response) {
    //console.log(response.data.main);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      realFeel: Math.round(response.data.main.feels_like),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/wn/04n@4x.png",
    });
    setMessage(response.data.weather[0].description);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="row">
        <div className="col-8">
          <div className="temperature">
            <span className="currentTemperature">{weather.temperature}</span>°
            <a href="/#" className="celcius active">
              C
            </a>
            <span className="or"> | </span>
            <a href="/#" className="fahrenheit">
              F
            </a>
          </div>
          <div className="weatherDetails">
            <span className="weatherDescription">{message}</span>
            <br />
            Real feel: <span className="feelsLike">{weather.realFeel}°</span>
            <br />
            <i className="fas fa-wind"> {weather.wind}</i>
            <br />
            <i className="fas fa-tint"> {weather.humidity}</i>
          </div>
        </div>
        <div className="col-4">
          <img
            src={weather.iconUrl}
            className="weatherPicture"
            alt={weather.description}
          />
        </div>
      </div>
    );
  } else {
    const apiKey = "56623de7e1f90faf5cccde1396a53f83";
    let city = "sisimiut";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleSearch);

    return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />;
  }
}
