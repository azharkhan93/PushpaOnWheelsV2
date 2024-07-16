

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 w-full flex items-center justify-center flex-col gap-8">
      <div className="mb-6 md:mb-0 border-b-2 border-black w-[90%]">
        <img src="https://via.placeholder.com/150x50" alt="Logo" className="mx-auto" />
      </div>

      {/* Links and Information Section */}
      <div className="flex items-center justify-between gap-24 w-[90%]" style={{ borderBottom: '3px solid greenyellow' }}>
        {/* About Company */}
        <div className="mb-6 md:mb-0 text-center">
          <h2 className="text-lg font-semibold mb-4">About Company</h2>
          <p className="text-sm">We provide a variety of veg foods with a top-notch dining experience.</p>
        </div>

        {/* Useful Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">Phone: +1 234 567 890</p>
          <p className="text-sm">Address: 123 Veg Street, Food City</p>
        </div>
      </div>
    </footer>
  );
};


