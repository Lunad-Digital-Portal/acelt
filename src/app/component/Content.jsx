

// import React from 'react';
// import Card from './Card';
// import AnimatedSection from './AnimatedSection';

// const Content = () => {
//   const materials = [
//     {
//       title: "Pipes",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       image: "/product1.jpeg",
//       link: "/"
//     },
//     {
//       title: "Bends, Fittings & Flanges",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//       image: "/product2.jpg",
//       link: "/"
//     },
//     {
//       title: "Barred Tees",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//       image: "/product3.png",
//       link: "/"
//     }
//   ];

//   return (
//     <AnimatedSection>
//     <section className="py-16" id="building-materials-section">
//       <div className="container mx-auto px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-4">our products</h2>
//           <h4 className="text-lg md:text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
//           At Ace Energy, we provide a wide range of high-quality products designed to meet the specific needs of industries such as Oil & Gas, Petrochemical, Power Generation, Marine, and more. Our product offerings ensure the reliability, durability, and performance required in critical industrial applications. We work with leading manufacturers and suppliers globally to deliver products that exceed expectations.
//           </h4>
//           <div className="flex justify-center items-center">
//             <span className="inline-block w-16 h-1 bg-blue-500"></span>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-fit mx-auto">
//           {materials.map((material, index) => (
//             <Card key={index} {...material} />
//           ))}
//         </div>
//       </div>
//     </section>
//     </AnimatedSection>
//   );
// };

// export default Content;
"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Content = () => {
  const materials = [
    {
      title: "Pipes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/product1.jpeg",
      link: "/"
    },
    {
      title: "Bends, Fittings & Flanges",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/product2.jpg",
      link: "/"
    },
    {
      title: "Barred Tees",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "/product3.png",
      link: "/"
    }
  ];
  
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Redesigned card with premium aesthetic
  const Card = ({ title, description, image, link, index }) => (
    <div 
      className="group relative rounded-xl overflow-hidden h-full transition-all duration-300"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      {/* Card background with subtle pattern */}
      <div className="absolute inset-0 bg-white opacity-95 z-0"></div>
      
      {/* Image container with special clip path */}
      <div className="relative h-72 z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
          <img 
            src={image || "/api/placeholder/600/400"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute top-4 left-4 bg-red-500 px-4 py-1 text-sm text-white font-medium rounded-r-full">
          Premium
        </div>
        
        {/* Title overlapping image and content */}
        <div className="absolute bottom-4 left-0 right-0 z-20 p-6 translate-y-1/2">
          <div className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 pt-16 z-10 relative">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <a 
          href={link} 
          className="inline-flex items-center justify-between w-full"
        >
          <span className="text-red-500 font-medium">Explore Details</span>
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 z-20">
        <div className="absolute top-0 right-0 w-full h-full bg-red-100 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );

  return (
    <AnimatedSection>
    <div className="bg-gradient-to-b from-red-50 to-white my-10">
      <section className="py-24" id="building-materials-section">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-3 px-6 py-2 bg-red-100 text-red-600 rounded-full font-medium">
              PREMIUM SOLUTIONS
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
                Our Premium Products
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8">
                At Ace Energy, we provide a wide range of high-quality products designed to meet the specific needs of industries such as Oil & Gas, Petrochemical, Power Generation, Marine, and more.
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-red-300 to-red-500 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {materials.map((material, index) => (
              <Card key={index} {...material} index={index} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
    </AnimatedSection>
  );
};

export default Content;
