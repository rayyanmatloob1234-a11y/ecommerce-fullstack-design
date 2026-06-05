import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Home and outdoor',
    image: '🌿',
    color: 'bg-orange-50',
    items: [
      { name: 'Soft chairs', price: 'From USD 19', emoji: '🪑' },
      { name: 'Sofa & chair', price: 'From USD 19', emoji: '🛋' },
      { name: 'Kitchen dishes', price: 'From USD 19', emoji: '🍽' },
      { name: 'Smart watches', price: 'From USD 19', emoji: '⌚' },
      { name: 'Kitchen mixer', price: 'From USD 100', emoji: '🥣' },
      { name: 'Blenders', price: 'From USD 39', emoji: '🫙' },
      { name: 'Home appliance', price: 'From USD 19', emoji: '🏠' },
      { name: 'Coffee maker', price: 'From USD 10', emoji: '☕' },
    ],
  },
  {
    title: 'Consumer electronics and gadgets',
    image: '📱',
    color: 'bg-blue-50',
    items: [
      { name: 'Smart watches', price: 'From USD 19', emoji: '⌚' },
      { name: 'Cameras', price: 'From USD 89', emoji: '📷' },
      { name: 'Headphones', price: 'From USD 10', emoji: '🎧' },
      { name: 'Smart watches', price: 'From USD 90', emoji: '⌚' },
      { name: 'Gaming set', price: 'From USD 35', emoji: '🎮' },
      { name: 'Laptops & PC', price: 'From USD 340', emoji: '💻' },
      { name: 'Smartphones', price: 'From USD 19', emoji: '📱' },
      { name: 'Electric kettle', price: 'From USD 240', emoji: '🫖' },
    ],
  },
];

const CategorySection = () => {
  return (
    <div className="mx-6 my-4 flex flex-col gap-4">
      {categories.map((cat) => (
        <div key={cat.title} className={`${cat.color} rounded p-4 flex gap-4`}>
          
          {/* Left - Category Title */}
          <div className="w-40 shrink-0 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">{cat.title}</h3>
              <div className="text-5xl mt-3">{cat.image}</div>
            </div>
            <Link to="/products">
              <button className="mt-4 border border-gray-400 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-white">
                Source now
              </button>
            </Link>
          </div>

          {/* Right - Product Grid */}
          <div className="grid grid-cols-4 gap-3 flex-1">
            {cat.items.map((item) => (
              <Link to="/products" key={item.name}>
                <div className="bg-white rounded p-3 text-sm hover:shadow cursor-pointer">
                  <div className="text-3xl mb-1">{item.emoji}</div>
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default CategorySection;