import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProducts } from '../api';
import toast from 'react-hot-toast';

const RecommendedItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
    toast.success(wishlist.includes(id) ? 'Removed from wishlist' : 'Added to wishlist! ❤️');
  };

  return (
    <div className="mx-4 md:mx-8 my-4 bg-white rounded-3xl shadow-card p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-black text-gray-800 text-xl">Recommended items</h3>
          <p className="text-gray-400 text-sm mt-0.5">Handpicked just for you</p>
        </div>
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-blue-600 text-sm font-bold hover:bg-blue-50 px-4 py-2 rounded-2xl transition-all flex items-center gap-1"
          >
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 animate-pulse">
              <div className="h-40 bg-gray-100"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-100 rounded-full mb-2"></div>
                <div className="h-3 bg-gray-100 rounded-full w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Link to={`/product/${product._id}`}>
                <div className="rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl cursor-pointer transition-all duration-300 group bg-white">
                  {/* Image */}
                  <div className="relative h-44 bg-gray-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={e => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Wishlist button */}
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={(e) => toggleWishlist(e, product._id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                    >
                      <svg className={`w-4 h-4 transition-colors ${wishlist.includes(product._id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.button>

                    {/* Free shipping badge */}
                    {product.freeShipping && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow">
                        Free
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <p className="text-gray-800 font-black text-sm">${product.price.toFixed(2)}</p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2 font-medium leading-relaxed">{product.name}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.round(product.rating / 2) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 font-medium">({product.orders})</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendedItems;