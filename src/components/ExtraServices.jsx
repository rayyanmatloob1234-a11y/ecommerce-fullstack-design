import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Source from Industry Hubs',
    desc: 'Connect with top manufacturers and wholesalers worldwide',
    icon: '🏭',
    color: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    iconBg: 'bg-blue-500',
  },
  {
    title: 'Customize Your Products',
    desc: 'Get custom branded products made to your specifications',
    icon: '🎨',
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
    iconBg: 'bg-purple-500',
  },
  {
    title: 'Fast Reliable Shipping',
    desc: 'Ocean and air freight with real-time tracking',
    icon: '✈️',
    color: 'from-green-50 to-green-100',
    border: 'border-green-200',
    iconBg: 'bg-green-500',
  },
  {
    title: 'Product Monitoring',
    desc: 'Quality inspection and monitoring at every stage',
    icon: '🔍',
    color: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    iconBg: 'bg-orange-500',
  },
];

const suppliers = [
  { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
  { country: 'Australia', domain: 'shopname.au', flag: '🇦🇺' },
  { country: 'United States', domain: 'shopname.us', flag: '🇺🇸' },
  { country: 'Russia', domain: 'shopname.ru', flag: '🇷🇺' },
  { country: 'Italy', domain: 'shopname.it', flag: '🇮🇹' },
  { country: 'Denmark', domain: 'shopname.dk', flag: '🇩🇰' },
  { country: 'France', domain: 'shopname.fr', flag: '🇫🇷' },
  { country: 'China', domain: 'shopname.cn', flag: '🇨🇳' },
  { country: 'Great Britain', domain: 'shopname.uk', flag: '🇬🇧' },
  { country: 'Germany', domain: 'shopname.de', flag: '🇩🇪' },
];

const ExtraServices = () => {
  return (
    <div className="mx-4 md:mx-8 my-4 flex flex-col gap-4">

      {/* Extra Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-card p-6 border border-gray-100"
      >
        <div className="mb-6">
          <h3 className="font-black text-gray-800 text-xl">Our extra services</h3>
          <p className="text-gray-400 text-sm mt-1 font-medium">Everything you need to grow your business</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-gradient-to-br ${service.color} border ${service.border} rounded-3xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl group`}
            >
              <div className={`${service.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{service.icon}</span>
              </div>
              <p className="text-gray-800 font-black text-sm">{service.title}</p>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed font-medium">{service.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suppliers by Region */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl shadow-card p-6 border border-gray-100"
      >
        <div className="mb-6">
          <h3 className="font-black text-gray-800 text-xl">Suppliers by region</h3>
          <p className="text-gray-400 text-sm mt-1 font-medium">Connect with local suppliers worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {suppliers.map((supplier, i) => (
            <motion.div
              key={supplier.domain}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-100 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{supplier.flag}</span>
              <div>
                <p className="text-sm text-gray-800 font-bold">{supplier.country}</p>
                <p className="text-xs text-blue-500 font-medium">{supplier.domain}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

export default ExtraServices;