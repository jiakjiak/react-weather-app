import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <p className="appText">
        <b>5-day forecast</b>
      </p>
      <div className="forecast"></div>

      <script src="src/script.js"></script>
    </div>
  );
}
