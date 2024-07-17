import React from 'react';
import Image from 'next/image';

export const BookingSection = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-800 py-6 w-[100%] gap-3">
        <h2 className=" text-4xl lg:text-5xl  text-white text-start mt-8">Book Your Table</h2>
        <div className="w-[200px] h-1  bg-gradient-to-r from-green-400 to-blue-500 rounded-md"></div>
          <p className="text-lg text-white mb-6  w-[80%] lg:w-[50%] font-quicksand">Fill out the form below to book a table at our restaurant. We offer a variety of vegetarian foods and a top-notch dining experience.</p>
      <div className=" w-[87%] lg:w-[80%] overflow-hidden flex items-center shadow-slate-950">
        
        <div className=" lg:w-[800px] h-[500px] relative shadow-slate-950 rounded-lg ">
          <Image
            src="/images/veg.jpg"
            alt="Booking Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md shadow-slate-950'
          />
        </div>
        {/* Form Section */}
        <div className="w-[650px] p-8 border-3 bg-slate-600 rounded-l-3xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Book Your Table</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
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
              <label htmlFor="email" className="block text-white">
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
              <label htmlFor="date" className="block text-white">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                style={{ width: '100%' }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-white">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                style={{ width: '100%' }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ width: '100%' }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-white rounded-r-3xl rounded-b-3xl border-2 border-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



