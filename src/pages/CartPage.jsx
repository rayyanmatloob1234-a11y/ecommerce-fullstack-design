import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const initialCartItems = [
  { id: 1, name: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: 78.99, qty: 9, emoji: '👕' },
  { id: 2, name: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Best factory LLC', price: 39.00, qty: 3, emoji: '🎒' },
  { id: 3, name: 'T-shirts with multiple colors, for men and lady', size: 'medium', color: 'blue', material: 'Plastic', seller: 'Artel Market', price: 170.50, qty: 1, emoji: '🪔' },
];

const savedItems = [
  { id: 1, name: 'GoPro HERO6 4K Action Camera - Black', price: '$99.50', emoji: '📱' },
  { id: 2, name: 'GoPro HERO6 4K Action Camera - Black', price: '$99.50', emoji: '📷' },
  { id: 3, name: 'GoPro HERO6 4K Action Camera - Black', price: '$99.50', emoji: '⌚' },
  { id: 4, name: 'GoPro HERO6 4K Action Camera - Black', price: '$99.50', emoji: '💻' },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState('');

  const removeItem = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  const removeAll = () => setCartItems([]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">My cart ({cartItems.length})</h2>

        <div className="flex gap-4">

          {/* Left - Cart Items */}
          <div className="flex-1">
            <div className="bg-white rounded p-4 flex flex-col gap-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <div className="text-5xl w-20 h-20 flex items-center justify-center border rounded shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs mt-1">Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                    <p className="text-gray-400 text-xs">Seller: {item.seller}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => removeItem(item.id)} className="text-xs border border-red-400 text-red-400 px-3 py-1 rounded hover:bg-red-50">Remove</button>
                      <button className="text-xs border border-blue-400 text-blue-400 px-3 py-1 rounded hover:bg-blue-50">Save for later</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="font-bold text-gray-800">${item.price.toFixed(2)}</p>
                    <select className="border rounded px-2 py-1 text-sm outline-none">
                      {[1,2,3,4,5,6,7,8,9,10].map(n => (
                        <option key={n} selected={n === item.qty}>Qty: {n}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between mt-3">
              <Link to="/products">
                <button className="bg-blue-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700">
                  ← Back to shop
                </button>
              </Link>
              <button onClick={removeAll} className="text-blue-600 text-sm hover:underline">
                Remove all
              </button>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded mt-4 p-4 flex justify-around text-sm text-gray-600">
              {[
                { icon: '🔒', title: 'Secure payment', sub: 'Have you ever finally just' },
                { icon: '💬', title: 'Customer support', sub: 'Have you ever finally just' },
                { icon: '🚚', title: 'Free delivery', sub: 'Have you ever finally just' },
              ].map(badge => (
                <div key={badge.title} className="flex items-center gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{badge.title}</p>
                    <p className="text-gray-400 text-xs">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Saved for Later */}
            <div className="bg-white rounded mt-4 p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Saved for later</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {savedItems.map(item => (
                  <div key={item.id} className="border rounded p-3 text-center hover:shadow">
                    <div className="text-5xl mb-2">{item.emoji}</div>
                    <p className="font-bold text-gray-800 text-sm">{item.price}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.name}</p>
                    <button className="mt-2 text-blue-600 text-xs hover:underline">🛒 Move to cart</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Super Discount Banner */}
            <div className="bg-blue-600 rounded mt-4 p-6 flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-lg font-bold">Super discount on more than 100 USD</h3>
                <p className="text-blue-200 text-sm mt-1">Have you ever finally just write dummy info</p>
              </div>
              <button className="bg-orange-400 text-white px-6 py-2.5 rounded hover:bg-orange-500 font-medium">
                Shop now
              </button>
            </div>

          </div>

          {/* Right - Order Summary */}
          <div className="w-64 shrink-0">
            <div className="bg-white rounded p-4">
              {/* Coupon */}
              <p className="text-sm font-medium text-gray-700 mb-2">Have a coupon?</p>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add coupon"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  className="flex-1 border rounded px-3 py-1.5 text-sm outline-none"
                />
                <button className="text-blue-600 text-sm font-medium hover:underline">Apply</button>
              </div>

              <hr className="mb-4" />

              {/* Summary */}
              <div className="text-sm space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount:</span>
                  <span className="text-red-500">- ${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span className="text-green-500">+ ${tax.toFixed(2)}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-bold text-gray-800">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded mt-4 font-medium hover:bg-green-600">
                Checkout
              </button>

              {/* Payment Icons */}
              <div className="flex justify-center gap-2 mt-3 text-2xl">
                <span>💳</span>
                <span>🔴</span>
                <span>🔵</span>
                <span>💙</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;