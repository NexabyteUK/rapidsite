import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true
    return location.pathname.startsWith(href) && href !== '/'
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-navy shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-container mx-auto px-4 md:px-8 lg:px-[72px]">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/rapidsite-logo.png" 
              alt="RapidSite" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-body font-medium transition-colors",
                  isScrolled ? "text-white hover:text-brand-accent-1" : "text-brand-foreground hover:text-brand-accent-1",
                  isActive(link.href) && "text-brand-accent-1"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-accent-1 hover:bg-brand-accent-2 text-white px-6 py-2 rounded-lg font-body font-medium transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-white" : "text-brand-foreground"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="bg-brand-navy px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block text-white hover:text-brand-accent-1 font-body font-medium transition-colors",
                isActive(link.href) && "text-brand-accent-1"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-brand-accent-1 hover:bg-brand-accent-2 text-white px-6 py-2 rounded-lg font-body font-medium transition-colors text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar