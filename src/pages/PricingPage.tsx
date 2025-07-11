import React from 'react'
import SEO from '../components/SEO'
import { Section, Grid, PlanCard, Button, Heading } from '../components/ui'
import PromotionalBanner from '../components/ui/PromotionalBanner'

const plans = [
  {
    name: "Boost",
    price: 109,
    promotionalPrice: 87.20,
    promotionalLabel: "20% OFF",
    promotionalSavings: 21.80,
    term: "12 month",
    features: [
      "Your website built in 7 days",
      "Optimised for mobile, tablet & computer",
      "All hosting costs covered",
      "Custom contact form",
      "Secure connection (HTTPS)",
      "On-hand support",
      "Kept safe and up-to-date",
      "Fast loading worldwide",
      "100% done for you - no stress"
    ],
    isPopular: true
  },
  {
    name: "Grow",
    price: 99,
    promotionalPrice: 79.20,
    promotionalLabel: "20% OFF",
    promotionalSavings: 19.80,
    term: "18 month",
    features: [
      "Your website built in 7 days",
      "Optimised for mobile, tablet & computer",
      "All hosting costs covered",
      "Custom contact form", 
      "Secure connection (HTTPS)",
      "On-hand support",
      "Kept safe and up-to-date",
      "Fast loading worldwide",
      "100% done for you - no stress"
    ]
  }
]

const addOnServices = [
  {
    name: "Change-Pack",
    price: "£49 per 30-minute block",
    description: "Need to update your website? We'll make any changes you need, quickly and professionally.",
    features: [
      "Update your content anytime",
      "Add or change photos", 
      "Adjust how things look",
      "Add new pages",
      "Any tweaks you want"
    ]
  },
  {
    name: "Priority Support", 
    price: "£19/month",
    description: "Jump the queue when you need help. Get faster responses when something urgent comes up.",
    features: [
      "Sub 24 hour response time",
      "Access your tickets anytime",
      "Complete Peace of mind"
    ]
  }
]

const PricingPage: React.FC = () => {
  return (
    <>
      <PromotionalBanner />
      <SEO 
        title="Summer Sale: 20% Off All Plans - RapidSite Pricing"
        description="Limited time: 20% off all RapidSite plans! Simple, transparent pricing for professional websites. Summer promotion ends September 22, 2025."
        keywords="pricing, plans, subscription, website builder pricing"
        url="https://rapidsite.nexabyte.co.uk/pricing"
      />
      
      <Section padding="sm" className="pt-28 md:pt-32">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Pick What Works for You
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Everything included. No nasty surprises. Cancel anytime after 12 months.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto">
          <Grid cols={{ mobile: 1, tablet: 2 }} className="mb-16">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </Grid>
        </div>

        <div className="text-center mb-16">
          <p className="font-body text-gray-600 mb-4">
            12-month minimum, then month-to-month.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-heading text-lg font-bold text-orange-800 mb-3 text-center">
              🌞 Summer Promotion Terms
            </h3>
            <div className="text-sm space-y-2 text-gray-700">
              <p>
                <strong>20% discount</strong> applies to monthly price for the full duration of your fixed-term contract.
              </p>
              <p>
                <strong>Valid until:</strong> September 22, 2025 • <strong>Plans:</strong> Boost (12-month) & Grow (18-month)
              </p>
              <p className="text-xs text-gray-600 italic text-center mt-3">
                Discount applied to your invoices. No hidden fees.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Need Something Extra?
          </Heading>
          <p className="font-body text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Both plans include everything you need. Want more? Here are our add-on services.
          </p>

          <Grid cols={{ mobile: 1, tablet: 2 }} gap="lg">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                    {service.name}
                  </h3>
                  <div className="font-heading font-bold text-2xl text-brand-accent-1 mb-2">
                    {service.price}
                  </div>
                  <p className="font-body text-gray-600">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Grid>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heading as="h2" size="3xl" className="text-white mb-4">
            Need Something Different?
          </Heading>
          <p className="font-body text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Got something specific in mind? Let's chat about what you need and find the right solution.
          </p>
          <Button 
            as="link" 
            href="/contact" 
            size="lg" 
            variant="secondary"
          >
            Let's Talk
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Questions? We've Got Answers
          </Heading>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                What happens after the minimum term?
              </h3>
              <p className="font-body text-gray-600">
                After your minimum term (12 or 18 months), you continue at the same monthly rate on a rolling basis. 
                Cancel anytime with 30 days notice.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="font-body text-gray-600">
                Absolutely. Upgrade anytime. Downgrades happen at your next billing date.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                Do you offer discounts for annual payment?
              </h3>
              <p className="font-body text-gray-600">
                Yes, 10% off if you pay yearly upfront. Give us a shout and we'll sort out the details.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="font-body text-gray-600">
                Credit cards, debit cards, bank transfers. UK businesses can use Direct Debit too.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="font-body text-gray-600 mb-4">
              Still got questions? Just ask.
            </p>
            <Button as="link" href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}


export default PricingPage