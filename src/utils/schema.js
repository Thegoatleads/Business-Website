// src/utils/schema.js
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Goat Leads",
  "image": "https://example.com/logo.png",
  "description": "The Goat Leads helps local businesses grow through powerful automations that generate leads, increase reviews, and streamline operations.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "url": "https://thegoatleads.com",
  "email": "contact@thegoatleads.com",
  "founder": {
    "@type": "Person",
    "name": "Noe Nesmith"
  }
});

export const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.type,
  "provider": {
    "@type": "LocalBusiness",
    "name": "The Goat Leads"
  },
  "name": service.name,
  "description": service.description,
  "areaServed": {
    "@type": "City",
    "name": "San Diego"
  }
});

export const services = [
  {
    type: "AutomationService",
    name: "Automated Reputation & Review Growth",
    description: "Build a stellar online presence with our automated review collection system."
  },
  {
    type: "MarketingService",
    name: "Custom Lead Generation Systems",
    description: "Attract and convert more qualified leads with our automated systems."
  },
  {
    type: "SoftwareApplication",
    name: "Direct Booking Website Setups",
    description: "Streamline your property management with custom booking solutions."
  }
];