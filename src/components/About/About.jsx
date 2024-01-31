import React from "react";
import "./about.css";
import { useTheme } from "../ThemeContext";
function About() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className={darkMode ? "" : "black"}>
      <div className="about">
        <div className="about-items">
          <h1>
            We love <span>comfy</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
            quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit
            ad illo sed officiis ea tempore! Similique eos minima sit porro,
            ratione aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
