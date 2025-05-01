import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ selectedAddOns, selectedPackage }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // <- your EmailJS service ID
        "YOUR_TEMPLATE_ID", // <- your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // <- your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="bg-white py-16 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Let's Get Started
        </h2>
        <p className="text-gray-600 mb-10">
          Fill out the form below and we'll get back to you!
        </p>

        <form ref={form} onSubmit={sendEmail} className="text-left space-y-6">
          {/* Show Selected Package */}
          {selectedPackage && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4">
              <p className="text-sm font-medium text-indigo-600 mb-1">
                Selected Package:
              </p>
              <p className="text-gray-700 text-sm">{selectedPackage}</p>
              <input
                type="hidden"
                name="selected_package"
                value={selectedPackage}
              />
            </div>
          )}

          {/* Show Selected Add-Ons */}
          {selectedAddOns.length > 0 && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4">
              <p className="text-sm font-medium text-indigo-600 mb-1">
                Selected Add-Ons:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {selectedAddOns.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <input
                type="hidden"
                name="selected_addons"
                value={selectedAddOns.join(", ")}
              />
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-indigo-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-indigo-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
