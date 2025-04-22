// src/pages/Services.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | The Goat Leads - Business Automation Solutions</title>
        <meta name="description" content="Discover our automation services: review growth, lead generation, and booking website solutions. Transform your business with The Goat Leads." />
      </Helmet>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

          {/* Service 1 */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Automated Reputation & Review Growth</h2>
                <p className="text-gray-600 mb-4">Build a stellar online presence with our automated review collection system.</p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  <li>Automated review request timing</li>
                  <li>Smart follow-up sequences</li>
                  <li>Review monitoring and management</li>
                  <li>Detailed analytics and reporting</li>
                </ul>
                <p className="text-lg font-semibold">Starting at $299/month</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Perfect for:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Service-based businesses</li>
                  <li>• Restaurants and retail</li>
                  <li>• Healthcare providers</li>
                  <li>• Professional services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service 2 */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Custom Lead Generation Systems</h2>
                <p className="text-gray-600 mb-4">Attract and convert more qualified leads with our automated systems.</p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  <li>Multi-channel lead capture</li>
                  <li>Automated follow-up sequences</li>
                  <li>Lead scoring and qualification</li>
                  <li>CRM integration</li>
                </ul>
                <p className="text-lg font-semibold">Starting at $499/month</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Perfect for:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real estate agents</li>
                  <li>• Marketing agencies</li>
                  <li>• Home service contractors</li>
                  <li>• Financial services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service 3 */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Direct Booking Website Setups</h2>
                <p className="text-gray-600 mb-4">Streamline your property management with custom booking solutions.</p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  <li>Custom website development</li>
                  <li>Booking system integration</li>
                  <li>Payment processing setup</li>
                  <li>Property management tools</li>
                </ul>
                <p className="text-lg font-semibold">Starting at $1,499</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Perfect for:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Airbnb hosts</li>
                  <li>• Property managers</li>
                  <li>• Vacation rental owners</li>
                  <li>• Remote landlords</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">Book a free consultation to discuss your needs</p>
            <a 
              href="https://calendly.com/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Schedule Your Free Consultation
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default Services;