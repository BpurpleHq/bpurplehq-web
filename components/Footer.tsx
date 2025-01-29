import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='max-w-[1440px] mx-auto flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <Link href='/' className=''>
          <Image src='/logoWhite.svg' alt='logo' width={150} height={150} />
        </Link>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex justify-center items-center lg:justify-start lg:items-start flex-col gap-4 lg:gap-4 text-base min-w-[190px]'>
              <h3 className='text-headline-4 text-white'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-white text-body-2'>
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='sm:px-16 px-6 py-5 text-white'>
        <div className='w-full border-t border-secondary flex flex-col justify-center items-center'>
          <div className='flex gap-4 my-4'>
          {/** <Link href='/'> <Image src='/facebook.svg' alt='facebook logo' width={30} height={30} /> </Link> */} 
          <Link href='/'> <Image src='/instagram.svg' alt='instagram logo' width={30} height={30} />  </Link>  
         {/** <Link href='/'> <Image src='/youtube.svg' alt='youtube logo' width={30} height={30} /> </Link>  */} 
          <Link href='/'> <Image src='/twitter.svg' alt='twitter logo' width={30} height={30} /> </Link>
          </div>
            <div>
            <p className='text-body-2 text-center'>&copy; 2025 Bpurple Technology All Rights Reserved, with 💜 from bpurpleHQ.</p>
            <div className='flex justify-center items-center gap-[8px] mt-1 text-body-2'>
              <Link href='/'>
               <p>Privacy Policy</p> 
              </Link>|  
              <Link href='/'>
               <p> Terms of Use</p> 
              </Link>|   
              <Link href='/'>
               <p> Cookie Policy</p> 
              </Link>  
            </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer