import React from 'react';
import './ServicesSection.css'; // Import its dedicated CSS

// Importing icons from react-icons/fa
import { FaArrowUpRightFromSquare  } from 'react-icons/fa6'; // Using fa6 for more modern icons

import OfficeCleaningIcon from '../assets/OfficeCleaningIcon.png';
import WindowCleaningIcon from '../assets/WindowCleaningIcon.png'
import CarpetCleaningIcon from '../assets/CarpetCleaningIcon.png'
import BathroomCleaningIcon from '../assets/BathroomCleaningIcon.png'
import BedroomCleaningIcon from '../assets/BedroomCleaningIcon.png'
import KitchenCleaningIcon from '../assets/KitchenCleaningIcon.png'

export default function ServicesSection() {
  // Define your services data
  const services = [
    { icon: <img src={OfficeCleaningIcon} alt="Window Cleaning Icon" className="custom-service-icon" />, title: "Office Cleaning", link: "#" },
    { icon: <img src={WindowCleaningIcon} alt="Window Cleaning Icon" className="custom-service-icon" />, title: "Window Cleaning", link: "#" },
    { icon: <img src={CarpetCleaningIcon} alt="Carpet Cleaning Icon" className="custom-service-icon" />, title: "Carpet Cleaning", link: "#" },
    { icon: <img src={BathroomCleaningIcon} alt="Bathroom Cleaning Icon" className="custom-service-icon" />, title: "Bathroom Cleaning", link: "#" },
    { icon: <img src={BedroomCleaningIcon} alt="Bedroom Cleaning Icon" className="custom-service-icon" />, title: "Bedroom Cleaning", link: "#" },
    { icon: <img src={KitchenCleaningIcon} alt="Kitchen Cleaning Icon" className="custom-service-icon" />, title: "Kitchen Cleaning", link: "#" },
  ];

  return (
    <section className="services-section">
      <div className="services-content-wrapper">
        <h2 className="services-heading">Our Top Rated Cleaning Services</h2>
        <p className="services-description">
          Count on us as your dependable partner for exceptional cleaning solutions that turn spaces into pristine
          havens. Our dedicated team offers a wide array of services tailored to your unique requirements.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon">{service.icon}</div>
              <div className="card-info">
                <h3 className="card-title">{service.title}</h3>
                <FaArrowUpRightFromSquare className="card-arrow" /> {/* Arrow icon for each card */}
              </div>
            </div>
          ))}
        </div>

        <button className="view-services-button">View Our Services</button>
        <p className="booking-info">34 cleans booked in the last 24 hours</p>
      </div>
    </section>
  );
}
