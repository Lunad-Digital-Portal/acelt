// // import Head from 'next/head'
// // import AnimatedSection from './AnimatedSection'

// // const ProductsPage = () => {
// //   return (
// //     <>
// //       <Head>
// //         <title>Our Products - Ace Energy</title>
// //         <meta name="description" content="Explore our range of products for the energy and industrial sectors" />
        
// //         <link
// //           href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap"
// //           rel="stylesheet"
// //         />
// //       </Head>
// //       <AnimatedSection>
// //       <main className="container mx-auto px-4 py-8 ">
// //         <section className="justify-center mb-12">
          
// //           <h1 className="flex text-4xl items-center md:text-5xl uppercase tracking-[0.05em]">
// //   <span className="text-black">Our Produ</span>
// //   <span className="text-red-600 tracking-[0.1em]">c</span>
// //   <span className="text-black tracking-[0.1em]">ts</span>
// // </h1>

          
// //           <p className="text-xl font-poppins text-gray-600 mt-2">
// //             At Ace Energy, we offer a wide range of products and services designed for the energy and industrial sectors.
// //           </p>
// //         </section>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins  ">

// //           {/* Process Plant and Equipment */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
// //             <img src="/pressure-vessel.jpg" alt="Process Plant & Equipment" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl font-semibold text-white uppercase">Process Plant & Equipment</h2>
// //             <p className="text-white mt-2">
// //               We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.
// //             </p>
// //             <ul className="list-disc ml-5 mt-3 text-white">
// //               <li>Gas Dehydration & Sweetening Units</li>
// //               <li>Oil Treatment & Produced Water Systems</li>
// //               <li>Skid-Mounted & Modular Systems</li>
// //             </ul>
// //           </div>

// //           {/* Structural Steel */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
// //             <img src="/structural-steel.jpg" alt="Structural Steel" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl font-semibold text-white uppercase">Structural Steel</h2>
// //             <p className="text-white mt-2">
// //               High-quality structural steel products for industrial construction, sourced globally from top manufacturers.
// //             </p>
// //             <ul className="list-disc ml-5 mt-3 text-white">
// //               <li>Plates, Beams, Channels, Angles</li>
// //               <li>Custom Sizes and Testing Options</li>
// //               <li>Offshore and Onshore Steel Solutions</li>
// //             </ul>
// //           </div>


// //           {/* Pipes & Tubing */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
// //             <img src="/pipes-tubes.avif" alt="Pipes & Tubing" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl font-semibold text-white uppercase">Pipes & Tubing</h2>
// //             <p className="text-white mt-2">
// //               Seamless and welded pipes in a variety of grades and coatings, designed to meet your project requirements.
// //             </p>
// //             <ul className="list-disc ml-5 mt-3 text-white">
// //               <li>Available from 2&quot; to 56&quot; in various materials</li>
// //               <li>Fusion Bonded Epoxy and Concrete Coatings</li>
// //               <li>Nickel, Titanium, and Alloy Clad Steel</li>
// //             </ul>
// //           </div>


// //           {/* Hot Induction Bends & Barred Tees */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all ">
// //             <img src="/tube-bends.webp" alt="Hot Induction Bends & Barred Tees" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl text-white font-semibold uppercase">Hot Induction Bends & Barred Tees</h2>
// //             <p className="text-white mt-2">
// //               Hot Induction bending is a precise process for high-performance bends, ensuring dimensional accuracy and repeatability.
// //             </p>
// //             <ul className="list-disc font-poppins ml-5 mt-3 text-white">
// //               <li>Diameter Range: 2&quot; to 64&quot;</li>
// //               <li>Various Material Options</li>
// //               <li>High Productivity & Precision</li>
// //             </ul>
// //           </div>

// //           {/* Fittings & Flanges */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
// //             <img src="/flanges-fittings.jpg" alt="Fittings & Flanges" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl font-semibold text-white uppercase">Fittings & Flanges</h2>
// //             <p className="text-white mt-2">
// //               A wide selection of industrial fittings and flanges in various materials including Carbon, Stainless, and Alloys.
// //             </p>
// //             <ul className="list-disc ml-5 mt-3 text-white">
// //               <li>Butt Weld, Cast, and Forged Fittings</li>
// //               <li>Outlet Fittings and Special Forgings</li>
// //               <li>Materials: Carbon Steel, Duplex, Titanium, etc.</li>
// //             </ul>
// //           </div>


