"use client"

import { useEffect } from 'react';

import { useRouter } from 'next/navigation'
import { CTA, Metrics, Products } from '@/components';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

export default function Home() {

  const router = useRouter()

  useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <main className="w-full relative">
      <section className='bg-extra flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 relative z-0 max-w-[1440px] mx-auto sm:px-16 px-3 pt-[10px] mb-[20px] lg:mb-0 pb-7 lg:pb-0 mt-5'>
        <div className='flex flex-col lg:justify-start lg:items-start lg:mt-[50px] w-full lg:max-w-[70%] flex-1'>
        <h1 className='text-headline-3 lg:text-headline-2 text-secondary text-center md:text-start lg:mb-10'>#MakeTheTransition</h1>
          <h1 className='text-headline-2 text-primary text-center md:text-start'>Get Skilled in Tech, Access Mentorship, Stay <span className='text-secondary'>Relevant.</span></h1>
          
          <p className='text-body lg:text-headline-4 text-primary mt-5 lg:w-[90%]'>We are nurturing next-gen human capital in Information Technology, backed with leadership, character and building capacity to thrive in a dynamic tech ecosystem </p> 
          {/* <p className='text-body lg:text-headline-4 text-primary mt-4 lg:w-[75%]'>We are part of the solution in building a <span className='text-secondary text-headline-3'>SKILLED</span> continent.</p> */}
         
          <div className='flex justify-center items-center lg:justify-items-start gap-3 mt-8 md:mt-8'>
            <Link href='/courses' onClick={() => router.push('/courses')}>
              <CustomButton
                title='Explore Courses'
                btnType='button'
                containerStyles='bg-secondary rounded-lg py-2 min-w-[130px] px-2'
                textStyles='text-dark text-body-1 font-medium z-index-90'
              />
            </Link >
            <Link href='/community' onClick={() => router.push('/community')}>
            <CustomButton
              title='Join Community'
              btnType='button'
              textStyles='text-dark'
              containerStyles='hidden bg-transparent rounded-lg py-1 min-w-[130px]'
            />
            </Link >
          </div>
        </div>
        

        <div className='flex relative lg:w-[480px] lg:h-[510px] h-[320px] rounded-xl'>
          <Image src='/avt.jpeg' alt='Hero Image'fill  />

       {/* <div className='flex relative lg:w-[480px] lg:h-[550px] h-[300px] rounded-xl'>
          <Image src='/heroImage.png' alt='Hero Image'fill  /> */}


        </div>
       {/** <div className='hidden lg:block absolute bottom-[10%] left-[-1px]'>
          <Image src='/arrowIcon.svg' alt='arrow' width={130} height={700} />
        </div>  */}
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
