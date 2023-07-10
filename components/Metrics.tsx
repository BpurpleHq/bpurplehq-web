import { metrics } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Metrics = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-9 lg:gap-0 lg:flex-row lg:justify-between sm:px-16 px-6 py-10'>
      {metrics.map(({id, figure, title, image}) => (
        <div key={id} className='text-primary flex gap-4'>
            <div>
                  <Image src={image} alt={title} width={80} height={80} />
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