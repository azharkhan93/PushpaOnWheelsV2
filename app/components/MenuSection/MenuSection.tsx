/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const MenuSection = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-xl font-semibold text-gray-800">Our Menu</h2>
      <p>jkdjfjjhfjhhjfjkhfhhjfhjjhfhhjfjhfjjhk</p>

      <div className="flex items-center justify-center bg-gray-100 py-6 gap-5 flex-wrap">
        <div className="shadow-lg overflow-hidden rounded-full flex justify-between gap-8 px-4 border-4 border-black">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>

        <div className="shadow-lg overflow-hidden rounded-full flex justify-between gap-8 px-4 border-2 border-black">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>

        <div className="shadow-md overflow-hidden rounded-full flex justify-between gap-8 px-4 border-2 border-black">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden rounded-full flex justify-between gap-8 px-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-2 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden rounded-full flex justify-between gap-8 px-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>

        <div className="bg-white shadow-md overflow-hidden rounded-full flex justify-between gap-8 px-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Menu Item Image"
              className="h-32 w-32 object-cover rounded-full border-4 border-gray-200"
            />
          </div>
          <div className="text-center flex items-center justify-center">
            <h2 className="text-xl font-semibold text-gray-800">Menu Item Name</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
