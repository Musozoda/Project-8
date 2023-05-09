import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function Swiper3(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}

        className="mySwiper"
      >
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>
        <SwiperSlide className="w-[270px] h-[270px]">
                <img src={props.img} className="w-[100%] h-[100%] dark:opacity-[60%]" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
