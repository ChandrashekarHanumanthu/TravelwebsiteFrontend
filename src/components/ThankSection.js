import React from 'react';
import './ThankSection.css';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaTwitter, FaFacebookF } from 'react-icons/fa';

const ThankingSection = () => {
    return (
        <div className='thanking-section'>
            <div className='thank-section'>
                <div>
                    <img
                        src="https://coreldrawdesign.com/resources/previews/preview-travel-logo-design-premium-vector-1624458664.jpg"
                        alt="Logo"
                        height="60"
                    />
                </div>
                <div className='type'>
                    <Link className="nav-link" to="/about">About</Link>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </div>
                <div className='social-media-icons'>
                    <FaTelegramPlane className='mar' />
                    <FaTwitter className='mar'/>
                    <FaFacebookF />
                </div>
            </div>
            <h1 className='thank'>Thank You</h1>
        </div>
    );
};

export default ThankingSection;
