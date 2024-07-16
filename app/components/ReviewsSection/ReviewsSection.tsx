/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';

export const ReviewsSection = () => {
  return (
    <div className="bg-gray-100 py-10 flex items-center justify-center">
      <div className="border-4 border-blue-900">
        {/* Review Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 px-11">
          {/* Review Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-[200px] w-[400px]">
            {/* Image */}
            <div className="   relative">
              <Image
                src="/images/ks.webp"
                alt="Client Image"
                width={100}
                height={100}
                className="rounded-full  w-[150px]  "
              />
            </div>
            <div className="flex mb-4">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
            </div>
            {/* Review Text */}
            <blockquote className="italic text-gray-600 text-center">
              <p>{"The food was amazing and the service was exceptional. Highly recommend!"}</p>
            </blockquote>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start  border-4 border-gray-95 ">
           
             
           
            <div className="flex items-centr justify-center  
            border-4 border-gray-950">

<img
              src="/images/ks.webp"
              alt="Client Image"
              className="rounded-full mb-4 h-20 w-20"
            />
           
           <div className="flex items-centr justify-center  
            border-4 border-gray-950">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
            </div>
            </div>
            {/* Review Text */}
            <blockquote className="italic text-gray-600 text-center">
              <p>{"Absolutely loved the ambiance and the food quality. Will visit again!"}</p>
            </blockquote>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            {/* Image */}
            <img
              src="https://via.placeholder.com/100"
              alt="Client Image"
              className="rounded-full mb-4"
            />
            {/* Stars */}
            <div className="flex mb-4">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.12-6.545L.485 6.91l6.556-.955L10 0l2.959 5.955 6.556.955-4.757 4.635 1.12 6.545z" />
              </svg>
            </div>
            
            <blockquote className="italic text-gray-600 text-center">
            
              <p>"Absolutely loved the ambiance and the food quality. Will visit again!"</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};


