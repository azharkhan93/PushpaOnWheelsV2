import React from 'react';

export const BookingSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 w-[100%]">
      <div className="w-[70%] bg-white shadow-md rounded-lg overflow-hidden flex items-center">
        {/* Image Section */}
        <div className="w-[500px] h-[500px]">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Booking Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Form Section */}
        <div className="w-1/2 p-8 border-3 bg-slate-600 rounded-l-3xl">
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


