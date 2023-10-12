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
      <section className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row lg:mb-3'>
        <div className='sm:px-16 px-6 lg:w-[70%]'>
          <div className='relative flex justify-center items-center'>
            <div className='lg:my-[10%] sm:my-[30%]'>
              <h3 className='text-headline-3 lg:text-headline-2 text-primary text-center lg:text-start mt-8 lg:mt-0'>Today's <span className='text-secondary'>learners</span> change the world, Crafting Tomorrow's <span className='text-secondary'>Innovation</span>  Today</h3>
              <p className='text-center lg:text-start mt-2'>We are positioned to provide user centric learning experiences with a defined curriculum backed with industry leading experts as instructors. </p>
              <div className='lg:absolute lg:top-[18%] lg:right-[85%]'>
               {/** <Image src='/lightIcon.svg' width={60} height={50} alt='light icon' /> **/}
              </div>
              <div className='hidden'>
                <CustomButton 
                title='Learn More'
                btnType='button'
                containerStyles='bg-secondary rounded-lg p-2 lg:mb-[10px] mt-6'
                textStyles='text-dark'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='relative lg:w-[50%] lg:m-1'>
          <Image src='/herolady.png' alt='course image' fill className='object-contain' />
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
