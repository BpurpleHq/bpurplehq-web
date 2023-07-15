import { CoursesOffered, Metrics } from '@/components'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'bpurpleHQ | Courses',
};

const page = () => {
  return (
    <main className='relative w-full'>
      <section className='sm:px-16 px-6 pt-4 lg:pt-[90px] pb-5 lg:pb-0'>
        <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center lg:gap-7 lg:pt-7'>
          <div className='relative lg:mt-6 bg-extra rounded-lg'>
            <div className='p-5'>
            <h3 className='max-w-[500px] text-headline-2 text-primary lg:mt-[50px]'>Todays <span className='text-secondary'>learners</span>  change the world</h3>
            <p className='lg:max-w-[500px] pt-4'>
            We are positioned to provide user centric learning experiences with a defined curriculum backed with industry leading experts as instructors.
            </p>

            <div className='hidden'>
              <CustomButton 
              title='Learn More'
              btnType='button'
              containerStyles='bg-secondary rounded-lg p-2 lg:mb-[10px] mt-6'
              textStyles='text-dark'
              />
            </div>
              <div className='absolute top-9 right-12'>
                <Image src='/lightIcon.svg' width={70} height={50} alt='light icon' />
              </div>
              </div>
          </div>
          <div className='relative lg:w-[750px] lg:h-[400px]'>
            <Image src='/courseImage.png' alt='course image' fill className='object-contain' />
          </div>
        </div>
      </section>
      <section className='bg-extra'>
        <Metrics />
      </section>
      <section>
        <CoursesOffered />
      </section>
    </main>
  )
}

export default page