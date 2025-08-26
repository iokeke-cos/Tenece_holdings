import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaSyncAlt, FaTools, FaCalendarAlt } from "react-icons/fa";
import "./HeroForm.css";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    frequency: "",
    service: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // 🔜 Send to backend or API later
  };

  return (
    <div className="hero-form-container">
      <h2 className="form-header">Start Your Free Estimate</h2>
      <form onSubmit={handleSubmit} className="hero-form">
        {/* Name */}
        <div className="form-field">
          <FaUser className="form-icon" />
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-field">
          <FaEnvelope className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="form-field">
          <FaPhone className="form-icon" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Frequency */}
        <div className="form-field">
          <FaSyncAlt className="form-icon" />
          <select name="frequency" value={formData.frequency} onChange={handleChange}>
            <option value="">Frequency</option>
            <option value="one-time">One-time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Service */}
        <div className="form-field">
          <FaTools className="form-icon" />
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="">Select Services</option>
            <option value="house">House Cleaning</option>
            <option value="office">Office Cleaning</option>
            <option value="deep-clean">Deep Cleaning</option>
          </select>
        </div>

        {/* Date */}
        <div className="form-field">
          <FaCalendarAlt className="form-icon" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button type="submit" className="book-btn">Book Online</button>
      </form>
    </div>
  );
}
