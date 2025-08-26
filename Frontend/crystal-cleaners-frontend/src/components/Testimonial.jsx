import React from 'react';
import './Testimonial.css'; // Import its dedicated CSS

import TestimonialImg from '../assets/TestimonialImg.png'; 
import { FaStar } from 'react-icons/fa';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
        
        {/* Left side: Image with badge */}
        <div className="testimonial-image-wrapper">
          <img src={TestimonialImg} alt="Cleaning person" className="testimonial-main-image" />
        </div>

        {/* Right side: Review content */}
        <div className="testimonial-content">
          <div className="stars">
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <p className="review-text">
            "Our cleaner does a wonderful job every time. Love coming home after she's been in!"
          </p>
          <p className="author-name">Samantha Perkins</p>
          <p className="author-title">Busy Mother of Two</p>
        </div>

      
    </section>
  );
}
