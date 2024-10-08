import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Maun" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Emang-M"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emang Machola
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Emang-M/weekfive"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://emyreactweather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