// //           {/* Valves */}
// //           <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all">
// //             <img src="/industrial-valves.jpg" alt="Valves" className="w-full h-48 object-cover rounded-md mb-4" />
// //             <h2 className="text-2xl font-semibold text-white uppercase">Valves</h2>
// //             <p className="text-white mt-2">
// //               We offer a range of valves for industrial applications, including API 6D, API 6A, and customized solutions.
// //             </p>
// //             <ul className="list-disc ml-5 mt-3 text-white">
// //               <li>Gate, Globe, Check, Ball, Butterfly Valves</li>
// //               <li>Pressure Classes: ANSI 150~2500, API 1000psi~10000psi</li>
// //               <li>Materials: Carbon Steel, Stainless Steel, Inconel, Titanium</li>
// //             </ul>
// //           </div>

          
// //         </div>
// //       </main>
// //       </AnimatedSection>
// //     </>
// //   )
// // }

// // // export default ProductsPage
// // "use client";
// // import Head from 'next/head'
// // import AnimatedSection from './AnimatedSection'
// // import Image from 'next/image'
// // import { motion } from 'framer-motion'

// // const ProductCard = ({ image, title, description, features }) => (
// //   <motion.div 
// //     className="bg-gradient-to-br from-slate-800 to-gray-900 p-6 rounded-xl shadow-xl overflow-hidden group"
// //     whileHover={{ 
// //       y: -8,
// //       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
// //     }}
// //     transition={{ duration: 0.3 }}
// //   >
// //     <div className="relative h-64 mb-6 overflow-hidden rounded-lg transform group-hover:scale-105 transition-transform duration-300">
// //       <Image 
// //         src={image} 
// //         alt={title} 
// //         layout="fill"
// //         objectFit="cover" 
// //         className="rounded-lg" 
// //       />
// //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //     </div>
    
// //     <h2 className="text-2xl font-semibold text-white mb-3 uppercase relative">
// //       <span className="relative z-10">{title}</span>
// //       <span className="absolute -left-2 bottom-0 h-3 w-12 bg-red-600/30 -z-0"></span>
// //     </h2>
    
// //     <p className="text-gray-200 text-lg mb-4 font-light leading-relaxed">
// //       {description}
// //     </p>
    
// //     <div className="pt-4 border-t border-gray-700">
// //       <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Key Features</h3>
// //       <ul className="space-y-2">
// //         {features.map((feature, index) => (
// //           <li key={index} className="flex items-start">
// //             <span className="text-red-500 mr-2">›</span>
// //             <span className="text-gray-300">{feature}</span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   </motion.div>
// // )

// // const ProductsPage = () => {
//   // const products = [
//   //   {
//   //     image: "/pressure-vessel.jpg",
//   //     title: "Process Plant & Equipment",
//   //     description: "We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.",
//   //     features: [
//   //       "Gas Dehydration & Sweetening Units",
//   //       "Oil Treatment & Produced Water Systems",
//   //       "Skid-Mounted & Modular Systems"
//   //     ]
//   //   },
//   //   {
//   //     image: "/structural-steel.jpg",
//   //     title: "Structural Steel",
//   //     description: "High-quality structural steel products for industrial construction, sourced globally from top manufacturers.",
//   //     features: [
//   //       "Plates, Beams, Channels, Angles",
//   //       "Custom Sizes and Testing Options",
//   //       "Offshore and Onshore Steel Solutions"
//   //     ]
//   //   },
//   //   {
//   //     image: "/pipes-tubes.avif",
//   //     title: "Pipes & Tubing",
//   //     description: "Seamless and welded pipes in a variety of grades and coatings, designed to meet your project requirements.",
//   //     features: [
//   //       "Available from 2\" to 56\" in various materials",
//   //       "Fusion Bonded Epoxy and Concrete Coatings",
//   //       "Nickel, Titanium, and Alloy Clad Steel"
//   //     ]
//   //   },
//   //   {
//   //     image: "/tube-bends.webp",
//   //     title: "Hot Induction Bends & Barred Tees",
//   //     description: "Hot Induction bending is a precise process for high-performance bends, ensuring dimensional accuracy and repeatability.",
//   //     features: [
//   //       "Diameter Range: 2\" to 64\"",
//   //       "Various Material Options",
//   //       "High Productivity & Precision"
//   //     ]
//   //   },
//   //   {
//   //     image: "/flanges-fittings.jpg",
//   //     title: "Fittings & Flanges",
//   //     description: "A wide selection of industrial fittings and flanges in various materials including Carbon, Stainless, and Alloys.",
//   //     features: [
//   //       "Butt Weld, Cast, and Forged Fittings",
//   //       "Outlet Fittings and Special Forgings",
//   //       "Materials: Carbon Steel, Duplex, Titanium, etc."
//   //     ]
//   //   },
//   //   {
//   //     image: "/industrial-valves.jpg",
//   //     title: "Valves",
//   //     description: "We offer a range of valves for industrial applications, including API 6D, API 6A, and customized solutions.",
//   //     features: [
//   //       "Gate, Globe, Check, Ball, Butterfly Valves",
//   //       "Pressure Classes: ANSI 150~2500, API 1000psi~10000psi",
//   //       "Materials: Carbon Steel, Stainless Steel, Inconel, Titanium"
//   //     ]
//   //   }
//   // ];

// //   return (
// //     <>
// //       <Head>
// //         <title>Our Products - Ace Energy</title>
// //         <meta name="description" content="Explore our range of products for the energy and industrial sectors" />
// //         <link
// //           href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
// //           rel="stylesheet"
// //         />
// //       </Head>
// //       <AnimatedSection>
// //         <main className="container mx-auto px-4 py-16 max-w-7xl">
// //           <section className="mb-16 text-center md:text-left">
// //             <div className="inline-block relative mb-6">
// //               <h1 className="text-5xl md:text-6xl uppercase tracking-wide font-light">
// //                 <span className="inline-block relative">
// //                   Our Produ<span className="text-red-600">c</span>ts
// //                   <div className="absolute -bottom-3 left-0 h-1 w-full bg-gradient-to-r from-red-600 to-transparent"></div>
// //                 </span>
// //               </h1>
// //               <div className="absolute -z-10 -left-4 -top-4">
// //                 <span className="text-[120px] text-transparent font-thin [text-stroke:1px] [--tw-text-stroke-color:#f1f1f1]">
// //                   01
// //                 </span>
// //               </div>
// //             </div>
            
// //             <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
// //               At Ace Energy, we offer a wide range of products and services designed for the energy and industrial sectors, delivering excellence through innovation and quality.
// //             </p>
// //           </section>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {products.map((product, index) => (
// //               <ProductCard key={index} {...product} />
// //             ))}
// //           </div>
          
// //           <div className="mt-16 text-center">
// //             <p className="text-lg text-gray-500 mb-6">Looking for something specific?</p>
// //             <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium tracking-wide">
// //               Contact Our Team
// //             </button>
// //           </div>
// //         </main>
// //       </AnimatedSection>
// //     </>
// //   )
// // }

// // export default ProductsPage

// "use client";
// import Head from 'next/head';
// import AnimatedSection from './AnimatedSection';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react'; // Assuming you have an icon library

// const ProductCard = ({ image, title, description, features }) => {
//   const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);

//   return (
//     <motion.div
//       className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-gray-200"
//       whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
//       transition={{ duration: 0.2 }}
//     >
//       <div className="relative h-64 overflow-hidden"> {/* Increased image size from h-48 to h-64 */}
//         <Image
//           src={image}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
//       </div>

//       <div className="p-4">
//         <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
//           {title}
//         </h2>
//         <p className="text-gray-600 text-sm line-clamp-2">
//           {description}
//         </p>

//         <div className="mt-3">
//           <button
//             onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
//             className="w-full flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 hover:text-indigo-600 transition-colors"
//           >
//             Key Features
//             {isFeaturesExpanded ? (
//               <ChevronUp className="w-4 h-4" />
//             ) : (
//               <ChevronDown className="w-4 h-4" />
//             )}
//           </button>
          
//           {isFeaturesExpanded && (
//             <motion.ul
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-1 text-sm text-gray-700 overflow-hidden"
//             >
//               {features.map((feature, index) => (
//                 <li key={index} className="flex items-center">
//                   <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ProductsPage = () => {
//   // const products = [
//   //   {
//   //     image: "/pressure-vessel.jpg",
//   //     title: "Process Plant & Equipment",
//   //     description: "We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.",
//   //     features: [
//   //       "Gas Dehydration & Sweetening Units",
//   //       "Oil Treatment & Produced Water Systems",
//   //       "Skid-Mounted & Modular Systems"
//   //     ]
//   //   },
//   //   {
//   //     image: "/structural-steel.jpg",
//   //     title: "Structural Steel",
//   //     description: "High-quality structural steel products for industrial construction, sourced globally from top manufacturers.",
//   //     features: [
//   //       "Plates, Beams, Channels, Angles",
//   //       "Custom Sizes and Testing Options",
//   //       "Offshore and Onshore Steel Solutions"
//   //     ]
//   //   },
//   //   // ... other products remain unchanged
//   // ];

//   const products = [
//     {
//       image: "/pressure-vessel.jpg",
//       title: "Process Plant & Equipment",
//       description: "We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.",
//       features: [
//         "Gas Dehydration & Sweetening Units",
//         "Oil Treatment & Produced Water Systems",
//         "Skid-Mounted & Modular Systems"
//       ]
//     },
//     {
//       image: "/structural-steel.jpg",
//       title: "Structural Steel",
//       description: "High-quality structural steel products for industrial construction, sourced globally from top manufacturers.",
//       features: [
//         "Plates, Beams, Channels, Angles",
//         "Custom Sizes and Testing Options",
//         "Offshore and Onshore Steel Solutions"
//       ]
//     },
//     {
//       image: "/pipes-tubes.avif",
//       title: "Pipes & Tubing",
//       description: "Seamless and welded pipes in a variety of grades and coatings, designed to meet your project requirements.",
//       features: [
//         "Available from 2\" to 56\" in various materials",
//         "Fusion Bonded Epoxy and Concrete Coatings",
//         "Nickel, Titanium, and Alloy Clad Steel"
//       ]
//     },
//     {
//       image: "/tube-bends.webp",
//       title: "Hot Induction Bends & Barred Tees",
//       description: "Hot Induction bending is a precise process for high-performance bends, ensuring dimensional accuracy and repeatability.",
//       features: [
//         "Diameter Range: 2\" to 64\"",
//         "Various Material Options",
//         "High Productivity & Precision"
//       ]
//     },
//     {
//       image: "/flanges-fittings.jpg",
//       title: "Fittings & Flanges",
//       description: "A wide selection of industrial fittings and flanges in various materials including Carbon, Stainless, and Alloys.",
//       features: [
//         "Butt Weld, Cast, and Forged Fittings",
//         "Outlet Fittings and Special Forgings",
//         "Materials: Carbon Steel, Duplex, Titanium, etc."
//       ]
//     },
//     {
//       image: "/industrial-valves.jpg",
//       title: "Valves",
//       description: "We offer a range of valves for industrial applications, including API 6D, API 6A, and customized solutions.",
//       features: [
//         "Gate, Globe, Check, Ball, Butterfly Valves",
//         "Pressure Classes: ANSI 150~2500, API 1000psi~10000psi",
//         "Materials: Carbon Steel, Stainless Steel, Inconel, Titanium"
//       ]
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>Our Products - Ace Energy</title>
//         <meta name="description" content="Explore our range of products for the energy and industrial sectors" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <AnimatedSection className="bg-gray-100 py-10 px-4">
//         <main className="container mx-auto px-4 py-12 max-w-6xl">
//           <section className="mb-12 text-center">
//             <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
//               Our <span className="text-indigo-600">Products</span>
//             </h1>
//             <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
//               Discover our curated range of innovative solutions for the energy and industrial sectors.
//             </p>
//           </section>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product, index) => (
//               <ProductCard key={index} {...product} />
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors duration-300  font-medium p-2 text-lg">
//               Contact Us
//             </button>
//           </div>
//         </main>
//       </AnimatedSection>
//     </>
//   );
// };

// export default ProductsPage;


"use client"

import Head from "next/head"
import { useRef, useState } from "react"
import AnimatedSection from "./AnimatedSection"
// import ProductCard from "./product-card"
import { Search, ChevronDown,ExternalLink, Star } from "lucide-react"


import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
// import { ChevronDown, ExternalLink, Star } from "lucide-react"

 function ProductCard({ image, title, description, features }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Decorative elements - updated to red gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-gray-900 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

      <motion.div
        className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg"
        whileHover={{
          y: -8,
          transition: { duration: 0.2 },
        }}
        layout
      >
        {/* Featured badge - updated to red */}
        <div className="absolute top-0 right-0 z-20 m-2">
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
          >
            <Star className="w-3 h-3 fill-white" /> Premium
          </motion.div>
        </div>

        {/* Card Header with Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-gray-900/30 z-10 opacity-0 group-hover:opacity-100"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full w-full"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-700"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />

          {/* Title overlay on image */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-5 z-20"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>

            {/* Animated underline - updated to red */}
            <motion.div
              className="h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-2"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "40%" : "15%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <p className="text-gray-300 mb-5 line-clamp-2">{description}</p>

          {/* Features Section */}
          <div className="border-t border-gray-800 pt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
              aria-expanded={isExpanded}
            >
              <span className="flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-700 rounded-full mr-3"></span>
                Key Features
              </span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-3 pt-4 pb-2">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-gray-400"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-700 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card Footer */}
          <div className="mt-6 pt-4 border-t border-gray-800">
            <motion.a 
            href='/brouchre.pdf'
            target="_blank"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-red-500 font-medium group"
            >
              Learn More
              <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                <ExternalLink className="ml-2 w-4 h-4" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}




