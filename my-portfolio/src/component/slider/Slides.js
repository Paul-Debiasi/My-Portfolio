import React from 'react'
import AnimeProject from "../../static/AnimeProject.png"
import Connect4 from "../../static/Connect4.jpg"
import ImageBoard from "../../static/ImageBoard.png"
import SocialNetwork from "../../static/SocialNetwork.jpg"
import "./Slider.css"

// console.log(AnimeProject);

const slidesInfo = [
    { 
      id: 1,
      src: AnimeProject,
      alt:"Project 1",
      desc:"API requests",
      repo:"https://github.com/Paul-Debiasi/Anime-Project"
    },
    { 
      id: 2,
      src: Connect4,
      alt:"Project 2",
      desc:"Vannillajs && jQuery",
      repo: "https://github.com/Paul-Debiasi/Small-Projects"
    },
    { 
      id: 3,
      src:ImageBoard,
      alt:"Project 3",
      desc:"Vue.js ImageBoard",
      repo:"https://github.com/Paul-Debiasi/Image-board"
    },
    { 
      id: 4,
      src:SocialNetwork,
      alt:"Project 4",
      desc:"React SocialNetwork",
      repo:"https://github.com/Paul-Debiasi/SocialNetwork"
  },
]

const Slides = slidesInfo.map(({id, src, alt,desc,repo}) => (
  <div  className="slide-container">
        <img width="300" height="300"  className="slide-image"   key={id}  src={src} alt={alt}/>
        <div className="slide-desc">
            <span>{desc}</span>
            < a style={{color: 'white', }} href={repo} target="_blank" rel="noreferrer">GitHub</a>
        </div>
    </div>
))



export default Slides