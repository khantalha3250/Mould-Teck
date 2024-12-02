import React from "react";
import ServiceSectionCard from "./ServiceSectionCard";


const FullServiceSection = () => {
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
          image="/images/mold.jpeg"
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

        {/* Service Card 5 */}
        <ServiceSectionCard
          title="3D Printing"
          description="3D printing services create physical objects from digital designs, offering rapid prototyping, production, and customization for various industries."
          image="/images/23.jpeg"
        />
        {/* Service Card 6 */}
        <ServiceSectionCard
          title="Plain Washer Manufacturer "
          description="A plain washer manufacturer produces flat discs that distribute load and prevent damage in fastening applications."
          image="/images/24.jpeg"
        />
   
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up pt-12" >
      ALL TYPES OF FABRICATION WORKS
      </h1>
      <p className="text-center text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 animate-fade-in-up">
      Discover our comprehensive range of integrated fabrication solutions designed to enhance your production capabilities.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 animate-fade-in-up">
      <ServiceSectionCard
          title="Structural Fabrication "
          description="
Structural fabrication is the process of assembling steel or other materials into frameworks for construction."
          image="/images/27.jpeg"
        />
        <ServiceSectionCard
          title="Metal Fabrication "
          description="Metal fabrication is the process of cutting, shaping, and assembling metal structures or components."
          image="/images/25.jpeg"
        />
        <ServiceSectionCard
          title="Sheet Metal Work "
          description="
Sheet metal work involves shaping and forming metal sheets into various components through cutting, bending, and assembling."
          image="/images/26.jpeg"
        />
        <ServiceSectionCard
          title="Industrial & Architectural Fabrication "
          description="
Industrial fabrication involves creating metal structures for machinery, equipment, and infrastructure, while architectural fabrication focuses on producing metal components for building design and construction."
          image="/images/27.jpeg"
        />
      </div>
    </div>
  );
};

export default FullServiceSection;