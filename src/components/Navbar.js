"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`grid place-items-center  transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 w-full bg-white z-50' : ''
      }`}
    >
        <div className='flex gap-5 items-center justify-center py-3 text-white bg-gray-900 w-full' >
            <img src="/cloud.png" className='md:w-8 w-5 '  />
            <p className='font-semibold text-sm md:text-lg' >Google Cloud Study Jam 2024-25 </p>
        </div>
      <nav className='p-5 ' >
        <Image
          className='h-14 md:h-20 md:w-96 w-60'
          src='/logo.png'
          width={500}
          height={200}
          alt='Logo'
        />
      </nav>
    </header>
  );
};

export default Navbar;
