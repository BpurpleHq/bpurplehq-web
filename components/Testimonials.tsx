import { testimonials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Testimonials = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div>
      <h3 className='max-w-[1440px] mx-auto text-headline-3 lg:text-headline-2 sm:px-16 px-6 py-10 text-primary'> See what people are saying</h3>
      <div className='relative group flex flex-row px-1'>
        <MdChevronLeft
          onClick={slideLeft}
          className='lg:bg-white lg:top-[50%] lg:left-0 lg:rounded-full lg:absolute lg:opacity-50 lg:hover:opacity-100 lg:cursor-pointer lg:z-30 hidden lg:group-hover:block'
          size={40}
        />
        <div id={'slider'} className='w-full flex flex-col lg:flex-row justify-center relative gap-3 pt-5 pb-[45px] '>
          {testimonials.map(({id, review, image, name, title}) => (
            <div key={id} className=' bg-extra flex flex-col lg:flex-row gap-2 border border-secondary rounded-xl p-6 shadow-lg'>
                <div className='flex justify-center items-center'>
                  <p className='w-[400px] text-sm'>{review}</p>  
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <Image src={image} alt='title' width={150} height={150} />
                    <p className='text-body-2 font-bold text-center mt-3'>{name}</p>
                    <p className='text-body-2 text-center'>{title}</p>  
                </div>  
            </div>
          ))} 
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='lg:bg-white top-[50%] lg:right-0 lg:rounded-full lg:absolute lg:opacity-50 lg:hover:opacity-100 lg:cursor-pointer lg:z-10 hidden lg:group-hover:block'
          size={40}
        />  
      </div>
    </div>
  )
}

export default Testimonials