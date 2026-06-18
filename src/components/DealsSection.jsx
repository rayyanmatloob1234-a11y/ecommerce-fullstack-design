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
    <div className="bg-white mx-4 md:mx-6 my-4 rounded-xl shadow-sm p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">

        {/* Left - Title and Timer */}
        <div className="shrink-0 md:w-40">
          <h3 className="font-bold text-gray-800">Deals and offers</h3>
          <p className="text-gray-400 text-xs mt-1">Hygiene equipments</p>
          <div className="flex gap-1 mt-3">
            {[['04', 'Days'], ['13', 'Hour'], ['34', 'Min'], ['56', 'Sec']].map(([num, label]) => (
              <div key={label} className="bg-gray-800 text-white rounded-lg text-center px-2 py-1">
                <div className="text-sm font-bold">{num}</div>
                <div className="text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Cards */}
        <div className="flex gap-3 overflow-x-auto flex-1 pb-2">
          {deals.map((deal) => (
            <div key={deal.name} className="border rounded-xl p-3 text-center shrink-0 w-32 hover:shadow-md cursor-pointer transition-all">
              <div className="text-4xl mb-2">{deal.emoji}</div>
              <p className="text-sm text-gray-700 font-medium">{deal.name}</p>
              <span className="mt-1 inline-block bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded-full font-semibold">
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