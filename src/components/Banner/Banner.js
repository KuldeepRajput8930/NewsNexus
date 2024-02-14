import React from 'react';
import sports from './sports.jpg';
import home from './home.png';
import technology from './technology.jpg';
import business from './business.jpg';
import science from './science.jpg';
import health from './health.jpg';
import entertainment from './entertainment.jpg';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {

    return (

        <div className='banner'>
            <h1>Welcome to NewsNexus</h1>
            <h6 className='my-3'>"Navigate the News with NewsNexus: Your Source, Your Story!"</h6>
            <div className="category-container">
                <li><Link className='category' to="/"><img className='category-image' src={home} alt="" /><span>Home</span></Link></li>
                <li><Link className='category' to="/health"><img className='category-image' src={health} alt="" /><span>Health</span></Link></li>
                <li><Link className='category' to="/sports"><img className='category-image' src={sports} alt="" /><span>Sports</span></Link></li>
                <li><Link className='category' to="/science"><img className='category-image' src={science} alt="" /><span>Science</span></Link></li>
                <li><Link className='category' to="/business"><img className='category-image' src={business} alt="" /><span>Business</span></Link></li>
                <li><Link className='category' to="/technology"><img className='category-image' src={technology} alt="" /><span>Technology</span></Link></li>
                <li><Link className='category' to="/entertainment"><img className='category-image' src={entertainment} alt="" /><span>Entertainment</span></Link></li>
            </div>
        </div>
    )
}

export default Banner
