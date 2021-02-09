import React from 'react'
import './About.css'
import myPic from "../../media/myPic.jpeg"
import Resume from "../resume/Resume"

const About = () => {
    return (
        <div id="about" className='about-container'>
            <div className='about-desc'>
                <div className="about-img">
                  <img className="about-pic"  src={myPic} alt="Paul's" />
                  <Resume/>
                 </div>
                 
                <div className='about-content'>                
                <h3 > A few lines about me !</h3>
                <p>I am a junior software developer, passionate about clean code, user-centered products, &
                solving problems. While actively sharpening my skills, I am currently looking for my next
                challenging role where I can learn and progress on professional and personal levels <br></br>
                <br></br>
                In addition to completing an intensive coding bootcamp, my academic background lies in
                cognitive science. This combined with my natural curiosity and a multi-cultural background
                helps me to be a natural team player, that leads to creative & collaborative solutions.
                 </p>
                 </div>
                
            </div>            
        </div>
    )
}

export default About
