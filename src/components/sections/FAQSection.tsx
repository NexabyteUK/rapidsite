import { Section, FAQAccordion } from '../ui'

const faqItems = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 2-3 weeks from the initial consultation. This includes design, development, content creation, and revisions."
  },
  {
    question: "What's included in the monthly fee?",
    answer: "Your monthly fee covers hosting, SSL certificate, regular updates, security monitoring, daily backups, and technical support. No hidden costs!"
  },
  {
    question: "Can I update the website myself?",
    answer: "Absolutely! We'll provide you with easy-to-use tools to update content, images, and more. We also offer training and support whenever you need it."
  },
  {
    question: "Do you provide the content and images?",
    answer: "We can help with both! We offer professional copywriting services and have access to premium stock photos. We can also use your existing content."
  },
  {
    question: "What if I want to cancel?",
    answer: "After your minimum term, you can cancel anytime with 30 days notice. We'll help you export your data and ensure a smooth transition."
  },
  {
    question: "Do you offer e-commerce websites?",
    answer: "Yes! Our Business and Enterprise plans support e-commerce functionality. We can set up online stores with payment processing, inventory management, and more."
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