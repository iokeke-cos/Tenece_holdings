import React from 'react';
import './Standards.css'; 

// Importing icons from react-icons/fa
import { FaCheckCircle } from 'react-icons/fa'; 
import CleaningerStandards from '../assets/CleaningStandards.png';

export default function StandardsSection() {
  const benefits = [
    "Get the same trusted cleaner, every time",
    "Background checked",
    "Bonded & Insured",
    "Eco-friendly green cleaning",
    "Our own supplies & equipment",
    "Hundreds of 5-star reviews",
  ];

  return (
    <section className="standards-section">
      <div className="standards-content-wrapper">
        {/* Left side: Text content */}
        <div className="standards-text-content">
          <h1 className="standards-heading">We Maintain The <br /> Highest Standards For <br /> Our House Cleaners</h1>
          
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button className="book-home-clean-button">Book Your Home Clean</button>
          <p className="standards-booking-info">34 cleans booked in the last 24 hours</p>
        </div>

        <div className="standards-image-collage"> 
          <img src={CleaningerStandards} alt="Cleaner working" className="collage-img" />
        </div>
      </div>
    </section>
  );
}