import React from 'react';
import './ServicesSection.css'; // Import its dedicated CSS
import { Link } from 'react-router-dom';

// Importing icons from react-icons/fa
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'; // Using fa6 for more modern icons

import OfficeCleaningIcon from '../assets/OfficeCleaningIcon.png';
import WindowCleaningIcon from '../assets/WindowCleaningIcon.png';
import CarpetCleaningIcon from '../assets/CarpetCleaningIcon.png';
import BathroomCleaningIcon from '../assets/BathroomCleaningIcon.png';
import BedroomCleaningIcon from '../assets/BedroomCleaningIcon.png';
import KitchenCleaningIcon from '../assets/KitchenCleaningIcon.png';

// Import your hover background images here
import OfficeCleaningImg from '../assets/OfficeCleaningImg.png'; 
import WindowCleaningImg from '../assets/WindowCleaningImg.png';
import CarpetCleaningImg from '../assets/CarpetCleaningImg.png';
import BathroomCleaningImg from '../assets/BathroomCleaningImg.png';
import BedroomCleaningImg from '../assets/BedroomCleaningImg.png';
import KitchenCleaningImg from '../assets/KitchenCleaningImg.png';


export default function ServicesSection() {
    // Define your services data
    const services = [
        { 
            icon: <img src={OfficeCleaningIcon} alt="Office Cleaning Icon" className="custom-service-icon" />, 
            title: "Office Cleaning", 
            link: "/services/office-cleaning",
            hoverBgImage: OfficeCleaningImg // Add hover background
        },
        { 
            icon: <img src={WindowCleaningIcon} alt="Window Cleaning Icon" className="custom-service-icon" />, 
            title: "Window Cleaning", 
            link: "/services/window-cleaning", 
            hoverBgImage: WindowCleaningImg
        },
        { 
            icon: <img src={CarpetCleaningIcon} alt="Carpet Cleaning Icon" className="custom-service-icon" />, 
            title: "Carpet Cleaning", 
            link: "/services/carpet-cleaning", 
            hoverBgImage: CarpetCleaningImg
        },
        { 
            icon: <img src={BathroomCleaningIcon} alt="Bathroom Cleaning Icon" className="custom-service-icon" />, 
            title: "Bathroom Cleaning", 
            link: "/services/bathroom-cleaning", 
            hoverBgImage: BathroomCleaningImg
        },
        { 
            icon: <img src={BedroomCleaningIcon} alt="Bedroom Cleaning Icon" className="custom-service-icon" />, 
            title: "Bedroom Cleaning", 
            link: "/services/bedroom-cleaning", 
            hoverBgImage: BedroomCleaningImg
        },
        { 
            icon: <img src={KitchenCleaningIcon} alt="Kitchen Cleaning Icon" className="custom-service-icon" />, 
            title: "Kitchen Cleaning", 
            link: "/services/kitchen-cleaning", 
            hoverBgImage: KitchenCleaningImg
        },
    ];

    return (
        <section id="services" className="services-section">
            <div className="services-content-wrapper">
                <h2 className="services-heading">Our Top Rated Cleaning Services</h2>
                <p className="services-description">
                    Count on us as your dependable partner for exceptional cleaning solutions that turn spaces into pristine
                    havens. Our dedicated team offers a wide array of services tailored to your unique requirements.
                </p>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link to={service.link} className="service-card-link" key={index}> {/* Wrap the card in a Link */}
                            <div 
                                className="service-card" 
                                style={{ '--hover-bg-image': `url(${service.hoverBgImage})` }} // Pass the image URL as a CSS variable
                            >
                                <div className="card-icon">{service.icon}</div>
                                <div className="card-info">
                                    <h3 className="card-title">{service.title}</h3>
                                    <FaArrowUpRightFromSquare className="card-arrow" /> {/* Arrow icon for each card */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="booking-container">
                    <Link to="/services" className="view-services-button">
                        View Our Services
                    </Link>
                    <p className="booking-info">34 cleans booked in the last 24 hours</p>
                </div>
            </div>
        </section>
    );
}