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
    <div className="mx-4 md:mx-6 my-4 flex flex-col gap-4">
      {categories.map((cat) => (
        <div key={cat.title} className={`${cat.color} rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4`}>

          {/* Left - Category Title */}
          <div className="md:w-40 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-0">
            <div>
              <h3 className="font-bold text-gray-800">{cat.title}</h3>
              <div className="text-4xl mt-2 hidden md:block">{cat.image}</div>
            </div>
            <Link to="/products">
              <button className="border border-gray-400 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:bg-white transition">
                Source now
              </button>
            </Link>
          </div>

          {/* Right - Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
            {cat.items.map((item) => (
              <Link to="/products" key={item.name + item.emoji}>
                <div className="bg-white rounded-xl p-3 text-sm hover:shadow-md cursor-pointer transition-all">
                  <div className="text-3xl mb-1">{item.emoji}</div>
                  <p className="text-gray-800 font-semibold">{item.name}</p>
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