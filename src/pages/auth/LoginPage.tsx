import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button, Card } from '../../components/ui'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Placeholder login logic
    setTimeout(() => {
      console.log('Login attempt:', { email, password })
      // TODO: Implement actual authentication
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <Helmet>
        <title>Login - RapidSite Dashboard</title>
        <meta name="description" content="Login to your RapidSite dashboard to manage your website and subscription." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img 
                src="/rapidsite-logo-white.png" 
                alt="RapidSite" 
                className="h-16 w-auto mx-auto"
              />
            </Link>
            <p className="text-white/80 mt-2">Customer Dashboard</p>
          </div>

          <Card className="w-full">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-heading font-bold text-brand-foreground mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to manage your website
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={isLoading}
                className="mt-6"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-brand-accent-1 hover:text-brand-accent-2">
                Forgot your password?
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Need help? 
                <Link to="/contact" className="text-brand-accent-1 hover:text-brand-accent-2 ml-1">
                  Contact support
                </Link>
              </p>
            </div>
          </Card>

          <div className="text-center mt-6">
            <Link to="/" className="text-white/80 hover:text-white text-sm">
              ← Back to main site
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage