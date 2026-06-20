import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProduct, getProducts } from '../api';
import toast from 'react-hot-toast';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const data = await getProduct(id);
      if (data && data._id) {
        setProduct(data);
        const related = await getProducts('', data.category);
        setRelatedProducts(related.filter(p => p._id !== id).slice(0, 6));
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const addToCart = () => {
    toast.success(`Added ${quantity} item(s) to cart! 🛒`);
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
    toast.success(wishlist ? 'Removed from wishlist' : 'Added to wishlist! ❤️');
  };

  if (loading) return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl p-8 flex gap-8 animate-pulse border border-gray-100">
          <div className="w-80 h-80 bg-gray-100 rounded-3xl shrink-0"></div>
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-gray-100 rounded-full w-3/4"></div>
            <div className="h-8 bg-gray-100 rounded-full w-1/4"></div>
            <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
            <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  if (!product) return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="text-center py-40">
        <div className="text-6xl mb-4">😕</div>
        <h3 className="font-black text-gray-800 text-2xl">Product not found</h3>
        <Link to="/products">
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 transition-colors">
            Browse products
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );

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
          <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-800 font-bold line-clamp-1">{product.name}</span>
        </motion.div>

        {/* Main Product Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-card p-6 md:p-8 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left - Images */}
            <div className="shrink-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full md:w-80 h-80 rounded-3xl overflow-hidden bg-gray-50 border-2 border-gray-100 relative group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={e => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                />
                {product.freeShipping && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-black shadow-lg">
                    FREE SHIPPING
                  </div>
                )}
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-2 mt-3">
                {[product.image, product.image, product.image, product.image].map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${selectedImage === i ? 'border-blue-500 shadow-lg shadow-blue-200' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Middle - Product Info */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-full ${product.stock > 0 ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                    <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                    {product.stock > 0 ? 'In stock' : 'Out of stock'}
                  </span>
                  <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full border border-gray-100">{product.category}</span>
                </div>

                <h1 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">{product.name}</h1>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.round(product.rating / 2) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm font-bold">{product.rating}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 text-sm font-semibold">{product.orders} orders</span>
                  <span className="text-gray-300">•</span>
                  <button className="text-blue-600 text-sm font-bold hover:underline">Write a review</button>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mt-5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                  {product.freeShipping && (
                    <span className="bg-green-100 text-green-600 text-sm px-4 py-1.5 rounded-full font-black border border-green-200">
                      ✓ Free Shipping
                    </span>
                  )}
                </div>

                <hr className="my-5 border-gray-100" />

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ['Category', product.category],
                    ['Stock', `${product.stock} available`],
                    ['Shipping', product.freeShipping ? 'Free' : 'Paid'],
                    ['Orders', `${product.orders} sold`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-gray-400 font-semibold">{label}:</span>
                      <span className="font-bold text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>

                <hr className="my-5 border-gray-100" />

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <span className="text-gray-500 text-sm font-bold">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-100 rounded-2xl overflow-hidden">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-50 font-black text-lg transition-colors"
                    >
                      −
                    </motion.button>
                    <span className="px-6 py-3 border-x-2 border-gray-100 font-black text-gray-800 min-w-[60px] text-center">{quantity}</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-50 font-black text-lg transition-colors"
                    >
                      +
                    </motion.button>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{product.stock} pieces available</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addToCart}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-2xl font-black hover:bg-blue-50 transition-all"
                  >
                    Buy now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleWishlist}
                    className={`px-5 py-3.5 rounded-2xl font-black transition-all border-2 flex items-center gap-2 ${wishlist ? 'bg-red-50 text-red-500 border-red-200' : 'border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500'}`}
                  >
                    <svg className={`w-5 h-5 ${wishlist ? 'fill-red-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {wishlist ? 'Wishlisted' : 'Wishlist'}
                  </motion.button>
                </div>

              </motion.div>
            </div>

            {/* Right - Supplier Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-56 shrink-0 bg-gray-50 rounded-3xl p-5 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl w-11 h-11 flex items-center justify-center font-black text-lg shadow-lg shadow-blue-200">
                  R
                </div>
                <div>
                  <p className="font-black text-gray-800 text-sm">Supplier</p>
                  <p className="text-gray-400 text-xs font-medium">Guanjoi Trading LLC</p>
                </div>
              </div>

              <hr className="border-gray-200 mb-4" />

              <div className="space-y-2.5 text-xs font-semibold text-gray-600 mb-5">
                <p className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-100">🇩🇪 Germany, Berlin</p>
                <p className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-100">✅ Verified Seller</p>
                <p className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-100">🌐 Worldwide shipping</p>
                <p className="flex items-center gap-2 p-2 bg-white rounded-xl border border-gray-100">⭐ 98% positive feedback</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-2.5 rounded-2xl text-sm font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 mb-2"
              >
                Send inquiry
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border-2 border-gray-200 text-gray-600 py-2.5 rounded-2xl text-sm font-black hover:border-blue-400 hover:text-blue-600 transition-all"
              >
                Seller's profile
              </motion.button>

              <div className="mt-4 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-xs text-blue-600 font-bold text-center">🔒 Secure transaction guaranteed</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-card mt-5 border border-gray-100 overflow-hidden"
        >
          <div className="flex border-b border-gray-100">
            {['description', 'reviews', 'shipping'].map(tab => (
              <motion.button
                key={tab}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-black capitalize transition-all relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 text-sm text-gray-600 font-medium leading-relaxed"
            >
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Premium quality materials', 'Satisfaction guaranteed', '30-day return policy', 'Authentic product'].map(feature => (
                      <div key={feature} className="flex items-center gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="font-black text-gray-800 text-xl">No reviews yet</h3>
                  <p className="text-gray-400 mt-2 font-medium">Be the first to review this product!</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                  >
                    Write a review
                  </motion.button>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="space-y-3">
                  {[
                    { icon: '🚚', title: 'Free Shipping', desc: product.freeShipping ? 'This item ships for free!' : 'Standard shipping rates apply' },
                    { icon: '📦', title: 'Delivery Time', desc: 'Estimated delivery within 7-30 days' },
                    { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy for all items' },
                    { icon: '🔒', title: 'Secure Payment', desc: 'Your payment information is safe' },
                  ].map(item => (
                    <div key={item.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-black text-gray-800 text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs font-medium mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-card mt-5 p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-black text-gray-800 text-xl">Related products</h3>
                <p className="text-gray-400 text-sm mt-0.5 font-medium">You might also like these</p>
              </div>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-blue-600 text-sm font-black hover:bg-blue-50 px-4 py-2 rounded-2xl transition-all"
                >
                  View all →
                </motion.button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {relatedProducts.map((p, i) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <Link to={`/product/${p._id}`}>
                    <div className="border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-200 cursor-pointer transition-all duration-300 group">
                      <div className="h-32 bg-gray-50 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={e => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-gray-800 font-black text-sm">${p.price.toFixed(2)}</p>
                        <p className="text-gray-400 text-xs mt-1 line-clamp-2 font-medium">{p.name}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Super Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 rounded-3xl mt-5 p-8 flex items-center justify-between shadow-xl"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '25px 25px'
          }}></div>
          <div className="relative text-white">
            <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Limited time offer</p>
            <h3 className="text-2xl font-black">Super discount on more than 100 USD</h3>
            <p className="text-blue-200 text-sm mt-1 font-medium">Have you ever finally just write dummy info</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-orange-500 text-white px-8 py-3.5 rounded-2xl font-black hover:bg-orange-600 transition-colors shadow-xl whitespace-nowrap"
          >
            Shop now →
          </motion.button>
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;