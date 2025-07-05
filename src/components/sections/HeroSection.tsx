import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Mock-up images - in production these would be actual website mockups
  const mockupImages = [
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&q=75&fm=webp&fit=crop',
      alt: 'Modern business website design',
    },
    {
      url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&q=75&fm=webp&fit=crop',
      alt: 'Professional service website',
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&q=75&fm=webp&fit=crop',
      alt: 'Professional business website',
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
    <section className="relative pt-20 md:pt-24 pb-mobile md:pb-tablet lg:pb-desktop overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-background via-white to-brand-background opacity-50" />
      
      <div className="relative max-w-container mx-auto px-4 md:px-8 lg:px-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-foreground mb-6 leading-tight">
              A better website in one week — pay monthly.
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              RapidSite by Nexabyte builds, hosts and maintains your site for a flat monthly fee. No big up-front costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-block bg-brand-accent-1 hover:bg-brand-accent-2 text-white font-body font-medium px-8 py-4 rounded-lg transition-colors text-center"
              >
                Get My Free Mock-Up
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
  )
}

export default HeroSection