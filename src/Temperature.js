import React from "react";
import "./Temperature.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Temperature(props) {
  return (
    <div>
      <div className="row text-uppercase">
        <h1>Hello, {props.weather.city}</h1>
        <h2>
          <FormattedDate date={props.weather.date} />
        </h2>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="temperature">
            <WeatherTemperature celcius={props.weather.temperature} />
          </div>
          <div className="weatherDetails">
            <span className="weatherDescription">
              {props.weather.description}
            </span>
            <br />
            Real feel:{" "}
            <span className="feelsLike">{props.weather.realFeel}°c</span>
            <br />
            <i className="fas fa-wind"> {props.weather.wind} metre/sec</i>
            <br />
            <i className="fas fa-tint"> {props.weather.humidity}%</i>
          </div>
        </div>
        <div className="col-4">
          <div className="weatherPicture">
            <WeatherIcon code={props.weather.icon} size={130} />
          </div>
        </div>
      </div>
    </div>
  );
}
