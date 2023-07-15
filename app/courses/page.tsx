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
      <section className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row'>
        <div className=' bg-extra sm:px-16 px-6 lg:w-[50%]'>
          <div className='relative flex justify-center items-center'>
            <div className=' lg:my-[36%]'>
              <h3 className='text-headline-3 lg:text-headline-2 text-primary text-center lg:text-start mt-3 lg:mt-0'>Todays learners change the world</h3>
              <p className='text-center lg:text-start mt-2'>Lorem ipsum dolor sit amet consectetur. Integer augue risus pharetra nisl. Eu proin posuere nunc metus semper id consequat. </p>
              <div className='lg:absolute lg:top-[22%] lg:right-[25%]'>
                <Image src='/lightIcon.svg' width={70} height={50} alt='light icon' />
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
        <div className='relative lg:w-[50%]'>
          <Image src='/courseImage.png' alt='course image' width={512} height={500} />
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