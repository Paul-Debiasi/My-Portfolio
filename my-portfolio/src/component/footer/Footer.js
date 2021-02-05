import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"

import "./Footer.css"

const Footer = () => {
    return (
        <footer id="contact" className="footer">
          <div className="footer-contact">
            <h3 >CONTACT</h3>
             <div className="sns-links">
               <a  className="foot-email" href="mailto:debiasi.paul@gmail.com" target="_blank" rel="noreferrer" >
                 <FaEnvelope/>
               </a>
               <a className="foot-linkedin" href="https://www.linkedin.com/in/paul-debiasi/" target="_blank" rel="noreferrer">
                 <FaLinkedin />
               </a>
               <a   className="foot-github"href="https://github.com/Paul-Debiasi" target="_blank" rel="noreferrer">                     
                 <FaGithub/>
               </a>
              </div>
            </div>
            <div className="footer-info">
            <div><a href="mailto:debiasi.paul@gmail.com">debiasi.paul@gmail.com</a></div>   
            <span>Web Developer | Content Creator</span>
          </div>
        </footer>
    )
}

export default Footer
