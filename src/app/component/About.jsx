// "use client";
// import React, { useState, useEffect, useRef } from "react";


// export default function About() {
//   const [clientsCount, setClientsCount] = useState(0);
//   const [projectsCount, setProjectsCount] = useState(0);
//   const achievementsRef = useRef(null);

//   // Function to animate the numbers from 0 to target
//   const animateCount = (target, setCount) => {
//     let start = 0;
//     const end = target;
//     const duration = 5000; // 5 seconds
//     const increment = end / (duration / 50); // Update every 50ms

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(counter);
//       }
//       setCount(Math.floor(start));
//     }, 50);
//   };

//   useEffect(() => {
//     // Intersection Observer to trigger the animation when the achievements section is in view
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           animateCount(1000, setClientsCount); // Animate Clients count
//           animateCount(96, setProjectsCount); // Animate Projects count
//           observer.unobserve(achievementsRef.current); // Stop observing after animation starts
//         }
//       },
//       {
//         threshold: 0.5, // Trigger when 50% of the section is in the viewport
//       }
//     );

//     if (achievementsRef.current) {
//       observer.observe(achievementsRef.current);
//     }

//     return () => {
//       if (achievementsRef.current) {
//         observer.unobserve(achievementsRef.current);
//       }
//     };
//   }, []);

//   const industries = [
//     'Oil & Gas',
//     'Power Generation',
//     'Petrochemical & Refineries',
//     'Marine & Shipbuilding',
//     'Construction & Infrastructure',
//     'Water Treatment',
//     'Fertilizers',
//     'Renewable Energy',
//   ];

//   return (
//     <div>
//       <AnimatedSection>
//       <div className="relative bg-black h-[800px]">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           autoPlay
//           loop
//           muted
//         >
//           <source src="/clip1.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="mx-auto transform md:scale-125 lg:scale-125 relative z-10 min-h-screen flex items-center justify-center">
//           {/* Vision and Mission Section */}
//           <section className="flex justify-center max-h-[790px] sm:px-2 text-white ">
//             <div className="max-w-4xl ">
//               <div className="grid mx-auto items-center">
//                 <div className="max-h-4xl mx-5 p-10 opacity-80 bg-gray-800 rounded shadow w-2/3 justify-self-center text-white">
//                   <div className="flex border-b-2 border-red-600 pb-5 items-center">
//                     <h1 className="text-4xl font-light text-center text-white uppercase tracking-[0.1em]">
//                       About Us
//                     </h1>
//                   </div>

//                   <p className="pt-5 text-justify text-lg leading-relaxed max-w-4xl mx-auto tracking-[0.05em]">
//                     At ACE Energy, we aim to be your partner at strategic crossroads.
//                     We exceed customer expectations through exceptional service and a commitment to building enduring relationships.
//                   </p>

//                   <p className="text-lg leading-relaxed text-justify max-w-4xl mx-auto tracking-[0.05em]">
//                     Our global project team of experienced professionals provides end-to-end support for material sourcing, project management, and execution.
//                     With expertise across various industries, we ensure your success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//       </AnimatedSection>

//       <AnimatedSection>
//       <section className="bg-gray-800 text-white py-6">
//         {/* Industries We Serve with Sliding Ribbon Effect */}
//         <section className="mt-8 mb-5 text-white">
//           <h2 className="text-3xl font-extralight uppercase mb-2 text-center">
//             Industries We Serve
//           </h2>
//           <div className="relative overflow-hidden">
//             {/* Sliding Ribbon */}
//             <div className="absolute top-0 left-0 w-full h-full animate-slideRibbon"></div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-12 animate-scroll">
//                 {industries.concat(industries).map((industry, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 px-6 py-3 text-white font-medium text-xl shadow rounded-md border shadow-text text-shadow bg-gray-800 tracking-[0.1em]"
//                   >
//                     {industry}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//       </AnimatedSection>

      // <AnimatedSection>
      // <section className="bg-white text-gray-800 py-12">
      //   <div className="max-w-6xl mx-auto text-center">
      //     {/* What We Do*/}
      //     <div className="mb-5">
      //       <h3 className="text-3xl font-normal mb-4">WHAT WE DO:</h3>
      //       <p className="text-lg leading-relaxed max-w-3xl mx-auto">
      //         We specialize in delivering high-quality engineering solutions, focusing on the supply, procurement, project management, and delivery of critical industrial materials and services.
      //       </p>
      //     </div>

      //     {/* Our Products & Services Section */}
      //     <div>
      //       <div className="grid text-lg font-medium">
      //         <div>We provide a range of high-quality industrial services, including cladding, mechanical lined pipes, fabrications, heat treatment, machining, and site welding and installation. Our expertise ensures precision and reliability in every project, delivering tailored solutions to meet the most demanding requirements.</div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      // </AnimatedSection>

//       {/* Achievements Strip Section */}
//       <AnimatedSection>
//       <section ref={achievementsRef} className="bg-red-800 border-t-red-600 border-t-2 text-white py-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex justify-center items-center">
//             <div className="">
//               <h3 className="text-5xl text-white font-bold font-sans">
//                 {clientsCount}+
//               </h3>
//               <p className="pt-5 text-3xl leading-relaxed text-center max-w-4xl mx-auto tracking-[0.1em]">Satisfied Clients</p>
//             </div>

//             <div className="border-l-2 ml-10 border-white h-20 "></div>

//             <div className="ml-8">
//               <h3 className="text-5xl text-white font-sans font-bold">
//                 {projectsCount}+
//               </h3>
//               <p className="pt-5 text-3xl leading-relaxed text-center max-w-4xl mx-auto tracking-[0.1em]">Successful Projects</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       </AnimatedSection>
//     </div>
//   );
// }

"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import AnimatedSection from "./AnimatedSection";

export default function HomeAbout() {
  const [clientsCount, setClientsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const achievementsRef = useRef(null)
  const aboutRef = useRef(null)
  const industriesRef = useRef(null)

  // Optimized counter animation with easing
  const animateCount = (target, setCount) => {
    const start = 0
    const end = target
    const duration = 2000 // Reduced to 2 seconds for better UX
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      // Use easeOutExpo for a more natural counting effect
      const progress = frame / totalFrames
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeProgress * end)

      setCount(currentCount)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCount(end) // Ensure we end exactly at the target
      }
    }, frameDuration)
  }

  useEffect(() => {
    // Intersection Observer for achievements section
    const achievementsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          animateCount(1000, setClientsCount)
          animateCount(96, setProjectsCount)
          achievementsObserver.unobserve(entry.target)
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    )

    if (achievementsRef.current) {
      achievementsObserver.observe(achievementsRef.current)
    }

    return () => {
      if (achievementsRef.current) {
        achievementsObserver.unobserve(achievementsRef.current)
      }
    }
  }, [])

  const industries = [
    "Oil & Gas",
    "Power Generation",
    "Petrochemical & Refineries",
    "Marine & Shipbuilding",
    "Construction & Infrastructure",
    "Water Treatment",
    "Fertilizers",
    "Renewable Energy",
  ]

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="mt-2">
      {/* About Section with Video Background */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative h-screen max-h-[800px] overflow-hidden"
      >
        {/* Video Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/clip1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-4xl w-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="backdrop-blur-sm bg-gray-900/40 rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-800"
            >
              <div className="flex flex-col items-start">
                <h2 className="inline-block text-sm font-medium tracking-wider text-red-500 uppercase mb-2">
                  Our Company
                </h2>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">About Us</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-6"></div>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                At ACE Energy, we aim to be your partner at strategic crossroads. We exceed customer expectations
                through exceptional service and a commitment to building enduring relationships.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Our global project team of experienced professionals provides end-to-end support for material sourcing,
                project management, and execution. With expertise across various industries, we ensure your success.
              </p>

              <div className="flex items-center">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition-colors"
                >
                  Learn more about our approach
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve Section */}
      <motion.section
        ref={industriesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gradient-to-r from-red-700 to-red-600 py-4 mb-10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-3">
            <h2 className="text-sm font-medium tracking-wider text-red-200 uppercase mb-2">Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white ">Industries We Serve</h3>
            <div className="w-20 h-1 bg-white/30 mx-auto"></div>
          </div>

          {/* Industries Slider */}
          <div className="relative overflow-hidden py-6">
            <div className="flex gap-6 animate-scroll">
              {industries.concat(industries).map((industry, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white font-medium shadow-lg"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <AnimatedSection>
      <section className="bg-white text-gray-800 py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* What We Do*/}
          <div className="mb-5">
            <h3 className="text-3xl font-normal mb-4">WHAT WE DO:</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              We specialize in delivering high-quality engineering solutions, focusing on the supply, procurement, project management, and delivery of critical industrial materials and services.
            </p>
          </div>

          {/* Our Products & Services Section */}
          <div>
            <div className="grid text-lg font-medium">
              <div>We provide a range of high-quality industrial services, including cladding, mechanical lined pipes, fabrications, heat treatment, machining, and site welding and installation. Our expertise ensures precision and reliability in every project, delivering tailored solutions to meet the most demanding requirements.</div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gray-900 py-10 lg:mb-16 max-sm:mb-4 "
      >
        <div className="container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 border border-red-800/30 backdrop-blur-sm shadow-xl">
                <div className="text-6xl font-bold text-white mb-2">
                  {clientsCount}
                  <span className="text-red-600">+</span>
                </div>
                <p className="text-xl text-gray-300 font-medium tracking-wide">Satisfied Clients</p>
              </div>

              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 border border-red-800/30 backdrop-blur-sm shadow-xl">
                <div className="text-6xl font-bold text-white mb-2">
                  {projectsCount}
                  <span className="text-red-500">+</span>
                </div>
                <p className="text-xl text-gray-300 font-medium tracking-wide">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}


