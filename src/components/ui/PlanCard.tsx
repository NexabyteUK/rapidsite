import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface PlanCardProps {
  name: string
  price: number
  term: string
  features: string[]
  isPopular?: boolean
  promotionalPrice?: number
  promotionalLabel?: string
  promotionalSavings?: number
}

const PlanCard = ({ 
  name, 
  price, 
  term, 
  features, 
  isPopular = false, 
  promotionalPrice, 
  promotionalLabel, 
  promotionalSavings 
}: PlanCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl transition-all duration-300 relative flex flex-col h-full",
        isPopular
          ? "shadow-xl scale-105 border-2 border-brand-accent-1 pt-12 px-8 pb-8"
          : "shadow-lg hover:shadow-xl p-8"
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-accent-1 text-white text-sm font-bold px-4 py-1 rounded-full z-10">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="font-heading text-2xl font-bold text-brand-foreground mb-2">
        {name}
      </h3>
      
      <div className="mb-6">
        {promotionalPrice ? (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading text-2xl text-gray-400 line-through">
                £{price}
              </span>
              {promotionalLabel && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {promotionalLabel}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-5xl font-bold text-brand-accent-1">
                £{promotionalPrice}
              </span>
              <span className="font-body text-gray-600">
                /month
              </span>
            </div>
            {promotionalSavings && (
              <div className="text-green-600 font-semibold text-sm mt-1">
                Save £{promotionalSavings}/month
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-5xl font-bold text-brand-accent-1">
              £{price}
            </span>
            <span className="font-body text-gray-600">
              /month
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-2 mb-6 text-gray-600 font-body">
        <p>{term} minimum term</p>
      </div>
      
      <ul className="space-y-3 flex-grow mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-brand-accent-1 mt-0.5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-body text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link
        to="/contact"
        className={cn(
          "block w-full text-center py-3 px-6 rounded-lg font-body font-medium transition-colors mt-auto",
          isPopular
            ? "bg-brand-accent-1 hover:bg-brand-accent-2 text-white"
            : "bg-gray-100 hover:bg-gray-200 text-brand-foreground"
        )}
      >
        Get Started
      </Link>
    </div>
  )
}

export default PlanCard