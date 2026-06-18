import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gray-100 px-4 md:px-8 py-4">
      <div className="flex flex-col md:flex-row gap-4">

        {/* Left Category Sidebar - hidden on mobile */}
        <div className="hidden md:block bg-white w-52 shrink-0 rounded-xl shadow-sm p-4 text-sm">
          <ul className="space-y-1">
            {[
              'Automobiles',
              'Clothes and wear',
              'Home interiors',
              'Computer and tech',
              'Tools, equipments',
              'Sports and outdoor',
              'Animal and pets',
              'Machinery tools',
              'More category',
            ].map((cat, i) => (
              <li
                key={cat}
                className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  i === 0
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Banner */}
        <div className="flex-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-xl shadow-sm p-8 md:p-10 flex items-center justify-between overflow-hidden relative min-h-48">
          <div className="relative z-10">
            <p className="text-teal-100 text-sm font-medium">Latest trending</p>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-1 leading-tight">
              Electronic <br /> items
            </h2>
            <Link to="/products">
              <button className="mt-5 bg-white text-gray-800 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow">
                Learn more
              </button>
            </Link>
          </div>
          <div className="text-8xl md:text-9xl opacity-90 absolute right-6 md:right-10">🎧</div>
        </div>

        {/* Right Panel - hidden on mobile */}
        <div className="hidden md:flex w-48 shrink-0 flex-col gap-3">
          <div className="bg-white rounded-xl shadow-sm p-4 text-sm">
            <p className="text-gray-500 text-xs">Hi, user</p>
            <p className="font-bold text-gray-800 mt-0.5">let's get started</p>
            <Link to="/">
              <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
                Join now
              </button>
            </Link>
            <Link to="/">
              <button className="w-full mt-2 border border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition">
                Log in
              </button>
            </Link>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl shadow-sm p-4 text-sm text-white">
            <p className="font-bold leading-snug">Get US $10 off with a new supplier</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-sm p-4 text-sm text-white">
            <p className="font-bold leading-snug">Send quotes with supplier preferences</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;