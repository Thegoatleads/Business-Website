// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import { generateLocalBusinessSchema, generateServiceSchema, services } from './utils/schema';

function App() {
  const schema = {
    localBusiness: generateLocalBusinessSchema(),
    services: services.map(service => generateServiceSchema(service))
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="The Goat Leads - Business automation solutions for lead generation, review growth, and booking management." />
          <link rel="canonical" href="https://thegoatleads.com" />
        </Helmet>

        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;