import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">
        <div className="brand">
          <img src="/logo.png" alt="Crystal Cleaners Logo" className="logo" />
          <div className="brand-text">
            <span className="brand-name">Crystal</span>
            <span className="brand-sub">Cleaners</span>
          </div>
        </div>
      </Link>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="services-link">
        <div className="dropdown-container">
          <NavLink to="/services">Services</NavLink>
        <FaChevronDown
          className="dropdown-arrow"
          onClick={toggleDropdown}
          style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isDropdownOpen ? 'black' : '#6b7280' }}
        />
        </div>
          {isDropdownOpen && ( 
            <ul className="services-dropdown">
              <li><span>Residential</span></li>
              <li><span>Commercial</span></li>
              <li><span>Carpet Cleaning</span></li>
              <li><span>Window Cleaning</span></li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>

      <div className="rightbtn">
        <a href="" className="btn">
          <FaPhone className="phone-icon" />
          (000) 000-000
        </a>
      </div>
    </nav>
  );
};