import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProducts } from '../api';
import toast from 'react-hot-toast';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) setSearch(searchParam);
  }, [location]);

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts(search, category);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    toast.success(wishlist.includes(id) ? 'Removed from wishlist' : 'Added to wishlist! ❤️');
  };

  const addToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    if (cartItems.includes(product._id)) {
      toast.error('Already in cart!');
      return;
    }
    setCartItems(prev => [...prev, product._id]);
    toast.success(`Added to cart! ✓`);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-medium"
        >
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-800 font-bold">All Products</span>
        </motion.div>

        <div className="flex gap-6">

          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex w-56 shrink-0 flex-col gap-4"
          >
            {/* Category Filter */}
            <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
              <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                Category
              </h4>
              <ul className="space-y-1">
                {['All', 'Electronics', 'Clothing', 'Accessories'].map(cat => (
                  <motion.li
                    key={cat}
                    whileHover={{ x: 4 }}
                    onClick={() => setCategory(cat === 'All' ? '' : cat)}
                    className={`px-3 py-2.5 rounded-2xl text-sm cursor-pointer transition-all font-semibold ${
                      category === cat || (cat === 'All' && !category)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {cat}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
              <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-purple-600 rounded-full"></div>
                Brands
              </h4>
              <ul className="space-y-3">
                {['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'].map(brand => (
                  <li key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-lg group-hover:border-blue-400 transition-colors"></div>
                    <span className="text-sm text-gray-600 font-semibold group-hover:text-blue-600 transition-colors">{brand}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
              <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-green-600 rounded-full"></div>
                Price range
              </h4>
              <div className="flex gap-2 mb-3">
                <input type="number" placeholder="Min" className="w-full border-2 border-gray-100 rounded-2xl px-3 py-2 text-sm outline-none focus:border-blue-400 transition-colors font-medium" />
                <input type="number" placeholder="Max" className="w-full border-2 border-gray-100 rounded-2xl px-3 py-2 text-sm outline-none focus:border-blue-400 transition-colors font-medium" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-2.5 rounded-2xl text-sm font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Apply filter
              </motion.button>
            </div>

            {/* Condition */}
            <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
              <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-orange-500 rounded-full"></div>
                Condition
              </h4>
              <ul className="space-y-3">
                {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
                  <li key={cond} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${i === 0 ? 'border-blue-600' : 'border-gray-200 group-hover:border-blue-400'}`}>
                      {i === 0 && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                    </div>
                    <span className={`text-sm font-semibold transition-colors ${i === 0 ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}`}>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded-3xl shadow-card p-5 border border-gray-100">
              <h4 className="font-black text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-5 bg-yellow-500 rounded-full"></div>
                Ratings
              </h4>
              <ul className="space-y-3">
                {[5, 4, 3, 2].map(rating => (
                  <li key={rating} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-lg group-hover:border-blue-400 transition-colors"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-400 font-semibold">& up</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Product List */}
          <div className="flex-1">

            {/* Search + Top Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-card p-4 flex flex-col sm:flex-row items-center justify-between mb-5 gap-3 border border-gray-100"
            >
              <div className="relative w-full sm:w-72">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="border-2 border-gray-100 rounded-2xl pl-10 pr-4 py-2.5 text-sm outline-none w-full focus:border-blue-400 transition-colors font-medium"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm font-semibold">
                  <span className="text-blue-600 font-black">{products.length}</span> items found
                </span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="border-2 border-gray-100 rounded-2xl px-4 py-2.5 outline-none text-sm font-semibold focus:border-blue-400 transition-colors bg-white text-gray-600"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </motion.div>

            {/* Loading Skeleton */}
            {loading ? (
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-white rounded-3xl p-5 flex gap-5 animate-pulse border border-gray-100">
                    <div className="w-40 h-40 bg-gray-100 rounded-2xl shrink-0"></div>
                    <div className="flex-1 space-y-3 py-2">
                      <div className="h-5 bg-gray-100 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gray-100 rounded-full w-1/4"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-1/3"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-2/3"></div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-9 w-28 bg-gray-100 rounded-2xl"></div>
                        <div className="h-9 w-28 bg-gray-100 rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sortedProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 bg-white rounded-3xl border border-gray-100"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-black text-gray-800 text-xl">No products found</h3>
                <p className="text-gray-400 mt-2 font-medium">Try adjusting your search or filters</p>
              </motion.div>
            ) : (
              <AnimatePresence>
                <div className="flex flex-col gap-4">
                  {sortedProducts.map((product, i) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="bg-white rounded-3xl shadow-card hover:shadow-xl p-5 flex gap-5 transition-all duration-300 border border-gray-100 hover:border-blue-100 group">

                        {/* Product Image */}
                        <Link to={`/product/${product._id}`} className="shrink-0">
                          <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-50 relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={e => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                            />
                            {product.freeShipping && (
                              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-black shadow">
                                FREE
                              </div>
                            )}
                          </div>
                        </Link>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <Link to={`/product/${product._id}`}>
                            <h3 className="text-gray-800 font-black text-lg hover:text-blue-600 transition-colors line-clamp-1">{product.name}</h3>
                          </Link>

                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-2xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                            {product.freeShipping && (
                              <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full font-black border border-green-100">Free Shipping</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < Math.round(product.rating / 2) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm font-semibold">{product.rating}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500 text-sm font-semibold">{product.orders} orders</span>
                          </div>

                          <p className="text-gray-400 text-sm mt-2 line-clamp-2 font-medium leading-relaxed">{product.description}</p>

                          <div className="flex gap-3 mt-4">
                            {/* Add to Cart Button */}
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => addToCart(e, product)}
                              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all shadow-lg flex items-center gap-2 ${
                                cartItems.includes(product._id)
                                  ? 'bg-green-500 text-white shadow-green-200'
                                  : 'bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700'
                              }`}
                            >
                              {cartItems.includes(product._id) ? (
                                <>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Added!
                                </>
                              ) : (
                                <>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                  Add to cart
                                </>
                              )}
                            </motion.button>

                            {/* Wishlist Button */}
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={(e) => toggleWishlist(e, product._id)}
                              className={`px-6 py-2.5 rounded-2xl text-sm font-black transition-all border-2 flex items-center gap-2 ${
                                wishlist.includes(product._id)
                                  ? 'bg-red-50 text-red-500 border-red-200'
                                  : 'border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-500'
                              }`}
                            >
                              <svg className={`w-4 h-4 ${wishlist.includes(product._id) ? 'fill-red-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              {wishlist.includes(product._id) ? 'Wishlisted' : 'Wishlist'}
                            </motion.button>

                            <Link to={`/product/${product._id}`}>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="border-2 border-gray-200 text-gray-600 px-6 py-2.5 rounded-2xl text-sm font-black hover:border-blue-400 hover:text-blue-600 transition-all"
                              >
                                View details
                              </motion.button>
                            </Link>
                          </div>
                        </div>

                        {/* Wishlist on right */}
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={(e) => toggleWishlist(e, product._id)}
                          className="shrink-0 w-10 h-10 rounded-2xl border-2 border-gray-100 flex items-center justify-center hover:border-red-300 transition-colors self-start"
                        >
                          <svg className={`w-5 h-5 ${wishlist.includes(product._id) ? 'text-red-500 fill-red-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </motion.button>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}

            {/* Pagination */}
            {!loading && sortedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-3xl shadow-card p-4 mt-5 flex items-center justify-center gap-2 border border-gray-100"
              >
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-all font-black">‹</motion.button>
                {[1, 2, 3].map(page => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-2xl text-sm font-black transition-all ${page === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'border-2 border-gray-100 text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}
                  >
                    {page}
                  </motion.button>
                ))}
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-all font-black">›</motion.button>
              </motion.div>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListingPage;