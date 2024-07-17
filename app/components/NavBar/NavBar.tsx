"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black flex items-center justify-between px-4">
      <div className="flex items-center" >
        <Image src="/images/push1.png" alt="Logo" width={100} height={50} />
      </div>

      <div className={`flex-grow text-center hidden lg:flex lg:justify-center lg:gap-4`}>
        <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Home
        </a>
        <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          About
        </a>
        <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Services
        </a>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`z-50 fixed top-0 left-0 h-[100vh] w-[100vw] bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-6`}
        
      >
        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none absolute top-4 right-4">
          <FaTimes size={28} />
        </button>
        <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
          Home
        </a>
        <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
          About
        </a>
        <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium" onClick={toggleMenu}>
          Services
        </a>
        <button
            className="bg-black hover:bg-gray-950 text-white py-2 px-11  rounded-r-3xl rounded-b-3xl border-2 border-white"
          
          >
            Explore it
          </button>
      </div>
      <button
            className="bg-black hover:bg-gray-950 text-white py-2 px-11  rounded-r-3xl rounded-b-3xl border-2 border-white"
          
          >
            Explore it
          </button>
    </nav>
  );
};


