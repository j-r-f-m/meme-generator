import React from "react";

export default function Meme() {
  return (
    <form className="form">
      <div className="input--container">
        <input type="text" value="Shut Up"></input>
        <input type="text" value="and take my money"></input>
      </div>
      <button className="form--btn">
        <p className="form--btn--text">Get new Meme image</p>
        <img
          className="form--btn--image"
          src="/images/picture.png"
          alt=""
        ></img>
      </button>
    </form>
  );
}
