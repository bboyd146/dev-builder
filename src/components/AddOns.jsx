import React, { useState } from 'react';

const AddOns = ({ onSelectionChange }) => {
  const addons = [
    { title: 'SEO Optimization', price: '$150', description: 'Boost your site’s visibility on Google.' },
    { title: 'Logo Design', price: '$100', description: 'Custom logo tailored to your brand identity.' },
    { title: 'Monthly Maintenance', price: '$50/mo', description: 'We handle updates, backups & security.' },
    { title: 'Copywriting', price: '$75', description: 'Professional content written for your site.' },
  ];

  const [selected, setSelected] = useState([]);

  const toggleAddOn = (title) => {
    let updated;
    if (selected.includes(title)) {
      updated = selected.filter((item) => item !== title);
    } else {
      updated = [...selected, title];
    }
    setSelected(updated);
    if (onSelectionChange) {
      onSelectionChange(updated); // Pass selections to parent
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Optional Add-Ons</h2>
        <p className="text-gray-600 mb-10">Enhance your site with these additional services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {addons.map((addon, idx) => {
            const isSelected = selected.includes(addon.title);
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-md p-6 text-left border-2 transition ${
                  isSelected ? 'border-indigo-600' : 'border-transparent'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{addon.title}</h3>
                <p className="text-indigo-600 font-medium mt-1">{addon.price}</p>
                <p className="text-gray-500 text-sm mt-2">{addon.description}</p>
                <button
                  onClick={() => toggleAddOn(addon.title)}
                  className={`mt-4 px-4 py-2 rounded-md w-full ${
                    isSelected
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition`}
                >
                  {isSelected ? 'Selected' : 'Request This'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
