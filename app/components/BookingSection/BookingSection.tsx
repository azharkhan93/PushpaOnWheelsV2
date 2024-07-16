import React from 'react';
import Image from 'next/image';

export const BookingSection = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-800 py-6 w-[100%] gap-11">
        <div className="flex items-start justify-center flex-col gap-11 ">
          <h2 className="text-5xl font-semibold text-gray-800">
            Our
            <span className="text-red-500 border-b-2 border-black"> Menu</span>
          </h2>
          <p className="text-2xl w-[900px]  border-2 border-red-500 overflow-hidden ">
            jkdjfjjhfjhhjfjkhfhhjfhjjhfhhjfjhfjjhkbjhjhhfjhfjhjhkdfjhkfkjhfjhhfhjhjkjkjfjhdfjkjdjfhjhj
            hjhjkjkjfjhdfjkjdjfhjhjhjkkhjjhfjhkjfhfjhjh
          </p>
        </div>
        
      <div className="w-[80%]    overflow-hidden flex items-center shadow-slate-950">
        
      <div className="w-[800px] h-[500px] relative shadow-slate-950 rounded-lg ">
          <Image
            src="/images/veg.jpg"
            alt="Booking Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md shadow-slate-950 '
          />
        </div>
        {/* Form Section */}
        <div className="w-[650px] p-8 border-3 bg-slate-600 rounded-l-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Table</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


