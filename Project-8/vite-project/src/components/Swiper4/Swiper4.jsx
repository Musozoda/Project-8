import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

import "swiper/css/navigation";
import { Navigation } from "swiper";


// import required modules

export default function Swiper4(props) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

        }}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={props.img} className="mx-auto" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
