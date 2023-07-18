import React from "react";
import "./form.css";
import memeData from "./memeData.js";

export default function Form() {
  let url;
  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    console.log(randomNumber);
    url = memeArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form-input" />
        <input type="text" className="form-input " />
        <button className="form-button" onClick={getMemeImage}>
          get a new button
        </button>
      </div>
    </main>
  );
}
