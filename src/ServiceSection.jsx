import React from "react";
import mold from "./assets/mold.jpeg";
import ServiceSectionCard from "./ServiceSectionCard";
import { Link } from "react-router-dom"; 

const ServiceSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-8">
      {/* Section Heading */}
      <h3 className="text-gray-500 text-base sm:text-lg text-center mb-4 animate-fade-in-up">
        Explore Our Solutions
      </h3>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up">
        INNOVATIVE MANUFACTURING SERVICES
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 animate-fade-in-up">
        Discover our comprehensive range of integrated manufacturing solutions
        designed to elevate your production capabilities.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
        {/* Service Card 1 */}
        <ServiceSectionCard
          title="Plastic Injection Mold Production"
          description="Our capacities include reverse engineering, product, raw materials, and manufacturing processes R&D and Advanced Product Quality Planning (APQP)."
          image="/images/plasticinjection.png"
        />
        
        {/* Service Card 2 */}
        <ServiceSectionCard
          title="Injection Mold Manufacturing"
          description="Injection Mold Manufacturing involves creating molds used to shape molten materials, typically plastics, into specific parts or products. It offers high precision, efficiency, and repeatability for large-scale production."
          image={mold}
        />
        
        {/* Service Card 3 */}
        <ServiceSectionCard
          title="Custom CNC Machining"
          description="Custom CNC Machining refers to the process of using computer-controlled machines to produce precise and complex parts or components based on specific designs and customer requirements. This technology ensures high accuracy, repeatability, and versatility for a wide range of materials, making it ideal for industries such as aerospace, automotive, and manufacturing."
          image="/images/22.jpeg"
        />
        
        {/* Service Card 4 */}
        <ServiceSectionCard
          title="Mold Design"
          description="Mold Design is the process of creating detailed plans and specifications for molds used in manufacturing, ensuring precise shaping, durability, and efficient production of parts."
          image="/images/molddesign.png"
        />
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Link to="/services" >
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              View All Services
            </button>
          </Link>
      </div>
    </div>
  );
};

export default ServiceSection;