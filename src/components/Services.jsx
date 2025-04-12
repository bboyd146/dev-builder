import React from "react";

const services = [
  {
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity.",
  },
  {
    title: "Responsive Layout",
    description: "Optimized for all devices to ensure accessibility.",
  },
  {
    title: "SEO Optimization",
    description: "Improve your visibility on search engines.",
  },
];

const Services = () => (
  <section className="bg-gray-50 py-16 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Our Services
    </h2>
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
