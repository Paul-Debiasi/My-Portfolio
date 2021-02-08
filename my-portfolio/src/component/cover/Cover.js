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
            <div className='my-name'>
            <h1 style={{color: 'white'}}>Paul Debiasi</h1>
            <span style={{color: 'white'}}>Software Developer | Content Creator</span>
            </div>
            <div className="stack-container">
            <div className="tech">TECH STACK</div>
            <ul className="stack-icons">
                <div className="stack-first">
              <span>HTML</span>
            <li><i class="fab fa-html5"></i></li>
            <span>CSS</span>
              <li><i class="fab fa-css3-alt"></i></li>
              <span>JAVASCRIPT</span>
              <li><i class="fab fa-js"></i></li> 
              </div>
              <div className="stack-second">
              <span>NODE.JS</span>
              <li><i class="fab fa-node"></i></li>
              <span>REACT</span>
              <li><i class="fab fa-react"></i></li>
              <span>VUE.JS</span>
              <li><i class="fab fa-vuejs"></i></li>
              </div>
            </ul>
          </div>
            
        </div>
        </>
    )
}

export default Cover
