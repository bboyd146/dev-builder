import React from 'react';

const testimonials = [
  {
    quote:
      'We just needed something clean and easy that made us look legit. Bradley nailed it.',
    author: 'Jane Doe, Local Bakery Owner',
  },
  {
    quote:
      'It’s not just a website — it handles my orders and saves me hours every week.',
    author: 'John Smith, Freelance Photographer',
  },
];

const Testimonials = () => (
  <section className="bg-gray-50 py-16 px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      What Our Clients Say
    </h2>
    <div className="max-w-4xl mx-auto space-y-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
          <p className="text-gray-800 font-semibold">{testimonial.author}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
