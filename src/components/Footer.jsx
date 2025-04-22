// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Goat Leads</h3>
            <p className="text-gray-400">Empowering businesses with powerful automation solutions</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Review Automation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Lead Generation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Booking Websites</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">San Diego, CA</p>
            <a href="mailto:contact@thegoatleads.com" className="text-gray-400 hover:text-white">contact@thegoatleads.com</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} The Goat Leads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;