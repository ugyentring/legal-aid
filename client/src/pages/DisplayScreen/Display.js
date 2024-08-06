import React from "react";
import "./display.css";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
const Display = () => {
  const { search } = useLocation();
  const myArray = search.slice(1);
  console.log(myArray);

  return (
    <div className="main">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={myArray}
          width="100vw"
          height="40%"
          controls={true}
          playing={true}
          mute="muted"
          loop
        />
      </div>
    </div>
  );
};

export default Display;
