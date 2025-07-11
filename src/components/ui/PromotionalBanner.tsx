import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PromotionalBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Summer ends September 22, 2025
  const endDate = new Date('2025-09-22T23:59:59')

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Don't show banner if promotion has ended
  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return null
  }

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 text-center shadow-md">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-red-800 px-2 py-1 rounded text-xs font-bold">
              🌞 SUMMER OFFER
            </span>
            <span className="font-bold text-base">20% OFF All Plans</span>
          </div>
          
          <div className="hidden sm:block text-white opacity-80">•</div>
          
          <div className="flex items-center gap-2 text-sm text-white">
            <span>Ends in:</span>
            <div className="flex gap-1">
              <span className="bg-red-700 px-2 py-1 rounded font-mono text-white">
                {timeLeft.days}d
              </span>
              <span className="bg-red-700 px-2 py-1 rounded font-mono text-white">
                {timeLeft.hours}h
              </span>
              <span className="bg-red-700 px-2 py-1 rounded font-mono text-white">
                {timeLeft.minutes}m
              </span>
            </div>
          </div>
          
          <div className="hidden sm:block text-white opacity-80">•</div>
          
          <Link 
            to="/pricing#pricing" 
            className="bg-white text-red-600 hover:bg-yellow-100 font-semibold px-3 py-1 rounded transition-colors text-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PromotionalBanner