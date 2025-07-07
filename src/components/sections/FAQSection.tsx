import { Section, FAQAccordion } from '../ui'

const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer: "Your website will be ready in 7 days, guaranteed. We work fast because we know your business can't wait around for months."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Everything you need: hosting, SSL certificate, security updates, uptime monitoring, and next business day support. Your site's always safe and running smooth."
  },
  {
    question: "Can I update the website myself?",
    answer: "We handle all the technical stuff so you don't have to worry about breaking anything. Need changes? Our Change-Pack service takes care of any updates for £49 per 30-minute block."
  },
  {
    question: "Do you provide the content and images?",
    answer: "You know your business best, so we'll use your content and images. Need help getting it ready? We can point you in the right direction."
  },
  {
    question: "What if I want to cancel?",
    answer: "After your 12 or 18 month commitment, you can cancel anytime with 30 days notice. We'll make sure you get everything you need for a smooth transition."
  },
  {
    question: "How fast do you respond to support requests?",
    answer: "Within 48 hours for all support queries. Need faster response? Our Priority Support add-on gets you replies within 24 hours for £19/month."
  }
]

const FAQSection = () => {
  return (
    <Section id="faq" background="gray">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-gray-600">
            Got questions? We've got answers. If you don't see your question here, feel free to contact us.
          </p>
        </div>
        
        <FAQAccordion items={faqItems} />
      </div>
    </Section>
  )
}

export default FAQSection