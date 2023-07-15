import CustomButton from '@/components/CustomButton'
import { communityLink } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Community',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between'>
          <Image src='/comHeroImage.png' alt='community banner' width={700} height={309} />
          <div>
            <h2 className='text-primary text-headline-3 text-center lg:text-end lg:text-headline-2 mt-5 lg:mt-0'>We Are Community Driven and Career Focused</h2>
            <p className='text-headline-4 lg:text-headline-3 text-center lg:text-end text-primary mt-2'>Why learn alone when you can learn and grow with a family.</p>
          </div>
        </div>
      </section>
      <section className='w-full sm:px-16 px-6 py-4'>
        <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between'>
          <div className='flex flex-col lg:flex-row gap-5'>
            <Image src='/comImage1.png' alt='community image1' width={340} height={309} />
            <Image src='/comImage2.png' alt='community image1' width={340} height={309} />
          </div>
          <div className='flex flex-col lg:justify-center lg:items-center'>
            <p className='lg:w-[450px] mt-3 lg:mt-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis soluta aliquid temporibus? Debitis, accusantium! Expedita cum eveniet, aspernatur esse magni, culpa dolor dolores animi temporibus ipsam adipisci ipsum libero.</p>

            <CustomButton
            title='Join Community'
            containerStyles='bg-secondary mt-4 p-3 rounded-lg'
          />
          </div>
        </div>
      </section>
      {/* <section className='sm:px-16 px-6 py-5'>
        <h2 className='text-headline-3 lg:text-headline-2 text-primary'>Our Gallery</h2>
        <div>

        </div>
      </section> */}
      <section className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-4'>
        <div className='flex justify-center items-center gap-7'>
          {communityLink.map(({ id, title, content, url }) => (
            <div className='lg:w-[512px] border border-primary px-4 py-5 rounded-lg'>
              <h2 className='text-headline-3 text-center text-primary'>{title}</h2>
              <p className='text-center'>{content}</p>
              <div className='flex justify-center items-center'>
                <Link href={url}>
                  <CustomButton
                    title='Explore'
                    containerStyles='bg-secondary p-2 rounded-lg mt-2'
                    textStyles='text-dark'
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page