import React from "react";
import "./Message.css";

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
        {weatherData.day} {weatherData.time}
      </h2>
    </div>
  );
}
