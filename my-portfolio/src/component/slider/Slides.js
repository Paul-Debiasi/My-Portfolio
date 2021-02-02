import React from 'react'
import AnimeProject from "../../static/AnimeProject.png"
import Connect4 from "../../static/Connect4.jpg"
import ImageBoard from "../../static//ImageBoard.png"
import SocialNetwork from "../../static//SocialNetwork.jpg"
import "./Slider.css"

// console.log(AnimeProject);

const slidesInfo = [
    { 
      id: 1,
      src: AnimeProject,
      alt:"Project 1",
      desc:"API requests",
    },
    { 
      id: 2,
      src: Connect4,
      alt:"Project 2",
      desc:"Vannillajs && jQuery",
    },
    { 
      id: 3,
      src:ImageBoard,
      alt:"Project 3",
      desc:"Vue.js ImageBoard",
    },
    { 
      id: 4,
      src:SocialNetwork,
      alt:"Project 4",
      desc:"React SocialNetwork",
  },
]

const Slides = slidesInfo.map(({id, src, alt,desc}) => (
  <div  className="slide-container">
        <img width="300" height="300"  className="slide-image"   key={id}  src={src} alt={alt}/>
        <div className="slide-desc">
            <span>{desc}</span>
        </div>
    </div>
))



export default Slides