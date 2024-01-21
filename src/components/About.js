import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import '../App.css';

const About = () => {
    const handleCallButtonClick = () => {
        window.location.href = 'tel:+1234567890';
    };

    const handleWhatsAppButtonClick = () => {
        window.location.href = 'https://wa.me/1234567890';
    };

    return (
        <>
            <Helmet>
                <title>About</title>
                {/* Set the meta description */}
                <meta name="description" content="We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients." />
            </Helmet>
            <div className="container my-2">
                <strong><h1>About Us</h1></strong>
                <div className="row">
                    {/* Image Portion */}

                    {/* Text Content Portion */}
                    <div className="col-md-6">
                        <h2>We provide the best quality of water</h2>
                        <p>Water supply Dubai was formed to fulfill the customer’s demands. We needed our clients to be glad about the services we offer. Our clients consistently return to us as a result of our steadfast services.</p>
                        <strong><p>We provided sweet and salt water all over the area in Dubai Since 2015.</p></strong>
                        <h4 style={{ color: 'red' }}>We supply Sweet & Salt Water for</h4>
                        <ul style={{ color: 'blue' }}>
                            <strong><li>Swimming Pool</li></strong>
                            <strong><li>Home/Villas Pool</li></strong>
                            <strong><li>Nursery Plants</li></strong>
                            <strong><li>Hotels Resturents</li></strong>
                            <strong><li>Laundries</li></strong>
                            <strong><li>Construction Buildings</li></strong>
                        </ul>
                        {/* Add more text content as needed */}
                        <h3>Contact Us</h3>
                        <div className='button text-center my-3'>
                            <Button variant="primary" onClick={() => handleCallButtonClick()}>Call</Button>{' '}
                            <Button variant="success" onClick={() => handleWhatsAppButtonClick()}>WhatsApp</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/sweet:salt.jpeg" alt="About Us" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
