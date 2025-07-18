import React from 'react';
import SEO from '../components/SEO';
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

const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer: "Your website will be ready in 7 days. We work fast because we know your business can't wait around for months."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Everything you need: hosting, SSL certificate, security updates, uptime monitoring, and next business day support. Your site's always safe and running smooth."
  },
  {
    question: "Can I update the website myself?",
    answer: "We handle all the technical stuff so you don't have to worry about breaking anything. Need changes? Our Change-Pack service takes care of any updates for £49 per 30-minute block."
  },
  {
    question: "Do you provide the content and images?",
    answer: "You know your business best, so we'll use your content and images. Need help getting it ready? We can point you in the right direction."
  },
  {
    question: "What if I want to cancel?",
    answer: "After your 12 or 18 month commitment, you can cancel anytime with 30 days notice. We'll make sure you get everything you need for a smooth transition."
  },
  {
    question: "How fast do you respond to support requests?",
    answer: "Within 48 hours for all support queries. Need faster response? Our Priority Support add-on gets you replies within 24 hours for £19/month."
  },
  {
    question: "Do I need to have a domain name already?",
    answer: "Most of our clients already have their domain sorted, but if you don't have one yet, no worries - we're happy to help you get the right one. Just let us know and we'll point you in the right direction."
  }
];

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="RapidSite - Your Website Sorted"
        description="Real websites for real businesses, built in 7 days. No stress, no massive bills. 100% done for you from £99/month."
        keywords="website service, website design agency, business website, 7 day delivery, UK web design"
        url="https://rapidsite.nexabyte.co.uk"
        faqItems={faqItems}
      />
      
      <article className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <WhatsIncludedSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </article>
    </>
  );
};

export default HomePage;