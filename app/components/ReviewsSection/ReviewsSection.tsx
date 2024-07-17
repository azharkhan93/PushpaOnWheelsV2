/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export const ReviewsSection = () => {
  return (
    <div className='bg-black h-auto lg:h-[100vh] flex items-center justify-center  gap-4 flex-col '>
      
      
        <h2 className="text-4xl lg:text-5xl  text-white text-start mt-8">Client <span className='text-yellow-900'>Reviews</span></h2>
        <div className="w-[200px] h-1  bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
          <p className="text-lg text-white mb-6  w-[80%] lg:w-[50%] font-quicksand">Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.</p>
          
    <div className='flex items-center justify-center lg:flex-row gap-11 flex-col py-6'>
    <div className=" w-[334px] lg:w-[380px]  bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-center lg:items-start p-2">
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
          
          <blockquote className="text-center text-gray-600 italic ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    <div className="w-[334px] lg:w-[380px] bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-center lg:items-start p-2">
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
          
          <blockquote className="text-center text-gray-600 italic ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    <div className=" w-[334px] lg:w-[380px] bg-white shadow-red-950 rounded-b-3xl rounded-t-3xl rounded-l-lg overflow-hidden   ">
      <div className="flex flex-col items-center lg:items-start p-2">
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
          
          <blockquote className="text-center text-gray-600 italic ">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </blockquote>
        </div>
      </div>
    </div>
    </div>
    
    
    </div>
  );
};


