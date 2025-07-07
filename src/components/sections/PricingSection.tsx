import { Section, Grid, PlanCard, Button } from '../ui'

const plans = [
  {
    name: "Boost",
    price: 109,
    term: "12 month",
    features: [
      "7-day build",
      "Hosting included",
      "SSL certificate",
      "48-hour support response",
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
      "48-hour support response",
      "Security updates",
      "Global edge hosting"
    ]
  }
]

const PricingSection = () => {
  return (
    <Section id="pricing" background="gray">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your business. All plans include hosting, SSL, and ongoing support.
        </p>
      </div>
      
      <Grid cols={{ mobile: 1, tablet: 2, desktop: 2 }} className="mb-12 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </Grid>
      
      <div className="text-center">
        <p className="font-body text-gray-600 mb-4">
          Ready to get started? Contact us to begin your project.
        </p>
        <Button as="link" href="/contact" size="lg">
          Get Started Today
        </Button>
      </div>
    </Section>
  )
}

export default PricingSection