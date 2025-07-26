import React from 'react';
import './Services.css';

const servicesData = [
    {
        title: 'Tour Packages',
        description: 'Explore the world with our tailored tour packages.',
        icon: '🌍',
    },
    {
        title: 'Hotel Booking',
        description: 'Book your stay at the best hotels at the best prices.',
        icon: '🏨',
    },
    {
        title: 'Flight Booking',
        description: 'Get the best deals on flights to your favorite destinations.',
        icon: '✈️',
    },
    {
        title: 'Car Rentals',
        description: 'Rent a car and explore destinations at your own pace.',
        icon: '🚗',
    },
];

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-heading">Our Services</h1>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
