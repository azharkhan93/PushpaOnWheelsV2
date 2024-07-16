import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 w-full flex items-center justify-center flex-col gap-8">
      <div className="mb-6 md:mb-0 w-[90%]">
        <Image src="/images/push1.png" alt="Logo" width={100} height={50} className="mx-auto" />
      </div>

      {/* Links and Information Section */}
      <div className="flex items-center flex-col lg:flex-row justify-between gap-8 w-full lg:w-[90%]" style={{ borderBottom: '1px solid white' }}>
        {/* About Company */}
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold mb-4">About Company</h2>
          <p className="text-sm w-[100%]">We provide a variety of veg foods with a top-notch dining experience.</p>
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
          
          <p className="text-sm mb-2">Email: contact@company.com</p>
          <p className="text-sm mb-2">Address: 123 Veg Street, Food City</p>
          <p className="text-sm mb-2">Phone: +1 234 567 890</p>
        </div>
        

      </div>
      

      <div className="w-[90%] text-center mt-4">
        <p className="text-xl text-white">© PushpaOnWheels 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};



