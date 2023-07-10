import React from 'react';
import Link from 'next/link';
import CustomButton from './CustomButton';

const MenuAction = () => {''
  return (
    <div className='flex flex-col md:flex-col lg:flex-row gap-[.75rem]'>
     {/* <Link href='/signIn'>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='mt-3'
          textStyles='text-dark'
        /> 
      </Link> ***/}
      <Link href='https://bit.ly/bpurpletrainings'>  {/**changed the button name and url **/}
        <CustomButton
          title='Register'
          btnType='button'
          containerStyles='bg-secondary p-3 rounded-lg'
          textStyles='text-dark font-medium'
        />
      </Link>
    </div>
  )
}

export default MenuAction