import React from 'react'
import "./Footer.css
const Footer = () => {
    return (
        <footer className="Footer">
            <div className="footer-info">
                <h1>Paul Debiasi</h1>
                <p>Berlin - Germany</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Design by Paul Debiasi
                </div>
                <div className="sns-links">
                    <a href="https://www.facebook.com/paul.debiasi" target="_blank" rel="noreferrer" >
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/paul-debiasi/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Paul-Debiasi" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
