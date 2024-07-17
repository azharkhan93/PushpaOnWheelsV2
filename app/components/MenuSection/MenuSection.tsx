/* eslint-disable @next/next/no-img-element */
import React from "react";


const menuItems = [
    { name: "Paneer Momos", image: "/images/momos.jpg" },
    { name: "Vegetable Momos", image: "/images/momo2.jpg" },
    { name: "Peri Peri Momos", image: "/images/peri.webp" },
    { name: "Malai Paneer Momos", image: "/images/momos.jpg" },
    { name: "Vegetable Noodles", image: "/images/noodles.jpg" },
    { name: "Haka Noodles", image: "/images/haka.jpg" },
    { name: "Garlic Noodles", image: "/images/noodles.jpg" },
    { name: "Cheese Chilli", image: "/images/cheese.jpg" },
    { name: "Manchurian", image: "/images/mach.jpg" },
    { name: "Mushroom Chilli", image: "/images/cheese.jpg" },
    { name: "Fried Rice", image: "/images/rd.jpg" },
    { name: "Fried Momos", image: "/images/fried.jpg" },
  ];
export const MenuSection = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col py-20 bg-black gap-6">
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
      </div>
    </>
  );
};





