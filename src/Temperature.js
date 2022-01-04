import React from "react";
import "./Temperature.css";
import FormattedDate from "./FormattedDate";

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
            <span className="currentTemperature">
              {props.weather.temperature}
            </span>
            °
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
              {props.weather.description}
            </span>
            <br />
            Real feel:{" "}
            <span className="feelsLike">{props.weather.realFeel}°</span>
            <br />
            <i className="fas fa-wind"> {props.weather.wind}</i>
            <br />
            <i className="fas fa-tint"> {props.weather.humidity}</i>
          </div>
        </div>
        <div className="col-4">
          <img
            src={props.weather.iconUrl}
            className="weatherPicture"
            alt={props.weather.description}
          />
        </div>
      </div>
    </div>
  );
}
//const [ready, setReady] = useState(false);
//const [weather, setWeather] = useState({});
//const [message, setMessage] = useState("Go ahead, search it! ☝🏼");
