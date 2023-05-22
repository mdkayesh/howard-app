import React from "react";
import "./VideoArea.css";
import playImg from "../News/NewsImg/play.png";
const VideoArea = () => {
  return (
    <div className="video-area">
      <div className="container">
        <div className="vdo-content">
          <h1>THIS IS A PARFECT WAY TO KNOW ABOUT US</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>
          <div className="play-btn">
            <button>
              <img src={playImg} alt="play" />
              play video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoArea;
