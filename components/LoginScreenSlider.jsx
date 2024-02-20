"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function LoginScreenSlider({ loginScreens }) {
  return (
    <div className="w-96">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        modules={[Autoplay]}
      >
        {loginScreens.map((loginScreen) => (
          <SwiperSlide key={loginScreen.id}>
            <div className="h-96 w-96">
              <Image
                src={loginScreen.image}
                alt={loginScreen.name}
                height={500}
                width={500}
                priority
                className="h-full w-full rounded-s-3xl rounded-t-3xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-x-4 p-8">
        <div className="h-2.5 w-2.5 rounded-sm bg-blue-400"></div>
        <div className="rotate-45 rounded-sm p-1 ring-1 ring-blue-800">
          <div className="h-2.5 w-2.5 rounded-sm bg-blue-800"></div>
        </div>
        <div className="h-2.5 w-2.5 rounded-sm bg-blue-400"></div>
      </div>
    </div>
  );
}
