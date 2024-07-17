/* eslint-disable @next/next/no-img-element */

import React from 'react';

export const HeroSection = () => {
  return (
    <div
    id="Home"
      className=  "  flex items-center justify-center lg:h-[100vh] w-[100%] mt-20 lg:mt-11 px-2 " 
      style={{
        backgroundImage: "url('/images/ks4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-center justify-between  flex-col lg:flex-row  gap-3 lg:gap-32 mb-6">
        <div
          className="p-4 rounded-lg shadow-md text-white flex items-start flex-col gap-5 lg:w-[700px] w-[100%] mt-16 lg:mt-0"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <h1 className=" text-3xl lg:text-6xl font-bold lg:mb-4 ">An Ambatience Dining Experience</h1>
          <p className=" text-l lg:text-2xl text-white w-full lg:w-[540px] lg:leading-[2.5rem]">
            Join us at the top of our restaurant where we provide a variety of veg foods for your enjoyment.
          </p>
          <button
            className="bg-black hover:bg-gray-950 text-white py-2 px-11  rounded-r-3xl rounded-b-3xl border-2 border-white"
          
          >
            Explore Now
          </button>
        </div>

        <div className=" rounded-lg shadow-md text-white">
          <div className="relative flex items-center justify-between flex-row">
            <img
              src="/images/veg.jpg"
              alt="Big Image"
              className="rounded-t-3xl rounded-br-2xl lg:w-[400px] lg:h-[490px] "
            />
            <img
              src="/images/momos.jpg"
              alt="Small Image 1"
              className="rounded-t-3xl rounded-b-2xl absolute left-0 bottom-0 lg:h-[200px] w-auto lg:ml-[-80px] lg:block hidden"
            />
            <img
              src="/images/cheese.jpg"
              alt="Small Image 2"
              className="absolute top-0 right-0 lg:h-[120px] w-auto rounded-b-3xl lg:block hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
