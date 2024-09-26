import React, { useState } from 'react';

const GalleryOfExcellence = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const images = [
    '/images/gallery1.png',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.png',
    // Add more image paths here as needed
  ];

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h3 className="text-yellow-500 text-lg font-semibold mb-2">
          Discover Our Work
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          GALLERY OF EXCELLENCE
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore a showcase of our high-quality manufacturing projects and see how we turn ideas into reality.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-opacity duration-300"
                loading="lazy" // Lazy load images
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times; {/* Close Button */}
            </button>
            <img
              src={currentImage}
              alt="Current gallery view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryOfExcellence;
