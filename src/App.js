import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import React from "react";

function App() {
  return (
    <div className="app--container">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
