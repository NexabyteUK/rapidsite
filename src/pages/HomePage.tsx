import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeroSection,
  FeaturesSection,
  ProcessSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CTASection
} from '../components/sections';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>RapidSite - Build Professional Websites in Minutes</title>
        <meta 
          name="description" 
          content="Create stunning, professional websites without coding. RapidSite makes web development fast, easy, and accessible for everyone." 
        />
        <meta name="keywords" content="website builder, no code, rapid development, professional websites" />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;