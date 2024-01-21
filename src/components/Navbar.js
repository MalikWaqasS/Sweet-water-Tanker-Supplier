import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, about, services, contact, toggleMode }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {about}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                {services}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  toggleMode: PropTypes.func, // Removed isRequired
};

Navbar.defaultProps = {
  title: 'Home',
  about: 'About Us',
  services: 'Services',
  contact: 'Contact Us',
};

export default Navbar;
