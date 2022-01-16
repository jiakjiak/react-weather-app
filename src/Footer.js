import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/jiakoh/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="images/coder.png" className="coder" alt="coder" width="25" />
      </a>
      <br />
      This project was coded by{" "}
      <a
        href="https://www.linkedin.com/in/jiakoh/"
        className="linkedinLink"
        target="_blank"
        rel="noreferrer"
      >
        JK
      </a>{" "}
      and is{" "}
      <a
        href="https://github.com/jiakjiak/react-weather-app"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced on Github
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com/"
        className="netlifyLink"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
      .
      <br />
    </div>
  );
}
