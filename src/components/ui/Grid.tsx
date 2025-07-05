import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface GridProps {
  children: ReactNode
  className?: string
  cols?: {
    mobile?: 1 | 2
    tablet?: 2 | 3 | 4
    desktop?: 2 | 3 | 4 | 5 | 6
  }
  gap?: 'sm' | 'md' | 'lg'
}

const Grid = ({ 
  children, 
  className = '',
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md'
}: GridProps) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }
  
  const colClasses = {
    mobile: {
      1: 'grid-cols-1',
      2: 'grid-cols-2'
    },
    tablet: {
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4'
    },
    desktop: {
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6'
    }
  }
  
  return (
    <div
      className={cn(
        "grid",
        gapClasses[gap],
        cols.mobile && colClasses.mobile[cols.mobile],
        cols.tablet && colClasses.tablet[cols.tablet],
        cols.desktop && colClasses.desktop[cols.desktop],
        className
      )}
    >
      {children}
    </div>
  )
}

export default Grid