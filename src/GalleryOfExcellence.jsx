import React from 'react';

const GalleryOfExcellence = () => {
  const images = [
    '/images/gallery1.png',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.png',
   
    // Add more image paths here as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h3 className="text-yellow-500 text-lg font-semibold mb-2">
          Discover Our Work
        </h3>
        <h2 className="text-5xl font-bold mb-6">
          GALLERY OF EXCELLENCE
        </h2>
        <p className="text-gray-600 mb-10">
          Explore a showcase of our high-quality manufacturing projects and see how we turn ideas into reality.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryOfExcellence;
