import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section id="our_work" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-semibold mb-4 text-beauty-dark">
            Our Work
          </h2>
          <p className="text-beauty-dark/70 max-w-2xl mx-auto">
            Browse through our gallery of beautiful hairstyles created by our
            talented team of stylists.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
            <Image
              fill
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Hairstyle Example 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
            <Image
              fill
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Hairstyle Example 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
            <Image
              fill
              src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Hairstyle Example 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-md aspect-square">
            <Image
              fill
              src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Hairstyle Example 4"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
