import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, Grid, Button, Badge } from '../../components/ui'

const SubscriptionPage: React.FC = () => {
  const [showCardForm, setShowCardForm] = useState(false)

  // Placeholder data - would come from API
  const subscriptionData = {
    plan: 'Boost',
    price: 109,
    term: '12 month',
    startDate: '2024-01-15',
    nextBilling: '2025-01-15',
    daysRemaining: 192,
    isFixedTerm: true,
    status: 'active'
  }

  const paymentMethod = {
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    expiry: '12/26'
  }

  const billingHistory = [
    { date: '2024-12-15', amount: 109, status: 'paid', invoice: 'INV-2024-12' },
    { date: '2024-11-15', amount: 109, status: 'paid', invoice: 'INV-2024-11' },
    { date: '2024-10-15', amount: 109, status: 'paid', invoice: 'INV-2024-10' }
  ]

  const handleUpdateCard = () => {
    setShowCardForm(true)
  }

  const handleCancelSubscription = () => {
    // TODO: Implement cancellation logic
    console.log('Cancel subscription clicked')
  }

  return (
    <>
      <Helmet>
        <title>Subscription - RapidSite Dashboard</title>
        <meta name="description" content="Manage your RapidSite subscription and billing" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Subscription</h1>
          <p className="text-gray-600 mt-1">Manage your plan, billing, and payment methods.</p>
        </div>

        <Grid cols={{ mobile: 1, desktop: 2 }} gap="lg">
          {/* Current plan */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold text-gray-900">Current Plan</h2>
              <Badge variant="success" size="sm">Active</Badge>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-heading font-bold text-brand-accent-1">{subscriptionData.plan}</h3>
                <p className="text-gray-600">£{subscriptionData.price}/month • {subscriptionData.term} commitment</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Started</span>
                    <span className="text-sm font-medium text-gray-900">{subscriptionData.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Next billing</span>
                    <span className="text-sm font-medium text-gray-900">{subscriptionData.nextBilling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Fixed term remaining</span>
                    <span className="text-sm font-medium text-brand-accent-1">{subscriptionData.daysRemaining} days</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">What's included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    7-day build
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hosting included
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SSL certificate
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    48-hour support response
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Security updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Global edge hosting
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Payment method */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold text-gray-900">Payment Method</h2>
              <Button variant="outline" size="sm" onClick={handleUpdateCard}>
                Update Card
              </Button>
            </div>
            
            {!showCardForm ? (
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">•••• •••• •••• {paymentMethod.last4}</p>
                    <p className="text-xs text-gray-500">Expires {paymentMethod.expiry}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-blue-800">Secure payments</p>
                      <p className="text-xs text-blue-600">Your payment information is encrypted and secure.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input 
                      type="text" 
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent-1"
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button size="sm">Save Card</Button>
                  <Button variant="outline" size="sm" onClick={() => setShowCardForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </Grid>

        {/* Billing history */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Billing History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Amount</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((bill, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-900">{bill.date}</td>
                    <td className="py-3 text-sm text-gray-900">£{bill.amount}</td>
                    <td className="py-3">
                      <Badge variant="success" size="sm">Paid</Badge>
                    </td>
                    <td className="py-3">
                      <button className="text-sm text-brand-accent-1 hover:text-brand-accent-2">
                        {bill.invoice}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Contract information */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Contract Information</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex">
              <svg className="w-5 h-5 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-2">
                <p className="text-sm font-medium text-yellow-800">Fixed term contract</p>
                <p className="text-xs text-yellow-600">
                  You're currently in a {subscriptionData.term} fixed term contract with {subscriptionData.daysRemaining} days remaining.
                  After this period, you can cancel anytime with 30 days notice.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              <strong>After your fixed term:</strong> Your subscription will continue month-to-month at £49/month. 
              You can cancel anytime with 30 days notice.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Need to cancel early?</strong> Contact our support team to discuss your options.
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={handleCancelSubscription}>
              Request Cancellation
            </Button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default SubscriptionPage