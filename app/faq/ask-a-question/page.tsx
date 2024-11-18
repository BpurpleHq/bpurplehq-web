import CustomButton from '@/components/CustomButton';
import { questions } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | FAQs - Ask a Question',
};

const page = () => {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
        <h2 className='text-primary text-headline-3 lg:text-headline-2 text-center'>We're here to help</h2>
        <p className='text-center lg:font-semibold mt-2'>Visit our FAQ page to find answers, shoot us an email, send us a WhatsApp message, or visit one of our physical locations.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
          {questions.map(({ id, image, title, content }) => (
            <div key={id} className='border border-primary rounded-lg py-5 hover:bg-extra'>
              <div className='flex justify-center items-center'>
                <Image src={image} alt={title} width={50} height={50} />
              </div>
              <p className='font-semibold text-center'>{title}</p>
              <p className='text-center lg:w-[319px] mx-auto mt-2'>{content}</p>
            </div>
          ))}
        </div>
        {/** <div className='flex justify-center items-center'>
          <Link href='/courses'>
            <CustomButton
              title='Browse Course'
              containerStyles='bg-secondary p-3 rounded-lg mt-7'
              textStyles='text-dark'
            />
          </Link>
        </div> **/}
      </div>
    </div>
  )
}

export default page