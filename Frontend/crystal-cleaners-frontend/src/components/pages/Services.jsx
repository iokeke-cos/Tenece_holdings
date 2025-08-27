import React from "react";
import { Link } from 'react-router-dom';
import allServices from '../../ServicesData';
import "./Services.css";

import OfficeCleaningImg from "../../assets/OfficeCleaningImg.png";
import WindowCleaningImg from "../../assets/WindowCleaningImg.png";
import CarpetCleaningImg from "../../assets/CarpetCleaningImg.png";
import BathroomCleaningImg from "../../assets/BathroomCleaningImg.png";
import BedroomCleaningImg from "../../assets/BedroomCleaningImg.png";
import KitchenCleaningImg from "../../assets/KitchenCleaningImg.png";


const Services = () => {
  const services = [
    // Add a 'url' property to each service object
    {id: "office-cleaning", title: "Office Cleaning", description: "Sample text. Click to select the text box.", image: OfficeCleaningImg, url: "/services/office-cleaning" },
    {id: "window-cleaning", title: "Window Cleaning", description: "Sample text. Click to select the text box.", image: WindowCleaningImg, url: "/services/window-cleaning" },
    {id: "carpet-cleaning",title: "Carpet Cleaning", description: "Sample text. Click to select the text box.", image: CarpetCleaningImg, url: "/services/carpet-cleaning" },
    {id: "bathroom-cleaning", title: "Bathroom Cleaning", description: "Sample text. Click to select the text box.",image: BathroomCleaningImg, url: "/services/bathroom-cleaning" },
    {id: "bedroom-cleaning", title: "Bedroom Cleaning", description: "Sample text. Click to select the text box.", image: BedroomCleaningImg, url: "/services/bedroom-cleaning" },
    {id: "kitchen-cleaning", title: "Kitchen Cleaning", description: "Sample text. Click to select the text box.", image: KitchenCleaningImg, url: "/services/kitchen-cleaning" },
  ];

  // Slice the first 3 and next 3 services for top and bottom rows
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 6);

  const renderServiceCard = (service, index) => (
    <div className="service-description-card" key={index}>
      <div className="service-image-box">
        <img
          src={service.image}
          alt={service.title}
          className="service-image"
          onError={(e) => {
            e.target.onerror = null;
            // Corrected the onError prop to use the imported image variable
            e.target.src = OfficeCleaningImg; 
          }}
        />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      {/* Update the href to use the service's unique URL */}
      <Link to={`/services/${service.id}`} className="service-link">
          More
      </Link>
    </div>
  );

  return (
    <div className="services-container">
      <div className="services-content">
        <header className="services-header">
          <h1>Our Services</h1>
          <p>Cleaning services that transform any space into a pristine haven, tailored to your needs.</p>
        </header>

        {/* Top Row */}
        <div className="services-grid">
          {topServices.map(renderServiceCard)}
        </div>

        {/* Bottom Row */}
        <div className="services-grid">
          {bottomServices.map(renderServiceCard)}
        </div>
      </div>
    </div>
  );
};

export default Services;