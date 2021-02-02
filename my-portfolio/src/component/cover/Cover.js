import React from 'react'
import "./Cover.css"
import video from "../../media/video.mp4"

const Cover = () => {
    return (
        <>
        <div className="cover-container">
            <video className="video" autoPlay loop muted >
                <source src={video} type="video/mp4"/>
            </video>
            <h1 style={{color: 'white'}}>Paul Debiasi</h1>
            <p style={{color: 'white'}}>Developer | Content Creator</p>

            
        </div>
        </>
    )
}

export default Cover
