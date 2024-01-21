import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCallButtonClick = () => {
        window.location.href = 'tel:+971586253152';
    };

    const handleWhatsAppButtonClick = () => {
        window.location.href = 'https://wa.me/971586253152';
    };

    return (
        <>
            <Helmet>
                <title>Contact</title>
                {/* Set the meta description */}
                <meta name="description" content="We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients." />
            </Helmet>
            <div className="contact-container">
                <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Your Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <p>
                                We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients.
                            </p>
                        </div>
                        <div>
                            <p>
                                For more inquiries, you can <strong>Contact Us</strong> through
                            </p>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                                    <a href="tel:+971586253152" onClick={handleCallButtonClick}>
                                        Phone Call: +971 58 625 3152
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faWhatsapp} />{' '}
                                    <a href="https://wa.me/971586253152" onClick={handleWhatsAppButtonClick}>
                                        Whats App: +971 58 625 3152
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="300" // Adjust the height as needed
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src={`https://maps.google.com/maps?q=Dubai&output=embed&z=14`} // Adjust the zoom level (z=14 in this example)
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
