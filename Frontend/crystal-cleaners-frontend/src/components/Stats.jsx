import React from 'react';
import './Stats.css'; // Import its dedicated CSS

export default function Stats() {
  const statsData = [
    { value: "1M+", label: "More than Cleans" },
    { value: "100K+", label: "Customers Satisfied" },
    { value: "128+", label: "Live in over Cities" },
    { value: "4.8", label: "Customer Rating" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-content-wrapper">
        <h2 className="stats-heading">Customer Satisfaction Stats</h2>
        
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-card" key={index}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <button className="book-clean-button">Book Your Home Clean</button>
        <p className="stats-booking-info">34 cleans booked in the last 24 hours</p>
      </div>
    </section>
  );
}
