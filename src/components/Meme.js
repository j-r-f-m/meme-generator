import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  console.log(memeImage);

  /**
   * returns random number between min and max
   * The maximum is exclusive and the minimum is inclusive
   * @param {integer} min
   * @param {integer} max
   * @returns random number between min and max
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  }

  function getMemeImage() {
    // get array with url's
    const memesArray = memesData.data.memes;
    const ranNum = getRandomInt(0, 100);
    const url = memesArray[ranNum].url;

    setMemeImage(url);
    console.log(memeImage);
  }
  return (
    <div className="main">
      <div className="form">
        <div className="input--container">
          <input
            type="text"
            className="form--input"
            placeholder="top text"
          ></input>
          <input
            type="text"
            className="form--input"
            placeholder="bottom text"
          ></input>
        </div>
        <button className="form--btn" onClick={getMemeImage}>
          <p className="form--btn--text">Get new Meme image</p>
          <img
            className="form--btn--image"
            src="/images/picture.png"
            alt=""
          ></img>
        </button>
      </div>
      <img className="meme--image" src={memeImage} alt=""></img>
    </div>
  );
}
