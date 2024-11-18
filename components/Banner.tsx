"use client";

import { banners } from '@/constants';
import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Banner = () => {
  const sliderContent = [
    { 
      title: "Transform Your Business Today", 
      subtitle: "Innovative solutions tailored to accelerate your growth.", 
      
    },
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
            <div className="relative w-full h-[calc(100vh)] mx-auto flex flex-col lg:flex-row lg:justify-center">
              
              <Image 
                src={image} 
                alt={`Banner ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="w-full h-full"
              />
              
               <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-10">
                {/* Title */}
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                  {sliderContent[index]?.title}
                </h1>
                {/* Subtitle */}
                <p className="mt-1 text-sm md:text-lg lg:text-3xl font-light text-secondary">
                  {sliderContent[index]?.subtitle}
                </p>
              
                   {/*  <CustomButton
          title='Explore Now'
          btnType='button'
          containerStyles='bg-secondary p-3 rounded-lg mt-10 ml-10 border '
          textStyles='text-white font-medium'/> */}
            

             </div> 
             
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
