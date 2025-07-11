import { Section, ProcessStep } from '../ui'

const steps = [
  {
    number: 1,
    title: "Quick Chat",
    description: "Tell us about your business and what you need. No pushy sales, just honest advice.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: 2,
    title: "We Get to Work",
    description: "We build your website exactly how you need it. You can relax while we handle everything.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "You're Live",
    description: "Check everything looks right, we make any tweaks, then your website goes live. Simple as that.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    number: 4,
    title: "We've Got Your Back",
    description: "Your site stays fast, secure and up-to-date. Problems? We sort them. Usually before you even notice.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
]

const ProcessSection = () => {
  return (
    <Section id="process">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
          How It Works
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          From first chat to live website in 7 days. Here's exactly what happens.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} />
        ))}
      </div>
    </Section>
  )
}

export default ProcessSection