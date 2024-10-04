import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

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
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="BN Logo" className="logo-img" />
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/programs" onClick={togglePrograms}>
                    Programs <span className="dropdown-arrow">&#9662;</span>
                  </Link>
                  {showPrograms && (
                    <ul className="dropdown-menu show-dropdown">
                      <li><Link className="dropdown-item" to="/programs/program1">Program 1</Link></li>
                      <li><Link className="dropdown-item" to="/programs/program2">Program 2</Link></li>
                    </ul>
                  )}
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/success-stories">Success Stories</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about_us" onClick={toggleAbout}>
                    About Us <span className="dropdown-arrow">&#9662;</span>
                  </Link>
                  {showAbout && (
                    <ul className="dropdown-menu show-dropdown">
                      <li><Link className="dropdown-item" to="/about-us/company">Our Company</Link></li>
                      <li><Link className="dropdown-item" to="/about-us/team">Our Team</Link></li>
                    </ul>
                  )}
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/meet-khyati">Meet Khyati</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/health-reads">Health Reads</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active-link" to="/">Recipes</Link>
                </li>

                <li className="nav-item">
                  <button className="btn btn-primary btn-lg rounded-pill consultation-btn">Book Consultation</button>
                </li>
                <li className="nav-item">
                  <img 
                    src={`${process.env.PUBLIC_URL}/logo192.png`} // Replace with the path to your user image
                    alt="User" 
                    className="user-logo" 
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="new-division text-center my-3">
        <span className="text-content">To Know Your Ideal Body Weight, BMI & Obesity Degree -</span>
        <Link to="/your-link" className="click-here-link">Click Here</Link>
      </div>
    </>
  );
};

export default Header;
