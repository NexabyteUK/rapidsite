import type { ReactNode } from 'react'
import Card from './Card'
import { cn } from '../../utils/cn'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  variant?: 'default' | 'centered'
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  variant = 'default'
}: FeatureCardProps) => {
  return (
    <Card 
      hover 
      className={cn(
        variant === 'centered' && 'text-center',
        className
      )}
    >
      <div className={cn(
        "mb-4",
        variant === 'centered' && "flex justify-center"
      )}>
        <div className="w-12 h-12 bg-brand-accent-1/10 rounded-lg flex items-center justify-center text-brand-accent-1">
          {icon}
        </div>
      </div>
      
      <h3 className="font-heading text-xl font-semibold text-brand-foreground mb-2">
        {title}
      </h3>
      
      <p className="font-body text-gray-600">
        {description}
      </p>
    </Card>
  )
}

export default FeatureCard