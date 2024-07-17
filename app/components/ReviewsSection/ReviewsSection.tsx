/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { ReviewCard } from '../ReviewCard';

const reviews =[
  {
  imageSrc: "/images/ks.webp",
  clientName: "Regular Client",
  reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
},
{
  imageSrc: "/images/ks.webp",
  clientName: "Regular Client",
  reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
},
{
  imageSrc: "/images/ks.webp",
  clientName: "Regular Client",
  reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
]

export const ReviewsSection = () => {
  return (
    <div 
    id="Review"
    className='bg-black h-auto lg:h-[100vh] flex items-center justify-center  gap-4 flex-col '>
      
      
        <h2 className="text-4xl lg:text-5xl  text-white text-start mt-8">Client <span className='text-yellow-900'>Reviews</span></h2>
        <div className="w-[200px] h-1  bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
          <p className="text-lg text-white mb-6  w-[80%] lg:w-[50%] font-quicksand">Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.</p>

          <div className="flex items-center justify-center lg:flex-row gap-11 flex-col py-8">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imageSrc={review.imageSrc}
            clientName={review.clientName}
            reviewText={review.reviewText}
          />
        ))}
      </div>
  </div>
  );
};


