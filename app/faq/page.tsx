import CustomButton from '@/components/CustomButton'
import { generalInfo, studentProfile } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | FAQs',
};

const page = () => {
  return (
    <div>
        <section className='bg-extra'>
            <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
                <h2 className='text-primary text-center text-headline-3 lg:text-headline-2'>Frequenly Asked Question</h2>
              
              <div className='flex justify-center gap-3 lg:gap-6 mt-9'>
                <Link href='/faq/ask-a-question'>
                    <CustomButton
                        title='Ask a Question'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                </Link>    
                    <CustomButton
                        title='Contact Us'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                </div>
            </div>    
          </section>
          <section>
            <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
              <h2 className='text center text-primary text-headline-3 text-center'>General Information</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-4'>
                {generalInfo.map(({ id, image, title, content }) => (
                    <div key={id} className=''>
                        <div className='mx-auto bg-white shadow-lg rounded-full w-[80px] p-5'>
                            <Image src={image} alt={title} width={60} height={60} />
                        </div>
                        <p className='font-bold text-center mt-2'>{title}</p>
                        <p className='lg:w-[517px] text-center mt-1'>{content}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
          <section className='bg-extra'>
            <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
              <h2 className='text center text-primary text-headline-3 text-center'>Student Profile</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-4'>
                {studentProfile.map(({ id, image, title, content }) => (
                    <div key={id} className=''>
                        <div className='mx-auto bg-extra shadow-lg rounded-full w-[80px] p-5'>
                            <Image src={image} alt={title} width={60} height={60} />
                        </div>
                        <p className='font-bold text-center mt-2'>{title}</p>
                        <p className='lg:w-[517px] text-center mt-1'>{content}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
    </div>
  )
}

export default page