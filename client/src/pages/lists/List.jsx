
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState, useEffect } from 'react'
import Home from '../../Components/Home/Home'
import axios from 'axios';
import "./listdisplay.css"
const ListDisplay = () => {
    const listRef = useRef();
    const [slideNumber, setslideNumber] = useState(0);
    const [Vid, setVid] = useState([{}]);
    const [isMoved, setisMoved] = useState(false);
    const handleClick = (direction) => {
        setisMoved(true);
        const distance = listRef.current.getBoundingClientRect().x - 150;
        if (direction == "left" && slideNumber >= 0) {
            setslideNumber(slideNumber - 1);


            listRef.current.style.transform = `translateX(${distance + 500}px)`
        }
        if (direction == "right" && slideNumber < 8) {
            setslideNumber(slideNumber + 1);


            listRef.current.style.transform = `translateX(${-225 + distance}px)`
        }
    }




    useEffect(() => {
        const fetchVideo = async () => {
            try {
                console.log("called")

                const res = await axios.get(
                    "http://localhost:5000/api/video",


                );
                const val = { ...res.data };
               
                  //check now
                setVid(res.data);
                console.log(Vid)
                
            } catch (e) {
                console.log(e)

            }

        };
        fetchVideo();
    },[]);
    return (
        <div className="wrapper-container">
            {/* <ArrowBackIosOutlined className="ArrowSliderLeft" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} /> */}
            <div className="title-container">

                
            </div>
            <div className='mainDisplayWrapper' ref={listRef}>
            {Vid.map((vid, indx) => {
                return (
                    <>
                   
                    <Home index={indx} url={vid.video} img={vid.Poster}/>
                   

               
                    </>
                )
            })}
            
            </div>
            {/* <ArrowForwardIosOutlined className="ArrowSliderRight" onClick={() => handleClick("right")} /> */}
        </div>
    )
}

export default ListDisplay
