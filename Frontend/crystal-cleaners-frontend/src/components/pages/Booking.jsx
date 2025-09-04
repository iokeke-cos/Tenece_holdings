import React, { useState } from "react"; 
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
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    const form = event.target;

    // Show browser validation popups and get overall validity
    const isFormValid = form.reportValidity();

    if (!isFormValid) {
      // scroll to first invalid field for convenience
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        try {
          firstInvalid.focus({ preventScroll: true });
        } catch (err) {
          firstInvalid.focus();
        }
      }
      return; 
    }

    // collect form data into an object
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // send data to backend
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking data");
      }

      // show success, reset form
      setShowSuccess(true);
      form.reset();
      setSubmitted(false);

      // hide success message after a few seconds
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Cleaning Service Booking Form</h2>

      <form
        className={`booking-form ${submitted ? "submitted" : ""}`}
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="form-group">
          <label>1. Full name</label>
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="form-input"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>2. Email</label>
          <div className="input-with-icon">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>3. Phone Number</label>
          <div className="input-with-icon">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="form-input"
              pattern="[0-9]{10,15}"
              title="Phone number should contain only digits (10–15 numbers)"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="form-group">
          <label>4. Address</label>
          <div className="input-with-icon">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="form-input"
              required
            />
          </div>
        </div>

        {/* Date */}
        <div className="form-group">
          <label>5. Preferred date</label>
          <div className="input-with-icon">
            <FaRegCalendarAlt className="input-icon" />
            <input type="date" name="date" className="form-input-full" required />
          </div>
        </div>

        {/* Time */}
        <div className="form-group">
          <label>6. Preferred time</label>
          <div className="input-with-icon">
            <FaRegClock className="input-icon" />
            <input type="time" name="time" className="form-input-full" required />
          </div>
        </div>

        {/* Service type */}
        <div className="form-group">
          <label>7. Type of cleaning service</label>
          <div className="input-with-icon">
            <FaBroom className="input-icon" />
            <select name="serviceType" className="form-input-full" required>
              <option value="">Please select a service</option>
              <option value="office">Office Cleaning</option>
              <option value="window">Window Cleaning</option>
              <option value="carpet">Carpet Cleaning</option>
              <option value="bedroom">Bedroom Cleaning</option>
              <option value="bathroom">Bathroom Cleaning</option>
              <option value="kitchen">Kitchen Cleaning</option>
            </select>
          </div>
        </div>

        {/* Special Message */}
        <div className="form-group">
          <label>8. Special requests / Message</label>
          <div className="input-with-icon">
            <FaRegCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Enter any special instructions or requests"
              className="form-input-full"
              rows="4"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Success message */}
      {showSuccess && (
        <p className="response-msg">
          ✅ Your booking has been sent! We'll contact you soon.
        </p>
      )}
    </div>
  );
};

export default BookingForm;
