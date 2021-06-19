import React from 'react';
import resort from '../videos/resort.mp4';
import resortOne from "../images/resortOne.jpeg";
import resortTwo from "../images/resortTwo.jpeg";
import './video.css'

const Video = () => {
    return (
        <div className="video-container">
{/* <video loop autoPlay src={resort} type="video/mp4" /> */}
<img src={resortOne} alt="" /> <h1> Isla Escondida</h1>


        </div>
        
    )
}

export default Video
