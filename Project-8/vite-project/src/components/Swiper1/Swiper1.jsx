import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Swiper1(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px_12px_20px_12px] max-w-[270px] max-h-[224px] flex flex-col items-start gap-[3px] rounded-[20px]  bg-white dark:bg-[gray] mb-[50px] mx-0">
            <img src={props.img} className="w-[100%]" alt="" />
            <div className="flex items-center justify-between w-[100%] h-[100%]">
                <h1 className="font-[400] text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                    {props.h1}
                </h1>
                <p className="font-[400] text-[14px] text-[#D9D9D9] leading-[13px]">
                    {props.p}
                </p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
