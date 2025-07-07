import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, Grid, Button, Badge } from '../../components/ui'

const SupportPage: React.FC = () => {
  const [showNewTicketForm, setShowNewTicketForm] = useState(false)
  const [ticketData, setTicketData] = useState({
    subject: '',
    priority: 'normal',
    description: ''
  })

  // Placeholder data - would come from API
  const supportTiers = {
    current: 'standard',
    standard: {
      name: 'Standard Support',
      responseTime: '48 hours',
      description: 'Included with your plan'
    },
    priority: {
      name: 'Priority Support',
      responseTime: '24 hours',
      description: '£19/month for faster response',
      upgrade: true
    }
  }

  const tickets = [
    {
      id: 'TICK-001',
      subject: 'Website loading slowly on mobile',
      status: 'open',
      priority: 'normal',
      created: '2025-01-05',
      lastUpdate: '2025-01-06',
      agent: 'Sarah Johnson'
    },
    {
      id: 'TICK-002',
      subject: 'Update contact page content',
      status: 'resolved',
      priority: 'low',
      created: '2024-12-20',
      lastUpdate: '2024-12-21',
      agent: 'Mike Chen'
    },
    {
      id: 'TICK-003',
      subject: 'SSL certificate question',
      status: 'closed',
      priority: 'normal',
      created: '2024-12-15',
      lastUpdate: '2024-12-15',
      agent: 'Sarah Johnson'
    }
  ]

  const commonIssues = [
    {
      title: 'How to request website changes',
      description: 'Learn about our Change-Pack service for content updates',
      link: '#'
    },
    {
      title: 'Understanding your website hosting',
      description: 'Information about your hosting setup and performance',
      link: '#'
    },
    {
      title: 'Billing and subscription questions',
      description: 'Common questions about payments and plans',
      link: '#'
    },
    {
      title: 'Website performance issues',
      description: 'Troubleshooting slow loading times',
      link: '#'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'primary'
      case 'in-progress':
        return 'warning'
      case 'resolved':
        return 'success'
      case 'closed':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error'
      case 'normal':
        return 'primary'
      case 'low':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual ticket submission
    console.log('Submitting ticket:', ticketData)
    setShowNewTicketForm(false)
    setTicketData({ subject: '', priority: 'normal', description: '' })
  }

  return (
    <>
      <Helmet>
        <title>Support - RapidSite Dashboard</title>
        <meta name="description" content="Get help and support for your website" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold text-gray-900">Support</h1>
            <p className="text-gray-600 mt-1">Get help with your website and manage support tickets.</p>
          </div>
          <Button onClick={() => setShowNewTicketForm(true)}>
            Create New Ticket
          </Button>
        </div>

        {/* Support tier info */}
        <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Your Support Plan</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Plan</span>
                <Badge variant="primary" size="sm">{supportTiers.standard.name}</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-medium text-gray-900">{supportTiers.standard.responseTime}</span>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">{supportTiers.standard.description}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-yellow-50 border border-yellow-200">
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Upgrade to Priority Support</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-medium text-yellow-900">{supportTiers.priority.responseTime}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Cost</span>
                <span className="text-sm font-medium text-yellow-900">£19/month</span>
              </div>
              
              <p className="text-sm text-yellow-800">{supportTiers.priority.description}</p>
              
              <Button variant="outline" size="sm" fullWidth>
                Upgrade Support Plan
              </Button>
            </div>
          </Card>
        </Grid>

        {/* Recent tickets */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-heading font-semibold text-gray-900">Your Support Tickets</h2>
            <Button variant="outline" size="sm" onClick={() => setShowNewTicketForm(true)}>
              New Ticket
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Ticket ID</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Subject</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Priority</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Last Update</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Agent</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <td className="py-3 text-sm font-medium text-brand-accent-1">{ticket.id}</td>
                    <td className="py-3 text-sm text-gray-900">{ticket.subject}</td>
                    <td className="py-3">
                      <Badge variant={getStatusColor(ticket.status)} size="sm">
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <Badge variant={getPriorityColor(ticket.priority)} size="sm">
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm text-gray-900">{ticket.lastUpdate}</td>
                    <td className="py-3 text-sm text-gray-900">{ticket.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {tickets.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No support tickets yet.</p>
              <p className="text-sm text-gray-400 mt-1">
                Create your first ticket if you need help with anything.
              </p>
            </div>
          )}
        </Card>

        {/* Quick help */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Common Questions</h2>
          <Grid cols={{ mobile: 1, tablet: 2 }} gap="md">
            {commonIssues.map((issue, index) => (
              <div 
                key={index} 
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <h3 className="font-medium text-gray-900 mb-2">{issue.title}</h3>
                <p className="text-sm text-gray-600">{issue.description}</p>
              </div>
            ))}
          </Grid>
        </Card>

        {/* Contact options */}
        <Card className="bg-green-50 border border-green-200">
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Need Immediate Help?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium text-green-900">Email Support</p>
                <p className="text-sm text-green-800">info@nexabyte.co.uk</p>
                <p className="text-xs text-green-600">48-hour response time</p>
              </div>
            </div>
          </div>
        </Card>

        {/* New ticket modal */}
        {showNewTicketForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Create New Support Ticket
              </h3>
              
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={ticketData.subject}
                    onChange={(e) => setTicketData({...ticketData, subject: e.target.value})}
                    placeholder="Brief description of your issue"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select 
                    value={ticketData.priority}
                    onChange={(e) => setTicketData({...ticketData, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                  >
                    <option value="low">Low - General question</option>
                    <option value="normal">Normal - Standard issue</option>
                    <option value="high">High - Urgent problem</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    rows={4} 
                    required
                    value={ticketData.description}
                    onChange={(e) => setTicketData({...ticketData, description: e.target.value})}
                    placeholder="Please provide as much detail as possible about your issue"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button type="submit" fullWidth>
                    Create Ticket
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => {
                      setShowNewTicketForm(false)
                      setTicketData({ subject: '', priority: 'normal', description: '' })
                    }}
                    fullWidth
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SupportPage