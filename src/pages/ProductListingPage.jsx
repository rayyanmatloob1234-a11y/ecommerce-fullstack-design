import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Canon Camera EOS 2000, Black 10x zoom', price: 998.00, oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', emoji: '📷' },
  { id: 2, name: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', emoji: '📸' },
  { id: 3, name: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', emoji: '💻' },
  { id: 4, name: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', emoji: '⌚' },
  { id: 5, name: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: 1128.00, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', emoji: '📱' },
  { id: 6, name: 'GoPro HERO6 4K Action Camera - Black', price: 998.00, oldPrice: null, rating: 7.5, orders: 154, shipping: 'Free Shipping', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', emoji: '🎧' },
];

const ProductListingPage = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-4">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt;
          <span className="mx-1">Clothings</span> &gt;
          <span className="mx-1">Men's wear</span> &gt;
          <span className="mx-1 text-gray-800">Summer clothing</span>
        </div>

        <div className="flex gap-4">
          
          {/* Left Sidebar */}
          <div className="w-52 shrink-0 flex flex-col gap-4">
            
            {/* Category */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Category <span>▲</span></h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'].map(cat => (
                  <li key={cat} className="hover:text-blue-600 cursor-pointer">{cat}</li>
                ))}
                <li className="text-blue-600 cursor-pointer">See all</li>
              </ul>
            </div>

            {/* Brands */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Brands <span>▲</span></h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map(brand => (
                  <li key={brand} className="flex items-center gap-2">
                    <input type="checkbox" className="cursor-pointer" />
                    <span>{brand}</span>
                  </li>
                ))}
                <li className="text-blue-600 cursor-pointer">See all</li>
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Features <span>▲</span></h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <input type="checkbox" className="cursor-pointer" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="text-blue-600 cursor-pointer">See all</li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Price range <span>▲</span></h4>
              <div className="flex gap-2 mb-2">
                <input type="number" placeholder="Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="w-full border rounded px-2 py-1 text-sm outline-none" />
                <input type="number" placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="w-full border rounded px-2 py-1 text-sm outline-none" />
              </div>
              <button className="w-full bg-blue-600 text-white py-1.5 rounded text-sm hover:bg-blue-700">Apply</button>
            </div>

            {/* Condition */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Condition <span>▲</span></h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {['Any', 'Refurbished', 'Brand new', 'Old items'].map(cond => (
                  <li key={cond} className="flex items-center gap-2">
                    <input type="radio" name="condition" className="cursor-pointer" />
                    <span>{cond}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded p-4">
              <h4 className="font-semibold text-gray-800 mb-3 flex justify-between">Ratings <span>▲</span></h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {[5, 4, 3, 2].map(rating => (
                  <li key={rating} className="flex items-center gap-2">
                    <input type="checkbox" className="cursor-pointer" />
                    <span className="text-yellow-400">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right - Product List */}
          <div className="flex-1">
            
            {/* Top Bar */}
            <div className="bg-white rounded p-3 flex items-center justify-between mb-4 text-sm">
              <span className="text-gray-600"><strong>12,911 items</strong> in Mobile accessory</span>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="text-blue-600" defaultChecked />
                  <span>Verified only</span>
                </label>
                <select className="border rounded px-2 py-1 outline-none text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product List */}
            <div className="flex flex-col gap-3">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded p-4 flex gap-4 hover:shadow">
                  <div className="text-7xl w-32 h-32 flex items-center justify-center border rounded shrink-0">
                    {product.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      {product.oldPrice && <span className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</span>}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      <span className="text-yellow-400">★★★★☆</span>
                      <span className="text-gray-500">{product.rating}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">{product.orders} orders</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-green-500">{product.shipping}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{product.description}</p>
                    <Link to={`/product/${product.id}`} className="text-blue-600 text-sm mt-1 inline-block hover:underline">View details</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white rounded p-3 mt-4 flex items-center justify-end gap-2 text-sm">
              <select className="border rounded px-2 py-1 outline-none">
                <option>Show 10</option>
                <option>Show 20</option>
              </select>
              <button className="px-2 py-1 border rounded hover:bg-gray-100">‹</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
              <button className="px-2 py-1 border rounded hover:bg-gray-100">›</button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListingPage;