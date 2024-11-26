import React from "react";
import cnc from "./assets/cnc.jpeg";
import mold from "./assets/mold.jpeg";
import moldImg from "./assets/mold-design.png";
import plasticinjection from "./assets/plastic-injection.png";
import ServiceSectionCard from "./ServiceSectionCard";

const ServiceSection = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-8">
      <h3 className="text-yellow-500 text-base sm:text-lg text-center mb-4 animate-fade-in-up">
        Explore Our Solutions
      </h3>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fade-in-up">
        INNOVATIVE MANUFACTURING SERVICES
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 animate-fade-in-up">
        Discover our comprehensive range of integrated manufacturing solutions
        designed to elevate your production capabilities.
      </p>

      {/* Grid layout for services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
        <ServiceSectionCard
          title="Plastic Injection Mold Production"
          description="Our capacities include reverse engineering, product, raw materials and manufacturing processes R&D and Advanced Product Quality Planning (APQP)."
          image=""
        />
        <ServiceSectionCard
          title="Injection Mold Manufacturing"
          description="Injection Mold Manufacturing involves creating molds used to shape molten materials, typically plastics, into specific parts or products. It offers high precision, efficiency, and repeatability for large-scale production
."
          image={mold}
        />
        <ServiceSectionCard
          title="Custom CNC Machining"
          description="Custom CNC Machining refers to the process of using computer-controlled machines to produce precise and complex parts or components based on specific designs and customer requirements.
This technology ensures high accuracy, repeatability, and versatility for
a wide range of materials, making it ideal for industries such as aerospace, automotive, and manufacturing."
          image="/images/22.jpeg"
        />
        <ServiceSectionCard
          title="Mold Design"
          description="Mold Design is the process of creating detailed plans and
specifications for molds used in manufacturing, ensuring
precise shaping, durability, and efficient production of parts.
"
          image={moldImg}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
