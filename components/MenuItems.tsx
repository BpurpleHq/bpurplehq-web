import React from 'react';
import Link from 'next/link';
import { menuLinks } from '@/constants';

const MenuItems = () => {
  return (
    <nav>
        <ul className='flex flex-col gap-3 md:flex md:flex-col lg:flex lg:flex-row lg:gap-[1.3rem]'>
              {menuLinks.map(({ title, id, url }) => (
                <li key={id}>
                    <Link href={url}>
                          <p className='text-dark lg:text-white font-mediun'>{ title }</p>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default MenuItems