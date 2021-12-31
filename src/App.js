import React from "react";
import "./styles.css";
import "./App.css";

import SearchCity from "./SearchCity";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp shadow-sm p-3 mb-0 mt-4 bg-white rounded w-50 p-3">
          <div className="appBody">
            <SearchCity />
            <Temperature />
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
