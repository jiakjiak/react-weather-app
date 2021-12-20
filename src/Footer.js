import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/jiakjiak/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <img src="images/coder.png" className="coder" alt="coder" width="25" />
      </a>
      <br />
      <a
        href="https://github.com/jiakjiak/weather-app"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        open-source code
      </a>
      by JK <br />
    </div>
  );
}
