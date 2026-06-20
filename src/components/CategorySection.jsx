import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Home and outdoor',
    subtitle: 'Source now',
    color: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-100',
    accentColor: 'text-orange-500',
    buttonColor: 'hover:border-orange-400 hover:text-orange-500',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200',
    items: [
      { name: 'Soft chairs', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=150' },
      { name: 'Sofa & chair', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150' },
      { name: 'Kitchen dishes', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=150' },
      { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=150' },
      { name: 'Kitchen mixer', price: 'From USD 100', image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=150' },
      { name: 'Blenders', price: 'From USD 39', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=150' },
      { name: 'Home appliance', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150' },
      { name: 'Coffee maker', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=150' },
    ],
  },
  {
    title: 'Consumer electronics',
    subtitle: 'Source now',
    color: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-100',
    accentColor: 'text-blue-500',
    buttonColor: 'hover:border-blue-400 hover:text-blue-500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200',
    items: [
      { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=150' },
      { name: 'Cameras', price: 'From USD 89', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150' },
      { name: 'Headphones', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150' },
      { name: 'Gaming set', price: 'From USD 35', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150' },
      { name: 'Laptops & PC', price: 'From USD 340', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=150' },
      { name: 'Smartphones', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=150' },
      { name: 'Tablets', price: 'From USD 199', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150' },
      { name: 'Electric kettle', price: 'From USD 24', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=150' },
    ],
  },
];

const CategorySection = () => {
  return (
    <div className="mx-4 md:mx-8 my-4 flex flex-col gap-4">
      {categories.map((cat, catIndex) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className={`bg-gradient-to-r ${cat.color} rounded-3xl shadow-card p-5 border ${cat.borderColor}`}
        >
          <div className="flex flex-col md:flex-row gap-5">

            {/* Left - Category Info */}
            <div className="md:w-48 shrink-0 flex flex-row md:flex-col justify-between md:justify-start">
              <div>
                <h3 className="font-black text-gray-800 text-xl leading-tight">{cat.title}</h3>
                <div className="hidden md:block mt-4 rounded-2xl overflow-hidden h-28 w-28 shadow-lg">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-4 border-2 border-gray-200 text-gray-600 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 bg-white shadow-sm ${cat.buttonColor}`}
                >
                  {cat.subtitle} →
                </motion.button>
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 self-stretch mx-2"></div>

            {/* Right - Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/products">
                    <div className="bg-white rounded-2xl p-3 hover:shadow-xl cursor-pointer transition-all duration-300 border border-transparent hover:border-blue-100 group">
                      <div className="rounded-xl overflow-hidden h-16 mb-2 bg-gray-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={e => e.target.src = 'https://via.placeholder.com/150'}
                        />
                      </div>
                      <p className="text-gray-800 font-bold text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5 font-medium">{item.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default CategorySection;