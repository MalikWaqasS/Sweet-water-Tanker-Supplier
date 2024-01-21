import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css'; 
const Footer = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';

  const handleCallButtonClick = () => {
    window.location.href = 'tel:+971586253152';
  };

  const handleWhatsAppButtonClick = () => {
    window.location.href = 'https://wa.me/971586253152';
  };

  return (
    <footer className={`footer bg-light ${isServicesPage ? 'services' : ''} ${isAboutPage ? 'about' : ''} ${isContactPage ? 'contact' : ''}`}>
      <div className="container my-2">
        <div className="row">
          {/* Description Section */}
          <div className="col-md-4">
            <h4>Sweet Water Tanker Supply</h4>
            <nav className="nav flex-row">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/services">Services</Link>
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </nav>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-4">
            <h4>Connect with Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p>
                <FaPhone />
                <a href="tel:+971586253152" onClick={handleCallButtonClick}>
                  Phone Call: +971 58 625 3152
                </a>
                <br />
                <FaWhatsapp />
                <a href="https://wa.me/971586253152" onClick={handleWhatsAppButtonClick}>
                  Whats App: +971 58 625 3152
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer.propTypes = {
//   // No mode prop needed for a single mode (light)
// };

export default Footer;
