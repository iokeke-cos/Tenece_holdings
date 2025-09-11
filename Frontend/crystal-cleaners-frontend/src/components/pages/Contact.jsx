import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineEmail,
} from "react-icons/md";
import map from "../../assets/map.png";
import "./Contact.css";

export const Contact = () => {
  return (<>
    <section className="contact">
      <div className="contact-flex-container">
        <div className="text-part">
          <h2 style={{ fontSize: "48px" }}>San Francisco</h2>
          <br />
          <p style={{ fontSize: "18px", color: "#141414BF" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />id rutrum laoreet tempor, dictumst turpis curabitur. </p>

          <br />
          <br />
          <hr style={{ border: "1px solid #1414142E" }} />
          <br />
          <br />

          <div className="details-grid">
            <div className="address">
              <h3><span><MdOutlineLocationOn /></span> {" "}
                Address</h3>
              <br />
              <p style={{ fontSize: "16px", color: "#141414BF" }}>8572 N. Orange ST. <br />
                amestown, NY 14701</p>
            </div>

            <div className="phone">
              <h3><span><MdOutlinePhone /> {" "}
              </span>Phone Number</h3>
              <br />
              <p style={{ fontSize: "16px", color: "#141414BF" }}>(000) 000-00000</p>
            </div>

            <div className="email">
              <h3><span><MdOutlineEmail /> {" "}</span>Email Address</h3>
              <br />
              <p style={{ fontSize: "16px", color: "#141414BF" }}>uihut@gmail.com</p>
            </div>

          </div>

          <div className="button-part">
            <Link to="/booking">
              <button className="book-service-button">
                Book Your Home Clean
              </button>
            </Link>
            <br /><br />
            <p style={{ color: "#141414BF", fontSize: "16px" }}>
              34 cleans booked in the last 24 hours
            </p>
          </div>
        </div>


        <div className="map-image">
          <img src={map} alt="Our Locations" />
        </div>
      </div>
    </section>
  </>

  );
};

export default Contact;
