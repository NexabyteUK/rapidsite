import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section, Grid, PlanCard, Button, Heading } from '../components/ui'

const plans = [
  {
    name: "Boost",
    price: 109,
    term: "12 month",
    features: [
      "7-day build",
      "Hosting included",
      "SSL certificate",
      "Next business day support",
      "Security updates",
      "Global edge hosting"
    ],
    isPopular: true
  },
  {
    name: "Grow",
    price: 99,
    term: "18 month",
    features: [
      "7-day build",
      "Hosting included",
      "SSL certificate",
      "Next business day support",
      "Security updates",
      "Global edge hosting"
    ]
  }
]

const comparisonFeatures = [
  { category: "Website Features", features: [
    { name: "Number of Pages", starter: "Up to 5", business: "Up to 10", enterprise: "Unlimited" },
    { name: "Mobile Responsive", starter: true, business: true, enterprise: true },
    { name: "Custom Design", starter: true, business: true, enterprise: true },
    { name: "Content Management", starter: "Basic", business: "Advanced", enterprise: "Full CMS" },
    { name: "Blog Functionality", starter: false, business: true, enterprise: true },
    { name: "E-commerce", starter: false, business: "Basic", enterprise: "Advanced" }
  ]},
  { category: "Technical Features", features: [
    { name: "SSL Certificate", starter: true, business: true, enterprise: true },
    { name: "CDN Hosting", starter: true, business: true, enterprise: true },
    { name: "Daily Backups", starter: true, business: true, enterprise: true },
    { name: "Uptime Guarantee", starter: "99.9%", business: "99.9%", enterprise: "99.99%" },
    { name: "Page Speed Optimization", starter: "Basic", business: "Advanced", enterprise: "Premium" },
    { name: "Custom Domain", starter: true, business: true, enterprise: true }
  ]},
  { category: "Marketing & SEO", features: [
    { name: "SEO Optimization", starter: "Basic", business: "Advanced", enterprise: "Premium" },
    { name: "Google Analytics", starter: false, business: true, enterprise: true },
    { name: "Social Media Integration", starter: "Basic", business: "Full", enterprise: "Full" },
    { name: "Email Marketing Tools", starter: false, business: "Basic", enterprise: "Advanced" },
    { name: "A/B Testing", starter: false, business: false, enterprise: true },
    { name: "Conversion Tracking", starter: false, business: true, enterprise: true }
  ]},
  { category: "Support & Service", features: [
    { name: "Email Support", starter: true, business: true, enterprise: true },
    { name: "Phone Support", starter: false, business: true, enterprise: true },
    { name: "Response Time", starter: "48 hours", business: "24 hours", enterprise: "2 hours" },
    { name: "Monthly Updates", starter: true, business: true, enterprise: true },
    { name: "Training Sessions", starter: "1 hour", business: "3 hours", enterprise: "Unlimited" },
    { name: "Account Manager", starter: false, business: false, enterprise: true }
  ]}
]

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - RapidSite</title>
        <meta 
          name="description" 
          content="Simple, transparent pricing for RapidSite. Choose the plan that fits your needs and start building today." 
        />
        <meta name="keywords" content="pricing, plans, subscription, website builder pricing" />
      </Helmet>
      
      <Section padding="sm">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Choose Your Perfect Plan
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            All plans include hosting, SSL, maintenance, and support. No hidden fees, ever.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} className="mb-16">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </Grid>

        <div className="text-center mb-16">
          <p className="font-body text-gray-600 mb-4">
            All prices exclude VAT. Minimum 12-month term applies.
          </p>
          <Button as="link" href="/contact" size="lg">
            Get Started Today
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Detailed Feature Comparison
          </Heading>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {comparisonFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-heading font-semibold text-lg text-brand-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 py-4">
                      <div className="font-body text-gray-700">
                        {feature.name}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.starter)}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.business)}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(feature.enterprise)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 sticky bottom-0 bg-gray-50 p-4 rounded-lg">
            <div></div>
            <div className="text-center">
              <Button as="link" href="/contact" variant="outline" fullWidth>
                Choose Starter
              </Button>
            </div>
            <div className="text-center">
              <Button as="link" href="/contact" fullWidth>
                Choose Business
              </Button>
            </div>
            <div className="text-center">
              <Button as="link" href="/contact" variant="secondary" fullWidth>
                Choose Enterprise
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heading as="h2" size="3xl" className="text-white mb-4">
            Need a Custom Solution?
          </Heading>
          <p className="font-body text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We can create a tailored package that perfectly fits your business needs and budget.
          </p>
          <Button 
            as="link" 
            href="/contact" 
            size="lg" 
            variant="secondary"
          >
            Get Custom Quote
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Frequently Asked Questions
          </Heading>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                What happens after the minimum term?
              </h3>
              <p className="font-body text-gray-600">
                After your 12-month minimum term, your subscription continues on a rolling monthly basis. 
                You can cancel anytime with 30 days notice.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="font-body text-gray-600">
                Yes! You can upgrade your plan at any time. Downgrades can be processed at the end of your current billing period.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                Do you offer discounts for annual payment?
              </h3>
              <p className="font-body text-gray-600">
                Yes, we offer a 10% discount when you pay annually in advance. Contact us to learn more about annual pricing options.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="font-body text-gray-600">
                We accept all major credit cards, debit cards, and bank transfers. We also support Direct Debit for UK businesses.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="font-body text-gray-600 mb-4">
              Have more questions? We're here to help.
            </p>
            <Button as="link" href="/contact" variant="outline">
              Contact Support
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

function renderFeatureValue(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value ? (
      <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
  return <span className="font-body text-gray-700">{value}</span>
}

export default PricingPage