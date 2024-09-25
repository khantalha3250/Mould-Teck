// src/ServiceSection.jsx
import React from 'react';

const ServiceSectionCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 py-8">
      <img src={image} alt={title} className="w-full md:w-1/4 h-auto object-cover" />
      <div className="text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
