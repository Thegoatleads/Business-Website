// src/pages/CaseStudies.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Case Studies | The Goat Leads - Client Success Stories</title>
        <meta name="description" content="See real results from our automation solutions. Case studies showing how we've helped businesses grow through automation." />
      </Helmet>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Client Success Stories</h1>

          {/* Case Study 1 */}
          <section className="mb-16">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Local Real Estate Agency Triples Lead Generation</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Challenge</h3>
                    <p className="text-gray-600">Struggling to generate consistent qualified leads for luxury properties</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Solution</h3>
                    <p className="text-gray-600">Implemented automated lead generation system with property-specific landing pages</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Results</h3>
                    <p className="text-gray-600">300% increase in qualified leads within 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 2 */}
          <section className="mb-16">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Med Spa Achieves 5-Star Review Status</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Challenge</h3>
                    <p className="text-gray-600">Limited online reviews and difficulty managing reputation</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Solution</h3>
                    <p className="text-gray-600">Deployed automated review collection system with smart timing</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Results</h3>
                    <p className="text-gray-600">100+ new 5-star reviews in 3 months</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study 3 */}
          <section className="mb-16">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Airbnb Host Increases Direct Bookings by 200%</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Challenge</h3>
                    <p className="text-gray-600">Heavy reliance on third-party platforms and high commission fees</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Solution</h3>
                    <p className="text-gray-600">Created custom booking website with automated management system</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Results</h3>
                    <p className="text-gray-600">200% increase in direct bookings, 25% reduction in fees</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gray-100 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our Impact in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Businesses Helped</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">10,000+</p>
                <p className="text-gray-600">Reviews Generated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">300%</p>
                <p className="text-gray-600">Average Lead Increase</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-600 mb-8">Schedule a free consultation to discuss your business goals</p>
            <a 
              href="https://calendly.com/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Book Your Strategy Call
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default CaseStudies;