import React from "react";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import WhyChooseSection from "./WhyChooseSection";
import GalleryOfExcellence from "./GalleryOfExcellence";
import Testimonials from "./Testimonials";
import bgImage1 from "./assets/bg-img.jpg";
import Footer from "./Footer";
import Header from "./Header";
import HomeHeroSection from "./HomeHeroSection"


const Home = () => {
  return (
    <>
    
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('/images/plastic.jpg')`, height: '90vh' }} // Set height to 80vh
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-20"
      style={{ pointerEvents: "none" }}>
        
      </div>

      {/* Hero Section */}
      <HomeHeroSection/>
      <AboutSection
        heading="ABOUT MOULD TECK"
        subheading="Innovative Manufacturing Solutions"
        description1="MOULD TECK, a Switzerland-based plastic injection company, offers Integrated Manufacturing Solutions to global partners."
        description2="Our commitment is to provide exceptional value to OEMs, product companies, and leading brands worldwide through advanced manufacturing technologies."
        buttonText="Read More"
        onButtonClick={() => console.log("Read More clicked")}
        image1="/images/p1.jpeg"
        image2="/images/p2.jpeg"
      />

      <ServiceSection />
      <HeroSection
        title="UNLOCK MANUFACTURING EXCELLENCE"
        subtitle="Take your production process to the next level with our advanced manufacturing solutions tailored to meet your specific requirements."
        primaryButtonText="Book Now"
        secondaryButtonText="View Services"
        backgroundImage={bgImage1}
        onPrimaryButtonClick={() => console.log("Book Now clicked")}
        onSecondaryButtonClick={() => console.log("View Services clicked")}
      />
      <WhyChooseSection
        heading="WHY CHOOSE MOULD TECK?"
        subheading="Our Unique Value Proposition"
        description="We stand out by offering unmatched value through advanced technical capabilities, extensive expertise, and dedicated partner support."
        listItems={[
          "Cutting-Edge Manufacturing Technology",
          "Industry-Leading Expertise",
          "Tailored Solutions for Success",
        ]}
        buttonText="Book Now"
        onButtonClick={() => console.log("Book Now clicked")}
        image1="/images/machineimg.png"
        image2="/images/machine2img.png"
      />

      <GalleryOfExcellence />
      <Testimonials />
      <HeroSection
        title="Start Optimizing Your Manufacturing Today"
        subtitle="Contact us now to discover how MOULD TECK can enhance your manufacturing operations and drive success."
        primaryButtonText="Book Now"
        secondaryButtonText="View Services"
        backgroundImage={bgImage1}
        onPrimaryButtonClick={() => console.log("Book Now clicked")}
        onSecondaryButtonClick={() => console.log("View Services clicked")}
      />
      <Footer />
      
    </div>
    </>
  );
};

export default Home;
