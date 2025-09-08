import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaBroom,
  FaRegCommentDots,
} from "react-icons/fa";
import "./Booking.css";

const BookingForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });
  const navigate = useNavigate();

  // Helper function to validate all form fields
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Full name is required.";
    if (!data.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!data.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(data.phone)) {
      newErrors.phone = "Phone number should be 10-15 digits.";
    }
    if (!data.address) newErrors.address = "Address is required.";
    if (!data.date) newErrors.date = "Preferred date is required.";
    if (!data.time) newErrors.time = "Preferred time is required.";
    if (!data.serviceType) newErrors.serviceType = "Please select a service.";
    return newErrors;
  };

  // Handles input changes to clear errors on a specific field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    // Clear the error for this field if the user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form and set errors
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    // If there are errors, stop the submission
    if (Object.keys(formErrors).length > 0) {
      const firstInvalidField = document.querySelector(`[name="${Object.keys(formErrors)[0]}"]`);
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(errMsg || "Failed to send booking data");
      }

      const result = await response.json();
      const bookingId = result.bookingId;

      setShowSuccess(true);
      setFormData({ // Reset form fields
        name: '', email: '', phone: '', address: '',
        date: '', time: '', serviceType: '', message: ''
      });

      setTimeout(() => {
        navigate(`/payment/${bookingId}`);
      }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Cleaning Service Booking Form</h2>

      <form className="booking-form" onSubmit={handleSubmit}>

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">1. Full name</label>
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className={`form-input ${errors.name ? 'invalid' : ''}`}
              value={formData.name}
              onChange={handleInputChange}
              id="name"
            />
          </div>
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">2. Email</label>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`form-input ${errors.email ? 'invalid' : ''}`}
              value={formData.email}
              onChange={handleInputChange}
              id="email"
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">3. Phone Number</label>
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className={`form-input ${errors.phone ? 'invalid' : ''}`}
              value={formData.phone}
              onChange={handleInputChange}
              id="phone"
            />
          </div>
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">4. Address</label>
          <div className="input-with-icon">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className={`form-input ${errors.address ? 'invalid' : ''}`}
              value={formData.address}
              onChange={handleInputChange}
              id="address"
            />
          </div>
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        {/* START OF NEW GRID LAYOUT */}
        <div className="input-group-grid">
          {/* Date */}
          <div className="form-group">
            <label htmlFor="date">5. Preferred date</label>
            <div className="input-with-icon">
              <FaRegCalendarAlt className="input-icon" />
              <input
                type="date"
                name="date"
                className={`form-input-full ${errors.date ? 'invalid' : ''}`}
                value={formData.date}
                onChange={handleInputChange}
                id="date"
              />
            </div>
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          {/* Time */}
          <div className="form-group">
            <label htmlFor="time">6. Preferred time</label>
            <div className="input-with-icon">
              <FaRegClock className="input-icon" />
              <input
                type="time"
                name="time"
                className={`form-input-full ${errors.time ? 'invalid' : ''}`}
                value={formData.time}
                onChange={handleInputChange}
                id="time"
              />
            </div>
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
        </div>
        {/* END OF NEW GRID LAYOUT */}

        {/* Service type */}
        <div className="form-group">
          <label htmlFor="serviceType">7. Type of cleaning service</label>
          <div className="input-with-icon">
            <FaBroom className="input-icon" />
            <select
              name="serviceType"
              className={`form-input-full ${errors.serviceType ? 'invalid' : ''}`}
              value={formData.serviceType}
              onChange={handleInputChange}
              id="serviceType"
            >
              <option value="">Please select a service</option>
              <option value="Office Cleaning">Office Cleaning</option>
              <option value="Window Cleaning">Window Cleaning</option>
              <option value="Carpet Cleaning">Carpet Cleaning</option>
              <option value="Bedroom Cleaning">Bedroom Cleaning</option>
              <option value="Bathroom Cleaning">Bathroom Cleaning</option>
              <option value="Kitchen Cleaning">Kitchen Cleaning</option>
            </select>
          </div>
          {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
        </div>

        {/* Special Message */}
        <div className="form-group">
          <label htmlFor="message">8. Special requests / Message</label>
          <div className="input-with-icon">
            <FaRegCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Enter any special instructions or requests"
              className="form-input-full"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              id="message"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {showSuccess && (
        <p className="response-msg">
          ✅ Your booking has been sent! We'll contact you soon.
        </p>
      )}
    </div>
  );
};

export default BookingForm;