import CustomButton from '@/components/CustomButton';
import { workforceCard } from '@/constants';
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Community - Workforce',
};

const page = () => {
  return (
    <div>
        <section className='bg-extra'>
            <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between sm:px-16 px-6 lg:py-10 py-4'>
                <div className='mt-4 lg:mt-0'>
                    <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary lg:w-[422px]'>Prepare and <span className='text-secondary'>Empower</span> your labor force for the <span className='text-secondary'>future</span> of work.</h2>
                    <p className='lg:w-[569px] mt-3'>Need a team that works and wins together? Let bpurpleHQ help you make that team a dream come true with our well-trained curriculum and industry standard technologies to build the team of your dreams!</p>
                    
                    <div className='mt-5'>
                        <CustomButton 
                              title='Book a session'
                              containerStyles='bg-secondary p-2 rounded-xl'
                              btnType='button'
                              textStyles='text-dark'
                        />
                    </div>
                  </div>
                  <div className='lg:w-[]'>
                      <Image src='/workforceImage.png' alt='workforce image' width={450} height={450} />
                  </div>
            </div>
          </section>
          <section className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-4'>
              <h2 className='text-headline-3 text-primary text-center'>Transform your labor force</h2>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3'>
                  {workforceCard.map(({ id, title, content }) => (
                      <div key={id}>
                        <h4 className='font-semibold text-center'>{title}</h4>
                        <p className='text-center'>{content}</p>
                      </div>
                  ))}
              </div>
          </section>
    </div>
  )
}

export default page