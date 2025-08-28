import React from "react";
import "./About.css";
import cleaners from "../../assets/cleaners.jpg";
import cleanRoom from "../../assets/clean-room.jpg";


export default function About () {

  return(
    <>

    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Professional cleaning services you can trust.</p>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We began with one simple vision – to make homes and workplaces
            sparkle while giving our clients peace of mind. With years of
            experience and a dedicated team, we’ve become a trusted name in
            cleaning services.
          </p>
        </div>
        <div className="about-image">
          <img
            src={cleaners}
            alt="Our story - cleaning team at work"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section reverse">
        <div className="about-image">
          <img
            src={cleanRoom}
            alt="Mission - sparkling clean room"
          />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide top-quality, eco-friendly cleaning
            services that make your spaces shine. Whether it’s homes, offices,
            or commercial spaces, we bring care and excellence to every corner.
          </p>
        </div>
      </section>

      <hr />

      {/* Values Section */}


      <section className="about-section">
        <div className="values">
        <h2>Our Values</h2>
        <br />



        <div className="values-container">

          <div className="card">
            <h4>Reliability </h4>
            <p>We show up and deliver, every time</p>

          </div>

          <div className="card">
            <h4>Eco-Friendly</h4>
            <p>Safe products for you <br /> and the planet</p>
          </div>


          <div className="card">
            <h4>Trust</h4>
            <p>Your space is treated <br />
               with respect</p>
          </div>


          <div className="card">
            <h4>Excellence</h4>
            <p>We don’t stop until <br /> it’s spotless</p>
          </div>
        </div>

        </div>


        
        {/* <div className="about-image">
          <img
            src={ecoFriendly}
            alt="Values - eco-friendly cleaning"
          />
        </div> */}
      </section>
    </div>
    
    </>
  )
}
