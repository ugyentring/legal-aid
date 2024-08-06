import React, { useRef, useState, useEffect } from "react";
import Home from "../../Components/Home/Home";
import axios from "axios";
import "./listdisplay.css";
const ListDisplay = () => {
  const listRef = useRef();
  const [Vid, setVid] = useState([{}]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        console.log("called");

        const res = await axios.get("http://localhost:5000/api/video");

        //check now
        setVid(res.data);
        console.log(Vid);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="wrapper-container">
      <div className="title-container"></div>
      <div className="mainDisplayWrapper" ref={listRef}>
        {Vid.map((vid, indx) => {
          return (
            <>
              <Home index={indx} url={vid.video} img={vid.Poster} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListDisplay;
