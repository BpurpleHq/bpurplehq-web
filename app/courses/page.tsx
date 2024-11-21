import { CoursesOffered, Metrics } from '@/components'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import AOS from 'aos'
import React from 'react'


export const metadata = {
  title: 'bpurpleHQ | School of Tech - Courses',
};

const page = () => {
  return (
    <main className='relative w-full'>
    <section className='bg-extra' data-aos="fade-up">
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between sm:px-16 px-6 lg:py-10 py-4'>
          
           <div className='lg:w-[] m-10 rounded-2xl overflow-hidden'>
            <Image src='/frame222.png' alt='workforce image' width={600} height={450} />
          </div>



          <div className='mt-4 lg:mt-10'>
            <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary lg:w-[522px]'>Technology Training Solutions <span className='text-secondary'>Tailored </span> for Your Unique Need.</h2>

            <p className='lg:w-[560px] mt-3'> Stay ahead of the curve by investing in your tech team's growth. Our expert-led training programs, with over a decade of experience, equip your talent with cutting-edge skills to drive innovation and boost retention.</p>

          
          </div>
         
        </div>
      </section>
     
      <section>
        <CoursesOffered />
      </section>
    </main>
  )
}

export default page
