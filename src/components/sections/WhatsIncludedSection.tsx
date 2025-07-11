import { Section, Grid, Card, Heading } from '../ui'

const services = [
  {
    category: "What We Handle (So You Don't Have To)",
    items: [
      {
        title: "Complete Website Build",
        description: "We design and build your entire website from scratch. No templates, no cookie-cutter rubbish - a proper website made just for your business."
      },
      {
        title: "All the Hosting Sorted",
        description: "Your website lives on fast, secure servers. We handle all the technical bits - domains, SSL certificates, the lot."
      },
      {
        title: "Keeping Everything Running",
        description: "Software updates, security patches, backups - we do it all behind the scenes. Your site stays fast and safe."
      },
      {
        title: "Real Support When You Need It",
        description: "UK-based humans who actually answer emails. Got a problem? We'll sort it. Usually before you even knew it was there."
      }
    ]
  },
  {
    category: "Why We're Different",
    items: [
      {
        title: "Actually Done in 7 Days",
        description: "Not 7 weeks. Not 'hopefully by next month'. Actually 7 working days from brief to live website."
      },
      {
        title: "One Monthly Price",
        description: "£99 or £109 per month. That's it. No setup fees, no hosting bills, no surprise invoices. Everything included."
      },
      {
        title: "We Don't Disappear",
        description: "Unlike agencies who vanish after launch, we're here for the long haul. Your website keeps working, we keep supporting."
      },
      {
        title: "No Technical Nonsense",
        description: "You run your business, we run your website. No need to learn code or worry about updates breaking things."
      }
    ]
  }
]

const WhatsIncludedSection = () => {
  return (
    <Section id="whats-included" background="gray">
      <div className="text-center mb-12">
        <Heading as="h2" size="4xl" className="mb-4">
          Everything You Need, Nothing You Don't
        </Heading>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          Forget juggling web developers, hosting companies, and support tickets. 
          We're your complete website service - everything handled, one monthly price.
        </p>
      </div>

      <div className="space-y-12">
        {services.map((serviceGroup, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="font-heading text-2xl font-bold text-brand-foreground mb-6 text-center">
              {serviceGroup.category}
            </h3>
            <Grid cols={{ mobile: 1, tablet: 2 }} gap="lg">
              {serviceGroup.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="bg-white p-6">
                  <h4 className="font-heading text-xl font-semibold text-brand-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="font-body text-gray-600">
                    {item.description}
                  </p>
                </Card>
              ))}
            </Grid>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-br from-brand-accent-3 to-brand-accent-1 text-white p-8 max-w-2xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4">
            The Bottom Line
          </h3>
          <p className="font-body text-lg opacity-90">
            You get a proper website that works, without any of the usual headaches. 
            We handle everything technical, you handle your business. 
            That's why businesses choose us over cheaper DIY options or expensive agencies.
          </p>
        </Card>
      </div>
    </Section>
  )
}

export default WhatsIncludedSection