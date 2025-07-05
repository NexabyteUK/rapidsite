import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray'
  size?: 'sm' | 'md'
}

const Badge = ({ 
  children, 
  variant = 'primary',
  size = 'md'
}: BadgeProps) => {
  const variantClasses = {
    primary: 'bg-brand-accent-1/10 text-brand-accent-1',
    secondary: 'bg-brand-secondary/10 text-brand-secondary',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    gray: 'bg-gray-100 text-gray-800'
  }
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  }
  
  return (
    <span
      className={cn(
        "inline-flex items-center font-body font-medium rounded-full",
        variantClasses[variant],
        sizeClasses[size]
      )}
    >
      {children}
    </span>
  )
}

export default Badge