export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const productRef = useRef(null);

  const handleScroll = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const products = [

    {
      image: "/seamless-pipes.png",
      title: "Seamless Pipes",
      description:`Known for their strength and durability, our seamless pipes are ideal for high-pressure applications.
Available in following material grades:`,
      features: [
        "Carbon Steel",
         "Stainless Steel", "Alloy Steel",
          "(Super) Duplex, Nickel Alloy"
      ],
      category: "materials",
    },

    {
      image: "/pipes.png",
      title: "Welded Pipes",
      description:`Available in various specifications and perfect for applications where strength and corrosion resistance are crucial. Welded pipes are produced by welding the edges of steel plates or coils.
Available in following material grades:`,
      features: [
        "Carbon Steel",
         "Stainless Steel", "Alloy Steel",
          "(Super) Duplex, Nickel Alloy"
      ],
      category: "materials",
    },

    {
      image: "/fittings.png",
      title: "Fittings",
      description:
        "AADTRA offers a diverse range of different high-quality fittings. Both Buttweld Fittings and Forged Fittings are included in our scope of supply.",
      features: [
        'Buttweld (BW) Fittings',
         "Carbon Steel,Stainless Steel, Alloy Steel",
        "(Super) Duplex, Nickel Alloy",
        
      ],
      category: "materials",
    },

    {
      image: "/forge-fittings.png",
      title: "Forge Fittings",
      description:
        "Forged Fittings & Reinforced Branch Outlets and Flanged Branch outlets in all grades API Tubing and Casing Couplings.",
      features: [
        'Threaded steel fittings for steam and fire-fighting',
        "Forged Fittings as per. ASME B16.11, BS 3799, MSS SP83, MSS SP79, MSS SP95 standards",
      ],
      category: "materials",
    },

    {
      image: "/Branch Connections.png",
      title: "Branch Connections",
      description:`AADTRA Group's range of supply includes all different types of branch connections, where smaller pipes are required to connect to a larger main pipeline.
Weldolets, Nipolets, Threadolets, Sockolets, Elbolets, Nipoflanges and Weldoflanges are included in our product program and can be supplied both fast-track from our stock locations or from new production with our partner manufacturers.`,
      features: [
        "Carbon Steel",
         "Stainless Steel", "Alloy Steel",
          "(Super) Duplex, Nickel Alloy"
      ],
      category: "materials",
    },

    {
      image: "/flanges.png",
      title: "Flanges",
      description:
        "Our extensive range of flanges and wide knowledge on these piping components allow us to be of support on any challenging project involving flanges.",
      features: [
        "Carbon Steel",
         "Stainless Steel", "Alloy Steel",
          "(Super) Duplex, Nickel Alloy"
      ],
      category: "materials",
    },

    {
      image: "/product3.png",
      title: "Pipeline Barred Tees",
      description:`AADTRA Group has a strong expertise in the total project management of pipelines and pipeline materials.

Typical products, such as Barred Tees, Valves, Hot Induction Bends, Isolation Joints (G-Joint) Spectacle Blinds, Pipe Coatings, Clad Pipes, large bore Flanges, Fasteners and Gaskets are all within our scope of supply to complete any project pipeline package.`,
      features: [
        "Pipe Coatings",
        "Clad Pipes",
        "Fasteners and Gaskets"
      ],
      category: "materials",
    },

    {
      image: "/product2.jpg",
      title: "Hot Induction Bends",
      description:`Hot Induction bending is a largely automated process carried out by a high-performance bending machine in conjunction with inductive heating with precise temperature control.`,
      features: ['Diameter Range: 2" to 64"', "Various Material Options", "High Productivity & Precision"],
      category: "equipment",
    },

    {
      image: "/gauges.jpeg",
      title: "Pressure Gauges",
      description:`AADTRA offers Process Control & Measuring Instruments & industrial technology solution provider. Our major products range includes Pressure, Temperature, Humidity, Level, Flow, Analyzers, Automation Products, Industrials Valves & Instrumentation Manifolds and Tube fittings and supply of all kinds of process control instruments.`,
      features: [
        "STANDARD FULL SS PRESSURE GAUGE",
        "SOLID FRONT FULL SS PRESSURE GAUGE",
        "PHENOL CASE SOLID FRONT PRESSURE GAUGE",
      ],
      category: "components",
    },

    {
      image: "/valves.png",
      title: "Valves",
      description:`For the industries we serve we can deliver Valves as per API 6D and API 6Α.
Other standards can be sourced upon demand.`,
      features: [
        "Type of Valves: Gate Valves, Globe, Check, Ball, Butterfly, Cryogenic, Plug valve - DBB",
        "Operation: Manual & Remote Control",
        "Material: Cast Iron, Carbon Steel (WCB, LCB), Carbon Moly (WC1, WC6, WC9, C5, C12), Stainless Steel (CF8, CF8C, CF8M, LC3), Bronze, Al-Bronze, Ni.Al Bronze, Inconel, Monel, Incoloy, Titanium",
      ],
      category: "components",
    },

    {
      image: "/pressure-vessel.jpg",
      title: "Process Plant & Equipment",
      description:
        "We design and manufacture a variety of process equipment for gas and oil treatment, including dehydration and filtration systems.",
      features: [
        "Gas Dehydration & Sweetening Units",
        "Oil Treatment & Produced Water Systems",
        "Skid-Mounted & Modular Systems",
      ],
      category: "equipment",
    },
    {
      image: "/structural-steel.jpg",
      title: "Structural Steel",
      description:
        "High-quality structural steel products for industrial construction, sourced globally from top manufacturers.",
      features: [
        "Plates, Beams, Channels, Angles",
        "Custom Sizes and Testing Options",
        "Offshore and Onshore Steel Solutions",
      ],
      category: "materials",
    },

  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "equipment", name: "Equipment" },
    { id: "materials", name: "Materials" },
    { id: "components", name: "Components" },
  ]

  return (
    <>
      <Head>
        <title>Our Products - Ace Energy</title>
        <meta name="description" content="Explore our range of products for the energy and industrial sectors" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-gray-100 max-sm:my-10 ">
        {/* Hero Section with Animated Background - updated to dark gray and red */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-600 text-white ">
          <div className="absolute inset-0 mb-4">
            {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}

            {/* Animated gradient orbs - updated to red tones */}
            {/* <div className="absolute -top-24 -left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-24 left-48 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-24 right-48 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}
          </div>

          <div className="container mx-auto px-6 py-20 relative z-10">
            <AnimatedSection direction="down" delay={0.1}>
              <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 text-sm font-medium backdrop-blur-sm mb-4">
                Ace Energy Solutions
              </span>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Products</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="text-xl text-gray-300 max-w-2xl">
                Discover our comprehensive range of high-quality products designed for the energy and industrial
                sectors, delivering excellence through innovation and precision engineering.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <button 
                 onClick={handleScroll}
                className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium shadow-lg hover:shadow-xl">
                  Explore Products
                </button>
                <a href="/pages/contact-us" className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium border border-gray-700">
                  Contact Sales
                </a>
              </div>
            </AnimatedSection>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ChevronDown className="w-6 h-6 text-white/70" />
              </motion.div>
            </div>
          </div>
        </div>

        <AnimatedSection className="lg:py-16 max-sm:p-2 lg:px-4 mt-5">
          <div className="container lg:mx-auto max-w-7xl max-sm:p-2">
            {/* Filter and Search Section - updated to dark gray and red */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-red-600 text-white shadow-lg shadow-red-500/20"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div ref={productRef} className="relative w-full md:w-64 ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-full bg-gray-800 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm text-white"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Products Grid with Staggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <AnimatedSection
                  key={product.title}
                  delay={index * 0.1}
                  direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                >
                  <ProductCard {...product} />
                </AnimatedSection>
              ))}
            </div>

            {/* CTA Section - updated to dark gray and red */}
            <AnimatedSection className="mt-20 text-center" delay={0.5} direction="up">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-4">Need Custom Solutions?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Our team of experts is ready to help you find the perfect products for your specific requirements.
                </p>
                <motion.a
                href="/pages/contact-us"
                  className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}
