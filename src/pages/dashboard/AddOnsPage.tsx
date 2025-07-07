import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, Grid, Button, Badge } from '../../components/ui'

const AddOnsPage: React.FC = () => {
  const [selectedAddOn, setSelectedAddOn] = useState<string | null>(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  // Placeholder data - would come from API
  const currentAddOns = [
    {
      id: 'priority-support',
      name: 'Priority Support',
      price: 19,
      billing: 'monthly',
      status: 'active',
      description: '24-hour response time',
      nextBilling: '2025-01-15'
    }
  ]

  const availableAddOns = [
    {
      id: 'change-pack',
      name: 'Change-Pack',
      price: 49,
      billing: 'per 30-minute block',
      description: 'Content updates, image changes, layout tweaks, new pages, and design changes',
      features: [
        'Content updates',
        'Image changes', 
        'Layout modifications',
        'New page additions',
        'Any design changes'
      ],
      popular: true
    },
    {
      id: 'priority-support-upgrade',
      name: 'Priority Support',
      price: 19,
      billing: 'monthly',
      description: 'Get 24-hour response for urgent issues instead of 48 hours',
      features: [
        '24-hour response time',
        'Priority queue',
        'Direct support line',
        'Faster issue resolution'
      ],
      disabled: true,
      disabledReason: 'Already active'
    }
  ]

  const changePackHistory = [
    { date: '2024-12-20', description: 'Updated contact page content', minutes: 25, cost: 49, status: 'completed' },
    { date: '2024-11-15', description: 'Added new service page', minutes: 30, cost: 49, status: 'completed' },
    { date: '2024-10-08', description: 'Updated hero section images', minutes: 15, cost: 49, status: 'completed' }
  ]

  const handlePurchase = (addOnId: string) => {
    setSelectedAddOn(addOnId)
    setShowPaymentForm(true)
  }

  const handleConfirmPurchase = () => {
    // TODO: Implement actual purchase logic
    console.log('Purchase confirmed for:', selectedAddOn)
    setShowPaymentForm(false)
    setSelectedAddOn(null)
  }

  const getSelectedAddOnData = () => {
    return availableAddOns.find(addon => addon.id === selectedAddOn)
  }

  return (
    <>
      <Helmet>
        <title>Add-ons - RapidSite Dashboard</title>
        <meta name="description" content="Purchase additional services for your website" />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Add-ons</h1>
          <p className="text-gray-600 mt-1">Enhance your website with our additional services.</p>
        </div>

        {/* Current add-ons */}
        {currentAddOns.length > 0 && (
          <Card>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Active Add-ons</h2>
            <div className="space-y-4">
              {currentAddOns.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-900 mr-3">{addon.name}</h3>
                      <Badge variant="success" size="sm">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Next billing: {addon.nextBilling}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">£{addon.price}/{addon.billing}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Manage
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Available add-ons */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Available Add-ons</h2>
          <Grid cols={{ mobile: 1, tablet: 2 }} gap="lg">
            {availableAddOns.map((addon) => (
              <div 
                key={addon.id} 
                className={`relative border rounded-lg p-6 ${
                  addon.disabled 
                    ? 'border-gray-200 bg-gray-50' 
                    : addon.popular 
                      ? 'border-brand-accent-1 bg-brand-accent-1/5' 
                      : 'border-gray-200 bg-white'
                } hover:shadow-lg transition-shadow ${addon.popular ? 'mt-4' : ''}`}
              >
                {addon.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge variant="primary" size="sm">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                    {addon.name}
                  </h3>
                  <div className="font-heading font-bold text-2xl text-brand-accent-1 mb-2">
                    £{addon.price}
                  </div>
                  <p className="text-sm text-gray-600">{addon.billing}</p>
                  <p className="text-gray-600 mt-3">{addon.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={addon.disabled ? 'text-gray-500' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  fullWidth 
                  disabled={addon.disabled}
                  onClick={() => handlePurchase(addon.id)}
                  variant={addon.popular ? 'primary' : 'outline'}
                >
                  {addon.disabled ? addon.disabledReason : `Purchase ${addon.name}`}
                </Button>
              </div>
            ))}
          </Grid>
        </Card>

        {/* Change-Pack history */}
        <Card>
          <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Change-Pack History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Description</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Time Used</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Cost</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {changePackHistory.map((record, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-900">{record.date}</td>
                    <td className="py-3 text-sm text-gray-900">{record.description}</td>
                    <td className="py-3 text-sm text-gray-900">{record.minutes} minutes</td>
                    <td className="py-3 text-sm text-gray-900">£{record.cost}</td>
                    <td className="py-3">
                      <Badge variant="success" size="sm">Completed</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {changePackHistory.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No Change-Pack purchases yet.</p>
              <p className="text-sm text-gray-400 mt-1">
                Purchase your first Change-Pack to get started with website updates.
              </p>
            </div>
          )}
        </Card>

        {/* Payment modal */}
        {showPaymentForm && selectedAddOn && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                Purchase {getSelectedAddOnData()?.name}
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Price</span>
                  <span className="font-semibold text-gray-900">
                    £{getSelectedAddOnData()?.price} {getSelectedAddOnData()?.billing}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
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
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleConfirmPurchase} fullWidth>
                  Confirm Purchase
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowPaymentForm(false)
                    setSelectedAddOn(null)
                  }}
                  fullWidth
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Help section */}
        <Card className="bg-blue-50 border border-blue-200">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-900 mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-blue-800 mb-3">
                Not sure which add-on is right for you? Our team can help you decide based on your specific needs.
              </p>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default AddOnsPage