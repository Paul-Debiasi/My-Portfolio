import React, { useState } from 'react'
import "./Navbar.css"
// import { FaBars, FaTimes} from "react-icons/fa"

const Navbar = ({isScrolling}) => { 
    
    const [click, setClick] = useState(false)
   
    const handleClick = () => setClick(!click)

    // const [showLinks, setShowLinks] = useState(false)
   
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div href="./" className="navbar-logo" onClick={() =>{toTheTop(); handleClick();}}>
            Paul Debiasi
            </div>  
            <div  className ="nav-burger">       
            <i onClick={handleClick} className={ click ? "fas fa-times" : "fas fa-bars" } style={{color: "white"}}/>        
            </div>
        <ul className="nav-list" id ={click ? "hidden" : ""}>                    
            <li><a onClick={handleClick} href="#about">About</a></li>
            <li><a onClick={handleClick} href="#projects">Projects</a></li>
            <li><a onClick={handleClick} href="#contact">Contact</a></li>
        </ul>
        </nav>
    )
}

export default Navbar
