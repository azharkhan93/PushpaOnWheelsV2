"use client";


import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLinks } from "../NavLinks";
import { navLinks } from "@/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-black flex items-center justify-between px-4 top-0 fixed z-50 w-full" style={{ backgroundColor: "#FF00FF" }}>
      <div className="flex items-center">
        <Image src="/images/push1.png" alt="Logo" width={100} height={50} />
      </div>

      <div className="flex-grow text-center hidden lg:flex lg:justify-center lg:gap-4">
        {navLinks.map((link) => (
          link.label === "Booking" ? (
            <div key={link.href} className="relative">
              <span
                onClick={toggleDropdown}
                className="text-white hover:text-white px-3 py-2 rounded-md text-xl font-medium lg:text-xl lg:font-medium cursor-pointer"
              >
                {link.label}
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg">
                  <a href="#Booking" className="block px-4 py-2 text-center hover:bg-gray-700">
                    Book Table
                  </a>
                </div>
              )}
            </div>
          ) : (
            <NavLinks key={link.href} href={link.href}>
              {link.label}
            </NavLinks>
          )
        ))}
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none"
        >
          <MdOutlineRestaurantMenu size={isOpen ? 35 : 40} />
        </button>
      </div>

      <div
        className={`z-50 fixed top-0 left-0 h-[100vh] w-[100vw] bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-6`}
        style={{ backgroundColor: "#FF00FF" }}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-300 hover:text-white focus:outline-none absolute top-4 right-4"
        >
          <FaTimes size={28} />
        </button>
        {navLinks.map((link) => (
          link.label === "Booking" ? (
            <div key={link.href} className="relative">
              <span
                onClick={toggleDropdown}
                className="text-white hover:text-white px-3 py-2 rounded-md text-xl font-medium lg:text-xl lg:font-medium cursor-pointer"
              >
                {link.label}
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg">
                  <a href="#Booking" className="block px-4 py-2 text-center hover:bg-gray-700">
                    Book Table
                  </a>
                </div>
              )}
            </div>
          ) : (
            <NavLinks key={link.href} href={link.href} onClick={toggleMenu}>
              {link.label}
            </NavLinks>
          )
        ))}
      </div>

      {/* <button className="bg-black hover:bg-gray-950 text-white py-2 px-11 rounded-r-3xl rounded-b-3xl border-2 border-white lg:block hidden">
        Book Table
      </button> */}
    </nav>
  );
};

