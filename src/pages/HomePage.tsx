import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeroSection,
  FeaturesSection,
  WhatsIncludedSection,
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
        <title>RapidSite - Your Professional Website, Sorted</title>
        <meta 
          name="description" 
          content="Real websites for real businesses, built in 7 days. No stress, no massive bills. 100% done for you from £99/month." 
        />
        <meta name="keywords" content="professional website service, website design agency, business website, 7 day delivery, UK web design" />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <WhatsIncludedSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;