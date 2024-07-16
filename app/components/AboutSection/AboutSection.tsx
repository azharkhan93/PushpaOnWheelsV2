/* eslint-disable @next/next/no-img-element */

export const AboutSection = () => {
    return (
      <div className="flex items-center justify-center py-24 w-[100%] bg-gray-800">
        <div className="flex items-center justify-between w-[95%] flex-col md:flex-row gap-8">
          <div className="border-red-300 rounded-lg shadow-md text-white">
            <div className="relative flex items-start justify-center flex-wrap gap-4">
              {/* Smaller Images */}
              <img src="../../assets/veg.jpg" alt="Small Image 1" className="rounded-t-2xl rounded-bl-2xl w-[200px] h-[250px]" />
              <img src="../../assets/veg.jpg" alt="Small Image 3" className="rounded-b-3xl rounded-tl-2xl w-[200px] h-[260px]" />
              <img src="../../assets/veg.jpg" alt="Small Image 4" className="rounded-b-2xl rounded-tr-2xl w-[400px] h-[300px]" />
            </div>
          </div>
          <div className="p-4 rounded-lg text-white flex items-start flex-col gap-5 w-[700px]">
            <h1 className="text-6xl font-bold mb-4">An Ambience Dining Experience</h1>
            <p className="text-2xl text-white w-[540px] leading-[2.5rem]">
              Join us at the top of our restaurant, we provide a variety of veg foods for your delight.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-11 rounded-l-lg rounded-r-lg rounded-b-2xl"
              style={{ border: '1px solid white' }}
            >
              Explore it
            </button>
          </div>
        </div>
      </div>
    );
  };