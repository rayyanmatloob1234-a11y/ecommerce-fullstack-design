import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gray-100 px-6 py-4">
      <div className="flex gap-4">
        
        {/* Left Category Sidebar */}
        <div className="bg-white w-48 shrink-0 rounded p-3 text-sm">
          <ul className="space-y-2 text-gray-700">
            <li className="font-semibold text-blue-600 cursor-pointer">Automobiles</li>
            <li className="cursor-pointer hover:text-blue-600">Clothes and wear</li>
            <li className="cursor-pointer hover:text-blue-600">Home interiors</li>
            <li className="cursor-pointer hover:text-blue-600">Computer and tech</li>
            <li className="cursor-pointer hover:text-blue-600">Tools, equipments</li>
            <li className="cursor-pointer hover:text-blue-600">Sports and outdoor</li>
            <li className="cursor-pointer hover:text-blue-600">Animal and pets</li>
            <li className="cursor-pointer hover:text-blue-600">Machinery tools</li>
            <li className="cursor-pointer hover:text-blue-600">More category</li>
          </ul>
        </div>

        {/* Middle Banner */}
        <div className="flex-1 bg-teal-400 rounded p-8 flex items-center justify-between">
          <div>
            <p className="text-white text-sm">Latest trending</p>
            <h2 className="text-white text-3xl font-bold mt-1">Electronic items</h2>
            <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100">
              Learn more
            </button>
          </div>
          <div className="text-8xl">🎧</div>
        </div>

        {/* Right Panel */}
        <div className="w-44 shrink-0 flex flex-col gap-3">
          {/* User login box */}
          <div className="bg-white rounded p-3 text-sm">
            <p className="text-gray-600">Hi, user</p>
            <p className="font-semibold text-gray-800">let's get started</p>
            <Link to="/">
              <button className="w-full mt-2 bg-blue-600 text-white py-1.5 rounded text-sm hover:bg-blue-700">
                Join now
              </button>
            </Link>
            <Link to="/">
              <button className="w-full mt-2 border border-blue-600 text-blue-600 py-1.5 rounded text-sm hover:bg-blue-50">
                Log in
              </button>
            </Link>
          </div>

          {/* Promo box 1 */}
          <div className="bg-orange-400 rounded p-3 text-sm text-white">
            <p className="font-semibold">Get US $10 off with a new supplier</p>
          </div>

          {/* Promo box 2 */}
          <div className="bg-teal-500 rounded p-3 text-sm text-white">
            <p className="font-semibold">Send quotes with supplier preferences</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;