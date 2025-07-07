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
        "flex items-center mb-4 gap-3",
        variant === 'centered' && "justify-center"
      )}>
        <div className="w-10 h-10 bg-brand-accent-1/10 rounded-lg flex items-center justify-center text-brand-accent-1 flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-semibold text-brand-foreground">
          {title}
        </h3>
      </div>
      
      <p className="font-body text-gray-600">
        {description}
      </p>
    </Card>
  )
}

export default FeatureCard