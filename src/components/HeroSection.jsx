import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Automobiles', icon: '🚗' },
  { name: 'Clothes and wear', icon: '👕' },
  { name: 'Home interiors', icon: '🏠' },
  { name: 'Computer and tech', icon: '💻' },
  { name: 'Tools, equipments', icon: '🔧' },
  { name: 'Sports and outdoor', icon: '⚽' },
  { name: 'Animal and pets', icon: '🐾' },
  { name: 'Machinery tools', icon: '⚙️' },
  { name: 'More category', icon: '➕' },
];

const HeroSection = () => {
  return (
    <div className="bg-gray-50 px-4 md:px-8 py-4">
      <div className="flex gap-4">

        {/* Left Category Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block bg-white w-56 shrink-0 rounded-3xl shadow-card p-3 border border-gray-100"
        >
          <ul className="space-y-0.5">
            {categories.map((cat, i) => (
              <motion.li
                key={cat.name}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/products"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-2xl text-sm transition-all duration-200 group ${
                    i === 0
                      ? 'bg-blue-50 text-blue-600 font-bold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{cat.icon}</span>
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  <svg className={`w-3.5 h-3.5 transition-opacity ${i === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Middle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 relative bg-gradient-to-br from-teal-400 via-teal-500 to-cyan-600 rounded-3xl shadow-card overflow-hidden min-h-64"
        >
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12 flex items-center justify-between h-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white font-semibold mb-4 border border-white/30"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                New arrivals this week
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-teal-100 text-sm font-semibold tracking-widest uppercase"
              >
                Latest trending
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-4xl md:text-5xl font-black mt-2 leading-tight"
              >
                Electronic<br />items
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/products">
                  <button className="mt-6 bg-white text-gray-800 px-8 py-3.5 rounded-2xl text-sm font-black hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform flex items-center gap-2">
                    Shop now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
                alt="Headphones"
                className="w-52 h-52 object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex w-52 shrink-0 flex-col gap-3"
        >
          {/* User box */}
          <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-md shadow-blue-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-gray-400 text-xs font-medium">Welcome back!</p>
            <p className="font-black text-gray-800 mt-0.5 text-sm">Let's get started</p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all"
              >
                Join now
              </motion.button>
            </Link>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 border-2 border-gray-200 text-gray-700 py-2.5 rounded-2xl text-sm font-bold hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                Log in
              </motion.button>
            </Link>
          </div>

          {/* Promo 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl shadow-card p-5 text-white border border-orange-300/30 cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center mb-2">
              <span className="text-lg">💰</span>
            </div>
            <p className="text-xs font-semibold text-orange-100">Special offer</p>
            <p className="font-black text-sm mt-1 leading-snug">Get US $10 off with a new supplier</p>
            <button className="mt-3 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl transition-all font-bold border border-white/20">
              Claim now →
            </button>
          </motion.div>

          {/* Promo 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl shadow-card p-5 text-white border border-blue-400/30 cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center mb-2">
              <span className="text-lg">📦</span>
            </div>
            <p className="text-xs font-semibold text-blue-100">For suppliers</p>
            <p className="font-black text-sm mt-1 leading-snug">Send quotes with supplier preferences</p>
            <button className="mt-3 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-xl transition-all font-bold border border-white/20">
              Learn more →
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default HeroSection;