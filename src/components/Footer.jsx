import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      toast.error('Please enter your email!');
      return;
    }
    toast.success('Successfully subscribed! 🎉');
    setEmail('');
  };

  return (
    <div className="bg-white border-t border-gray-100 mt-8">

      {/* Newsletter */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-14 px-4">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>

        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-xs text-white font-bold mb-4 border border-white/20">
              <span className="animate-pulse">📧</span>
              Join 50,000+ subscribers
            </div>
            <h3 className="font-black text-white text-3xl">Subscribe to our newsletter</h3>
            <p className="text-blue-100 text-sm mt-3 font-medium">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex flex-col sm:flex-row justify-center mt-6 gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border-0 rounded-2xl px-5 py-3.5 text-sm w-full outline-none shadow-xl font-medium placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubscribe}
                className="bg-orange-500 text-white px-7 py-3.5 rounded-2xl text-sm font-black hover:bg-orange-600 transition-colors shadow-xl whitespace-nowrap"
              >
                Subscribe →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-6 gap-8">

        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-2xl shadow-lg shadow-blue-200">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
                <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
            </div>
            <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Brand</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">Best information about the company goes here but now lorem ipsum is</p>
          
          {/* Social Icons */}
          <div className="flex gap-2 mt-5">
            {[
              { icon: '𝕏', label: 'Twitter' },
              { icon: 'f', label: 'Facebook' },
              { icon: 'in', label: 'LinkedIn' },
              { icon: '📸', label: 'Instagram' },
              { icon: '▶', label: 'YouTube' },
            ].map((social) => (
              <motion.button
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm font-bold text-gray-600"
              >
                {social.icon}
              </motion.button>
            ))}
          </div>

          {/* App Buttons */}
          <div className="mt-6">
            <p className="text-xs text-gray-400 font-black mb-3 uppercase tracking-wider">Get the app</p>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white text-xs px-4 py-2.5 rounded-2xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
              >
                🍎 App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-900 text-white text-xs px-4 py-2.5 rounded-2xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
              >
                ▶ Google Play
              </motion.button>
            </div>
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'About', links: ['About Us', 'Find store', 'Categories', 'Blogs'] },
          { title: 'Partnership', links: ['About Us', 'Find store', 'Categories', 'Blogs'] },
          { title: 'Information', links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'] },
          { title: 'For users', links: ['Login', 'Register', 'Settings', 'My Orders'] },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="font-black text-gray-800 mb-4 text-sm uppercase tracking-wider">{section.title}</h4>
            <ul className="text-sm text-gray-500 space-y-3">
              {section.links.map(item => (
                <li key={item}>
                  <Link
                    to="/"
                    className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-3">
        <span className="font-medium">© 2024 Brand Ecommerce. All rights reserved.</span>
        <div className="flex items-center gap-4">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
            <Link key={item} to="/" className="hover:text-blue-600 transition-colors font-medium">{item}</Link>
          ))}
          <span className="font-medium">🌐 English</span>
        </div>
      </div>

    </div>
  );
}

export default Footer;