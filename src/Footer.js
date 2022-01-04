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
        href="https://github.com/jiakjiak/react-weather-app"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        This project was coded by JK and open-sourced on Github
      </a>
      <br />
    </div>
  );
}
