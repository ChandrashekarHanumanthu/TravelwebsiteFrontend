import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://png.pngtree.com/templates/20181023/travel-logo-template-png_37501.jpg"
            alt="Logo"
            height="60"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"  
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contactus">Contact</Link>
            </li>
          </ul>
          <div className="ml-auto">
            <button className="btn text-primary mx-4">Sign In</button>
            <button className="btn btn-primary" type="button">Register</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
