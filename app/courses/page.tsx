import { CoursesOffered, Metrics } from '@/components'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css';
import React from 'react'




export const metadata = {
  title: 'bpurpleHQ | Academy ',
};

const page = () => {
  return (
    <main className='relative w-full'>
    <section className="bg-gray-50 pt-10 pb-6" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      
        {/* Text Content */}
        <div className="lg:w-1/2 m-2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Bpurple Academy - Securing Tomorrow, Today.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay ahead of the curve by investing in your team's growth. Our expert-led training programs, with over a decade of experience, equip your talent with cutting-edge skills to drive innovation and boost productivity while promoting retention.
          </p>
          {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            View Courses
          </button>*/}
        </div>
        {/* Image Collage */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-3 gap-2">
          {/* Placeholder images */}
          <img src="/frame444.jpeg?w=160" alt="" className="rounded-lg" />
          <img src="/testimonial2.png?w=160" alt="" className="rounded-lg" />
          <img src="/businessImageold.png?w=160" alt="Student 3" className="rounded-lg" />
          <img src="/workforceImage.png?w=80" alt="5" className="rounded-lg" />
          <img src="/businessImagenew.png?w=160" alt="" className="rounded-lg" />
          <img src="/frame5.png?w=160" alt="" className="rounded-lg" />
          <img src="" alt="" className="rounded-lg" />
          <img src="/frame2.png?w=160" alt="Student 8" className="rounded-lg" />
          <img src="/frame1.png?w=160" alt="Student 9" className="rounded-lg" />
        </div>
        
      </div>
    </section>
    
    <section className='bg-extra' data-aos="fade-up">
        <Metrics />
    </section>

   {/* <section className='bg-extra' data-aos="fade-up">
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between sm:px-16 px-6 lg:py-10 py-4'>
          
           <div className='lg:w-[] m-10 rounded-2xl overflow-hidden'>
            <Image src='/frame222.png' alt='workforce image' width={600} height={450} />
          </div>



          <div className='mt-4 lg:mt-10'>
            <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary lg:w-[522px]'>Technology Training Solutions <span className='text-secondary'>Tailored </span> for Your Unique Need.</h2>

            <p className='lg:w-[560px] mt-3'> Stay ahead of the curve by investing in your tech team's growth. Our expert-led training programs, with over a decade of experience, equip your talent with cutting-edge skills to drive innovation and boost retention.</p>

          
          </div>
         
        </div>
      </section> */}
     
      <section>
        <CoursesOffered />
      </section>
    </main>
  )
}

export default page
