import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  as?: 'button' | 'link'
  href?: string
  external?: boolean
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    className = '', 
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    as = 'button',
    href,
    external = false,
    ...props
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-body font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    
    const variantClasses = {
      primary: "bg-brand-accent-1 hover:bg-brand-accent-2 text-white focus:ring-brand-accent-1",
      secondary: "bg-brand-secondary hover:bg-opacity-90 text-white focus:ring-brand-secondary",
      outline: "border-2 border-brand-accent-1 text-brand-accent-1 hover:bg-brand-accent-1 hover:text-white focus:ring-brand-accent-1",
      ghost: "text-brand-foreground hover:bg-gray-100 focus:ring-gray-200"
    }
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg"
    }
    
    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className
    )
    
    if (as === 'link' && href) {
      if (external) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as any}
            {...(props as any)}
          >
            {children}
          </a>
        )
      }
      
      return (
        <Link
          to={href}
          className={classes}
          ref={ref as any}
          {...(props as any)}
        >
          {children}
        </Link>
      )
    }
    
    return (
      <button
        className={classes}
        ref={ref as any}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button