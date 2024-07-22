/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { ReviewCard } from '../ReviewCard';
import { reviews } from '@/constants';




export const ReviewsSection = () => {
  return (
    <div 
    id="Review"
    className='bg-black h-auto lg:h-[100vh] flex items-center justify-center  gap-4 flex-col '>
      
      
      <h2 className="text-4xl lg:text-5xl text-white text-start mt-8 ">
        Client <span className='text-magenta' >Reviews</span>
      </h2>
        <div className="w-[200px] h-1  bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
          <p className="text-lg text-white mb-6  w-[80%] lg:w-[50%] font-quicksand capitalize"> See what our clients have to say about their experience at our restaurant.</p>

          <div className="flex items-center justify-center lg:flex-row gap-11 flex-col py-8 ">
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


