import { courseDetails } from '@/constants'
import Image from 'next/image'
import React from 'react'

const CourseInfo = () => {
  return (
    <div className='grid grid-cols-2 gap-9 md:gap-4 lg:gap-0 md:grid-cols-4 sm:px-16 px-6 py-10'>
      {courseDetails.map(({id, content, title, image}) => (
        <div key={id} className='max-w-[1440px] text-primary mx-auto'>
            <div>
                <Image src={image} alt={title} width={50} height={50} />
                <p className='mt-3'>{title}</p>
                <p className='font-semibold'>{content}</p>  
              </div>
        </div>
      ))}  
    </div>
  )
}

export default CourseInfo