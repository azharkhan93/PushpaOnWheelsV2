import Image from "next/image";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-magenta text-white py-10 w-full flex items-center justify-center flex-col gap-8">
      <div className="mb-6 md:mb-0 w-[90%]">
        <Image
          src="/images/push1.png"
          alt="Logo"
          width={100}
          height={50}
          className="mx-auto"
        />
      </div>

      <hr className="w-full  bg-white" />

      <div className="flex items-center flex-col lg:flex-row justify-between gap-8 w-full lg:w-[90%]">
        <div className="text-center flex-1 space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            About Company
          </h2>
          <p className="text-l w-[100%] mb-4 text-l capitalize">
            We provide a variety of veg foods with a top-notch dining
            experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl text-white hover:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="text-center flex-1 space-y-4 ">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 ">
            Navigation
          </h2>
          <ul>
            <li className="mb-2 text-l">
              <a href="#Home" className="text-l hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2 text-l">
              <a href="#About" className="text-l hover:underline">
                About
              </a>
            </li>
            <li className="mb-2 text-l">
              <a href="#Menu" className="text-l hover:underline">
                Menu
              </a>
            </li>
            <li className="mb-2 text-l">
              <a href="#Booking" className="text-l  hover:underline">
                Booking
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center flex flex-col flex-1 space-y-4 items-center justify-center">
          <h2 className=" text-2xl lg:text-3xl font-semibold mb-4">
            Contact Us
          </h2>
          <a
            href="mailto:pushpavegonwheels@gmail.com"
            className="text-l mb-2 flex items-center justify-center gap-4"
          >
            <MdEmail size={28} fill="white" /> pushpavegonwheels@gmail.com
          </a>

          <p className="text-l mb-2 flex items-center  justify-center  gap-4">
            <MdLocationOn size={28} fill="white" /> 123 Veg Street, Food City
            gghh
          </p>
          <a
            href="tel:+912345678901"
            className="text-l mb-2 flex items-center justify-center gap-4"
          >
            <MdPhone size={28} fill="white" /> +91 234 567 8901
          </a>
        </div>
      </div>

      <hr className="w-full  bg-white" />

      <div className="w-[90%] text-center mt-4">
        <p className=" text-l lg:text-xl text-white ">
          © PushpaOnWheels 2024. All Rights Rserved.
        </p>
      </div>
    </footer>
  );
};
