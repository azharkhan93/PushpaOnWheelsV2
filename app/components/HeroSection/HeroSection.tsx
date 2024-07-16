/* eslint-disable @next/next/no-img-element */

import React from 'react';

export const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-center h-[100vh] w-[100%] bg-gray-800"
      style={{
        backgroundImage: "url('/images/ks4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-center justify-between w-[95%] flex-col md:flex-row">
        <div
          className="p-4 rounded-lg shadow-md text-white flex items-start flex-col gap-5 w-[700px]"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <h1 className="text-6xl font-bold mb-4">An Mbatience Dining Experience</h1>
          <p className="text-2xl text-white w-[540px] leading-[2.5rem]">
            Join us at the top of our restaurant where we provide a variety of veg foods for your enjoyment.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-11 rounded-l-lg rounded-r-lg rounded-b-2xl"
            style={{ border: '1px solid white' }}
          >
            Explore it
          </button>
        </div>

        <div className="border-red-300 rounded-lg shadow-md text-white">
          <div className="relative flex items-center justify-between flex-row">
            <img
              src="/images/veg.jpg"
              alt="Big Image"
              className="rounded-t-3xl rounded-br-2xl w-[400px] h-[490px] mt-8"
            />
            <img
              src="/images/veg.jpg"
              alt="Small Image 1"
              className="rounded-t-3xl rounded-b-2xl absolute left-0 bottom-0 h-[200px] w-auto ml-[-80px]"
            />
            <img
              src="/images/veg.jpg"
              alt="Small Image 2"
              className="absolute top-0 right-0 h-[120px] w-auto rounded-b-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
