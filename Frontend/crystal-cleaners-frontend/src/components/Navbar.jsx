import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaPhone, FaChevronDown } from "react-icons/fa";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <li className="services-link" ref={dropdownRef}>
          <div className="dropdown-container">
            <NavLink to="/services">Services</NavLink>
            <FaChevronDown
              className="dropdown-arrow"
              onClick={toggleDropdown}
              style={{
                transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                color: isDropdownOpen ? "black" : "#6b7280",
              }}
            />
          </div>
          {isDropdownOpen && (
            <ul className="services-dropdown">
              <li>
                <span>Office Cleaning</span>
              </li>
              <li>
                <span>Window Cleaning</span>
              </li>
              <li>
                <span>Carpet Cleaning</span>
              </li>
              <li>
                <span>Bathroom Cleaning</span>
              </li>
              <li>
                <span>Bedroom Cleaning</span>
              </li>
              <li>
                <span>Kitchen Cleaning</span>
              </li>
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
        <li>
          <NavLink to="/blog">Blog</NavLink>
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
