import React from 'react';

const packages = [
  {
    name: 'Starter',
    price: '$1,500 – $2,500',
    features: [
      'Custom responsive design',
      'Up to 5 pages',
      'Basic contact form',
      'Social media integration',
      '1 round of revisions',
    ],
  },
  {
    name: 'Growth',
    price: '$4,000 – $6,000',
    features: [
      'Everything in Starter',
      'Advanced forms with file upload',
      'Online payments integration',
      'Booking calendar',
      'Admin dashboard',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Pro',
    price: '$8,000 – $15,000',
    features: [
      'Everything in Growth',
      'User login & dashboards',
      'Order history & notifications',
      'Custom admin panel',
      '3+ months support',
      '3+ rounds of revisions',
    ],
  },
];

const Pricing = () => (
  <section className="bg-white py-16 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Pricing Packages
    </h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <div key={index} className="border rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            {pkg.name}
          </h3>
          <p className="text-2xl font-bold text-gray-800 mb-4">{pkg.price}</p>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            {pkg.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
