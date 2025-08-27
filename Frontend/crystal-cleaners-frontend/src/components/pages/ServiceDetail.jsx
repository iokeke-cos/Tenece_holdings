// src/components/pages/ServiceDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import allServices from '../../ServicesData';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  console.log("Service ID from URL:", serviceId);
  
  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="service-detail-page not-found">
        <h1>404 - Service Not Found</h1>
        <p>Sorry, the service you're looking for does not exist.</p>
        <Link to="/services" className="return-to-services">← Return to All Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="service-detail-content">
        <div className="service-detail-image-container">
          <img src={service.mainImage} alt={service.title} className="service-detail-image" />
        </div>
        <div className="service-detail-info">
          <h1 className="service-detail-heading">{service.title}</h1>
          <ul className="service-detail-bullet-points">
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <Link to={service.paymentLink} className="book-service-button">
            Book {service.title}
          </Link>
        </div>
      </div>
      <Link to="/services" className="return-to-services">← Back to Services List</Link>
    </div>
  );
}