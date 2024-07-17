/* eslint-disable @next/next/no-img-element */

export const AboutSection = () => {
    return (
      <div
      id="About" 
      className="flex items-center justify-center py-24 w-[100%] bg-gray-800">
        <div className="flex items-center justify-between w-[95%] flex-col-reverse md:flex-row gap-8">
          <div className="border-red-300 rounded-lg  text-white">
            <div className="relative flex items-start justify-center  flex-wrap gap-4">
              {/* Smaller Images */}
              <img src="/images/veg.jpg" alt="Small Image 1" className="rounded-t-2xl rounded-bl-2xl w-[200px] h-[250px] lg:block hidden" />
              <img src="/images/veg.jpg" alt="Small Image 3" className="rounded-b-3xl rounded-tl-2xl w-[200px] h-[260px] lg:block hidden" />
              <img src="/images/veg.jpg" alt="Small Image 4" className="rounded-b-2xl rounded-tr-2xl w-[400px] h-[300px]" />
            </div>
          </div>
          <div className="p-4 rounded-lg text-white flex items-start flex-col w-full gap-5 lg:w-[700px]">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-white text-start">About Us</h2>
          <div className="w-[200px] h-1  bg-gradient-to-r from-green-400 to-blue-500 rounded-md lg:ml-24"></div>
            <h1 className="text-3xl  lg:text-4xl font-bold lg:mb-4">An Ambience Dining Experience</h1>
            <p className=" w-full text-l lg:text-xl text-white lg:w-[540px] lg:leading-[2.5rem]">
              Join us at the top of our restaurant, we provide a variety of veg foods for your delight.Join us at the top of our restaurant, we provide a variety of veg foods for your delight.
              Join us at the top of our restaurant, we provide a variety of veg foods for your delight.
              Join us at the top of our restaurant, we provide a variety of veg foods for your delight.
            </p>
            <button
            className="bg-black hover:bg-gray-950 text-white py-2 px-11  rounded-r-3xl rounded-b-3xl border-2 border-white"
          
          >
            Explore it
          </button>
          </div>
        </div>
      </div>
    );
  };