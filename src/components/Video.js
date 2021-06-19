import React from 'react';
import resortOne from "../images/resortOne.jpg";

import './css/video.css'

const Video = () => {
    return (
        <div className="video-container">
{/* <video loop autoPlay src={resort} type="video/mp4" /> */}
<img className="firstImage" src={resortOne} alt=""/>
        </div>
        
    )
}

export default Video
