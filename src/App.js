/** @format */

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />

        <footer>
          <strong>
            Coded by Lauryn Mutai{" "}
            <a
              href="https://github.com/chichi5454"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://vermillion-mochi-45d49b.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              Netlify
            </a>
          </strong>
        </footer>
      </div>
    </div>
  );
}
