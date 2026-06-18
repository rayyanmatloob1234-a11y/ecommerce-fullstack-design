import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'T-shirts with multiple colors, for men', price: '$10.30', emoji: '👕' },
  { id: 2, name: 'Jeans shorts for men blue color', price: '$10.30', emoji: '🧥' },
  { id: 3, name: 'Brown winter coat medium size', price: '$12.50', emoji: '🥼' },
  { id: 4, name: 'Jeans bag for travel for men', price: '$34.00', emoji: '👜' },
  { id: 5, name: 'Leather wallet', price: '$99.00', emoji: '👛' },
  { id: 6, name: 'Canon camera black, 100x zoom', price: '$9.99', emoji: '📷' },
  { id: 7, name: 'Headset for gaming with mic', price: '$8.99', emoji: '🎧' },
  { id: 8, name: 'Smartwatch silver color modern', price: '$10.30', emoji: '⌚' },
  { id: 9, name: 'Blue wallet for men leather metarfial', price: '$10.30', emoji: '👝' },
  { id: 10, name: 'Jeans bag for travel for men', price: '$80.95', emoji: '🎒' },
];

const RecommendedItems = () => {
  return (
    <div className="mx-4 md:mx-6 my-4 bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-bold text-gray-800 mb-4 text-lg">Recommended items</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-xl p-3 hover:shadow-md cursor-pointer transition-all hover:border-blue-200">
              <div className="text-5xl mb-3 text-center">{product.emoji}</div>
              <p className="text-gray-800 font-bold text-sm">{product.price}</p>
              <p className="text-gray-400 text-xs mt-1">{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecommendedItems;