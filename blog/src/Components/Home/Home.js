

import { Add, PlayArrow, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import ReactPlayer from 'react-player'
export const Home = ({index,url,img}) => {
    const [isHover, setisHoverd] = useState(true);
    const trailer = "a.mkv";





    return (
<Link className='link'  to={{
        pathname: `/Display?${url}`,
        query: {
           url
        }
    }}>
        <div className="listItem" style={{ left: isHover && index * 380 - 50  }}
            onMouseEnter={() => setisHoverd(true)} onMouseLeave={() => setisHoverd(true) }
            >
         
            <img src={img}></img>
            {isHover && (
                <div className="ishover">

                    {/* <ReactPlayer className="video" url={url} playing={true} mute="muted"
                        loop
                        object-fit="contain"


                    /> */}


                    <div className="iteminfo">

                        <div className="icons">
                            <PlayArrow className="icon"></PlayArrow>
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
    )
}




export default Home
