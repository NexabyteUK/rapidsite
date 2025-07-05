import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'

interface Testimonial {
  id: number
  name: string
  company: string
  rating: number
  quote: string
  avatar: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      )}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="font-body text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-heading font-semibold text-brand-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-brand-accent-1 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider