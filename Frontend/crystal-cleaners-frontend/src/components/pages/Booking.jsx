import React, { useState, useRef } from "react";
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
import allServices from "../../ServicesData";
import "./Booking.css";

const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    address: useRef(null),
    date: useRef(null),
    time: useRef(null),
    service: useRef(null),
  };

  // Validation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Full name is required.";
    if (!data.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email address is invalid.";
    if (!data.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(data.phone)) newErrors.phone = "Phone number should be 10–15 digits.";
    if (!data.address.trim()) newErrors.address = "Address is required.";
    if (!data.date) newErrors.date = "Preferred date is required.";
    if (!data.time) newErrors.time = "Preferred time is required.";
    if (!data.service) newErrors.service = "Please select a service.";
    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    setErrors((prev) => {
      const updatedErrors = { ...prev };
      if (name === "name" && value.trim()) delete updatedErrors.name;
      if (name === "email" && value.trim() && /\S+@\S+\.\S+/.test(value)) delete updatedErrors.email;
      if (name === "phone" && value.trim() && /^\d{10,15}$/.test(value)) delete updatedErrors.phone;
      if (name === "address" && value.trim()) delete updatedErrors.address;
      if (name === "date" && value) delete updatedErrors.date;
      if (name === "time" && value) delete updatedErrors.time;
      if (name === "service" && value) delete updatedErrors.service;
      return updatedErrors;
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      if (fieldRefs[firstErrorField] && fieldRefs[firstErrorField].current) {
        fieldRefs[firstErrorField].current.scrollIntoView({ behavior: "smooth", block: "center" });
        fieldRefs[firstErrorField].current.focus();
      }
      return;
    }

    console.log("Form submitted successfully:", formData);
    setSuccess(true);

    // Hide success message and redirect after 3 seconds
    setTimeout(() => {
      setSuccess(false);
      navigate("/payment");
    }, 3000);
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book a Cleaning Service</h2>

        {/* Full Name */}
        <div className={`form-group ${errors.name ? "has-error" : ""}`}>
          <label>Full Name</label>
          <div className="input-wrapper">
            <FaUser className="input-icon" />
            <input
              ref={fieldRefs.name}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className={`form-group ${errors.email ? "has-error" : ""}`}>
          <label>Email</label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input
              ref={fieldRefs.email}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
          <label>Phone Number</label>
          <div className="input-wrapper">
            <FaPhone className="input-icon" />
            <input
              ref={fieldRefs.phone}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Address */}
        <div className={`form-group ${errors.address ? "has-error" : ""}`}>
          <label>Address</label>
          <div className="input-wrapper">
            <FaMapMarkerAlt className="input-icon" />
            <input
              ref={fieldRefs.address}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* Date & Time Side by Side */}
        <div className="date-time-container">
          {/* Date */}
          <div className={`form-group ${errors.date ? "has-error" : ""}`}>
            <label>Preferred Date</label>
            <div className="input-wrapper">
              <FaRegCalendarAlt className="input-icon" />
              <input
                ref={fieldRefs.date}
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            {errors.date && <p className="error">{errors.date}</p>}
          </div>

          {/* Time */}
          <div className={`form-group ${errors.time ? "has-error" : ""}`}>
            <label>Preferred Time</label>
            <div className="input-wrapper">
              <FaRegClock className="input-icon" />
              <input
                ref={fieldRefs.time}
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            {errors.time && <p className="error">{errors.time}</p>}
          </div>
        </div>

        {/* Service */}
        <div className={`form-group ${errors.service ? "has-error" : ""}`}>
          <label>Service</label>
          <div className="input-wrapper">
            <FaBroom className="input-icon" />
            <select
              ref={fieldRefs.service}
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              {allServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          {errors.service && <p className="error">{errors.service}</p>}
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Additional Message</label>
          <div className="input-wrapper">
            <FaRegCommentDots className="input-icon" />
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional information?"
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Submit Booking
        </button>

        {/* Success Message */}
        {success && <p className="success-message">Booking submitted successfully!</p>}
      </form>
    </div>
  );
};

export default BookingForm;
