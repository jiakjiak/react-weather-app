import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="currentTemperature">{props.celcius}</span>°
      <span className="celcius">C</span>
    </span>
  );
}
