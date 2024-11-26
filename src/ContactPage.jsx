import React from "react";
import HeroSection from "./HeroSection";
import bgImage1 from "./assets/contact2.jpg"
import OfficeCard from "./OfficeCard";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
    <HeroSection
        title="Contact Us"
        subtitle="Connect with our team for partnership opportunities and customized solutions."
        backgroundImage={bgImage1}
      />
      <OfficeCard/>
      <ContactForm/>
      <Footer/>
    </>
  )}
  export default ContactPage;