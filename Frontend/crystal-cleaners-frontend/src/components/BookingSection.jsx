import React from 'react';
import { Link } from "react-router-dom";

import './BookingSection.css'; // Import its dedicated CSS

import BookingStepsImg from '../assets/BookingStepsImg.png'; 

export default function BookingSection() {
  return (
    <section className="booking-section">
      <div className="booking-content-wrapper">
        <h2 className="booking-heading">Book your service in 3 easy steps</h2>
        
        <div className="booking-img-wrapper">
          <img src={BookingStepsImg} alt="Booking Steps" className="booking-img" />
        </div>

        <Link to="/services" className="book-clean-button">
          Book Your Home Clean
        </Link>
        <p className="booking-info">34 cleans booked in the last 24 hours</p>
      </div>
    </section>
  );
}


