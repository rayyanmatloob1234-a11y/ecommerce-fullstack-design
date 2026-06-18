import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white border-t mt-10">

      {/* Newsletter */}
      <div className="text-center py-10 border-b px-4">
        <h3 className="font-bold text-gray-800 text-xl">Subscribe to our newsletter</h3>
        <p className="text-gray-500 text-sm mt-1">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex flex-col sm:flex-row justify-center mt-4 gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="✉ Email"
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full outline-none focus:border-blue-400 transition"
          />
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white text-xs">🛍</span>
            </div>
            <span className="font-black text-gray-800 text-lg">Brand</span>
          </div>
          <p className="text-gray-500 text-sm">Best information about the company goes here but now lorem ipsum is</p>
          <div className="flex gap-3 mt-3 text-gray-400 text-xl">
            {['🐦', '📘', '💼', '📸', '▶'].map((icon, i) => (
              <span key={i} className="cursor-pointer hover:text-blue-600 transition-colors">{icon}</span>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">About</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            {['About Us', 'Find store', 'Categories', 'Blogs'].map(item => (
              <li key={item}><Link to="/" className="hover:text-blue-600 transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Partnership</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            {['About Us', 'Find store', 'Categories', 'Blogs'].map(item => (
              <li key={item}><Link to="/" className="hover:text-blue-600 transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Information</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            {['Help Center', 'Money Refund', 'Shipping', 'Contact us'].map(item => (
              <li key={item}><Link to="/" className="hover:text-blue-600 transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* For Users */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">For users</h4>
          <ul className="text-sm text-gray-500 space-y-2">
            {['Login', 'Register', 'Settings', 'My Orders'].map(item => (
              <li key={item}><Link to="/" className="hover:text-blue-600 transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-2">
        <span>© 2023 Ecommerce.</span>
        <span>🌐 English</span>
      </div>

    </div>
  );
}

export default Footer;