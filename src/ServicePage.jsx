import React from "react";
import HeroSection from "./HeroSection";
import bgImage1 from "./assets/ab.png";
import Footer from "./Footer";
import FullServiceSection from "./FullServiceSection";
const ServicePage = () => {
  return (
    <>
     <HeroSection
        title="OUR SERVICES"
        subtitle="Explore our diverse service options crafted with precision and quality for your specific plastic injection needs."
        backgroundImage={bgImage1}
      />
      <FullServiceSection/>
      <Footer/>
    </>
  )}
  export default ServicePage;