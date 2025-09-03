import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCalendarAlt, FaRegClock, FaBroom, FaRegCommentDots } from "react-icons/fa";
import "./Booking.css";


const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    serviceType: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Booking submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      time: "",
      serviceType: "",
      message: "",
    });
  };


  return (
    <div className="booking-form-container">
      <h2 className="form-title">Cleaning Service Booking Form</h2>
      <form className="booking-form" onSubmit={handleSubmit}>


        {/* 1. Full name */}
        <div className="form-group">
          <label>1. Full name</label>
          <div className="input-group-grid">
            <div className="input-with-icon">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-with-icon">
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>


        {/* 2. Email */}
        <div className="form-group">
          <label>2. Email address</label>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>


        {/* 3. Phone */}
        <div className="form-group">
          <label>3. Phone number</label>
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="form-input-full"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10,15}" // Only allows 10–15 digits
              title="Phone number should contain only digits"
              required
            />
          </div>
        </div>


        {/* 4. Address */}
        <div className="form-group">
          <label>4. Service address</label>
          <div className="input-with-icon">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="address"
              placeholder="Enter your service address"
              className="form-input-full"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>


        {/* 5. Date */}
        <div className="form-group">
          <label>5. Preferred date</label>
          <div className="input-with-icon">
            <FaRegCalendarAlt className="input-icon" />
            <input
              type="date"
              name="date"
              className="form-input-full"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>


        {/* 6. Time */}
        <div className="form-group">
          <label>6. Preferred time</label>
          <div className="input-with-icon">
            <FaRegClock className="input-icon" />
            <input
              type="time"
              name="time"
              className="form-input-full"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>


        {/* 7. Service type */}
        <div className="form-group">
          <label>7. Type of cleaning service</label>
          <div className="input-with-icon">
            <FaBroom className="input-icon" />
            <select
              name="serviceType"
              className="form-input-full"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Please select a service</option>
              <option value="house">Office Cleaning</option>
              <option value="office">Window Cleaning</option>
              <option value="deep">Carpet Cleaning</option>
              <option value="deep">Bedroom Cleaning</option>
              <option value="deep">Bathroom Cleaning</option>
              <option value="deep">Kitchen Cleaning</option>
            </select>
          </div>
        </div>


        {/* 8. Special Message */}
        <div className="form-group">
          <label>8. Special requests / Message</label>
          <div className="input-with-icon">
            <FaRegCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Enter any special instructions or requests"
              className="form-input-full"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
        </div>


        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};


export default BookingForm;