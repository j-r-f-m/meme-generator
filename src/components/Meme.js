import React from "react";

export default function Meme() {
  // create state array

  // create state object
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/25w3.jpg",
  });

  const [memeArr, setMemeArr] = React.useState({});

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

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setMemeArr(res.data.memes));
  }, []);
  console.log(memeArr);

  function getMemeImage() {
    const ranNum = getRandomInt(0, 100);
    const url = memeArr[ranNum].url;

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
