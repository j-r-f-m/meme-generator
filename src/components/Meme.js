import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  // create state array

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  // create state object
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/25w3.jpg",
  });

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
    const memesArray = allMemeImages.data.memes;
    const ranNum = getRandomInt(0, 100);

    const url = memesArray[ranNum].url;

    setMeme((prevObj) => ({
      // get all properties of old objects and only change the url
      ...prevObj,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setMeme((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
