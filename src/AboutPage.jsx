import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhyChooseSection from "./WhyChooseSection";
import bgImage1 from "./assets/bg-img.jpg";
import Team from "./Team";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="UNLOCK MANUFACTURING EXCELLENCE"
        subtitle="Take your production process to the next level with our advanced manufacturing solutions tailored to meet your specific requirements."
        backgroundImage={bgImage1}
      />
      
      <AboutSection
        heading="ABOUT MOULD TECK"
        subheading="Innovative Manufacturing Solutions"
        description1="Welcome to MOULD TECK, a leading injection mold manufacturer dedicated to delivering exceptional quality and innovation. With a strong focus on design, development, and production, we create high-performance molds for various industries.
We leverage state-of-the-art technology and a team of skilled professionals to provide tailored solutions that meet our clients' unique needs. From concept to production, we prioritize superior quality and efficiency.

"
        description2="Discover how our expertise can benefit your business. Explore our services and learn more about our company."
        image1="./images/01.png"
        image2="./images/02.jpeg"
      />
      <WhyChooseSection
        heading="Our Story"
        subheading="Our Journey Towards Excellence"
        description="MOULD TECK began its journey in Switzerland, dedicated to providing outstanding plastic injection solutions to clients worldwide with a strong focus on quality and innovation.
        Through dedication to innovation and excellence, MOULD TECK has grown to be a trusted partner for global OEMs, product companies, and leading brands, shaping a successful journey."
        buttonText="Book Now"
        onButtonClick={() => console.log("Book Now clicked")}
        image1="./images/machineimg.png"
        // image2="./images/p2.jpeg"
      />
      <Team />
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
    </>
  );
};
export default AboutPage;
