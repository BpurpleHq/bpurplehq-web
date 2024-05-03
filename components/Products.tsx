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
    <div className='mb-5'>
      <h2 className='sm:px-10 px-6 py-10 text-headline-3 lg:text-headline-2 text-primary text-center lg:mt-2'>🚀 New Programs Alert <br/> Coming Up this May 2024.. </h2>
      <p className='sm:px-16 px-6 lg:text-headline-4 lg:text-center text-body text-primary mb-10'> At bpurplehq, we advance along with the tech industry! We're introducing to you new programmes that are targeted at the global tech ecosystem's changing needs.<span className='text-secondary text-headline-3'> Data Engineering, Artificial Intelligence Tools Data Science and Cybersecurity. </span> </p>

      <div className='sm:px-16 px-6 py-10 '>
        <Swiper
          // @ts-ignore
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={true}
          pagination={{clickable: true}}
        >
          {products.map(({id, image, title, description}) => (
            <SwiperSlide>
              <div key={id} className='max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-center'>
                <Image src={image} alt={title} width={500} height={300} style={{ borderRadius: '20px' }}/>
                <div className='relative flex flex-col justify-center items-center'>
                <div className=''>
                  <div className='lg:w-[548px] py-4 px-3 mt-4 lg:mt-0 bg-extra shadow-lg'>
                  <h2 className='text-headline-3 text-primary text-center lg:mt-8'>{title}</h2>
                  <p className='lg:w-[492px] lg:m-5'>{description}</p>
                </div>
                </div>
                  {/* <CustomButton
                    title='Explore More'
                    containerStyles='lg:absolute bottom-0 bg-secondary p-3 mt-5 mb-7 lg:mb-0 rounded-lg lg:w-900'
                    textStyles='text-dark'
                    
                  />  */}
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