// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    painPoint: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | The Goat Leads - Book Your Free Consultation</title>
        <meta name="description" content="Get in touch with The Goat Leads for powerful business automation solutions. Schedule your free consultation today." />
      </Helmet>

      <main className="py-12 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full bg-[url('/assets/images/abstract-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/10 hover:border-[#bf953f]/30 transition-colors duration-300">
              <div className="gold-gradient h-1 w-24 mb-6"></div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get in Touch</h1>
              <p className="text-gray-300 text-lg mb-8">
                Fill out the form below or schedule a call directly. We'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#bf953f] focus:border-[#bf953f]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#bf953f] focus:border-[#bf953f]"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300">Business Type</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#bf953f] focus:border-[#bf953f]"
                  >
                    <option value="" className="bg-gray-900">Select your business type</option>
                    <option value="realEstate" className="bg-gray-900">Real Estate</option>
                    <option value="airbnb" className="bg-gray-900">Airbnb Host</option>
                    <option value="contractor" className="bg-gray-900">Contractor</option>
                    <option value="medSpa" className="bg-gray-900">Med Spa</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="painPoint" className="block text-sm font-medium text-gray-300">Main Challenge</label>
                  <select
                    id="painPoint"
                    name="painPoint"
                    value={formData.painPoint}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#bf953f] focus:border-[#bf953f]"
                  >
                    <option value="" className="bg-gray-900">Select your main challenge</option>
                    <option value="leadGeneration" className="bg-gray-900">Lead Generation</option>
                    <option value="reviews" className="bg-gray-900">Getting Reviews</option>
                    <option value="booking" className="bg-gray-900">Booking Management</option>
                    <option value="automation" className="bg-gray-900">General Automation</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#bf953f] focus:border-[#bf953f]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="luxury-button group w-full"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/10 hover:border-[#bf953f]/30 transition-colors duration-300">
              <div>
                <div className="gold-gradient h-1 w-24 mb-6"></div>
                <h2 className="text-2xl font-bold mb-4 text-white">Schedule a Call</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Book a free 30-minute consultation to discuss your business needs.
                </p>
                <a
                  href="https://calendly.com/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button group inline-block"
                >
                  <span className="relative z-10">Schedule Now</span>
                </a>
              </div>

              <div>
                <div className="gold-gradient h-1 w-24 mb-6"></div>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-300 text-lg group hover:text-[#bf953f] transition-colors duration-300">
                    <svg className="w-6 h-6 mr-3 text-[#bf953f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@thegoatleads.com
                  </p>
                  <p className="flex items-center text-gray-300 text-lg group hover:text-[#bf953f] transition-colors duration-300">
                    <svg className="w-6 h-6 mr-3 text-[#bf953f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Diego, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;