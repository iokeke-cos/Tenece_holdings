import React from "react";

import HeroSection from "../HeroSection"; 
import Clients from "../Clients";
import Testimonial from "../Testimonial";
import ServicesSection from "../ServicesSection";
import Stats from "../Stats";
import Booking from "../BookingSection";
import Standards from "../Standards";
import Contact from "./Contact.jsx";

import FAQ from "./FAQ.jsx";
import "./Home.css";
import CustomerReviews from "./CustomerReviews.jsx";
import BlogDisplay from "./BlogDisplay.jsx"
import ReasonsToChoose from "./ReasonsToChoose.jsx";
import Guarantee from "./Guarantee.jsx";
import TopQuality from "./TopQuality.jsx";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Clients/>
      <ServicesSection/>
      <Testimonial/>
      <Booking/>
      <Standards/>
      <Stats/>
      <ReasonsToChoose />
      <CustomerReviews />
      <BlogDisplay />     

      {/* <Contact />     

      <FAQ /> */}
      <Guarantee />
      <TopQuality />

    </div>
  );
};

export default Home;
