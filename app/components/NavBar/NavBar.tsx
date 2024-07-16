import Image from 'next/image';
export const Navbar = () => {
    return (
      <nav className="bg-black flex items-center justify-between px-8">
        <div className="flex items-center" style={{ border: '1px solid green' }}>
        <Image src="/images/push1.png" alt="Logo" width={100} height={50}
         />
          {/* <img src="../../assets/push1.png" alt="Logo" className="h-[90px]" /> */}
        </div>
  
        <div className="flex-grow text-center hidden lg:flex lg:justify-center lg:gap-4">
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
          <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
        </div>
  
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-11 rounded-l-lg rounded-r-lg rounded-b-2xl"
            style={{ border: '1px solid white' }}
          >
            Explore it
          </button>
      </nav>
    );
  };
  