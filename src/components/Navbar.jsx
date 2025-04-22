// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">The Goat Leads</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-gray-900">Case Studies</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Services</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</Link>
              <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Case Studies</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;