import React from "react";
import "./styles.css";
import "./App.css";
import SearchCity from "./SearchCity";
import Footer from "./Footer";
import WeatherBackground from "./weather-background.mp4";

export default function App() {
  return (
    <div className="App">
      <video
        autoPlay
        loop
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={WeatherBackground} type="video/mp4" />
      </video>
      <div className="container">
        <div className="weatherApp shadow-sm p-3 mb-0 mt-4 bg-white rounded w-50 p-3">
          <SearchCity city="Singapore" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
