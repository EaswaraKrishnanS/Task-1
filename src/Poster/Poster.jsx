import React from "react";
import "./Poster.css";
import image3 from "../Images/main-3.png";

const Poster = () => {
  return (
    <div className="poster-container">
      <h2 className="poster-title">
        The Vibes in Our Centre <span className="smiley">😊</span>
      </h2>
      <div className="underline"></div>
      <img src={image3} alt="logo" />
    </div>
  );
};

export default Poster;
