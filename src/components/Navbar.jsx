import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-white border-b py-3 px-6 flex items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
          <div className="bg-blue-600 p-1 rounded">
            <span className="text-white text-xs">🛍</span>
          </div>
          <span className="font-bold text-lg text-gray-800">Brand</span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-4 py-2 w-full outline-none text-sm"
          />
          <select className="border border-gray-300 border-l-0 px-2 py-2 text-sm outline-none">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Garden</option>
          </select>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-r text-sm font-medium hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 ml-auto text-gray-600 text-sm">
          <Link to="/" className="flex flex-col items-center hover:text-blue-600">
            <span>👤</span>
            <span>Profile</span>
          </Link>
          <Link to="/" className="flex flex-col items-center hover:text-blue-600">
            <span>💬</span>
            <span>Message</span>
          </Link>
          <Link to="/" className="flex flex-col items-center hover:text-blue-600">
            <span>📋</span>
            <span>Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center hover:text-blue-600">
            <span>🛒</span>
            <span>My cart</span>
          </Link>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="bg-white border-b px-6 py-2 flex items-center gap-6 text-sm text-gray-700">
        <button className="flex items-center gap-1 font-medium">
          ☰ All category
        </button>
        <Link to="/" className="hover:text-blue-600">Hot offers</Link>
        <Link to="/" className="hover:text-blue-600">Gift boxes</Link>
        <Link to="/" className="hover:text-blue-600">Projects</Link>
        <Link to="/" className="hover:text-blue-600">Menu item</Link>
        <div className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
          Help ▾
        </div>
        <div className="ml-auto flex items-center gap-4 text-gray-500">
          <span>English, USD</span>
          <span>🚢 Ship to 🇩🇪</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;