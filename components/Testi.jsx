"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Testi() {
  const [slides, setSlides] = useState([1, 2, 3]); // Example array of slides
  const paginationButtonsRef = useRef([]);

  useEffect(() => {
    // Update the slides array with the new length
    const newSlides = Array.from({ length: 9 }, (_, index) => index + 1);
    setSlides(newSlides);
  }, []);

  useEffect(() => {
    // Update pagination buttons ref
    paginationButtonsRef.current = paginationButtonsRef?.current.slice(
      0,
      slides.length,
    );
  }, [slides]);

  // Function to go to a specific slide
  function goToSlide(index) {
    if (typeof window !== "undefined") {
      const swiper = window.document.querySelector(".swiper-container").swiper;
      swiper.slideTo(index);
    }
  }

  // Function to update pagination buttons
  function updatePaginationButtons(swiper) {
    const activeIndex = swiper.activeIndex;
    paginationButtonsRef.current.forEach((button, index) => {
      if (index === activeIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  return (
    <div>
      <Swiper
        className="swiper-container"
        modules={[Pagination]}
        // pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          // Update pagination buttons here
          updatePaginationButtons(swiper);
        }}
      >
        {/* Your slides */}
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-96 w-10/12 bg-red-500">Slide {slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination buttons */}
      <div className="flex items-center justify-center gap-x-4 p-4">
        {slides.map((slide, index) => (
          <button
            ref={(el) => (paginationButtonsRef.current[index] = el)}
            key={index}
            className="rounded-full bg-blue-500 px-4 py-2 text-white"
            onClick={() => goToSlide(index)}
          >
            {slide}
          </button>
        ))}
      </div>
    </div>
  );
}
