import "./header.css";
import React from "react";
import logo from "./images/trollFace.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="anjani" width="100" className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">made with React</h4>
    </header>
  );
}
