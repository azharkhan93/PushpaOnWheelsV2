/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MenuCard } from "../MenuCard";

const foodItems = [
  { image: '/images/cheese.jpg', title: 'Paneer Momos', price: 18, rating: 5.0 },
  { image: '/images/momo2.jpg', title: 'Vegetable Momos', price: 12, rating: 3.8 },
  { image: '/images/peri.webp', title: 'Peri Peri Momo', price: 24, rating: 4.9 },
  { image: '/images/noodles.jpg', title: 'Malai Paneer Momos', price: 24, rating: 4.9 },
  { image: '/images/fried.jpg', title: 'Fried Momos', price: 24, rating: 4.9 },
  { image: '/images/noodles.jpg', title: 'Vegetable Noodles', price: 36, rating: 5.0 },
  { image: '/images/nod.jpg', title: 'Haka Noodles', price: 16, rating: 4.8 },
  { image: '/images/mach.jpg', title: 'Manchurian', price: 16, rating: 4.8 },
  { image: '/images/cheese.jpg', title: 'Mushroom Chilli', price: 16, rating: 4.8 },
  { image: '/images/fried.jpg', title: 'Fried Rice', price: 16, rating: 4.8 },
  { image: '/images/cheese.jpg', title: 'Mushroom Chilli', price: 16, rating: 4.8 },
  { image: '/images/noodles.jpg', title: 'Garlic Noodles ', price: 16, rating: 4.8 },
  
];
export const MenuSection = () => {
  return (
    <>
    <div className="flex items-center justify-center flex-col py-20 bg-black gap-6 ">
    <h2 className=" text-4xl lg:text-5xl font-semibold text-white text-start">Our <span className="text-yellow-900">Menu</span></h2>
        <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
        <p className="text-lg text-white mb-6  lg:w-[50%] w-[80%]">
          Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.
        </p>
        <div className="flex items-center justify-center flex-wrap flex-row  bg-black gap-6">
      {foodItems.map((item, index) => (
        <MenuCard
          key={index}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
        />
      ))}
      </div>
    </div>
      
    </>
  );
};





