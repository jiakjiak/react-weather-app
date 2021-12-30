import React from "react";
import "./Message.css";
import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";

export default function Message() {
  let weatherData = {
    city: "SINGAPORE",
    day: "Monday",
    time: "15:04",
  };
  return (
    <div className="row">
      <h1>HELLO, {weatherData.city}</h1>
      <h2>
        <FormattedDate />
      </h2>
    </div>
  );
}
