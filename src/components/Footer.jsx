import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Your Web Studio</h2>
          <p className="text-sm text-gray-400">Helping small businesses build their web presence.</p>
        </div>
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn />
          </a>
        </div>
        
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Web Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
