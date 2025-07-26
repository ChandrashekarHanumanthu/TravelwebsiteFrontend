import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('http://localhost:8080/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted:', result);
            // Optionally reset the form
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-banner">
                <h1 className="contact-heading">Contact Us</h1>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2 className="contact-info-heading">Get in Touch</h2>
                    <p className="contact-info-paragraph">
                        We would love to hear from you! Feel free to reach out to us for any queries, feedback, or just to say hello.
                    </p>
                    <div className="contact-info-item">
                        <p><strong>Email:</strong> info@travelagency.com</p>
                    </div>
                    <div className="contact-info-item">
                        <p><strong>Phone:</strong> +123 456 7890</p>
                    </div>
                    <div className="contact-info-item">
                        <p><strong>Address:</strong> 123 Travel Lane, City, Country</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className="contact-form-heading">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {submitError && <p className="contact-submit-error">{submitError}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
