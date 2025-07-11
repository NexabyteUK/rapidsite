import { Section, Grid, PlanCard, Button } from '../ui'

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

const PricingSection = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
          Summer Sale: 20% Off All Plans
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto mb-4">
          Which plan sorts your website worries? All plans include hosting, SSL, and ongoing support - no nasty surprises.
        </p>
        <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 rounded-lg px-4 py-2 text-orange-800">
          <span className="text-xl">🌞</span>
          <span className="font-semibold text-sm">Limited time: Save 20% until end of summer</span>
        </div>
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
          Let's go!
        </Button>
      </div>
    </Section>
  )
}

export default PricingSection