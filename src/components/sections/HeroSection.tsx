import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'
import PromotionalBanner from '../ui/PromotionalBanner'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // High-quality website mockups showcasing modern web design
  const mockupImages = [
    {
      url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&q=80&fm=webp&fit=crop',
      alt: 'Modern responsive website design on laptop',
    },
    {
      url: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&q=80&fm=webp&fit=crop',
      alt: 'Professional web development workspace',
    },
    {
      url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&q=80&fm=webp&fit=crop',
      alt: 'Clean website interface on multiple devices',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [mockupImages.length])

  return (
    <>
      <PromotionalBanner />
      <section className="relative pt-28 md:pt-32 pb-mobile md:pb-tablet lg:pb-desktop overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-white to-brand-background opacity-50" />
      
      <div className="relative max-w-container mx-auto px-4 md:px-8 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-foreground mb-6 leading-tight">
              Your professional website, sorted. No stress, no massive bills.
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
              We handle everything - design, build, hosting, the lot - while you focus on what you do best: running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-block bg-brand-accent-1 hover:bg-brand-accent-2 text-white font-body font-medium px-8 py-4 rounded-lg transition-colors text-center"
              >
                Get Started Today
              </Link>
              <Link
                to="/how-it-works"
                className="inline-block bg-white hover:bg-gray-50 text-brand-foreground border-2 border-brand-foreground font-body font-medium px-8 py-4 rounded-lg transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Image Carousel Column */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {mockupImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-1000",
                    currentImageIndex === index ? "opacity-100" : "opacity-0"
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
                </div>
              ))}
              
              {/* Browser chrome mockup overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gray-200 h-10 flex items-center px-4 space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded h-6 mx-4" />
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {mockupImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentImageIndex === index
                      ? "bg-brand-accent-1 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection