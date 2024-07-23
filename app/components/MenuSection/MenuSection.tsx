"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { MenuCard } from "../MenuCard";
import { foodItems } from "@/constants";
import { CategoryFilter } from "../CategoryFilter";

export const MenuSection = () => {
  const[filterItems, setFilteredItems] = useState(foodItems)

  const handleProductsChange = (category: string) => {
    
      setFilteredItems(
        category === "All" ? foodItems : foodItems.filter(item => item.category === category)
      );
    
  }
 

  return (
    <>
      <div id= "Menu" 
      className="flex items-center justify-center flex-col py-20 bg-black gap-6 ">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-white text-start reveal reveal-from-left">
          Explore Our <span className="text-magenta" >Menu</span>
        </h2>
        <div className="w-[200px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-md "></div>
        <p className="text-lg text-white mb-6  lg:w-[50%] w-[80%] capitalize reveal reveal-from-left">
          Discover our exclusive <span className="text-magenta capitalize"> exclusive Menu</span>{" "}
          and enjoy a top-notch dining experience. We offer a variety of
          vegetarian foods
        </p>
        <CategoryFilter onFilterChange={handleProductsChange} />
        <div className="flex items-center justify-center flex-wrap flex-row   gap-6  " >
          {filterItems.map((item, index) => (
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
