import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section, Heading, ContactForm, Card, Grid, Button } from '../components/ui'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    description: "sales@nexabyte.co.uk",
    link: "mailto:sales@nexabyte.co.uk"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    description: "+44 20 7946 0958",
    link: "tel:+442079460958"
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
      <Helmet>
        <title>Contact Us - RapidSite</title>
        <meta 
          name="description" 
          content="Get in touch with the RapidSite team. We're here to help you build your perfect website." 
        />
        <meta name="keywords" content="contact, support, help, customer service" />
      </Helmet>
      
      <Section padding="sm">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Let's Build Something Amazing Together
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your online presence? Get in touch and let's discuss how we can help your business grow.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
            <div>
              <Card>
                <Heading as="h2" size="2xl" className="mb-6">
                  Send Us a Message
                </Heading>
                <p className="font-body text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within one business day.
                </p>
                <ContactForm />
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <Heading as="h3" size="xl" className="mb-6">
                  Other Ways to Reach Us
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
                  Prefer a Quick Call?
                </Heading>
                <p className="font-body text-gray-600 mb-6">
                  Book a free 30-minute consultation to discuss your project requirements.
                </p>
                <Button 
                  as="link" 
                  href="https://calendly.com/consultation" 
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
            How Can We Help You?
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
                Based in the UK, Serving Globally
              </Heading>
              <p className="font-body text-gray-600 mb-6">
                We're a UK-based company with clients across the globe. 
                Our team works remotely to provide the best service regardless of your location.
              </p>
              <div className="space-y-2">
                <p className="font-body text-gray-700">
                  <strong>Nexabyte Limited</strong>
                </p>
                <p className="font-body text-gray-600">
                  London, United Kingdom
                </p>
                <p className="font-body text-gray-600">
                  Company Registration: 123456789
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
            Ready to Start Your Project?
          </Heading>
          <p className="font-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait to get your business online. Contact us today and let's build your perfect website.
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