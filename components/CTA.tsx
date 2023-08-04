import { cta } from '@/constants'
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'


const CTA = () => {
  return (
    <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
        <h3 className='text-headline-3 text-center text-primary'>Break into tech like a pro, start your journey with us at bpurpleHQ</h3> 
        <div className='relative flex flex-col gap-7 lg:flex-row lg:gap-0 justify-around mt-5 p-5'>
          {cta.map(({id, title, content, image, buttonTitle,url}) => (
            <div className='border border-primary rounded-xl px-3 bg-white shadow-md'>
                <p className='font-semibold m-5'>{title}</p>
                <p className='lg:w-[412px] m-5'>{content}</p>
                <div className='flex justify-between mt-5'>
                
                      <CustomButton
                          title={buttonTitle}
                          containerStyles='bg-secondary px-[8px] py-[4px] h-[35px] rounded-lg m-5'
                          textStyles='text-dark font-medium'
                        
                      />
                     
                  <Image src={image} alt={title} width={80} height={80}  className=''/>  
                </div>        
            </div>
          ))}  
        </div>    
    </div>
  )
}

export default CTA