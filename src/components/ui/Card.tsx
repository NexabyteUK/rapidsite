import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md' 
}: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg",
        paddingClasses[padding],
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card