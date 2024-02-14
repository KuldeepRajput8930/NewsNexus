import React from 'react'
import logo from './logo.svg'
import insta from './insta.svg'
import fb from './fb.svg'
import replit from './replit.svg'
import github from './github.svg'
import './Contact.css'
export default function About(props) {


  return (
    <>
      <div className='contact-container'>
        <div className="contact">
          <h2>Feel free to contact me!</h2>
          <img className="logo" src={logo} alt="logo" />
          <div className="icons">
            <a href="https://www.facebook.com/profile.php?id=100044085411640" rel="noopener noreferrer" target="_blank"><img src={fb} alt="" /></a>
            <a href="https://www.instagram.com/_hello_you_07/" rel="noopener noreferrer" target="_blank"><img src={insta} alt="" /></a>
            <a href="https://github.com/KuldeepRajput8930" rel="noopener noreferrer" target="_blank"><img src={github} alt="" /></a>
            <a href="https://replit.com/@KuldeepRajput3" rel="noopener noreferrer" target="_blank"><img src={replit} alt="" /></a>
          </div>
        </div>
      </div>
    </>
  );
}
