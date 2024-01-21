import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Gallery from './Gallery';
import Navbar from './Navbar';  // Import the corrected Navbar component

export default function TextForm(props) {
  const handleCallButtonClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const containerStyle = {
    backgroundImage: 'url("Gallery/main.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px', // Set the desired height
    position: 'relative',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%', // Adjust as needed
    left: '50%', // Adjust as needed
    transform: 'translate(-50%, -50%)',
    color: '#ffffff', // Set text color
    textAlign: 'center',
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        {/* Set the meta description */}
        <meta name="description" content="We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients." />
      </Helmet>

      <Navbar title="Home" about="About Us" services="Services" contact="Contact Us" />

      <div style={containerStyle}>
        <div style={textStyle}>
          <h1>Sweet Water Tanker Supply</h1>
          <p>We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients.</p>
          <Button variant="primary" onClick={() => handleCallButtonClick()}>Call</Button>{' '}
        </div>
      </div>

      <div className='container my-5'>
        <About />
      </div>
      <div className='container my-5'>
        <Services />
      </div>
      <div className='container my-5'>
        <Gallery />
      </div>
      <div className='container my-5'>
        <Contact />
      </div>
    
    </>
  );
}
