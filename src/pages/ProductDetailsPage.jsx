import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const relatedProducts = [
  { id: 1, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '📱' },
  { id: 2, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '⌚' },
  { id: 3, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '🎧' },
  { id: 4, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '👖' },
  { id: 5, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '🫖' },
  { id: 6, name: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', emoji: '🧺' },
];

const youMayLike = [
  { name: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', emoji: '🧥' },
  { name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', emoji: '👔' },
  { name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', emoji: '⌚' },
  { name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', emoji: '🧦' },
  { name: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', emoji: '👕' },
];

const ProductDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [selectedThumb, setSelectedThumb] = useState(0);

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

        {/* Main Product Section */}
        <div className="bg-white rounded p-6 flex gap-6">

          {/* Left - Images */}
          <div className="shrink-0 w-64">
            <div className="border rounded p-4 w-full h-64 flex items-center justify-center text-9xl mb-3">
              👕
            </div>
            <div className="flex gap-2">
              {['👕', '👔', '🥼', '🧥', '👗', '🩱'].map((emoji, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className={`border rounded p-1 text-xl cursor-pointer w-10 h-10 flex items-center justify-center ${selectedThumb === i ? 'border-blue-500' : 'hover:border-gray-400'}`}
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Middle - Product Info */}
          <div className="flex-1">
            <span className="text-green-500 text-sm font-medium">✓ In stock</span>
            <h1 className="text-xl font-semibold text-gray-800 mt-1">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="text-gray-500">9.3</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">32 reviews</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">154 sold</span>
            </div>

            {/* Price Tiers */}
            <div className="flex gap-2 mt-4">
              {[
                { price: '$98.00', range: '50-100 pcs', active: true },
                { price: '$90.00', range: '100-700 pcs', active: false },
                { price: '$78.00', range: '700+ pcs', active: false },
              ].map((tier) => (
                <div key={tier.range} className={`border rounded p-3 text-sm cursor-pointer ${tier.active ? 'border-orange-400 bg-orange-50' : 'hover:border-gray-400'}`}>
                  <p className={`font-bold ${tier.active ? 'text-orange-500' : 'text-gray-800'}`}>{tier.price}</p>
                  <p className="text-gray-400 text-xs">{tier.range}</p>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-2">
              {[
                ['Price', 'Negotiable'],
                ['Type', 'Classic shoes'],
                ['Material', 'Plastic material'],
                ['Design', 'Modern nice'],
                ['Customization', 'Customized logo and design custom packages'],
                ['Protection', 'Refund Policy'],
                ['Warranty', '2 years full warranty'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-2">
                  <span className="text-gray-400 w-28">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Supplier Info */}
          <div className="w-52 shrink-0 border rounded p-4 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-blue-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold">R</div>
              <div>
                <p className="font-semibold text-gray-800">Supplier</p>
                <p className="text-gray-400 text-xs">Guanjoi Trading LLC</p>
              </div>
            </div>
            <hr className="my-3" />
            <div className="space-y-2 text-xs text-gray-600">
              <p>🇩🇪 Germany, Berlin</p>
              <p>✅ Verified Seller</p>
              <p>🌐 Worldwide shipping</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700 mt-4">
              Send inquiry
            </button>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded text-sm hover:bg-blue-50 mt-2">
              Seller's profile
            </button>
            <p className="text-blue-600 text-xs text-center mt-3 cursor-pointer hover:underline">🤍 Save for later</p>
          </div>

        </div>

        {/* Tabs + You May Like */}
        <div className="flex gap-4 mt-4">

          {/* Tabs */}
          <div className="bg-white rounded flex-1">
            <div className="flex border-b">
              {['description', 'reviews', 'shipping', 'about seller'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-3 text-sm font-medium capitalize ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-5 text-sm text-gray-600">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              {/* Specs Table */}
              <table className="w-full border text-sm mb-4">
                <tbody>
                  {[
                    ['Model', '#8786867'],
                    ['Style', 'Classic style'],
                    ['Certificate', 'ISO-898921212'],
                    ['Size', '34mm x 450mm x 19mm'],
                    ['Memory', '36GB RAM'],
                  ].map(([key, val]) => (
                    <tr key={key} className="border-b">
                      <td className="px-4 py-2 text-gray-400 w-32">{key}</td>
                      <td className="px-4 py-2">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Features */}
              <ul className="space-y-1">
                {['Some great feature name here', 'Lorem ipsum dolor sit amet, consectetur', 'Duis aute irure dolor in reprehenderit', 'Some great feature name here'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-gray-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* You May Like */}
          <div className="w-52 shrink-0 bg-white rounded p-4">
            <h4 className="font-semibold text-gray-800 mb-3">You may like</h4>
            <div className="flex flex-col gap-3">
              {youMayLike.map((item) => (
                <div key={item.name} className="flex gap-2 cursor-pointer hover:text-blue-600">
                  <div className="text-3xl">{item.emoji}</div>
                  <div>
                    <p className="text-xs text-gray-700">{item.name}</p>
                    <p className="text-xs text-orange-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Related Products */}
        <div className="bg-white rounded mt-4 p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Related products</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {relatedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="border rounded p-3 hover:shadow cursor-pointer text-center">
                  <div className="text-4xl mb-2">{product.emoji}</div>
                  <p className="text-gray-800 font-semibold text-xs">{product.price}</p>
                  <p className="text-gray-400 text-xs mt-1">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Super Discount Banner */}
        <div className="bg-blue-600 rounded mt-4 p-6 flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-xl font-bold">Super discount on more than 100 USD</h3>
            <p className="text-blue-200 text-sm mt-1">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-orange-400 text-white px-6 py-2.5 rounded hover:bg-orange-500 font-medium">
            Shop now
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;