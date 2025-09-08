/* I imported the icons i needed from the assets folder
I also imported the css file for the Footer into this file to be able to use it*/

import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./Footer.css";

import arrow from "../assets/arrowdown.png";
import logo from "../assets/Logo.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleServices = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="first-part">
            <Link to="/">
              {" "}
              <img src={logo} className="footer-logo" />
            </Link>

            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/about">About</NavLink>
                </li>

                <li>
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>

                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>

                <li>
                  <NavLink to="booking">Booking</NavLink>
                </li>

                <li>
                  <NavLink to="blog">Blog</NavLink>
                </li>
              </ul>
            </nav>
            <div className="outer-logos">
              <div className="logos">
                <img src={twitter} alt="X" />
                <img src={linkedin} alt="Linkedin" />
                <img src={fb} alt="Facebook" />
              </div>
            </div>
          </div>

          <hr />

          <div className="second-part">
            <p className="copyright">© 2023 © 2023 Webtechsolution.in</p>

            <p className="privacy">
              <span className="privacy-policy">Privacy Policy</span> |
              <span className="cookies"> Cookies</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}