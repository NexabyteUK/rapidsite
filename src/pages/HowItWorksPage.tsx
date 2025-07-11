import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section, Heading, Button, Card, Grid } from '../components/ui'
import PromotionalBanner from '../components/ui/PromotionalBanner'

const realSteps = [
  {
    number: 1,
    title: "Mock-Up",
    description: "We create a visual mock-up of your website so you can see exactly what you're getting before we build it.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Build",
    description: "We build your website properly and host it on fast, reliable servers. No technical headaches for you.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Launch",
    description: "We connect your domain, make sure everything works perfectly, and your website goes live for customers to find.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Ongoing Care",
    description: "We keep your site running, secure, and up-to-date. Plus next-business-day support when you need us.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

const simpleTimeline = [
  { 
    day: "Day 1-2", 
    title: "Mock-Up",
    tasks: ["Free consultation", "Create visual mock-up", "Get your approval"]
  },
  { 
    day: "Days 3-6", 
    title: "Build",
    tasks: ["Build your website", "Set up fast hosting", "Test everything works"]
  },
  { 
    day: "Day 7", 
    title: "Launch",
    tasks: ["Connect your domain", "Final checks", "Your website goes live"]
  },
  { 
    day: "Ongoing", 
    title: "Care",
    tasks: ["Security updates", "Performance monitoring", "Next-business-day support"]
  }
]

const HowItWorksPage: React.FC = () => {

  return (
    <>
      <PromotionalBanner />
      <Helmet>
        <title>How It Works - RapidSite</title>
        <meta 
          name="description" 
          content="See how RapidSite gets your business online in 7 days. Mock-up, build, launch, ongoing care - all handled for you." 
        />
        <meta name="keywords" content="how it works, tutorial, guide, website builder process" />
      </Helmet>
      
      <Section padding="sm" className="pt-28 md:pt-32">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            How RapidSite Works
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            From first call to launch in 7 days. We handle everything so you can focus on running your business.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-4">
            How It Works
          </Heading>
          <p className="font-body text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Getting your website sorted is easier than ever. Our simple 4-step process gets you online quickly.
          </p>
          
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg">
            {realSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-brand-accent-1 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent-3 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </Grid>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-4">
            Your 7-Day Timeline
          </Heading>
          <p className="font-body text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From first call to launch in exactly one week.
          </p>
          
          <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg" className="mb-12">
            {simpleTimeline.map((period, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                  <h3 className="font-heading font-bold text-lg text-brand-accent-1 mb-2">
                    {period.day}
                  </h3>
                  <h4 className="font-heading font-semibold text-brand-foreground mb-4">
                    {period.title}
                  </h4>
                  <ul className="space-y-2">
                    {period.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="font-body text-sm text-gray-600">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Grid>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-green-800 mb-2">7 Days. Done.</h3>
              <p className="font-body text-green-700">
                Your website goes live in exactly 7 working days. No delays, no excuses.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
            <div className="text-center">
              <Heading as="h2" size="3xl" className="text-white mb-6">
                Why Choose RapidSite?
              </Heading>
              
              <Grid cols={{ mobile: 1, tablet: 3 }} gap="lg" className="mb-8">
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Done For You</div>
                  <div className="text-xs opacity-75 mt-1">We handle everything</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">7</div>
                  <div className="text-sm opacity-90">Working Days</div>
                  <div className="text-xs opacity-75 mt-1">Not months</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">£99</div>
                  <div className="text-sm opacity-90">Per Month</div>
                  <div className="text-xs opacity-75 mt-1">Not thousands upfront</div>
                </div>
              </Grid>
              
              <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                While other agencies disappear for months and send massive bills, we get you sorted in a week for a fair monthly price.
              </p>
              
              <Button 
                as="link" 
                href="/contact" 
                size="lg" 
                variant="secondary"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" size="3xl" className="mb-4">
            Let's Get Your Website Sorted
          </Heading>
          <p className="font-body text-lg text-gray-600 mb-6">
            Join businesses across the UK who've got their websites sorted with RapidSite. 
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="font-body text-yellow-800">
              <strong>🌞 Summer Special:</strong> Save 20% on all plans until September 22nd
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/contact" size="lg">
              Get My Free Mock-Up
            </Button>
            <Button as="link" href="/pricing" size="lg" variant="outline">
              View Plans & Pricing
            </Button>
          </div>
          <p className="font-body text-sm text-gray-500 mt-4">
            No commitment required • Free consultation • UK-based team
          </p>
        </div>
      </Section>
    </>
  )
}

export default HowItWorksPage