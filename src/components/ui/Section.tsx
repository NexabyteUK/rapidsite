import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
  id?: string
}

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'md',
  id
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-brand-gradient-start to-brand-gradient-end'
  }
  
  const paddingClasses = {
    sm: 'py-8 md:py-10',
    md: 'py-12 md:py-16 lg:py-20',
    lg: 'py-16 md:py-20 lg:py-24'
  }
  
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

export default Section