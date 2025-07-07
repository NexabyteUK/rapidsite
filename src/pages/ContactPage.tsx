import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section, Heading, ContactForm, Card, Grid, Button } from '../components/ui'
import PromotionalBanner from '../components/ui/PromotionalBanner'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "info@nexabyte.co.uk",
    link: "mailto:info@nexabyte.co.uk"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Business Hours",
    description: "Mon-Fri 9AM-6PM GMT",
    link: null
  }
]

const reasons = [
  {
    title: "🌞 Summer Promotion Inquiry",
    description: "Want to take advantage of our 20% summer discount? Get started before the offer ends!"
  },
  {
    title: "New Website Project",
    description: "Ready to start your website project? Let's discuss your requirements."
  },
  {
    title: "Technical Support",
    description: "Need help with your existing website? Our support team is here for you."
  },
  {
    title: "General Inquiries",
    description: "Have questions about our services? We'd love to hear from you."
  },
  {
    title: "Partnership Opportunities",
    description: "Interested in partnering with RapidSite? Let's explore possibilities."
  }
]

const ContactPage: React.FC = () => {
  return (
    <>
      <PromotionalBanner />
      <Helmet>
        <title>Contact Us - RapidSite</title>
        <meta 
          name="description" 
          content="Get in touch with the RapidSite team. We're here to help you build your perfect website." 
        />
        <meta name="keywords" content="contact, support, help, customer service" />
      </Helmet>
      
      <Section padding="sm" className="pt-28 md:pt-32">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Ready to get your business online?
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            No sales pitch, just honest advice about what will work for your business. Coffee's on us.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
            <div>
              <Card>
                <Heading as="h2" size="2xl" className="mb-6">
                  Drop Us a Line
                </Heading>
                <p className="font-body text-gray-600 mb-8">
                  Tell us about your business and we'll get back to you by tomorrow with some honest advice.
                </p>
                <ContactForm />
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <Heading as="h3" size="xl" className="mb-6">
                  Prefer to Call or Email?
                </Heading>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-brand-accent-1/10 rounded-lg flex items-center justify-center text-brand-accent-1 mr-4 flex-shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-brand-foreground">
                          {method.title}
                        </h4>
                        {method.link ? (
                          <a 
                            href={method.link} 
                            className="font-body text-brand-accent-1 hover:text-brand-accent-2 transition-colors"
                          >
                            {method.description}
                          </a>
                        ) : (
                          <p className="font-body text-gray-600">
                            {method.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-brand-accent-1/5 to-brand-accent-2/5">
                <Heading as="h3" size="xl" className="mb-4">
                  Let's Have a Chat
                </Heading>
                <p className="font-body text-gray-600 mb-6">
                  Book a free 30-minute call. No pressure, just a friendly chat about your business.
                </p>
                <Button 
                  as="link" 
                  href="https://calendly.com/scott-nexabyte" 
                  external 
                  fullWidth
                >
                  Schedule Consultation
                </Button>
              </Card>
            </div>
          </Grid>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            What Can We Help With?
          </Heading>
          
          <Grid cols={{ mobile: 1, tablet: 2 }} gap="md">
            {reasons.map((reason, index) => (
              <Card key={index} hover>
                <h3 className="font-heading font-semibold text-xl text-brand-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-gray-600">
                  {reason.description}
                </p>
              </Card>
            ))}
          </Grid>
        </div>
      </Section>

      <Section background="gray">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Heading as="h2" size="3xl" className="mb-4">
                UK Based, Helping Businesses Everywhere
              </Heading>
              <p className="font-body text-gray-600 mb-6">
                We're based in Stratford-upon-Avon but help businesses all over the country get online. 
                Distance doesn't matter when you've got the right team.
              </p>
              <div className="space-y-2">
                <p className="font-body text-gray-700">
                  <strong>Nexabyte Limited</strong>
                </p>
                <p className="font-body text-gray-600">
                  Stratford-upon-Avon, United Kingdom
                </p>
                <p className="font-body text-gray-600">
                  Company Registration: 15817114
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Heading as="h2" size="3xl" className="mb-4">
            Ready to Get Started?
          </Heading>
          <p className="font-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your business deserves a website that works. Let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="#contact-form" size="lg">
              Contact Us Now
            </Button>
            <Button as="link" href="/pricing" size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default ContactPage