import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./SearchCity.css";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function SearchCity(props) {
  const [city, setCity] = useState(props.city);
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "56623de7e1f90faf5cccde1396a53f83";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleSearch);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSearch(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      realFeel: Math.round(response.data.main.feels_like),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="appBody">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="which city?"
                className="searchWeather rounded-pill form-control"
                autoFocus
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button
                type="submit"
                className="btn btn-primary rounded-pill w-100"
              >
                <i className="fas fa-search"></i> Search
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-secondary rounded-pill w-100"
              >
                <i className="fas fa-map-pin"></i>
              </button>
            </div>
          </div>
        </form>
        <Temperature weather={weather} />
        <Forecast />
      </div>
    );
  } else {
    search();

    return (
      <div className="text-center">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
