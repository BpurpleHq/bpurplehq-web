import { services1, testimonials, values } from '@/constants'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'bpurple | About',
};

const page = () => {
  return (
    <div>
    <section className='max-w-[1440px] mx-auto sm:px-16 px-6 pt-4 pb-14'>
      <h3 className='text-headline-2 text-secondary lg:mb-5 font-bold text-center lg:text-start'>About Us</h3>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className=''>
          <h2 className='text-headline-3 lg:text-headline-2 text-primary text-center lg:text-start'>We Create Experience That Put <span className='text-secondary'>People</span> First</h2>
        </div>
        <div>
          <p className='lg:mt-6 mt-3'>Bpurple connotes a state of mind, a state of relevance, agility, staying up to date and evolving with technology 
          trends while building market ready skills and making businesses to stay competitive.<br /> <br />We are focused on providing high-quality tech services, products, 
          training, hiring, and consulting to businesses and individuals looking to acquire and develop their tech skills.</p>
        </div>
        </div>
        <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between mt-3'>
          <Image src='/aboutImage1.png' width={520} height={300} alt='about image' />
          <Image src='/aboutImage2.png' width={550} height={359} alt='about image' />
        </div>
      </section>
      <section className='bg-extra'>
        <div className='max-w-[1440px] mx-auto flex flex-col gap-3 sm:px-16 px-6 lg:py-10 py-4'>
          <h3 className='text-body-2 font-bold'></h3>
          <div className='flex flex-col Lg:items-start mt-3'>
            <h2 className='text-headline-3 lg:text-headline-2 text-secondary'>Our Vision</h2>
            <p className='lg:w-[400px] mt-2'>Our vision is to be a leading technology education provider, empowering individuals and corporates to thrive in a fast moving tech ecosystem. </p>
          </div>
          <div className='relative flex flex-col lg:items-end'>
            <h2 className='text-headline-3 lg:text-headline-2 text-primary'>Our Mission</h2>
            <p className='lg:w-[400px] lg:text-end mt-2'>Our mission is to increase tech literacy by establishing coding bootcamps and tech hotspots in major African cities and states, delivery comprehensive solutions. </p>
          </div>
          <div className='flex flex-col lg:items-start'>
            <h2 className='text-headline-3 lg:text-headline-2 text-primary'>Our Goal</h2>
            <p className='lg:w-[400px] mt-2'>Our long-term goal is to be part of the solution to making africa a tech first continent, to become the leading tech training and consulting firm in Nigeria and spanning to major cities in the African continent, with a reputation for providing high-quality services and producing top-notch talent in the tech industry.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5'>
          <h2 className='font-semibold text-center lg:text-start'></h2>
          <h2 className='text-headline-3 lg:text-headline-2 text-secondary text-center lg:text-start'>Our Values</h2>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between mt-3'>
            {values.map(({ id, title, description, image }) => (
              <div key={id} className='border border-primary rounded-xl py-4 px-5 shadow-xl'>
                <p className='text-center font-bold text-headline-3 text-primary mt-5'>{title}</p>
                <p className='lg:w-[300px] mt-5'>{description}</p>
                <div className='flex justify-center mt-3'>
                  <Image src={image} alt={title} width={70} height={70} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-extra'>
        <div className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5'>
          <h3 className='text-body-2 text-center font-semibold'></h3>
          <h2 className='text-headline-3 lg:text-headline-2 text-center text-primary mt-2'>Our Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {services1.map(({ id, title, description, image }) => (
              <div key={id} className='mt-4'>
                <div className='flex gap-3'>
                  <Image src={image} alt='dot' width={15} height={15} />
                  <p className='text-bold text-primary'>{title}</p>
                </div>
                <p className='lg:w-[550px] mt-1 pl-6'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='sm:px-16 px-6 lg:py-10 py-5'>
            <h3 className='max-w-[1440px] mx-auto text-headline-3 lg:text-headline-2 text-primary'>Testimonials</h3>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-4 mt-3'>
              {testimonials.map(({id, review, image, name, title}) => (
                <div key={id} className='bg-extra flex flex-col lg:flex-row border border-secondary rounded-xl p-6 shadow-lg'>
                  <div>
                    <p className='lg:w-[400px]'>{review}</p>  
                  </div>
                <div>
                  <Image src={image} alt='title' width={280} height={280} />
                    <p className='text-body-2 font-bold text-center'>{name}</p>
                    <p className='text-body-2 text-center'>{title}</p>  
                </div>  
              </div>
              ))}  
            </div>
          </div>
      </section>
    </div>
  )
}

export default page