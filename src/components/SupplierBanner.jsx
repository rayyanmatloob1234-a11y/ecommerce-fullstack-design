import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const SupplierBanner = () => {
  const handleSubmit = () => {
    toast.success('Inquiry sent successfully! 🎉');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-4 md:mx-8 my-4 relative overflow-hidden rounded-3xl shadow-xl"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700"></div>
      
      {/* Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Text */}
        <div className="text-white max-w-lg text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold mb-5 border border-white/20"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Trusted by 10,000+ suppliers worldwide
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-black leading-tight"
          >
            An easy way to send requests to all suppliers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-blue-100 text-sm leading-relaxed"
          >
            Connect with verified suppliers worldwide. Get competitive quotes and find the best deals for your business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"
          >
            {['✅ Verified suppliers', '✅ Secure payments', '✅ Fast delivery', '✅ 24/7 support'].map(item => (
              <span key={item} className="text-sm text-blue-100 font-medium">{item}</span>
            ))}
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-7 w-full md:w-96 shrink-0 shadow-2xl"
        >
          <h3 className="font-black text-gray-800 text-xl mb-1">Send quote to suppliers</h3>
          <p className="text-gray-400 text-xs mb-5 font-medium">Get quotes within 24 hours</p>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="What item do you need?"
              className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors font-medium placeholder-gray-300"
            />
            <textarea
              placeholder="Type more details about your requirements..."
              className="w-full border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors h-24 resize-none font-medium placeholder-gray-300"
            />
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Quantity"
                className="flex-1 border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors font-medium placeholder-gray-300"
              />
              <select className="border-2 border-gray-100 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-colors bg-white font-medium text-gray-600">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Lbs</option>
                <option>Sets</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="w-full mt-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-2xl text-sm font-black shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center justify-center gap-2"
          >
            Send inquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>

          <p className="text-center text-gray-400 text-xs mt-3 font-medium">
            🔒 Your information is secure and private
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default SupplierBanner;