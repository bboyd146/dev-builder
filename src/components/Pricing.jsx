import React, { useState } from "react";

const Pricing = ({ onPackageSelect }) => {
  const packages = [
    {
      title: "Starter",
      price: "$400",
      features: [
        "1-page website",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
      ],
    },
    {
      title: "Growth",
      price: "$750",
      features: [
        "Up to 5 pages",
        "Mobile responsive",
        "Contact form",
        "Basic SEO setup",
        "Google Maps integration",
      ],
    },
    {
      title: "Pro",
      price: "$1200",
      features: [
        "Up to 10 pages",
        "Advanced SEO",
        "Blog integration",
        "E-commerce ready",
        "Monthly maintenance (3 mo)",
      ],
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const selectPackage = (title) => {
    const updated = title === selectedPackage ? null : title;
    setSelectedPackage(updated);
    if (onPackageSelect) {
      onPackageSelect(updated);
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Website Packages
        </h2>
        <p className="text-gray-600 mb-10">
          Choose the right package for your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => {
            const isSelected = selectedPackage === pkg.title;
            return (
              <div
                key={idx}
                className={`bg-gray-50 rounded-xl shadow-md p-6 text-left border-2 transition ${
                  isSelected ? "border-indigo-600" : "border-transparent"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-indigo-600 text-xl font-medium mt-2">
                  {pkg.price}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-4 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  onClick={() => selectPackage(pkg.title)}
                  className={`mt-2 px-4 py-2 rounded-md w-full ${
                    isSelected
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition`}
                >
                  {isSelected ? "Selected" : "Select Package"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
