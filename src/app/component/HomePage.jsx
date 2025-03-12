"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";
import AnimatedSection from "./AnimatedSection";

export default function AccordionSlider({ slides }) {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const slideCount = slides.length;
  const defaultSlideWidth = 100 / slideCount; // Equal width for all slides initially (e.g., 20% for 5 slides)
  const expandedSlideWidth = 70; // Expanded width on hover
  const compressedSlideWidth = (100 - expandedSlideWidth) / (slideCount - 1); // Width for non-hovered slides

  const getSlideStyles = (index) => {
    const baseStyles = {
      transition: "all 500ms ease-in-out",
      position: "absolute",
      height: "100%",
    };

    if (isMobile) {
      return {
        ...baseStyles,
        left: 0,
        width: "100%",
        transform: `translateX(${hoveredSlide === index ? 0 : 100}%)`,
        zIndex: index,
        opacity: hoveredSlide === null ? 1 : hoveredSlide === index ? 1 : 0,
      };
    }

    // Desktop styles
    let leftPosition = 0;
    let slideWidth;

    if (hoveredSlide === null) {
      // Default state: all slides take equal width
      slideWidth = defaultSlideWidth;
      leftPosition = index * defaultSlideWidth;
    } else {
      // When a slide is hovered
      slideWidth = index === hoveredSlide ? expandedSlideWidth : compressedSlideWidth;
      // Calculate left position based on the index
      for (let i = 0; i < index; i++) {
        leftPosition += i === hoveredSlide ? expandedSlideWidth : compressedSlideWidth;
      }
    }

    return {
      ...baseStyles,
      left: `${leftPosition}%`,
      width: `${slideWidth}%`,
      zIndex: hoveredSlide === index ? 20 : index,
    };
  };

  return (
    <AnimatedSection>
    <div className="relative w-full" style={{ maxHeight: "630px" }}>
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1500 / 630",
          maxWidth: "full",
          margin: "0 auto",
        }}
      >
        <ul className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className="overflow-hidden"
              style={getSlideStyles(index)}
              onMouseEnter={!isMobile ? () => setHoveredSlide(index) : undefined}
              onMouseLeave={!isMobile ? () => setHoveredSlide(null) : undefined}
              onClick={isMobile ? () => setHoveredSlide(hoveredSlide === index ? null : index) : undefined}
            >
              <Link href={slide.link} className="block h-full relative no-underline">
                {/* Image container */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image || "/placeholder.svg?height=630&width=1500"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>

                {/* Content container on the left, vertically centered */}
                <div className="absolute inset-y-0 left-0 flex items-center h-full">
                  <div
                    className="bg-black bg-opacity-50 text-white p-4 h-full flex flex-col justify-center"
                    style={{
                      width: "35%", // Fixed percentage of slide width
                      minWidth: "320px", // Ensure minimum width to prevent shrinking
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-sm md:text-base">{slide.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </AnimatedSection>
  );
}