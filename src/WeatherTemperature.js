import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault;
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span>
        <span className="currentTemperature">{props.celcius}</span>°
        <a href="/#" onClick={convertToCelcius} className="celcius active">
          C
        </a>
        <span className="or"> | </span>
        <a href="/#" onClick={convertToFahrenheit} className="fahrenheit">
          F
        </a>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span>
        <span className="currentTemperature">{Math.round(fahrenheit)}</span>°
        <a href="/#" onClick={convertToCelcius} className="celcius">
          C
        </a>
        <span className="or"> | </span>
        <a
          href="/#"
          onClick={convertToFahrenheit}
          className="fahrenheit active"
        >
          F
        </a>
      </span>
    );
  }
}
