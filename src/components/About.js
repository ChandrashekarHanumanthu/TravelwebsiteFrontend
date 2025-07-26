import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <h1 className="about-heading">About Us</h1>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-subheading">Who We Are</h2>
                    <p className="about-paragraph">
                        We are a leading travel agency committed to offering unforgettable travel experiences. Our mission is to make travel easy and accessible for everyone, providing exceptional services and personalized packages to suit all kinds of travelers.
                    </p>
                    <h2 className="about-subheading">Our Mission</h2>
                    <p className="about-paragraph">
                        To inspire and enable people to explore the world, by offering the best travel deals, expert guidance, and an unparalleled customer experience.
                    </p>
                    <h2 className="about-subheading">Why Choose Us?</h2>
                    <p className="about-paragraph">
                        With years of experience in the industry, a dedicated team of professionals, and a passion for travel, we ensure that every trip is memorable, hassle-free, and tailored to your preferences.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://images.pexels.com/photos/21014/pexels-photo.jpg" alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
