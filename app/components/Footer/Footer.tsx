import Image from 'next/image';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 w-full flex items-center justify-center flex-col gap-8">
      <div className="mb-6 md:mb-0 w-[90%]">
        <Image src="/images/push1.png" alt="Logo" width={100} height={50} className="mx-auto" />
      </div>

      {/* Links and Information Section */}
      <div className="flex items-center flex-col lg:flex-row justify-between gap-8 w-full lg:w-[90%]" style={{ borderBottom: '1px solid white' }}>
      <div className="text-center flex-1 mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-4">About Company</h2>
          <p className="text-sm w-[100%] mb-4">We provide a variety of veg foods with a top-notch dining experience.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl text-white hover:text-gray-400" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-2xl text-white hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Menu</a></li>
            {/* <li className="mb-2"><a href="#" className="text-sm hover:underline">Booking</a></li> */}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-m mb-2 flex items-center justify-center">
            <MdEmail size={24} fill='green' className="mr-2 " /> contact@company.com
          </p>
          
          <p className="text-sm mb-2 flex items-center justify-center">
            <MdLocationOn size={24} fill='green' className="mr-2" /> 123 Veg Street, Food City
          </p>
          <p className="text-sm mb-2 flex items-center justify-center">
            <MdPhone size={24} fill='green' className="mr-2" /> +1 234 567 890
          </p>
        </div>
        

      </div>
      

      <div className="w-[90%] text-center mt-4">
        <p className="text-xl text-white">© PushpaOnWheels 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};



