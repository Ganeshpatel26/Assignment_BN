import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const togglePrograms = () => setShowPrograms(!showPrograms);
  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 full-width-navbar">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="/">
              <img src="/logo192.png" alt="BN Logo" className="logo-img" />
            </a>

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
              <ul className="navbar-nav ms-auto">
                {/* Programs Vertical Dropdown with Arrow Icon */}
                <li className="nav-item">
                  <a className="nav-link" href="/programs" onClick={togglePrograms}>
                    Programs <span className="dropdown-arrow">&#9662;</span>
                  </a>
                  {showPrograms && (
                    <ul className="dropdown-menu show-dropdown">
                      <li><a className="dropdown-item" href="/programs/program1">Program 1</a></li>
                      <li><a className="dropdown-item" href="/programs/program2">Program 2</a></li>
                    </ul>
                  )}
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/success-stories">Success Stories</a>
                </li>

                
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus" onClick={toggleAbout}>
                    About Us <span className="dropdown-arrow">&#9662;</span>
                  </a>
                  {showAbout && (
                    <ul className="dropdown-menu show-dropdown">
                      <li><a className="dropdown-item" href="/about-us/company">Our Company</a></li>
                      <li><a className="dropdown-item" href="/about-us/team">Our Team</a></li>
                    </ul>
                  )}
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/meet-khyati">Meet Khyati</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/health-reads">Health Reads</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active-link" href="/">Recipes</a>
                </li>

                <li className="nav-item">
                  <button className="btn btn-primary btn-lg rounded-pill consultation-btn">Book Consultation</button>
                </li>
                <li className="nav-item">
                  <img 
                    src="/logo192.png" // Replace with the path to your user image
                    alt="User" 
                    className="user-logo" 
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* New Division with Text and Link */}
      <div className="new-division text-center my-3">
        <span className="text-content">To Know Your Ideal Body Weight, BMI & Obesity Drgree -</span>
        <a href="/your-link" className="click-here-link">Click Here</a>
      </div>
    </>
  );
};

export default Header;
