import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    weatherDescription: "Scattered clouds",
    image: "images/weather picture.png",
    celcius: 30,
    fahrenheit: 0,
    realFeel: 34,
    wind: "10m/s",
    humidity: "80%",
  };

  return (
    <div className="row">
      <div className="col-8">
        <div className="temperature">
          <span className="currentTemperature">{weatherData.celcius}</span>°
          <a href="/#" className="celcius active">
            C
          </a>
          <span className="or"> | </span>
          <a href="/#" className="fahrenheit">
            F
          </a>
        </div>
        <div className="weatherDetails">
          <span className="weatherDescription">
            Go ahead, search it! {""}
            <span role="img" aria-label="pointing finger">
              ☝🏼
            </span>
          </span>
          <br />
          Real feel: <span className="feelsLike">{weatherData.realFeel}°</span>
          <br />
          <i className="fas fa-wind"> {weatherData.wind}</i>
          <br />
          <i className="fas fa-tint"> {weatherData.humidity}</i>
        </div>
      </div>
      <div className="col-4">
        <img
          src={weatherData.image}
          className="weatherPicture"
          alt={weatherData.weatherDescription}
        />
      </div>
    </div>
  );
}
