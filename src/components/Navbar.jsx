import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-md'}`}>

      {/* Top Bar - hidden on mobile */}
      <div className="hidden md:flex bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-xs py-1.5 px-8 justify-between items-center">
        <span>🔥 Free shipping on orders over $100 — Limited time offer!</span>
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-blue-200">Sell on Brand</span>
          <span className="cursor-pointer hover:text-blue-200">Help & Support</span>
          <span className="cursor-pointer hover:text-blue-200">🌐 EN</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white py-3 px-4 md:px-8 flex items-center gap-3 md:gap-6 border-b border-gray-100">

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg group-hover:shadow-blue-300 transition-all duration-300">
            <span className="text-white text-sm">🛍</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Brand
            </span>
            <p className="text-gray-400 text-xs -mt-1">Best deals worldwide</p>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 rounded-xl overflow-hidden border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 shadow-sm">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-3 md:px-5 py-2.5 w-full outline-none text-sm text-gray-700"
          />
          <select className="hidden md:block border-l border-gray-100 px-3 py-2 text-sm outline-none bg-gray-50 text-gray-600">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Garden</option>
          </select>
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 md:px-7 py-2.5 text-sm font-bold hover:from-blue-700 transition-all">
            🔍
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-5 ml-auto">
          <Link to="/cart" className="relative flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs group">
            <div className="relative">
              <span className="text-2xl group-hover:scale-110 transition-transform block">🛒</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </div>
            <span className="hidden md:block mt-0.5">My cart</span>
          </Link>
          <Link to="/" className="hidden md:flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs">
            <span className="text-2xl">👤</span>
            <span>Profile</span>
          </Link>
          <Link to="/" className="hidden md:flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs">
            <span className="text-2xl">📋</span>
            <span>Orders</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 shadow-lg">
          {['Hot offers 🔥', 'Gift boxes 🎁', 'Projects', 'Menu item', 'Help'].map(item => (
            <Link key={item} to="/" className="text-gray-700 hover:text-blue-600 py-1 border-b border-gray-50">
              {item}
            </Link>
          ))}
          <Link to="/" className="text-gray-700 hover:text-blue-600 py-1">👤 Profile</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600 py-1">📋 Orders</Link>
        </div>
      )}

      {/* Secondary Navbar - hidden on mobile */}
      <div className="hidden md:flex bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 py-2.5 items-center gap-2 text-sm text-white">
        <button className="flex items-center gap-2 font-bold bg-white/20 backdrop-blur px-4 py-1.5 rounded-lg hover:bg-white/30 transition-all mr-2">
          ☰ All category
        </button>
        {['Hot offers 🔥', 'Gift boxes 🎁', 'Projects', 'Menu item'].map(item => (
          <Link key={item} to="/" className="px-3 py-1.5 rounded-lg hover:bg-white/20 transition-all">{item}</Link>
        ))}
        <div className="px-3 py-1.5 rounded-lg hover:bg-white/20 cursor-pointer">Help ▾</div>
        <div className="ml-auto flex items-center gap-4 text-blue-100 text-xs">
          <span className="cursor-pointer hover:text-white bg-white/10 px-3 py-1 rounded-full">🌐 English, USD ▾</span>
          <span className="cursor-pointer hover:text-white bg-white/10 px-3 py-1 rounded-full">🚢 Ship to 🇩🇪 ▾</span>
        </div>
      </div>

    </div>
  );
}

export default Navbar;