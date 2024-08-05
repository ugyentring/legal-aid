import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = ({ index, url, img }) => {
  const [isHover, setIsHover] = useState(false); // Initialize to false
  return (
    <Link
      className="link"
      to={{
        pathname: `/Display?${url}`,
        search: `?url=${url}`, // Updated to search to handle URL parameters
      }}
    >
      <div
        className="listItem"
        style={{ left: isHover ? index * 380 - 50 : 0 }} // Fixed condition to reflect hover state
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)} // Corrected to set isHover to false on mouse leave
      >
        <img src={img} alt="hello" />
        {isHover && (
          <div className="ishover">
            <div className="iteminfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="listiteminfo">
                <span>1 hr 14 min</span>
                <span className="limit">18+</span>
                <span>2008</span>
              </div>
              <div className="desc">
                The Dark Knight Rises is a 2012 superhero film directed by
                Christopher Nolan,
              </div>
              <div className="genre">Action/Thriller</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Home;
