import React, {useState} from 'react'
import "./Navbar.css"
// import { FaBars, FaTimes} from "react-icons/fa"

const Navbar = ({isScrolling}) => { 
    
    const [click, setClick] = useState(false)
   
    const handleClick = () => setClick(!click)
   
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div href="./" className="navbar-logo" onClick={toTheTop}>
            Paul Debiasi
            </div>  
            <div onClick={handleClick}>       
            <i className={ click ? "fas fa-times" : "fas fa-bars" } style={{color: "white"}}/>        
            </div>
        <ul className="nav-list">                    
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
             
        </ul>
        </nav>
    )
}

export default Navbar
