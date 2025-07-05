import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface HeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  className?: string
  gradient?: boolean
}

const Heading = ({ 
  children, 
  as: Component = 'h2',
  size,
  className = '',
  gradient = false
}: HeadingProps) => {
  const defaultSizes = {
    h1: '5xl',
    h2: '4xl',
    h3: '3xl',
    h4: '2xl',
    h5: 'xl',
    h6: 'lg'
  }
  
  const actualSize = size || defaultSizes[Component]
  
  const sizeClasses = {
    xs: 'text-sm',
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl',
    '2xl': 'text-3xl md:text-4xl',
    '3xl': 'text-4xl md:text-5xl',
    '4xl': 'text-5xl md:text-6xl',
    '5xl': 'text-6xl md:text-7xl'
  }
  
  return (
    <Component
      className={cn(
        "font-heading font-bold",
        gradient 
          ? "bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 bg-clip-text text-transparent"
          : "text-brand-foreground",
        sizeClasses[actualSize as keyof typeof sizeClasses],
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Heading