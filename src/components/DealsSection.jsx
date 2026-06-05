import React from 'react';

const deals = [
  { name: 'Smart watches', discount: '-25%', emoji: '⌚' },
  { name: 'Laptops', discount: '-15%', emoji: '💻' },
  { name: 'GoPro cameras', discount: '-40%', emoji: '📷' },
  { name: 'Headphones', discount: '-25%', emoji: '🎧' },
  { name: 'Canon cameras', discount: '-25%', emoji: '📸' },
];

const DealsSection = () => {
  return (
    <div className="bg-white mx-6 my-4 rounded p-4">
      <div className="flex items-center gap-6">
        
        {/* Left - Title and Timer */}
        <div className="shrink-0 w-40">
          <h3 className="font-semibold text-gray-800">Deals and offers</h3>
          <p className="text-gray-400 text-xs mt-1">Hygiene equipments</p>
          {/* Countdown Timer */}
          <div className="flex gap-1 mt-3">
            {[['04', 'Days'], ['13', 'Hour'], ['34', 'Min'], ['56', 'Sec']].map(([num, label]) => (
              <div key={label} className="bg-gray-800 text-white rounded text-center px-1.5 py-1">
                <div className="text-sm font-bold">{num}</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Cards */}
        <div className="flex gap-4 overflow-x-auto flex-1">
          {deals.map((deal) => (
            <div key={deal.name} className="border rounded p-3 text-center shrink-0 w-36 hover:shadow cursor-pointer">
              <div className="text-4xl mb-2">{deal.emoji}</div>
              <p className="text-sm text-gray-700">{deal.name}</p>
              <span className="mt-1 inline-block bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full">
                {deal.discount}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DealsSection;