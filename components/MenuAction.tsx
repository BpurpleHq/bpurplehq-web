import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';

const MenuAction = () => {''
  return (
    <div className='flex flex-col md:flex-col lg:flex-row gap-[.75rem]'>
     {/**  <Link href='/signIn'>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='mt-3'
          textStyles='text-dark'
        /> 
      </Link> **/}
     <Link href='https://forms.zohopublic.com/adminbpur1/form/EventRegistration/formperma/ESSiUnpCMVKFJxdZGBPpARTvLi1ku3G9TcRdVn8K7MI'>  
        <CustomButton
          title='Bootcamp Sign-Up'
          btnType='button'
          containerStyles='bg-secondary p-3 rounded-lg pr-5 pl-5'
          textStyles='text-dark font-medium'
        />
      </Link> 
    </div>
  )
}

export default MenuAction