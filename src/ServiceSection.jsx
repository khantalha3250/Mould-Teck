// src/App.js
import React from 'react';
// Placeholder images (replace with your actual images)
import cnc from './assets/cnc.jpeg';
import mold from './assets/mold.jpeg';
import moldImg from './assets/mold-design.png';
import plasticinjection from './assets/plastic-injection.png';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {
  return (
    <div className="container mx-auto p-8">
      <h3 className="text-yellow-500 text-lg text-center mb-4">
      Explore Our Solutions
          </h3>
    <h1 className="text-4xl font-bold text-center mb-4">INNOVATIVE MANUFACTURING SERVICES</h1>
    <p className="text-center text-gray-600 mb-12">Discover our comprehensive range of integrated manufacturing solutions designed to elevate your production capabilities.</p>
    
    {/* Grid layout for services */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <ServiceSectionCard
        title=" Plastic Injection Mold Production"
        description="Our capacities include reverse engineering, product, raw materials and manufacturing processes R&D and Advanced Product Quality Planning (APQP)."
        image={plasticinjection}
      />
      <ServiceSectionCard
        title="Injection Mold Manufacturing"
        description="Innovative and efficient tool design services tailored to meet client specifications."
        image={mold}
      />
      <ServiceSectionCard
        title="Custom CNC Machining"
        description="Our seasoned team combines expertise and cutting-edge technologies to craft molds that meet and exceed your expectations."
        image={cnc}
      />
      <ServiceSectionCard 
        title="Mold Design"
        description="In addition to plastic injection molding, we offer integrated product assembly and sourcing of components tailored to your needs."
        image={moldImg}
      />
     </div>
     </div>
  );
};

export default ServiceSection;
