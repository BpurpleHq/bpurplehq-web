"use client"

import { useEffect } from 'react';
import { CTA, Metrics, Products } from '@/components';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {
  
  useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <main className="w-full relative">
      <section className='bg-white flex flex-col-reverse lg:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto sm:px-16 px-3 pt-[40px] mb-[20px] pb-7 lg:pb-0'>
        <div className='flex flex-col lg:justify-start lg:items-start lg:mt-[50px] w-full lg:max-w-[70%] flex-1'>
          <h1 className='lg:w-[70%] text-headline-2 text-primary text-center md:text-start'>Tech <span className='text-secondary'>Training,</span> Get Mentored, Stay Relevant.</h1>
          <p className='text-body lg:text-headline-4 text-primary mt-4'>We are part of the solution in building a <span className='text-secondary'>SKILLED</span> continent.</p>
          <div className='flex justify-center items-center lg:justify-items-start gap-3 mt-8 md:mt-8'>
            <Link href='/courses'>
              <CustomButton
                title='Explore Courses'
                btnType='button'
                containerStyles='bg-secondary rounded-lg py-2 min-w-[130px] px-2'
                textStyles='text-dark text-body-1 font-medium z-index-90'
              />
            </Link>
            <CustomButton
              title='Enroll Now'
              btnType='button'
              textStyles='text-dark'
              containerStyles='hidden bg-transparent rounded-lg py-1 min-w-[130px]'
            />
          </div>
        </div>
        
        <div className='flex relative lg:w-[580px] lg:h-[500px] h-[390px] border-2 border-secondary rounded-xl'>
          <Image src='/heroImage.png' alt='Hero Image'fill  />
        </div>
        <div className='hidden lg:block absolute bottom-[10%] left-[-1px]'>
          <Image src='/arrowIcon.svg' alt='arrow' width={130} height={800} />
        </div>
      </section>

      <section className='bg-extra' data-aos="fade-up">
        <Metrics />
      </section>

      <section className='bg-white' data-aos="fade-up">
        <Products />
      </section>
      
      <section className='bg-extra' data-aos="fade-up">
        <CTA />
      </section>
    </main>
  )
}
