import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Services = () => {
    const cardData = [
        {
            title: 'Sweet and Salt Water Supply',
            imageUrl: 'images/sweet:salt.jpeg',
            description:
                'We supply Sweet Water for <b>Resturents</b>, <b>Hotels</b>, <b>Villas</b> and <b>Offices</b> in all capacities like 1000 Gallons, 1500 Gallons, 5000 Gallons, 10000Gallons.We provide best quality potable water according to standards of Dubai Municipality. DUBAL is the most famous source of potable water in Dubai & even in neighboring Emirates.Our aim is to provide best Sweet water by maintaining its natural quality & composition by delivering through special container tankers',
        },
        {
            title: 'Swimming Pool and Home Pool',
            imageUrl: 'images/swimming-pool.jpg',
            description:
                'We supply Swimming pool water in all capacities like <strong>1000 Gallons</strong>, <strong>1500 Gallons</strong>, <strong>5000 Gallons</strong>, <strong>10000 Gallons</strong>. We provide best quality water for swimming pool. Dubai is home to thousands of swimming pools. These require best quality water. We get water from DUBAL for pools. Our drivers are professional for this delivery of swimming pool water.',
        },
        {
            title: 'Emerge Out Sewage/Waste',
            imageUrl: 'images/removing-watage.jpg',
            description: 'We emerge out water of sewage/waster Water in all capacities like 1000 Gallons, 1500 Gallons, 5000 Gallons, 10000 Gallons  areas in Dubai.',
        },
        {
            title: 'Construction of building',
            imageUrl: 'images/construction.jpg',
            description:
                'We supply water for construction in all capacities like 1000 gallons,1500 gallons,2500 gallons,5000 gallons and 10000 gallons.We provide best quality potable water according to standards of Dubai Municipality. DUBAL is the most famous source of potable water in Dubai & even in neighboring Emirates.Our aim is to provide best Sweet water by maintaining its natural quality & composition by delivering through special container tanker.',
        },
        {
            title: 'Residence Water Tanks Filling',
            imageUrl: 'images/water-tank-copy.jpg',
            description: 'Description for Card 5',
        },
        {
            title: 'Restaurant Water and Laundry Water',
            imageUrl: 'images/laundery.jpg',
            description: 'Description for Card 6',
        },
    ];

    const [visibleCard, setVisibleCard] = useState(0); // Set the initial state to 0 for the first card

    const handleButtonClick = (index) => {
        setVisibleCard((prevVisibleCard) => (prevVisibleCard === index ? null : index));
    };

    const handleCallButtonClick = () => {
        window.location.href = 'tel:+1234567890';
    };

    const handleWhatsAppButtonClick = () => {
        window.location.href = 'https://wa.me/1234567890';
    };

    return (
        <>
            <Helmet>
                <title>Services</title>
                {/* Set the meta description */}
                <meta name="description" content="We provide the best quality of water. Most of the UAE's well-known companies, especially construction companies, are our valuable clients." />
            </Helmet>
            <div className="container text-center">
                <h1>We Supplies water For</h1>
                <p>We are a leading sweet water, salt water Tanker supply company in Dubai. </p>
                <Row>
                    {cardData.map((card, index) => (
                        <Col key={index} md={2}>
                            <Button
                                onClick={() => handleButtonClick(index)}
                                variant="primary"
                                className={`my-3 ${index === visibleCard ? 'active-button' : ''}`}
                            >
                                {card.title}
                            </Button>
                        </Col>
                    ))}
                </Row>
                {visibleCard !== null && (
                    <Card className="custom-box my-3">
                        <Card.Body>
                            <Row>
                                {/* 40% for Image */}
                                <Col md={4}>
                                    <Card.Img variant="top" src={cardData[visibleCard].imageUrl} alt={cardData[visibleCard].title} className="img-fluid" />
                                </Col>
                                {/* 60% for Content */}
                                <Col md={8}>
                                    <strong>
                                        {/* Use the <strong> tag for bold text */}
                                        <Card.Title>{cardData[visibleCard].title}</Card.Title>
                                    </strong>

                                    <Card.Text dangerouslySetInnerHTML={{ __html: cardData[visibleCard].description }} />
                                    <div>
                                        <Button variant="primary" onClick={() => handleCallButtonClick()}>
                                            Call
                                        </Button>{' '}
                                        <Button variant="success" onClick={() => handleWhatsAppButtonClick()}>
                                            WhatsApp
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    );
};

export default Services;
