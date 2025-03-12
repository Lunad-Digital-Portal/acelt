// // "use client";
// // import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
// // import { useMediaQuery } from "../hooks/useMediaQuery";

// const slider = [
//     {
//         image:'/slider1.png',
//         title : "slider1"
//     },
//     {
//         image:'/slider2.png',
//         title:"slider2"
//     },
//     {
//         img:'/slider3.png',
//         title : 'slider3'
//     },
// ]
// "use client";
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import React from 'react';

// const slider = [
//     { image: '/slider1.png', title: 'slider1' },
//     { image: '/slider2.png', title: 'slider2' },
//     { image: '/slider3.png', title: 'slider3' },
// ];

// // const InfiniteSlider = () => {
// //     return (
// //         <div className="overflow-hidden w-full border-2 border-black bg-red-400">
// //             <motion.div
// //                 className="flex space-x-6"
// //                 initial={{ x: 0 }}
// //                 animate={{ x: '-100%' }}
// //                 transition={{
// //                     repeat: Infinity,
// //                     ease: 'linear',
// //                     duration: 15,
// //                 }}
// //             >
// //                 {[...slider, ...slider].map((item, index) => (
// //                     <div key={index} className="flex-shrink-0 w-[360px] h-44 relative ">
// //                         <Image
// //                             src={item.image}
// //                             alt={item.title}
// //                             layout="fill"
// //                             objectFit="cover"
// //                             className="rounded-lg w-full p-2 mix-blend-multiply"
// //                         />
// //                     </div>
// //                 ))}
// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default InfiniteSlider;

// const InfiniteSlider = () => {
//     return (
//         <div className="overflow-hidden w-full  bg-red-500 max-w-8xl ">
//             <motion.div
//                 className="flex space-x-8 mx-auto"
//                 initial={{ x: 0 }}
//                 animate={{ x: '-80%' }}
//                 transition={{
//                     repeat: Infinity,
//                     ease: 'linear',
//                     duration: 10,
//                 }}
//             >
//                 {[...slider, ...slider].map((item, index) => (
//                     <div key={index} className="flex-shrink-0 w-[360px] h-44 relative bg-red-400">
//                         <Image
//                             src={item.image}
//                             alt={item.title}
//                             layout="fill"
//                             objectFit="cover"
//                             className="rounded-lg w-full p-2 mix-blend-multiply"
//                         />
//                     </div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default InfiniteSlider;

// remove clone array as of now we have only element that is why we are clonning now
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const slider = [
    {
        image:'/slider1.png',
        title : "slider1"
    },
    {
        image:'/slider2.png',
        title:"slider2"
    },
    {
        image:'/slider3.png',
        title : 'slider3'
    },
    {
        image:'/slider1.png',
        title : "slider1"
    },
    {
        image:'/slider2.png',
        title:"slider2"
    },
    {
        image:'/slider3.png',
        title : 'slider3'
    },
]

export default function InfiniteSlider() {
  const logoListRef = useRef(null);

  useEffect(() => {
    if (logoListRef.current) {
      const scroller = logoListRef.current;

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
      // Clone each item and append it to create the infinite scroll effect

      // const clone = ul.cloneNode(true);
      // clone.setAttribute('aria-hidden', 'true');
      // console.log("ul", ul.parentNode)
      // ul.parentNode.appendChild(clone);
    }
  }, []);

  return (
    <AnimatedSection>
    <div ref={logoListRef} className="w-full inline-flex  overflow-hidden bg-red-600 p-2">
      <ul className="scroller__inner flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
        {slider?.length > 0 &&
          slider?.map((data, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start gap-2 bg-red-600">
              <img
                src={data.image}
                alt={data?.alt}
                className= "w-[250px] h-full object-contain mix-blend-multiply"
              />   
            </li>
          ))}
      </ul>
    </div>
    </AnimatedSection>
  );
}