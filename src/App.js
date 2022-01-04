import React from "react";
import "./styles.css";
import "./App.css";

import SearchCity from "./SearchCity";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp shadow-sm p-3 mb-0 mt-4 bg-white rounded w-50 p-3">
          <SearchCity />
        </div>
        <Footer />
      </div>
    </div>
  );
}
