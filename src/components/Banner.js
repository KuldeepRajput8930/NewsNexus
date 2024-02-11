import React, { Component } from 'react';
import sports from './img/sports.jpg';
import home from './img/home.png';
import technology from './img/technology.jpg';
import business from './img/business.jpg';
import science from './img/science.jpg';
import health from './img/health.jpg';
import entertainment from './img/entertainment.jpg';
import { Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (

            <div className='banner'>
                <h1>Welcome to NewsNexus</h1>
                <h6 className='my-3'>"Navigate the News with NewsNexus: Your Source, Your Story!"</h6>
                <div className="category-container my-2 d-flex justify-content-between">
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
}
