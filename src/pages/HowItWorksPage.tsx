import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Section, Heading, Button, Card, Grid, Badge } from '../components/ui'

const detailedSteps = [
  {
    number: 1,
    title: "Initial Consultation",
    duration: "30 minutes",
    description: "We start with a free consultation to understand your business, goals, and vision for your website.",
    details: [
      "Discuss your business objectives",
      "Identify target audience",
      "Review design preferences",
      "Outline content requirements",
      "Set project timeline"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Design & Planning",
    duration: "3-5 days",
    description: "Our design team creates a custom website mockup based on your requirements and brand identity.",
    details: [
      "Create wireframes and mockups",
      "Design custom graphics",
      "Develop site structure",
      "Plan user experience",
      "Get your approval"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Development",
    duration: "7-10 days",
    description: "We build your website using the latest technologies, ensuring it's fast, secure, and mobile-friendly.",
    details: [
      "Code custom features",
      "Optimize for all devices",
      "Implement SEO best practices",
      "Set up hosting infrastructure",
      "Configure security features"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Content & Review",
    duration: "2-3 days",
    description: "We populate your website with content, whether you provide it or we create it for you.",
    details: [
      "Add all text content",
      "Upload images and media",
      "Create engaging copy",
      "Internal quality testing",
      "Make revisions as needed"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    number: 5,
    title: "Launch & Go Live",
    duration: "1 day",
    description: "Your website goes live! We handle all technical aspects of the launch.",
    details: [
      "Configure domain settings",
      "Set up SSL certificates",
      "Deploy to production",
      "Submit to search engines",
      "Monitor initial performance"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    number: 6,
    title: "Ongoing Support",
    duration: "Continuous",
    description: "We don't just build and leave. Enjoy continuous updates, maintenance, and support.",
    details: [
      "Monthly performance reports",
      "Regular security updates",
      "Content updates as needed",
      "Technical support",
      "Feature enhancements"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
]

const timeline = [
  { week: "Week 1", tasks: ["Consultation", "Design mockups", "Get approval"] },
  { week: "Week 2", tasks: ["Development begins", "Build core features", "Mobile optimization"] },
  { week: "Week 3", tasks: ["Content integration", "Testing & revisions", "Launch preparation"] },
  { week: "Ongoing", tasks: ["Monthly updates", "Performance monitoring", "Continuous support"] }
]

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - RapidSite</title>
        <meta 
          name="description" 
          content="Learn how RapidSite makes website creation simple and fast. From idea to launch in minutes." 
        />
        <meta name="keywords" content="how it works, tutorial, guide, website builder process" />
      </Helmet>
      
      <Section padding="sm">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            Your Website Journey with RapidSite
          </Heading>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to launch and beyond, we handle everything so you can focus on your business.
          </p>
        </div>
      </Section>

      <Section background="gray" padding="lg">
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Our Proven Process
          </Heading>
          
          <div className="space-y-8">
            {detailedSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-6 bg-gradient-to-br from-brand-accent-1/5 to-brand-accent-2/5">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-brand-accent-1 text-white rounded-full flex items-center justify-center mr-4">
                        <span className="font-heading text-2xl font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-brand-foreground">
                          {step.title}
                        </h3>
                        <Badge variant="gray" size="sm">{step.duration}</Badge>
                      </div>
                    </div>
                    <div className="text-brand-accent-1">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <p className="font-body text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-body text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < detailedSteps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gray-300 -translate-y-4 hidden md:block"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <Heading as="h2" size="3xl" className="text-center mb-12">
            Timeline Overview
          </Heading>
          
          <div className="bg-gradient-to-r from-brand-accent-1/10 to-brand-accent-2/10 rounded-2xl p-8">
            <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="lg">
              {timeline.map((period, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="font-heading font-semibold text-lg text-brand-accent-1 mb-4">
                      {period.week}
                    </h3>
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
          </div>
          
          <div className="text-center mt-8">
            <p className="font-body text-gray-600 mb-4">
              Most websites are live within 2-3 weeks!
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
            <div className="text-center">
              <Heading as="h2" size="3xl" className="text-white mb-6">
                What Makes RapidSite Different?
              </Heading>
              
              <Grid cols={{ mobile: 1, tablet: 3 }} gap="lg" className="mb-8">
                <div>
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Done For You</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">2-3</div>
                  <div className="text-sm opacity-90">Weeks to Launch</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Ongoing Support</div>
                </div>
              </Grid>
              
              <p className="font-body text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Unlike DIY website builders, we handle everything from start to finish. 
                You get a professional website without the hassle, time, or technical headaches.
              </p>
              
              <Button 
                as="link" 
                href="/contact" 
                size="lg" 
                variant="secondary"
              >
                Start Your Project Today
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <Heading as="h2" size="3xl" className="mb-4">
            Ready to Get Started?
          </Heading>
          <p className="font-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who've transformed their online presence with RapidSite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="link" href="/contact" size="lg">
              Book Free Consultation
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

export default HowItWorksPage