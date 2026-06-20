import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const initialCartItems = [
  { id: 1, name: 'T-shirts with multiple colors, for men and lady', size: 'Medium', color: 'Blue', material: 'Cotton', seller: 'Artel Market', price: 78.99, qty: 2, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200' },
  { id: 2, name: 'Nike Running Shoes Air Max', size: '42', color: 'White', material: 'Mesh', seller: 'Best Factory LLC', price: 129.00, qty: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200' },
  { id: 3, name: 'Apple iPhone 13 Pro', size: '256GB', color: 'Space Gray', material: 'Titanium', seller: 'Artel Market', price: 999.00, qty: 1, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=200' },
];

const savedItems = [
  { id: 1, name: 'Sony WH-1000XM4 Headphones', price: '$349.00', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200' },
  { id: 2, name: 'Apple Watch Series 7', price: '$399.00', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200' },
  { id: 3, name: 'Dell XPS 13 Laptop', price: '$1099.00', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=200' },
  { id: 4, name: 'Canon Camera EOS 2000', price: '$998.00', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200' },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'save10') {
      setCouponApplied(true);
      toast.success('Coupon applied! 10% off 🎉');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-2xl font-black text-gray-800">My cart</h2>
            <p className="text-gray-400 text-sm font-medium mt-0.5">{cartItems.length} items in your cart</p>
          </div>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 text-blue-600 font-black text-sm hover:bg-blue-50 px-4 py-2 rounded-2xl transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Continue shopping
            </motion.button>
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5">

          {/* Left - Cart Items */}
          <div className="flex-1">

            {/* Cart Items */}
            <div className="bg-white rounded-3xl shadow-card border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-black text-gray-800">Order items</h3>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setCartItems([]);
                    toast.success('Cart cleared');
                  }}
                  className="text-red-400 text-sm font-bold hover:text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-xl transition-all"
                >
                  Remove all
                </motion.button>
              </div>

              <AnimatePresence>
                {cartItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="font-black text-gray-800 text-xl">Your cart is empty</h3>
                    <p className="text-gray-400 mt-2 font-medium">Add some products to get started</p>
                    <Link to="/products">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                      >
                        Browse products
                      </motion.button>
                    </Link>
                  </motion.div>
                ) : (
                  cartItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-4 p-5 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors group"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={e => e.target.src = 'https://via.placeholder.com/200'}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-800 font-black text-sm line-clamp-1">{item.name}</h4>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                          {[['Size', item.size], ['Color', item.color], ['Material', item.material]].map(([k, v]) => (
                            <span key={k} className="text-xs text-gray-400 font-semibold bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-100">
                              {k}: {v}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-1 font-medium">Seller: {item.seller}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-red-400 font-bold hover:text-red-500 flex items-center gap-1"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Remove
                          </motion.button>
                          <span className="text-gray-200">•</span>
                          <button className="text-xs text-blue-500 font-bold hover:text-blue-600">Save for later</button>
                        </div>
                      </div>

                      {/* Price & Qty */}
                      <div className="flex flex-col items-end gap-3 shrink-0">
                        <span className="font-black text-gray-900 text-lg">${(item.price * item.qty).toFixed(2)}</span>
                        <div className="flex items-center border-2 border-gray-100 rounded-2xl overflow-hidden">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 font-black transition-colors"
                          >
                            −
                          </motion.button>
                          <span className="px-3 py-1.5 border-x-2 border-gray-100 font-black text-gray-800 min-w-[36px] text-center text-sm">{item.qty}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 font-black transition-colors"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-card mt-4 p-5 border border-gray-100"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '🔒', title: 'Secure payment', desc: 'Your data is protected' },
                  { icon: '💬', title: 'Customer support', desc: '24/7 help available' },
                  { icon: '🚚', title: 'Free delivery', desc: 'On orders over $100' },
                ].map(badge => (
                  <div key={badge.title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm border border-gray-100 shrink-0">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="font-black text-gray-800 text-xs">{badge.title}</p>
                      <p className="text-gray-400 text-xs font-medium mt-0.5">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Saved for Later */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-card mt-4 p-6 border border-gray-100"
            >
              <h3 className="font-black text-gray-800 text-lg mb-5">Saved for later</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {savedItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                  >
                    <div className="h-32 bg-gray-50 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={e => e.target.src = 'https://via.placeholder.com/200'}
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-black text-gray-800 text-sm">{item.price}</p>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2 font-medium">{item.name}</p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toast.success('Moved to cart! 🛒')}
                        className="mt-2 w-full text-blue-600 text-xs font-black hover:bg-blue-50 py-1.5 rounded-xl transition-all border border-blue-100 flex items-center justify-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Move to cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Super Discount Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-600 rounded-3xl mt-4 p-6 flex items-center justify-between shadow-xl"
            >
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '25px 25px'
              }}></div>
              <div className="relative text-white">
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Limited offer</p>
                <h3 className="text-xl font-black">Super discount on more than 100 USD</h3>
                <p className="text-blue-200 text-sm mt-1 font-medium">Use code: SAVE10 for 10% off</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCoupon('SAVE10');
                  toast.success('Code copied! Apply it in checkout 🎉');
                }}
                className="relative bg-orange-500 text-white px-6 py-3 rounded-2xl font-black hover:bg-orange-600 transition-colors shadow-xl whitespace-nowrap text-sm"
              >
                Copy code →
              </motion.button>
            </motion.div>

          </div>

          {/* Right - Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-80 shrink-0"
          >
            <div className="bg-white rounded-3xl shadow-card p-6 border border-gray-100 sticky top-24">
              <h3 className="font-black text-gray-800 text-lg mb-5">Order summary</h3>

              {/* Coupon */}
              <div className="mb-5">
                <p className="text-sm font-bold text-gray-700 mb-2">Have a coupon?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    className="flex-1 border-2 border-gray-100 rounded-2xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 transition-colors font-medium"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={applyCoupon}
                    className="bg-blue-600 text-white px-4 py-2.5 rounded-2xl text-sm font-black hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                  >
                    Apply
                  </motion.button>
                </div>
                {couponApplied && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-2 text-green-600 text-xs font-bold"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Coupon applied successfully!
                  </motion.div>
                )}
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* Summary */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between font-semibold text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {couponApplied && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between font-bold text-green-600"
                  >
                    <span>Discount (10%)</span>
                    <span>- ${discount.toFixed(2)}</span>
                  </motion.div>
                )}
                <div className="flex justify-between font-semibold text-gray-600">
                  <span>Tax (5%)</span>
                  <span>+ ${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-green-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <hr className="border-gray-100 my-5" />

              <div className="flex justify-between font-black text-gray-800 text-xl">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toast.success('Proceeding to checkout! 🎉')}
                className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-black hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-200 flex items-center justify-center gap-2 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Checkout
              </motion.button>

              {/* Payment Icons */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400 font-semibold mb-2">We accept</p>
                <div className="flex justify-center gap-2">
                  {['💳', '🏦', '📱', '💰'].map((icon, i) => (
                    <div key={i} className="w-10 h-7 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-sm">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Note */}
              <div className="mt-4 p-3 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <p className="text-xs text-blue-600 font-bold">🔒 256-bit SSL secure checkout</p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;