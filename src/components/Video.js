import React from 'react';
import resort from '../videos/resort.mp4';
import './video.css'

const Video = () => {
    return (
        <div className="video-container">
<video autoPlay muted src={resort} type="video/mp4" />
        </div>
        
    )
}

export default Video
