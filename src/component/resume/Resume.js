import React from 'react'
import "./Resume.css"
import PaulDebiasiResume from "../../static/My-Resume.pdf"

const Resume = () => {
    return (
        <div className="resume-container">
            <a href={PaulDebiasiResume} download="My-Resume.pdf">
            <span>DOWNLOAD RESUME</span>
            </a>
        </div>
    )
}

export default Resume
