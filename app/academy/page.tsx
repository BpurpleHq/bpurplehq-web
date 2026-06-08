import { CoursesOffered, Metrics } from '@/components'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'Bpurple Technology | Academy',
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
          </div>

          {/* Image Collage - Fixed: removed empty src, adjusted to 6 images for grid-cols-3 */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 grid grid-cols-3 gap-2">
            <img src="/frame444.jpeg?w=160" alt="Student 1" className="rounded-lg" />
            <img src="/testimonial2.png?w=160" alt="Student 2" className="rounded-lg" />
            <img src="/businessImageold.png?w=160" alt="Student 3" className="rounded-lg" />
            <img src="/workforceImage.png?w=80" alt="Student 4" className="rounded-lg" />
            <img src="/businessImagenew.png?w=160" alt="Student 5" className="rounded-lg" />
            <img src="/frame5.png?w=160" alt="Student 6" className="rounded-lg" />
            {/* Removed: empty src img */}
            <img src="/frame2.png?w=160" alt="Student 7" className="rounded-lg" />
            <img src="/frame1.png?w=160" alt="Student 8" className="rounded-lg" />
          </div>
          
        </div>
      </section>  
       <section>
        <Metrics />
      </section>
      <section>
        <CoursesOffered />
      </section>
      
     
    </main>
  )
}

export default page
