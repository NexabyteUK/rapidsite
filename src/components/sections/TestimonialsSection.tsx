import { Section, TestimonialSlider } from '../ui'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Johnson's Bakery",
    rating: 5,
    quote: "RapidSite transformed our online presence! Our new website looks professional and has significantly increased our customer inquiries. The team was fantastic to work with.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Tech Solutions Ltd",
    rating: 5,
    quote: "The speed and quality exceeded our expectations. We had our new website up and running in just two weeks, and the ongoing support has been excellent.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emma Williams",
    company: "Williams Consulting",
    rating: 5,
    quote: "Best decision we made for our business. The fixed monthly pricing means no surprises, and the website has helped us attract high-quality clients.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
]

const TestimonialsSection = () => {
  return (
    <Section id="testimonials" background="gray">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-foreground mb-4">
          What Our Clients Say
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about RapidSite.
        </p>
      </div>
      
      <TestimonialSlider testimonials={testimonials} />
    </Section>
  )
}

export default TestimonialsSection