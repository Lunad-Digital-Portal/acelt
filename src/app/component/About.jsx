"use client";
import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const achievementsRef = useRef(null);

  // Function to animate the numbers from 0 to target
  const animateCount = (target, setCount) => {
    let start = 0;
    const end = target;
    const duration = 5000; // 5 seconds
    const increment = end / (duration / 50); // Update every 50ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);
  };

  useEffect(() => {
    // Intersection Observer to trigger the animation when the achievements section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCount(1000, setClientsCount); // Animate Clients count
          animateCount(96, setProjectsCount); // Animate Projects count
          observer.unobserve(achievementsRef.current); // Stop observing after animation starts
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in the viewport
      }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  const industries = [
    'Oil & Gas',
    'Power Generation',
    'Petrochemical & Refineries',
    'Marine & Shipbuilding',
    'Construction & Infrastructure',
    'Water Treatment',
    'Fertilizers',
    'Renewable Energy',
  ];

  return (
    <div>
      <div className="relative bg-black h-[800px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/clip1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mx-auto transform md:scale-125 lg:scale-125 relative z-10 min-h-screen flex items-center justify-center">
          {/* Vision and Mission Section */}
          <section className="flex justify-center max-h-[790px] sm:px-2 text-white ">
            <div className="max-w-4xl ">
              <div className="grid mx-auto items-center">
                <div className="max-h-4xl mx-5 p-10 opacity-80 bg-gray-800 rounded shadow w-2/3 justify-self-center text-white">
                  <div className="flex border-b-2 border-red-600 pb-5 items-center">
                    <h1 className="text-4xl font-light text-center text-white uppercase tracking-[0.1em]">
                      About Us
                    </h1>
                  </div>

                  <p className="pt-5 text-justify text-lg leading-relaxed max-w-4xl mx-auto tracking-[0.05em]">
                    At ACE Energy, we aim to be your partner at strategic crossroads.
                    We exceed customer expectations through exceptional service and a commitment to building enduring relationships.
                  </p>

                  <p className="text-lg leading-relaxed text-justify max-w-4xl mx-auto tracking-[0.05em]">
                    Our global project team of experienced professionals provides end-to-end support for material sourcing, project management, and execution.
                    With expertise across various industries, we ensure your success.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-gray-800 text-white py-6">
        {/* Industries We Serve with Sliding Ribbon Effect */}
        <section className="mt-8 mb-5 text-white">
          <h2 className="text-3xl font-extralight uppercase mb-2 text-center">
            Industries We Serve
          </h2>
          <div className="relative overflow-hidden">
            {/* Sliding Ribbon */}
            <div className="absolute top-0 left-0 w-full h-full animate-slideRibbon"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-12 animate-scroll">
                {industries.concat(industries).map((industry, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-6 py-3 text-white font-medium text-xl shadow rounded-md border shadow-text text-shadow bg-gray-800 tracking-[0.1em]"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>

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

      {/* Achievements Strip Section */}
      <section ref={achievementsRef} className="bg-gray-800 border-t-red-600 border-t-2 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center">
            <div className="">
              <h3 className="text-5xl text-white font-bold font-sans">
                {clientsCount}+
              </h3>
              <p className="pt-5 text-3xl leading-relaxed text-center max-w-4xl mx-auto tracking-[0.1em]">Satisfied Clients</p>
            </div>

            <div className="border-l-2 ml-10 border-white h-20 "></div>

            <div className="ml-8">
              <h3 className="text-5xl text-white font-sans font-bold">
                {projectsCount}+
              </h3>
              <p className="pt-5 text-3xl leading-relaxed text-center max-w-4xl mx-auto tracking-[0.1em]">Successful Projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
