import React from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentIssuePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Payment Issue - RapidSite</title>
        <meta 
          name="description" 
          content="Having trouble with your payment? We're here to help resolve any billing issues quickly." 
        />
        <meta name="keywords" content="payment issue, billing problem, payment help, transaction error" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Payment Issue?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're sorry you're experiencing payment difficulties. Let's get this resolved quickly.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Common Issues */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Payment Issues</h2>
                
                <div className="space-y-4">
                  {[
                    { issue: 'Card Declined', solution: 'Check with your bank or try a different payment method' },
                    { issue: 'Transaction Failed', solution: 'Ensure your billing information is correct and try again' },
                    { issue: 'Double Charge', solution: 'Contact our support team for immediate assistance' },
                    { issue: 'Subscription Issues', solution: 'Review your subscription status in your account settings' }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.issue}</h3>
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Support */}
              <div className="bg-blue-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our support team is standing by to help resolve your payment issue.
                </p>
                <div className="space-y-4">
                  <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Contact Support
                  </button>
                  <p className="text-gray-600">
                    Or email us directly at: <span className="font-medium">billing@rapidsite.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentIssuePage;