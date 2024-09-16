"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  GisLocationPoi,
  MdiArrowLeftThin,
  MdiArrowRightThin,
} from "@/assets/icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Autoplay } from "swiper/modules";

export default function FeaturedCardSlider({ rooms }) {
  const swiperRef = useRef(null);

  function goPrev() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  function goNext() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }

  return (
    <div>
      <div className="py-16">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3.1}
          // grid={{
          //   rows: 1,
          //   fill: "row",
          // }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // loop={true}
          grabCursor={true}
          lazy={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          lazyPreloadPrevNext={2}
          lazyPreloaderClass="swiper-lazy-preloader"
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
              slidesPerGroup: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {rooms?.map((room) => (
            <SwiperSlide key={room?._id} className={"bg-red-500"}>
              <div className="grid w-full h-full bg-white gap-y-4">
                <div className={"relative aspect-video"}>
                  <Image
                    src={room?.images?.picture_url}
                    width={500}
                    height={500}
                    alt={room?.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="grid p-4 gap-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      {room?.name?.length >= 20
                        ? `${room?.name?.substr(0, 20)} ...`
                        : room?.name}
                    </h4>
                    <span className="font- inline-flex select-none items-center rounded bg-green-100 px-2 py-0.5 text-xs text-green-800 shadow-md">
                      For sale
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <GisLocationPoi className="w-5 h-5 text-slate-300" />
                    <h5 className="text-sm line-clamp-1">
                      {room?.address?.street}
                    </h5>
                    <Image
                      src={`https://flagcdn.com/16x12/${room?.address?.country_code.toLowerCase()}.png`}
                      alt="country-flag"
                      width={16}
                      height={12}
                      priority
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Rating</p>
                    <h3 className="text-xl font-bold text-blue-800">
                      $
                      {Number(
                        room?.price?.$numberDecimal === undefined
                          ? "0"
                          : room?.price?.$numberDecimal,
                      ) +
                        Number(
                          room?.security_deposit?.$numberDecimal === undefined
                            ? "0"
                            : room?.security_deposit?.$numberDecimal,
                        ) +
                        Number(
                          room?.cleaning_fee?.$numberDecimal === undefined
                            ? "0"
                            : room?.cleaning_fee?.$numberDecimal,
                        ) +
                        Number(
                          room?.extra_people?.$numberDecimal === undefined
                            ? "0"
                            : room?.extra_people?.$numberDecimal,
                        )}
                      /&nbsp;
                      <span className="text-sm font-normal capitalize text-stone-800">
                        night
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center">
        <MdiArrowLeftThin
          className="w-8 h-8 text-blue-800 cursor-pointer"
          onClick={goPrev}
        />
        <MdiArrowRightThin
          className="w-8 h-8 text-blue-800 cursor-pointer"
          onClick={goNext}
        />
      </div>
    </div>
  );
}
