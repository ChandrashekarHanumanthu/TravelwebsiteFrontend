import React, { useState } from 'react';
import './Booking.css'; // Import the CSS file

const Booking = () => {
  const [destination, setDestination] = useState('');
  const [transport, setTransport] = useState('car');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [to, setTo] = useState('');
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('credit');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      destination,
      transport,
      date,
      name,
      address,
      to,
      phone,
      payment
    };
    
    try {
      const response = await fetch('http://localhost:8080/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      
      if (response.ok) {
        alert('Your booking is successful! Happy Journey');
        setDestination('');
        setTransport('car');
        setDate('');
        setName('');
        setAddress('');
        setTo('');
        setPhone(''); 
        setPayment('credit');
      } else {
        alert('Failed to book. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="booking-container">
      <h2>Book Your Trip</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transport">Transport:</label>
          <select
            id="transport"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="flight">Flight</option>
            <option value="ship">Ship</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment">Payment Method:</label>
          <select
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="book-button">Book</button>
      </form>
    </div>
  );
};

export default Booking;
