"use client";

import { banners } from '@/constants';
import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  const sliderContent = [
    { 
      title: "Unlock Insights, Optimize Systems, Scale Confidently", 
      subtitle: "Expert Data Analytics, Data Engineering, and Infrastructure Solutions.", 
      
    },
    // { 
    //   title: "Future-Proof Your Career.", 
    //   subtitle: "Accelerate your journey with expert-led training in Emerging Technologies.", 
      
    // },
    { 
      title: "Empower Your Workforce", 
      subtitle: "Prepare your team for the future of work.", 
      
    },
    { 
      title: "Discover Tailored Solutions", 
      subtitle: "Optimize your processes with cutting-edge technology.", 
      
    },
  ];

  return (
    <div className="sm:px-0 px-0 py-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {banners.map(({ image }, index) => (
         <SwiperSlide key={index}>
  <div className="relative w-full h-[calc(100vh)] mx-auto">
  
    <Image
      src={image}
      alt={`Banner ${index + 1}`}
      layout="fill"
      objectFit="cover"
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
  
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">
        {sliderContent[index]?.title}
      </h1>
      <p className="mt-4 text-sm md:text-2lg lg:text-3xl font-bold text-gray-200">
        {sliderContent[index]?.subtitle}
      </p>

      {/* Button 
      <CustomButton
        title="Explore Now"
        btnType="button"
        containerStyles="bg-secondary p-3 rounded-lg mt-6"
        textStyles="text-white font-medium"
      /> */}
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
