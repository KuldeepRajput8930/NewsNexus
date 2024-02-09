import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand hover" to="/">NewsNexus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link hover" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hover" to="/">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hover" to="/">Pricing</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle hover" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">General</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
