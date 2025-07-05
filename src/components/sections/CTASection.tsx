import { Section, Button, Heading } from '../ui'

const CTASection = () => {
  return (
    <Section 
      id="cta" 
      background="white" 
      className="!bg-brand-accent-1 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Heading as="h2" className="text-white mb-6">
          Ready to Get Your Website Online?
        </Heading>
        <p className="font-body text-xl mb-8 opacity-90">
          Join hundreds of businesses who trust RapidSite for their web presence. 
          Get started today with a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as="link" 
            href="/contact" 
            size="lg" 
            variant="secondary"
          >
            Start Your Project
          </Button>
          <Button 
            as="link" 
            href="/pricing" 
            size="lg" 
            variant="ghost"
            className="border-2 border-white text-white hover:bg-white hover:text-brand-foreground"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default CTASection