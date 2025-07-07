import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
  href?: never
  external?: never
}

interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'> {
  as: 'link'
  href: string
  external?: boolean
  className?: string
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { 
      children, 
      className = '', 
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      as = 'button',
      ...restProps
    } = props
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
    
    if (as === 'link') {
      const { href, external, ...linkProps } = restProps as ButtonAsLink
      
      if (external) {
        return (
          <a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...linkProps}
          >
            {children}
          </a>
        )
      }
      
      return (
        <Link
          to={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...linkProps}
        >
          {children}
        </Link>
      )
    }
    
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(restProps as ButtonAsButton)}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button