"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect} from 'react';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuAction from './MenuAction';
import MenuItems from './MenuItems';




const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => window.removeEventListener('scroll', changeColor);
    }, []);

    return (
        <div className='sticky top-0 w-full z-20'>
            <div className={`${
                open ? "-translate-x-0" : "-translate-y-full"
            } absolute top-0 left-0 w-screen bg-white p-7 transition-all duration-300 ease-in-out filter z-10 lg:hidden`}>
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
                    {/*<MenuAction />*/}
                </div>
            </div>

            <div className={`bg-black w-full flex justify-between items-center sm:px-16 px-3 py-4 ${color ? 'shadow-lg' : ''}`}>
                <Link href='/'>
                    <Image src='/newlogo.png' width={120} height={120} alt='Bpurple logo' />
                </Link>
                <HiBars3BottomRight
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-3xl text-secondary"
                />
                <div className='hidden lg:flex'>
                    <MenuItems />
                </div>
                <div className='hidden lg:flex'></div>
            </div>
        </div>
    );
}

export default Navbar;