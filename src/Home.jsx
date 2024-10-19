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
import HomeHeroSection from "./HomeHeroSection";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />

      <div
        className="relative bg-cover bg-center h-[90vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] transition-all duration-300 ease-in-out" // Responsive height adjustments
        style={{ backgroundImage: `url('/images/plastic.jpg')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-60 pointer-events-none"></div>

        {/* Hero Section */}
        <HomeHeroSection />

        {/* About Section */}
        <section className="py-16 bg-gray-100">
          <AboutSection
            heading="ABOUT MOULD TECK"
            subheading="Innovative Manufacturing Solutions"
            description1="MOULD TECK, a leading injection mold manufacturer dedicated to delivering exceptional quality and innovation. With a strong focus on design, development, and production, we create high-performance molds for various industries."
            description2="Our commitment is to provide exceptional value to OEMs, product companies, and leading brands worldwide through advanced manufacturing technologies."
            buttonText="Read More"
            onButtonClick={() => console.log("Read More clicked")}
            image1="/images/p1.jpeg"
            image2="/images/p2.jpeg"
          />
        </section>

        {/* Service Section */}
        <section className="py-16">
          <ServiceSection />
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <HeroSection
            title="UNLOCK MANUFACTURING EXCELLENCE"
            subtitle="Take your production process to the next level with our advanced manufacturing solutions tailored to meet your specific requirements."
            primaryButtonText="Book Now"
            secondaryButtonText="View Services"
            backgroundImage={bgImage1}
            onPrimaryButtonClick={() => console.log("Book Now clicked")}
            onSecondaryButtonClick={() => console.log("View Services clicked")}
          />
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-100">
          <WhyChooseSection
            heading="WHY CHOOSE MOULD TECK?"
            subheading="Our Unique Value Proposition"
            description="With expertise in customer solutions and advanced technology, we ensure quality assurance and on-time delivery."
            listItems={[
              "Expertise and Experience customer solution",
              "Advanced Technology",
              "Quality Assurance",
              "On-time Delivery",
              "Customer Support ",
              "Cost-Effective",
            ]}
            buttonText="Book Now"
            onButtonClick={() => console.log("Book Now clicked")}
            image1="/images/machineimg.png"
            image2="/images/machine2img.png"
          />
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <GalleryOfExcellence />
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-100">
          <Testimonials />
        </section>

        {/* Final Hero Section */}
        {/* <section className="py-16 bg-gray-50"> */}
        <HeroSection
          title="Take Manufacturing To Next Level With Immediate Optimization"
          subtitle="Contact us now to discover how MOULD TECK can enhance your manufacturing operations and drive success."
          primaryButtonText="Book Now"
          secondaryButtonText="View Services"
          backgroundImage={bgImage1}
          onPrimaryButtonClick={() => console.log("Book Now clicked")}
          onSecondaryButtonClick={() => console.log("View Services clicked")}
          titleFontSize="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" // Custom font size
        />

        {/* </section> */}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
