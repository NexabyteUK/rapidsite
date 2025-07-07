import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, Grid, Button, Badge } from '../../components/ui'

const OverviewPage: React.FC = () => {
  // Placeholder data - would come from API
  const websiteData = {
    domain: 'example-business.com',
    status: 'online',
    uptime: '99.9%',
    lastUpdated: '2 days ago',
    ssl: true,
    backup: '1 day ago'
  }

  const subscriptionData = {
    plan: 'Boost',
    price: 109,
    nextBilling: '2025-01-15',
    daysRemaining: 192,
    isFixedTerm: true
  }

  const recentActivity = [
    { type: 'payment', description: 'Monthly payment processed', date: '2025-01-01', status: 'success' },
    { type: 'backup', description: 'Automatic backup completed', date: '2024-12-31', status: 'success' },
    { type: 'update', description: 'Security updates applied', date: '2024-12-28', status: 'success' }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        )
      case 'backup':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - RapidSite</title>
        <meta name="description" content="Your RapidSite dashboard overview" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's how your website is doing.</p>
        </div>

        {/* Key metrics grid */}
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="md">
          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Website Status</p>
                <p className="text-lg font-semibold text-gray-900 capitalize">{websiteData.status}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Uptime</p>
                <p className="text-lg font-semibold text-gray-900">{websiteData.uptime}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contract Days Left</p>
                <p className="text-lg font-semibold text-gray-900">{subscriptionData.daysRemaining}</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Plan</p>
                <p className="text-lg font-semibold text-gray-900">{subscriptionData.plan}</p>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
          {/* Website overview */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold text-gray-900">Your Website</h2>
              <Link to="/dashboard/website">
                <Button variant="outline" size="sm">View Details</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Domain</span>
                <a 
                  href={`https://${websiteData.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-accent-1 hover:text-brand-accent-2"
                >
                  {websiteData.domain}
                </a>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">SSL Certificate</span>
                <Badge variant="success" size="sm">Active</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm text-gray-900">{websiteData.backup}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Updated</span>
                <span className="text-sm text-gray-900">{websiteData.lastUpdated}</span>
              </div>
            </div>
          </Card>

          {/* Subscription overview */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold text-gray-900">Subscription</h2>
              <Link to="/dashboard/subscription">
                <Button variant="outline" size="sm">Manage</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Plan</span>
                <span className="text-sm font-medium text-gray-900">{subscriptionData.plan}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Cost</span>
                <span className="text-sm font-medium text-gray-900">£{subscriptionData.price}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Next Billing</span>
                <span className="text-sm text-gray-900">{subscriptionData.nextBilling}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Fixed Term</span>
                <Badge variant="primary" size="sm">{subscriptionData.daysRemaining} days left</Badge>
              </div>
            </div>
          </Card>
        </Grid>

        {/* Quick actions */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/dashboard/add-ons">
              <Button variant="outline" fullWidth>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Request Changes
              </Button>
            </Link>
            
            <Link to="/dashboard/support">
              <Button variant="outline" fullWidth>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Get Support
              </Button>
            </Link>
            
            <a href={`https://${websiteData.domain}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" fullWidth>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Website
              </Button>
            </a>
          </div>
        </Card>

        {/* Recent activity */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                  {getActivityIcon(item.type)}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <Badge variant="success" size="sm">Success</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}

export default OverviewPage