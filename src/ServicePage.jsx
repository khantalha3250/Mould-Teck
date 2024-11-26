import React from "react";
import HeroSection from "./HeroSection";
import bgImage1 from "./assets/ab.png";
import ServiceSection from "./ServiceSection";
import Footer from "./Footer";
const ServicePage = () => {
  return (
    <>
     <HeroSection
        title="OUR SERVICES"
        subtitle="Explore our diverse service options crafted with precision and quality for your specific plastic injection needs."
        backgroundImage={bgImage1}
      />
      <ServiceSection/>
      <Footer/>
    </>
  )}
  export default ServicePage;