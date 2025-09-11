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
  // Format the price using the Nigerian Naira currency
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(service.price);

  return (
    <div className="service-detail-page">
      <div className="service-detail-content">
        <div className="service-detail-image-container">
          <img src={service.mainImage} alt={service.title} className="service-detail-image" />
        </div>
        <div className="service-detail-info">
          <h1 className="service-detail-heading">{service.title}</h1>
          <h3 className="service-detail-price">
            Starting from: {formattedPrice}
          </h3>
          <p className="service-detail-brief">{service.brief}</p>
          <ul className="service-detail-bullet-points">
            {service.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <Link to="/booking" className="book-service-button">
            Book {service.title}
          </Link>
        </div>
      </div>
      <Link to="/services" className="return-to-services">← Back to Services List</Link>
    </div>
  );
}
