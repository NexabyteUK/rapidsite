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
          Time to Get Your Website Sorted?
        </Heading>
        <p className="font-body text-xl mb-8 opacity-90">
          No stress, no massive bills, just a brilliant website that works. 
          Let's have a chat about what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as="link" 
            href="/contact" 
            size="lg"
            className="!bg-white !text-brand-accent-1 hover:!bg-gray-100 hover:!text-brand-accent-2 transition-all duration-200"
          >
            Let's Get Started
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