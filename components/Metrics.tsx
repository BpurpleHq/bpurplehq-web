import { metrics } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Metrics = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-9 md:gap-4 lg:gap-0 md:flex-row md:justify-between sm:px-16 px-6 py-10'>
      {metrics.map(({id, figure, title, image}) => (
        <div key={id} className='max-w-[1440px] text-primary flex gap-4 mx-auto'>
            <div>
                  <Image src={image} alt={title} width={60} height={60} />
              </div>
              <div>
                <p className='text-headline-2'>{figure}</p>
                <p className='text-body-1 font-semibold'>{title}</p>  
              </div>
        </div>
      ))}  
    </div>
  )
}

export default Metrics