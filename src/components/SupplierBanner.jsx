import React from 'react';

const SupplierBanner = () => {
  return (
    <div className="mx-4 md:mx-6 my-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* Left Text */}
      <div className="text-white max-w-sm text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
          An easy way to send requests to all suppliers
        </h2>
        <p className="mt-2 text-blue-100 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-xl p-5 w-full md:w-80 shrink-0 shadow-lg">
        <h3 className="font-bold text-gray-800 mb-3">Send quote to suppliers</h3>
        <input
          type="text"
          placeholder="What item you need?"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none mb-3 focus:border-blue-400 transition"
        />
        <textarea
          placeholder="Type more details"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none mb-3 h-20 resize-none focus:border-blue-400 transition"
        />
        <div className="flex gap-2 mb-3">
          <input
            type="number"
            placeholder="Quantity"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 transition"
          />
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Lbs</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow">
          Send inquiry
        </button>
      </div>

    </div>
  );
}

export default SupplierBanner;