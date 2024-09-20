'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className=' h-[15vh] sticky top-0 z-30 w-full flex justify-between items-center  px-[20px] md:px-[100px] bg-[#030712] backdrop-blur-100'>
      <div className="text-3xl font-bold text-white">
        <Link href="/">
          {'<AA/>'}
        </Link>
      </div>

      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show FaBars when closed, FaTimes when open */}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-[20px]">
        {/* <Link href='/about' className='text-[18px] text-[#D1D5DB] font-mono font-semibold'>About</Link> */}
        <Link href='/projects' className='text-[18px] text-[#D1D5DB] font-mono font-semibold'>Projects</Link>
        <Link href='/contact' className='border-[#1F2937] text-[16px] border-r-[1px] pr-[10px] mr-[15px] text-[#D1D5DB] font-semibold'>Contact</Link>

        <div className="w-[136px] h-[36px] font-mono bg-[#F9FAFB] rounded-[10px] text-[#111827] justify-center items-center flex cursor-pointer text-[16px] font-medium">
          Download CV
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] right-0 w-full bg-[#030712] flex flex-col items-center gap-[20px] py-5 z-20">
          {/* <Link href='/about' className='text-[18px] text-[#D1D5DB] font-mono font-semibold' onClick={toggleMenu}>About</Link> */}
          <Link href='/projects' className='text-[18px] text-[#D1D5DB] font-mono font-semibold' onClick={toggleMenu}>Work</Link>
          <Link href='/contact' className='text-[18px] text-[#D1D5DB] font-mono font-semibold' onClick={toggleMenu}>Contact</Link>

          <div className="w-[136px] h-[36px] font-mono bg-[#F9FAFB] rounded-[10px] text-[#111827] justify-center items-center flex cursor-pointer text-[16px] font-medium">
            Download CV
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
