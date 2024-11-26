import React from 'react';
import './style.css'
const ServiceSectionCard = ({ title, description, image }) => {
  return (
    <div className="group flex flex-col md:flex-row items-center space-x-0 md:space-x-8 py-8 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg animate-fade-in-up">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/4 h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
