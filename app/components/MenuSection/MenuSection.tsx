/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MenuCard } from "../MenuCard";
import { foodItems } from "@/constants";


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





