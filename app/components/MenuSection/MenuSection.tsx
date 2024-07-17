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
      {/* <div
      id="Menu"
       className="flex items-center justify-center flex-col py-20 bg-black gap-6">
        <h2 className="text-5xl font-semibold text-white text-start">Our <span className="text-yellow-900">Menu</span></h2>
        <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
        <p className="text-lg text-white mb-6  lg:w-[50%] w-[80%]">
          Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.
        </p>

        <div className="flex items-center justify-center py-6 gap-5 flex-wrap lg:mt-8 mt-2">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-red-950 shadow-lg overflow-hidden rounded-b-3xl rounded-t-3xl rounded-r-3xl  shadow-emerald-950 flex flex-row items-center gap-4 px-2 py-2 border-2 border-green  w-[310px] ">
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="lg:h-[100px] h-[70px] lg:w-[80px]  w-[70px] object-cover rounded-full border-2 border-gray-200"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center truncate w-full border-b-2 border-black">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};





