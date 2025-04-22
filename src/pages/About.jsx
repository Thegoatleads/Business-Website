// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | The Goat Leads - Led by Noe Nesmith</title>
        <meta name="description" content="Learn about The Goat Leads and our founder Noe Nesmith. We're revolutionizing business automation for SMBs and property managers." />
      </Helmet>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">About The Goat Leads</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to help businesses thrive through powerful automation solutions
            </p>
          </section>

          {/* Founder Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Noe Nesmith</h2>
              <h3 className="text-xl text-gray-600 mb-4">Founder & CEO</h3>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in business automation and digital marketing, Noe founded The Goat Leads with a vision to make powerful automation solutions accessible to businesses of all sizes.
              </p>
              <p className="text-gray-600">
                Having worked with hundreds of businesses across various industries, Noe identified common pain points that could be solved through smart automation, leading to the development of our core service offerings.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg"></div>
          </section>

          {/* Mission Section */}
          <section className="bg-gray-100 p-12 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To empower businesses with automation solutions that drive growth, improve efficiency, and deliver measurable results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600">Continuously developing cutting-edge automation solutions</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Results</h3>
                <p className="text-gray-600">Focused on delivering measurable business outcomes</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Support</h3>
                <p className="text-gray-600">Providing exceptional service and ongoing assistance</p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Choose The Goat Leads?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-gray-600">Our solutions have helped businesses achieve 3-5x growth in leads and reviews</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="text-gray-600">Tailored automation systems designed for your specific business needs</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p className="text-gray-600">Dedicated support team to ensure your success</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Data-Driven</h3>
                <p className="text-gray-600">Regular reporting and analytics to track your ROI</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help automate your growth</p>
            <a 
              href="https://calendly.com/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            >
              Schedule a Call with Noe
            </a>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;