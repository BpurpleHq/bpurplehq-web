"use client"

import { products } from '@/constants'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Testimonials from './Testimonials'

const Products = () => {
  return (
    <div className=''>
      <h2 className='sm:px-16 px-6 py-10 text-headline-3 lg:text-headline-3 text-primary text-center'>Why we exist..</h2>
      <p className='sm:px-16 px-6 py-10 lg:text-headline-4 lg:text-center text-body text-primary mt-5'>At bpurple, you gain access to project-based learning curriculum to enable you graps immediately the techniques involved in develop quality products.</p>
      <div className='sm:px-16 px-6 py-10'>
        <Swiper
          // @ts-ignore
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
          pagination={{clickable: true}}
        >
          {products.map(({id, image, title, description}) => (
            <SwiperSlide>
              <div key={id} className='max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between '>
                <Image src={image} alt={title} width={400} height={300} className='border-2 border-secondary rounded-xl' />
                <div className='relative flex flex-col justify-center items-center'>
                <div className=''>
                  <div className='lg:w-[548px] py-4 px-3 mt-4 lg:mt-0 bg-extra shadow-lg'>
                  <h2 className='text-headline-3 text-primary text-center'>{title}</h2>
                  <p className='lg:w-[492px] mt-2'>{description}</p>
                </div>
                </div>
                  <CustomButton
                    title='Explore'
                    containerStyles='lg:absolute bottom-0 right-2 bg-secondary p-3 mt-3 mb-7 lg:mb-0 rounded-lg'
                    textStyles='text-dark'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}  
        </Swiper>
      </div>
      <Testimonials />
    </div>
  )
}

export default Products