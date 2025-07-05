import { useState } from 'react'
import { cn } from '../../utils/cn'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-heading font-semibold text-brand-foreground pr-4">
              {item.question}
            </h3>
            <svg
              className={cn(
                "w-5 h-5 text-brand-accent-1 transition-transform duration-300 flex-shrink-0",
                openIndex === index && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-6 pb-4">
              <p className="font-body text-gray-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion