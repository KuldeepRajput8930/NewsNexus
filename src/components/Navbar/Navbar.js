import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const colorhandle = () => {
    let categories = document.getElementsByClassName('active-link');
    Array.from(categories).forEach(category => {
      category.style.color = '#fff';
    });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" style={{ backgroundColor: '#011e29' }}>
          <Link className="navbar-brand active-link" to="/" onClick={colorhandle}>NewsNexus</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active-link" onClick={colorhandle} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active-link" onClick={colorhandle} to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active-link" onClick={colorhandle} to="/Contact">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={colorhandle}>
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item rounded" to="/">General</Link></li>
                  <li><Link className="dropdown-item rounded" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item rounded" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item rounded" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item rounded" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item rounded" to="/technology">Technology</Link></li>
                  <li><Link className="dropdown-item rounded" to="/entertainment">Entertainment</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
