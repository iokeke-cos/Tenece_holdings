import React from "react";
import HeroSection from "../HeroSection"; 
import Clients from "../Clients";
import Testimonial from "../Testimonial";
import ServicesSection from "../ServicesSection";
import Stats from "../Stats";
import Booking from "../BookingSection";
import Standards from "../Standards";

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
    </div>
  );
};

export default Home;
