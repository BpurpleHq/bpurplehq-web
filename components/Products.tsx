"use client"

import { products, testimonials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Products = () => {
  return (
    <div className='sm:px-16 px-6 py-10'>
      <h2 className='text-headline-3 lg:text-headline-3 text-primary text-center'>Why we exist..</h2>
      <p className='lg:text-headline-4 lg:text-center text-body text-primary mt-5'>At bpurple, you gain access to project-based learning curriculum to enable you graps immediately the techniques involved in develop quality products.</p>
      <div className='py-10'>
        <Swiper
          // @ts-ignore
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
          pagination={{clickable: true}}
        >
          {products.map(({id, image, title, description}) => (
            <SwiperSlide>
              <div className='flex flex-col lg:flex-row lg:justify-between'>
                <Image src={image} alt={title} width={400} height={300} className='border-2 border-secondary rounded-xl' />
                <div className='flex flex-col justify-center items-center'>
                  <div className='lg:w-[548px] py-4 px-3 mt-4 lg:mt-0 bg-extra shadow-lg'>
                  <h2 className='text-headline-3 text-primary text-center'>{title}</h2>
                  <p className='lg:w-[492px] mt-2'>{description}</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}  
        </Swiper>
      </div>
        <h3 className='text-headline-3 mt-10'>Testimonials</h3>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 mt-5'>
          {testimonials.map(({id, review, image, name, title}) => (
            <div className='bg-extra flex flex-col lg:flex-row border border-secondary rounded-xl p-6 shadow-lg'>
                <div>
                  <p className='lg:w-[400px]'>{review}</p>  
                </div>
                <div>
                  <Image src={image} alt='title' width={280} height={280} />
                    <p className='text-body-2 font-bold text-center mt-3'>{name}</p>
                    <p className='text-body-2 text-center'>{title}</p>  
                </div>  
            </div>
          ))}  
        </div>
    </div>
  )
}

export default Products