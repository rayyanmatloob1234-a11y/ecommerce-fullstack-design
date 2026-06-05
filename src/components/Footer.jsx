import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white border-t mt-10">
      
      {/* Newsletter */}
      <div className="text-center py-10 border-b">
        <h3 className="font-semibold text-gray-800 text-lg">Subscribe to our newsletter</h3>
        <p className="text-gray-500 text-sm mt-1">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex justify-center mt-4 gap-2">
          <input
            type="email"
            placeholder="✉ Email"
            className="border border-gray-300 rounded px-4 py-2 text-sm w-64 outline-none"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-600 p-1 rounded">
              <span className="text-white text-xs">🛍</span>
            </div>
            <span className="font-bold text-gray-800">Brand</span>
          </div>
          <p className="text-gray-500 text-sm">Best information about the company goes here but now lorem ipsum is</p>
          <div className="flex gap-3 mt-3 text-gray-400">
            <span className="cursor-pointer hover:text-blue-600">🐦</span>
            <span className="cursor-pointer hover:text-blue-600">📘</span>
            <span className="cursor-pointer hover:text-blue-600">💼</span>
            <span className="cursor-pointer hover:text-blue-600">📸</span>
            <span className="cursor-pointer hover:text-blue-600">▶</span>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">About</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link to="/" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Find store</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Categories</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Blogs</Link></li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Partnership</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link to="/" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Find store</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Categories</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Blogs</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Information</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link to="/" className="hover:text-blue-600">Help Center</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Money Refund</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Shipping</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Contact us</Link></li>
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">For users</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            <li><Link to="/" className="hover:text-blue-600">Login</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Register</Link></li>
            <li><Link to="/" className="hover:text-blue-600">Settings</Link></li>
            <li><Link to="/" className="hover:text-blue-600">My Orders</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t px-6 py-4 flex justify-between items-center text-sm text-gray-400">
        <span>© 2023 Ecommerce.</span>
        <span>🌐 English</span>
      </div>

    </div>
  );
}

export default Footer;