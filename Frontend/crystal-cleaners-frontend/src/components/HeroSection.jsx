import { useState } from "react"; // useState is now unused if form is removed, can be deleted
import HeroForm from "./HeroForm";
import "./HeroSection.css";
import cleanersImg from "../assets/cleanersImg.png"; // Still needed for the <img> tag

// Only FaCheckCircle is needed for features, form-related icons are removed
import { FaCheckCircle } from 'react-icons/fa';


export default function HeroSection() {

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Premier House and <br />
            Office Cleaning Services <br />
            in the Bay Area
          </h1>

          <div className="features">
            <div><FaCheckCircle className="feature-icon" /> Instant Quotes</div>
            <div><FaCheckCircle className="feature-icon" /> No Rescheduling Fees</div>
            <div><FaCheckCircle className="feature-icon" /> No Contracts</div>
          </div>
        </div>

        <div className="hero-image-column">
          <img src={cleanersImg} alt="Cleaners" className="hero-main-image" />
        </div>

        <div className="hero-form-overlay">
        </div>
      </div>
    </section>
  );
}
