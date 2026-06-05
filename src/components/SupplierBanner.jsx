import React from 'react';

const SupplierBanner = () => {
  return (
    <div className="mx-6 my-4 bg-blue-500 rounded p-8 flex items-center justify-between">
      
      {/* Left Text */}
      <div className="text-white max-w-sm">
        <h2 className="text-2xl font-bold">An easy way to send requests to all suppliers</h2>
        <p className="mt-2 text-blue-100 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded p-5 w-80 shrink-0">
        <h3 className="font-semibold text-gray-800 mb-3">Send quote to suppliers</h3>
        <input
          type="text"
          placeholder="What item you need?"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none mb-3"
        />
        <textarea
          placeholder="Type more details"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none mb-3 h-20 resize-none"
        />
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="Quantity"
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none"
          />
          <select className="border border-gray-300 rounded px-3 py-2 text-sm outline-none">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Lbs</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
          Send inquiry
        </button>
      </div>

    </div>
  );
}

export default SupplierBanner;