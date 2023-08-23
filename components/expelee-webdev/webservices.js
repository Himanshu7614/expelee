import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LearnMore from "../TextLink";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

function Webservices() {
  return (
    <div className="px-[5rem]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={3000}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-[12rem]"
      >
        <SwiperSlide>
          <div className="py-auto lg:my-12 ">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 cursor-pointer">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-8 lg:p-4">
                <div className="flex flex-row items-start justify-center ">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl "
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center cursor-pointer">
                <h4 className="flex  bold  justify-center lg:justify-start text-[6rem] lg:text-[2rem]">
                  How it works 
                </h4>
                <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%]">
                  We’re about so much more than websites
                </h2>
                <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem]">
                  Whether youre a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
                <Link href={""}>
                  <LearnMore text="Lets Talk" fontSize="2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:my-12 ">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 cursor-pointer">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-8 lg:p-4">
                <div className="flex flex-row items-start justify-center ">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center cursor-pointer">
                <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%]">
                    1. Strategy
                </h2>
                <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem]">
                  Whether youre a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
                <Link href={""}>
                  <LearnMore text="Lets Talk" fontSize="2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:my-12 ">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 cursor-pointer">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-8 lg:p-4">
                <div className="flex flex-row items-start justify-center ">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center cursor-pointer">
                <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%]">
                  Design
                </h2>
                <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem]">
                  Whether youre a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
                <Link href={""}>
                  <LearnMore text="Lets Talk" fontSize="2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:my-12 ">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 cursor-pointer">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-8 lg:p-4">
                <div className="flex flex-row items-start justify-center ">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center cursor-pointer">
                <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%]">
                 Develop
                </h2>
                <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem]">
                  Whether youre a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
                <Link href={""}>
                  <LearnMore text="Lets Talk" fontSize="2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:my-12 ">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-8 cursor-pointer">
              <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:gap-8 lg:p-4">
                <div className="flex flex-row items-start justify-center ">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
                <div className="flex felx-row justify-center">
                  <img
                    alt="gallary img"
                    src="/static/bp1.jpg"
                    className="rounded-md drop-shadow-xl p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 justify-center cursor-pointer">
                <h2 className="bold text-[8rem] lg:text-[4rem] uppercase mt-[1rem] lg:mt-[0rem] lg:w-[90%]">
                 Deploy
                </h2>
                <p className="lg:w-[70%] justify-start text-[5rem] lg:text-[1.5rem]">
                  Whether youre a startup looking for that extra kick or an
                  established retailer in need of a fresh perspective, we are
                  here to take your digital commerce to the next level.
                </p>
                <Link href={""}>
                  <LearnMore text="Lets Talk" fontSize="2" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Webservices;
