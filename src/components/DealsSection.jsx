import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const deals = [
  { name: 'Smart watches', discount: '-25%', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200' },
  { name: 'Laptops', discount: '-15%', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200' },
  { name: 'GoPro cameras', discount: '-40%', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764bed?w=200' },
  { name: 'Headphones', discount: '-25%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
  { name: 'Canon cameras', discount: '-25%', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200' },
  { name: 'Smartphones', discount: '-20%', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=200' },
];

const DealsSection = () => {
  const [time, setTime] = useState({ days: 4, hours: 13, mins: 34, secs: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white mx-4 md:mx-8 my-4 rounded-3xl shadow-card p-6 border border-gray-100"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

        {/* Left - Title and Timer */}
        <div className="shrink-0 md:w-48">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Live deals</span>
          </div>
          <h3 className="font-black text-gray-800 text-xl">Deals and offers</h3>
          <p className="text-gray-400 text-xs mt-1 font-medium">Hygiene equipments</p>

          {/* Countdown Timer */}
          <div className="flex gap-2 mt-4">
            {[
              { val: time.days, label: 'Days' },
              { val: time.hours, label: 'Hrs' },
              { val: time.mins, label: 'Min' },
              { val: time.secs, label: 'Sec' },
            ].map(({ val, label }, i) => (
              <div key={label}>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-2xl text-center px-2.5 py-2.5 min-w-[46px] shadow-lg">
                  <div className="text-lg font-black tabular-nums">{String(val).padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-medium">{label}</div>
                </div>
                {i < 3 && <div className="text-gray-400 font-black text-lg flex items-center justify-center mt-1">:</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

        {/* Right - Product Cards */}
        <div className="flex gap-3 overflow-x-auto flex-1 pb-2">
          {deals.map((deal, i) => (
            <motion.div
              key={deal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Link to="/products">
                <div className="border border-gray-100 rounded-3xl p-3 text-center shrink-0 w-36 hover:shadow-xl hover:border-blue-200 cursor-pointer transition-all duration-300 bg-white group">
                  <div className="rounded-2xl overflow-hidden h-24 mb-3 bg-gray-50 relative">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => e.target.src = 'https://via.placeholder.com/200'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="text-sm text-gray-700 font-bold">{deal.name}</p>
                  <span className="mt-2 inline-flex items-center gap-1 bg-red-50 text-red-500 text-xs px-3 py-1 rounded-full font-black border border-red-100">
                    🔥 {deal.discount}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default DealsSection;