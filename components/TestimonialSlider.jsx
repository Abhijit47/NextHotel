"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { MdiFormatQuoteClose } from "@/assets/icons";
import StarRating from "./StarRating";
import Divider from "./Divider";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSlider({ testimonials }) {
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([1, 2, 3]); // Example array of slides
  // if (swiperRef.current) {
  //   console.dir(swiperRef.current);
  // }

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     console.log(index, className);

  //     return `<span class="'bg-red-500 rounded-full className'">' + (index + 1) + "</span>`;
  //     // return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  useEffect(() => {
    // Update the slides array with the new length
    const newSlides = Array.from({ length: 9 }, (_, index) => index + 1);
    setSlides(newSlides);
  }, []);

  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (typeof window !== "undefined") {
      const swiper = window.document.querySelector(".swiper-container").swiper;
      swiper.slideTo(index);
    }
  };

  return (
    <div>
      <div className="py-16">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={2.5}
          grid={{
            rows: 1,
            fill: "row",
          }}
          effect="fade"
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          grabCursor={true}
          // lazy={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // lazyPreloadPrevNext={2}
          // lazyPreloaderClass="swiper-lazy-preloader"
          // pagination={{
          //   clickable: true,
          // }}
          // pagination={pagination}
          pagination={{ clickable: true }}
          breakpoints={{
            280: {
              slidesPerView: 1.3,
            },
            320: {
              slidesPerView: 1.5,
            },
            360: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 1.5,
            },
            576: {
              slidesPerView: 1.8,
            },
            640: {
              slidesPerView: 1.8,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              // spaceBetween: 40,
            },
            992: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.8,
              // spaceBetween: 30,
            },
            1200: {
              slidesPerGroup: 3.2,
            },
          }}
          className="mySwiper"
          modules={[Grid, Autoplay, Pagination]}
          // className="mySwpier p-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="p-4">
              <div className="grid w-full gap-y-4 rounded-md bg-white px-8 py-8 shadow-md">
                <div className="flex w-full justify-between">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    priority
                    className="size-20 rounded-full object-cover"
                  />

                  <MdiFormatQuoteClose className="h-20 w-20 text-slate-200" />
                </div>
                <p className="text-sm text-stone-700">{testimonial.message}</p>
                <Divider />
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-normal text-stone-700">
                      {testimonial.name}
                    </h5>
                    <h6 className="text-xs font-normal text-stone-700">
                      {testimonial.designation}
                    </h6>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center gap-x-4 p-8">
        <div className="h-4 w-4 rounded-sm bg-blue-400"></div>
        <div className="rotate-45 rounded-sm p-1 ring-1 ring-blue-800">
          <div className="h-4 w-4 rounded-sm bg-blue-800"></div>
        </div>
        <div className="h-4 w-4 rounded-sm bg-blue-400"></div>
      </div>
    </div>
  );
}
