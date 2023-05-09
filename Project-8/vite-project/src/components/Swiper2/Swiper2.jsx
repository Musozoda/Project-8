import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function Swiper2(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}

        className="mySwiper"
      >
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
        <SwiperSlide className="p-[12px] bg-white dark:bg-[gray]  rounded-[20px] relative mt-[130px]">
                <div className="w-[343px] h-[280px] p-[109px_15px_8px_15px] flex flex-col lg770:mx-auto gap-[5px] rounded-[20px]  z-10">
                    <h1 className="font-[400] text-center text-[18px] text-[#7A7A7A] dark:text-white leading-[26px]">
                        {props.h1}
                    </h1>
                    <p className="font-[400] lg:text-center text-[14px] text-[] dark:text-white leading-[22px]">
                        {props.p}
                    </p>
                    <img src={props.img} className=" absolute left-[21%] lg770:left-[37%] top-[-40%] z-[]" alt="" />
                </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
