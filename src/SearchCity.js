import React, { useState } from "react";
import "./SearchCity.css";

export default function SearchCity(props) {
  const [city, setCity] = useState(props.data.city);
  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  return (
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
          <button type="submit" className="btn btn-primary rounded-pill w-100">
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
  );
}
