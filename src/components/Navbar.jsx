import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
  };

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-2xl' : ''}`}>

      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="animate-pulse">🔥</span>
          <span className="font-medium">Free shipping on orders over $100 — Limited time offer!</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-blue-100">
          <span className="cursor-pointer hover:text-white transition-colors">Sell on Brand</span>
          <span className="cursor-pointer hover:text-white transition-colors">Help & Support</span>
          <span className="cursor-pointer hover:text-white transition-colors font-medium">🌐 EN</span>
        </div>
      </div>

      {/* Main Navbar - Glassmorphism */}
      <div className={`backdrop-blur-xl bg-white/95 py-3 px-4 md:px-8 flex items-center gap-4 border-b border-gray-100/80 transition-all duration-300`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-2xl shadow-lg shadow-blue-200"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"/>
              <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            </svg>
          </motion.div>
          <div>
            <span className="font-black text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">Brand</span>
            <p className="text-gray-400 text-xs -mt-0.5 hidden sm:block font-medium">Best deals worldwide</p>
          </div>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className={`flex flex-1 max-w-2xl rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${searchFocused ? 'border-blue-500 shadow-blue-100 shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="px-5 py-3 w-full outline-none text-sm text-gray-700 placeholder-gray-400 bg-white"
          />
          <select className="hidden md:block border-l border-gray-100 px-3 py-2 text-sm outline-none bg-gray-50 text-gray-600 cursor-pointer min-w-max font-medium">
            <option>All category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Accessories</option>
          </select>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden md:block text-sm font-bold">Search</span>
          </motion.button>
        </form>

        {/* Right Icons */}
        <div className="flex items-center gap-1 md:gap-3 ml-auto">
          {[
            { icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            ), label: 'Profile', to: '/' },
            { icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            ), label: 'Orders', to: '/' },
          ].map(item => (
            <motion.div key={item.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={item.to} className="hidden md:flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-blue-50 group">
                <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-xs mt-0.5 font-semibold">{item.label}</span>
              </Link>
            </motion.div>
          ))}

          {/* Cart */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/cart" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-blue-50 group relative">
              <div className="relative">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-black shadow-md"
                >
                  3
                </motion.span>
              </div>
              <span className="text-xs mt-0.5 font-semibold hidden md:block">My cart</span>
            </Link>
          </motion.div>

          {/* Mobile menu */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-xl hover:bg-blue-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="hidden md:flex bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-8 py-2.5 items-center gap-1 text-sm text-white">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all mr-3 border border-white/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          All category
        </motion.button>
        {['Hot offers 🔥', 'Gift boxes 🎁', 'Projects', 'Menu item'].map(item => (
          <Link key={item} to="/" className="px-3 py-2 rounded-xl hover:bg-white/20 transition-all font-medium">{item}</Link>
        ))}
        <div className="px-3 py-2 rounded-xl hover:bg-white/20 cursor-pointer transition-all font-medium flex items-center gap-1">
          Help
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="ml-auto flex items-center gap-2 text-blue-100 text-xs">
          <span className="cursor-pointer hover:text-white bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-xl transition-all font-medium border border-white/10">🌐 English, USD</span>
          <span className="cursor-pointer hover:text-white bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-xl transition-all font-medium border border-white/10">🚢 Ship to 🇩🇪</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {['Hot offers 🔥', 'Gift boxes 🎁', 'Projects', 'Menu item', 'Help'].map(item => (
                <Link key={item} to="/" onClick={() => setMenuOpen(false)} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all font-semibold">
                  {item}
                </Link>
              ))}
              <hr className="my-2 border-gray-100" />
              <Link to="/" onClick={() => setMenuOpen(false)} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all font-semibold">👤 Profile</Link>
              <Link to="/" onClick={() => setMenuOpen(false)} className="py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all font-semibold">📋 Orders</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Navbar;