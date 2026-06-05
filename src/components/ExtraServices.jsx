import React from 'react';

const services = [
  { title: 'Source from Industry Hubs', emoji: '🏭' },
  { title: 'Customize Your Products', emoji: '🎨' },
  { title: 'Fast, reliable shipping by ocean or air', emoji: '✈️' },
  { title: 'Product monitoring and inspection', emoji: '🔍' },
];

const suppliers = [
  { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
  { country: 'Australia', domain: 'shopname.au', flag: '🇦🇺' },
  { country: 'United States', domain: 'shopname.us', flag: '🇺🇸' },
  { country: 'Russia', domain: 'shopname.ru', flag: '🇷🇺' },
  { country: 'Italy', domain: 'shopname.it', flag: '🇮🇹' },
  { country: 'Denmark', domain: 'shopname.dk', flag: '🇩🇰' },
  { country: 'France', domain: 'shopname.fr', flag: '🇫🇷' },
  { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪' },
  { country: 'China', domain: 'shopname.cn', flag: '🇨🇳' },
  { country: 'Great Britain', domain: 'shopname.uk', flag: '🇬🇧' },
];

const ExtraServices = () => {
  return (
    <div className="mx-6 my-4 flex flex-col gap-4">
      
      {/* Extra Services */}
      <div className="bg-white rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-4">Our extra services</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <div key={service.title} className="border rounded p-4 text-center hover:shadow cursor-pointer">
              <div className="text-4xl mb-2">{service.emoji}</div>
              <p className="text-sm text-gray-700">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers by Region */}
      <div className="bg-white rounded p-4">
        <h3 className="font-semibold text-gray-800 mb-4">Suppliers by region</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {suppliers.map((supplier) => (
            <div key={supplier.domain} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <span className="text-xl">{supplier.flag}</span>
              <div>
                <p className="text-sm text-gray-700">{supplier.country}</p>
                <p className="text-xs text-gray-400">{supplier.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ExtraServices;