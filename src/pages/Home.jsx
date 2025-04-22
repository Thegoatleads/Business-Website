// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>The Goat Leads | Premium Business Automation Solutions</title>
        <meta name="description" content="Elevate your business with premium automation solutions for lead generation, review management, and operational excellence. San Diego's elite automation experts." />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="luxury-gradient text-white min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full bg-[url('/assets/images/abstract-bg.jpg')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center space-y-8">
              <div className="inline-block">
                <div className="gold-gradient h-1 w-24 mx-auto mb-6"></div>
              </div>
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Elevate Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]">Business Success</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light">
                Premium automation solutions crafted to generate leads, enhance reputation, and streamline operations
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://calendly.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="luxury-button group"
                >
                  <span className="relative z-10">Book Your Strategy Session</span>
                </a>
                <Link to="/case-studies" className="text-white hover:text-[#bf953f] transition-colors duration-300 flex items-center gap-2">
                  View Success Stories <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="gold-gradient h-1 w-24 mx-auto mb-6"></div>
              <h2 className="section-title">Premium Solutions</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exclusive suite of automation services designed to transform your business operations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="luxury-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Review Growth</h3>
                <p className="text-gray-600 mb-6">Cultivate an impeccable online reputation through our sophisticated review automation system</p>
                <Link to="/services" className="text-[#bf953f] hover:text-[#b38728] transition-colors duration-300 flex items-center gap-2 font-semibold">Explore Service <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span></Link>
              </div>
              <div className="luxury-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Elite Lead Generation</h3>
                <p className="text-gray-600 mb-6">Custom-crafted automation systems that consistently deliver premium clientele to your business</p>
                <Link to="/services" className="text-[#bf953f] hover:text-[#b38728] transition-colors duration-300 flex items-center gap-2 font-semibold">Explore Service <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span></Link>
              </div>
              <div className="luxury-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full luxury-gradient flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm12 12V4l-4 4-4-4v12l4-4 4 4z"></path></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Luxury Booking Platforms</h3>
                <p className="text-gray-600 mb-6">Sophisticated booking systems tailored for high-end property management and hospitality services</p>
                <Link to="/services" className="text-[#bf953f] hover:text-[#b38728] transition-colors duration-300 flex items-center gap-2 font-semibold">Explore Service <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="luxury-gradient py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="gold-gradient h-1 w-24 mx-auto mb-6"></div>
              <h2 className="section-title text-white">Client Success Stories</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">Hear from industry leaders who have transformed their businesses with our solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/10 hover:border-[#bf953f]/30 transition-colors duration-300">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic">"The automation systems The Goat Leads built for my business have completely transformed how we operate. Our lead flow has increased by 300%!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold text-white">John Smith</p>
                    <p className="text-gray-300">Luxury Real Estate Agent</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/10 hover:border-[#bf953f]/30 transition-colors duration-300">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#bf953f]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic">"Their review automation system helped us collect over 100 new positive reviews in just three months. Absolutely revolutionary for our brand!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-bold text-white">Sarah Johnson</p>
                    <p className="text-gray-300">Premium Med Spa Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="gold-gradient h-1 w-24 mx-auto mb-6"></div>
              <h2 className="section-title mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600 mb-12">Schedule your exclusive strategy session and discover how our premium automation solutions can elevate your business to new heights</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://calendly.com/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="luxury-button group"
                >
                  <span className="relative z-10">Book Your Private Consultation</span>
                </a>
                <Link to="/services" className="text-gray-600 hover:text-[#bf953f] transition-colors duration-300 flex items-center gap-2">
                  Explore Our Services <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;