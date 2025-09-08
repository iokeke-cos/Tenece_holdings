import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaPhone, FaChevronDown } from "react-icons/fa";
import allServices from "../ServicesData";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenus]);

  return (
    <nav className="navbar-container">
      <Link to="/" className="title" onClick={closeMenus}>
        <div className="brand">
          <img src="/logo.png" alt="Crystal Cleaners Logo" className="logo" />
          <div className="brand-text">
            <span className="brand-name">Crystal</span>
            <span className="brand-sub">Cleaners</span>
          </div>
        </div>
      </Link>

      <div 
        className={`hamburger ${isMenuOpen ? "open" : ""}`} 
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-links-wrapper ${isMenuOpen ? "open" : ""}`} ref={mobileMenuRef}>
        <ul className="main-nav-list">
          <li>
            <NavLink to="/" onClick={closeMenus}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenus}>About</NavLink>
          </li>
          <li className="services-link" ref={dropdownRef}>
            <div className="dropdown-container">
              <NavLink to="/services" onClick={closeMenus}>Services</NavLink>
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
                {allServices.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} onClick={closeMenus}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/faq" onClick={closeMenus}>FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenus}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/booking" onClick={closeMenus}>Booking</NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={closeMenus}>Blog</NavLink>
          </li>
        </ul>

        <div className="rightbtn">
          <Link to="/contact" className="btn" onClick={closeMenus}>
            <FaPhone className="phone-icon" />
            (000) 000-000
          </Link>
        </div>
      </div>
    </nav>
  );
};