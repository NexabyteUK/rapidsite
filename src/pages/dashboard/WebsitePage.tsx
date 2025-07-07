import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, Grid, Button, Badge } from '../../components/ui'

const WebsitePage: React.FC = () => {
  // Placeholder data - would come from API
  const websiteData = {
    domain: 'example-business.com',
    status: 'online',
    uptime: '99.9%',
    uptimeStatus: 'excellent',
    ssl: {
      status: 'active',
      issuer: 'Let\'s Encrypt',
      validUntil: '2025-04-15'
    },
    performance: {
      loadTime: '1.2s',
      score: 95,
      status: 'excellent'
    },
    security: {
      lastScan: '2025-01-06',
      threats: 0,
      status: 'secure'
    },
    backup: {
      lastBackup: '2025-01-06',
      frequency: 'daily',
      status: 'up-to-date'
    },
    hosting: {
      provider: 'Cloudflare',
      region: 'Global CDN',
      bandwidth: '95%'
    }
  }

  const uptimeHistory = [
    { date: '2024-12', uptime: '99.9%', incidents: 0 },
    { date: '2024-11', uptime: '100%', incidents: 0 },
    { date: '2024-10', uptime: '99.8%', incidents: 1 },
    { date: '2024-09', uptime: '100%', incidents: 0 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'active':
      case 'excellent':
      case 'secure':
      case 'up-to-date':
        return 'success'
      case 'warning':
        return 'warning'
      case 'offline':
      case 'error':
        return 'error'
      default:
        return 'gray'
    }
  }


  return (
    <>
      <Helmet>
        <title>Website - RapidSite Dashboard</title>
        <meta name="description" content="Monitor your website's health and performance" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Your Website</h1>
            <p className="text-gray-600 mt-1">Monitor your website's health, performance, and security.</p>
          </div>
          <div className="flex space-x-3">
            <a 
              href={`https://${websiteData.domain}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Site
              </Button>
            </a>
          </div>
        </div>

        {/* Status overview */}
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="md">
          <Card>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                websiteData.status === 'online' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <svg className={`w-6 h-6 ${
                  websiteData.status === 'online' ? 'text-green-600' : 'text-red-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Status</p>
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
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                websiteData.performance.score >= 90 ? 'bg-green-100' : 
                websiteData.performance.score >= 70 ? 'bg-yellow-100' : 'bg-red-100'
              }`}>
                <svg className={`w-6 h-6 ${
                  websiteData.performance.score >= 90 ? 'text-green-600' : 
                  websiteData.performance.score >= 70 ? 'text-yellow-600' : 'text-red-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Performance</p>
                <p className="text-lg font-semibold text-gray-900">{websiteData.performance.score}/100</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Security</p>
                <p className="text-lg font-semibold text-gray-900 capitalize">{websiteData.security.status}</p>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
          {/* Website details */}
          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Website Details</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Domain</span>
                <a 
                  href={`https://${websiteData.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-accent-1 hover:text-brand-accent-2 flex items-center"
                >
                  {websiteData.domain}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Hosting Provider</span>
                <span className="text-sm text-gray-900">{websiteData.hosting.provider}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Hosting Region</span>
                <span className="text-sm text-gray-900">{websiteData.hosting.region}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm text-gray-900">{websiteData.performance.loadTime}</span>
              </div>
            </div>
          </Card>

          {/* SSL certificate */}
          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">SSL Certificate</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <Badge variant={getStatusColor(websiteData.ssl.status)} size="sm">
                  {websiteData.ssl.status}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Issuer</span>
                <span className="text-sm text-gray-900">{websiteData.ssl.issuer}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Valid Until</span>
                <span className="text-sm text-gray-900">{websiteData.ssl.validUntil}</span>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-green-800">SSL certificate automatically renews</span>
                </div>
              </div>
            </div>
          </Card>
        </Grid>

        {/* Security and backups */}
        <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Security Scan</span>
                <span className="text-sm text-gray-900">{websiteData.security.lastScan}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Threats Detected</span>
                <Badge variant="success" size="sm">{websiteData.security.threats} threats</Badge>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm text-green-800">Your website is secure and protected</span>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Backups</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm text-gray-900">{websiteData.backup.lastBackup}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup Frequency</span>
                <span className="text-sm text-gray-900 capitalize">{websiteData.backup.frequency}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <Badge variant={getStatusColor(websiteData.backup.status)} size="sm">
                  {websiteData.backup.status}
                </Badge>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-blue-800">Source code stored safely in GitHub</span>
                </div>
              </div>
            </div>
          </Card>
        </Grid>

        {/* Uptime history */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Uptime History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Month</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Uptime</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Incidents</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {uptimeHistory.map((record, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-900">{record.date}</td>
                    <td className="py-3 text-sm text-gray-900">{record.uptime}</td>
                    <td className="py-3 text-sm text-gray-900">{record.incidents}</td>
                    <td className="py-3">
                      <Badge 
                        variant={record.incidents === 0 ? 'success' : 'warning'} 
                        size="sm"
                      >
                        {record.incidents === 0 ? 'Excellent' : 'Good'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  )
}

export default WebsitePage