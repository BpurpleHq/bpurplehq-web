"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuAction from './MenuAction';
import MenuItems from './MenuItems';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(false);

  //   const changeColor = () => {
  //       if (window.scrollY >= 90 ) {
  //           setColor(true);
  //       } else {
  //           setColor(false);
  //       }
  //   }
  // window.addEventListener('scroll', changeColor);
  
  return (
      <div className='relative'>
          <div className={`${
            open ? "-translate-x-0" : "-translate-y-full"
          } absolute top-0 left-0 w-screen bg-white p-7 transition-all duration-300 ease-in-out filter z-10 lg:hidden`}
          >
            <div className="relatve text-center lg:hidden" onClick={() => setOpen(!open)}>
            <div className="absolute right-3">
              <HiOutlineXMark
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl"
              />
            </div>
            <div className='py-7'>
              <MenuItems />
            </div>  
              <MenuAction />
            </div>
          </div>

           {/* Other screen */}
        <div className='bg-primary bg-opacity-90 w-full flex justify-between items-center sm:px-16 px-3 py-4 z-20 '>
           <Link href='/'>
                <Image src='/logoWhite.svg' width={100} height={100} alt='Bpurple logo'
                />
            </Link> 
            <HiBars3BottomRight
              onClick={() => setOpen(!open)}
              className="lg:hidden text-3xl text-secondary"
            />
            <div className='hidden lg:flex'>
                <MenuItems />
            </div>
            <div className='hidden lg:flex'>
                <MenuAction />
            </div> 
        </div>
    </div>
  )
}

export default Navbar