import React from 'react'
import logo from './logo.svg'
import insta from './insta.svg'
import fb from './fb.svg'
import replit from './replit.svg'
import github from './github.svg'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <div className={`footer`}>
                <div className='d-flex align-items-center my-0 justify-content-center'>
                    <img className="footer-logo" src={logo} alt="logo" />
                    <div className='mx-4'>TextualTwist</div>
                </div>
                <div className='copyright mx-1'>Copyright © 2024 NewsNexus.com</div>
                <div className="footer-icons mx-1">
                    <a href="https://www.facebook.com/profile.php?id=100044085411640"><img src={fb} alt="facebook" /></a>
                    <a href="https://www.instagram.com/_hello_you_07/" rel="noopener noreferrer" target="_blank"><img src={insta} alt="" /></a>
                    <a href="https://github.com/KuldeepRajput8930" rel="noopener noreferrer" target="_blank"><img src={github} alt="" /></a>
                    <a href="https://replit.com/@KuldeepRajput3" rel="noopener noreferrer" target="_blank"><img src={replit} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
