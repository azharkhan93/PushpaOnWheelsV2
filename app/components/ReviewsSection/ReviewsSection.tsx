/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export const ReviewsSection = () => {
  return (
    <div className='bg-black h-[100vh] flex items-center justify-center gap-11'>
    
    <div className="w-[380px]  bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-start p-2">
        <div className="  w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/images/ks.webp"
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
        <div className="flex flex-col items-center mt-4 " >
          
          <blockquote className="text-center text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    <div className="w-[380px]  bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-start p-2">
        <div className="  w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/images/ks.webp"
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
        <div className="flex flex-col items-center mt-4 " >
          
          <blockquote className="text-center text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    <div className="w-[380px]  bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-start p-2">
        <div className="  w-20 h-20 rounded-full overflow-hidden border-2 border-white">
          <img
            src="/images/ks.webp"
            alt="Client"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
        <div className="flex flex-col items-center mt-4 " >
          
          <blockquote className="text-center text-gray-600">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    
    
    </div>
  );
};


