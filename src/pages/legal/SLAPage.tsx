import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalPageTemplate from '../../components/ui/LegalPageTemplate';

const SLAPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Service Level Agreement - RapidSite</title>
        <meta 
          name="description" 
          content="RapidSite Service Level Agreement. Our commitment to providing reliable, high-performance website building services." 
        />
        <meta name="keywords" content="SLA, service level agreement, uptime, reliability, performance" />
      </Helmet>
      
      <LegalPageTemplate
        title="Service Level Agreement"
        lastUpdated="January 3, 2025"
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Service Level Agreement ("SLA") is entered into between Nexabyte Limited (trading as "RapidSite"), 
            a company registered in England and Wales (Company No. 12345678), and the customer ("Customer", "you") 
            who subscribes to our paid services.
          </p>
          <p className="mb-4">
            This SLA defines the service performance standards and remedies available to eligible customers if 
            RapidSite fails to meet these standards. This SLA is incorporated into and forms part of the Terms 
            of Service between RapidSite and Customer.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Availability Commitment</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Uptime Guarantee</h3>
          <p className="mb-4">
            RapidSite commits to maintaining the following monthly service availability levels for the platform:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Subscription Plan</th>
                  <th className="text-left py-2">Monthly Uptime Commitment</th>
                  <th className="text-left py-2">Maximum Downtime per Month</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Enterprise</td>
                  <td className="py-2">99.95%</td>
                  <td className="py-2">21.9 minutes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Professional Plus</td>
                  <td className="py-2">99.9%</td>
                  <td className="py-2">43.8 minutes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Professional</td>
                  <td className="py-2">99.9%</td>
                  <td className="py-2">43.8 minutes</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Business</td>
                  <td className="py-2">99.5%</td>
                  <td className="py-2">3.65 hours</td>
                </tr>
                <tr>
                  <td className="py-2">Starter</td>
                  <td className="py-2">99.0%</td>
                  <td className="py-2">7.3 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Service Availability Calculation</h3>
          <p className="mb-4">
            Monthly Uptime Percentage is calculated using the following formula:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
            Monthly Uptime % = (Total Minutes in Month - Downtime Minutes) / Total Minutes in Month × 100
          </div>
          <p className="mb-4">
            Where "Downtime" is defined as the total accumulated minutes during the month when the Service is 
            unavailable to the Customer.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Credits</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Credit Schedule</h3>
          <p className="mb-4">
            If RapidSite fails to meet the Monthly Uptime Commitment, eligible customers will receive Service 
            Credits according to the following schedule:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Monthly Uptime Percentage</th>
                  <th className="text-left py-2">Service Credit Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">99.0% to {'<'} 99.9% (or committed level)</td>
                  <td className="py-2">10% of monthly fee</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">95.0% to {'<'} 99.0%</td>
                  <td className="py-2">25% of monthly fee</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">90.0% to {'<'} 95.0%</td>
                  <td className="py-2">50% of monthly fee</td>
                </tr>
                <tr>
                  <td className="py-2">{'<'} 90.0%</td>
                  <td className="py-2">100% of monthly fee</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Credit Request Process</h3>
          <p className="mb-4">
            To receive Service Credits, customers must:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Submit a claim within 30 days of the end of the affected month</li>
            <li>Include dates and times of unavailability</li>
            <li>Provide supporting documentation of the service interruption</li>
            <li>Submit claims to sla@rapidsite.com</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Credit Application</h3>
          <p className="mb-4">
            Service Credits will be applied to the customer's account within 30 days of claim approval and will 
            be used against future invoices. Service Credits do not entitle customers to any refund or cash payment.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Support Response Times</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Support Channels</h3>
          <p className="mb-4">
            RapidSite provides technical support through the following channels:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email support: support@rapidsite.com</li>
            <li>Live chat (Business hours: 9 AM - 6 PM GMT, Monday-Friday)</li>
            <li>Support ticket system: support.rapidsite.com</li>
            <li>Phone support (Enterprise customers only)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Issue Priority Levels</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Priority</th>
                  <th className="text-left py-2">Definition</th>
                  <th className="text-left py-2">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Critical (P1)</td>
                  <td className="py-2">Complete service outage or critical feature unavailable</td>
                  <td className="py-2">Website offline, unable to publish</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">High (P2)</td>
                  <td className="py-2">Major feature impaired with no workaround</td>
                  <td className="py-2">E-commerce checkout failing</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-semibold">Medium (P3)</td>
                  <td className="py-2">Feature impaired but workaround available</td>
                  <td className="py-2">Analytics not updating</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Low (P4)</td>
                  <td className="py-2">Minor issue or feature request</td>
                  <td className="py-2">UI enhancement request</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Response Time Commitments</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Priority</th>
                  <th className="text-left py-2">Enterprise</th>
                  <th className="text-left py-2">Professional Plus</th>
                  <th className="text-left py-2">Professional</th>
                  <th className="text-left py-2">Business/Starter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Critical (P1)</td>
                  <td className="py-2">30 minutes</td>
                  <td className="py-2">1 hour</td>
                  <td className="py-2">2 hours</td>
                  <td className="py-2">4 hours</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">High (P2)</td>
                  <td className="py-2">2 hours</td>
                  <td className="py-2">4 hours</td>
                  <td className="py-2">8 hours</td>
                  <td className="py-2">24 hours</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Medium (P3)</td>
                  <td className="py-2">8 hours</td>
                  <td className="py-2">24 hours</td>
                  <td className="py-2">48 hours</td>
                  <td className="py-2">72 hours</td>
                </tr>
                <tr>
                  <td className="py-2">Low (P4)</td>
                  <td className="py-2">24 hours</td>
                  <td className="py-2">72 hours</td>
                  <td className="py-2">5 days</td>
                  <td className="py-2">7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Performance Standards</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Page Load Times</h3>
          <p className="mb-4">
            RapidSite commits to the following performance standards for hosted websites:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Average page load time: {'<'} 3 seconds (for optimized content)</li>
            <li>Time to First Byte (TTFB): {'<'} 600ms</li>
            <li>Website builder interface response: {'<'} 2 seconds</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Content Delivery Network (CDN)</h3>
          <p className="mb-4">
            All paid plans include CDN services with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Global edge locations for faster content delivery</li>
            <li>Automatic image optimization</li>
            <li>DDoS protection</li>
            <li>SSL/TLS encryption</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Backup and Recovery</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Backup Frequency</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Enterprise: Real-time replication + hourly snapshots</li>
            <li>Professional Plus: Every 6 hours</li>
            <li>Professional: Daily</li>
            <li>Business: Daily</li>
            <li>Starter: Weekly</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Recovery Time Objectives (RTO)</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Enterprise: 1 hour</li>
            <li>Professional Plus: 4 hours</li>
            <li>Professional: 8 hours</li>
            <li>Business/Starter: 24 hours</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Recovery Point Objectives (RPO)</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Enterprise: 1 hour</li>
            <li>Professional Plus: 6 hours</li>
            <li>Professional: 24 hours</li>
            <li>Business/Starter: 24 hours</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Maintenance Windows</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Scheduled Maintenance</h3>
          <p className="mb-4">
            RapidSite performs scheduled maintenance during the following windows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard window: Sundays, 2:00 AM - 6:00 AM GMT</li>
            <li>Emergency maintenance: As required with minimum 4 hours notice</li>
            <li>Major upgrades: Minimum 7 days advance notice</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Maintenance Notifications</h3>
          <p className="mb-4">
            Customers will be notified of scheduled maintenance via:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email notification to account administrators</li>
            <li>Dashboard notifications</li>
            <li>Status page updates at status.rapidsite.com</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Exclusions</h2>
          <p className="mb-4">
            This SLA does not apply to any unavailability, suspension, or termination of the Service caused by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Scheduled maintenance windows (as defined in Section 7)</li>
            <li>Emergency maintenance with proper notification</li>
            <li>Force majeure events (natural disasters, war, terrorism, labor disputes)</li>
            <li>Internet service provider failures or network issues outside our network</li>
            <li>Customer equipment, software, or network connections</li>
            <li>Customer's acts or omissions (including breach of Terms of Service)</li>
            <li>Third-party services or technology not controlled by RapidSite</li>
            <li>DNS propagation delays</li>
            <li>Suspension due to billing issues or Terms of Service violations</li>
            <li>Beta features or services marked as "preview"</li>
            <li>Free tier accounts</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Customer Responsibilities</h2>
          <p className="mb-4">
            To receive the benefits of this SLA, customers must:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Maintain current account information and contact details</li>
            <li>Report issues promptly through official support channels</li>
            <li>Provide reasonable cooperation for issue resolution</li>
            <li>Ensure website content complies with our Terms of Service</li>
            <li>Implement recommended security practices</li>
            <li>Keep integrations and plugins updated</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Monitoring and Reporting</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Service Monitoring</h3>
          <p className="mb-4">
            RapidSite continuously monitors service availability using:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Multi-region monitoring endpoints</li>
            <li>Real-time performance metrics</li>
            <li>Automated alerting systems</li>
            <li>Third-party monitoring services</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Availability Reporting</h3>
          <p className="mb-4">
            Customers can access service availability reports through:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Real-time status page: status.rapidsite.com</li>
            <li>Monthly uptime reports (Enterprise customers)</li>
            <li>Historical performance data in account dashboard</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to SLA</h2>
          <p className="mb-4">
            RapidSite reserves the right to modify this SLA with 30 days' notice to customers. Modifications will 
            be posted on our website and notified via email. Continued use of the Service after modifications 
            constitutes acceptance of the revised SLA.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
          <p className="mb-4">
            For SLA-related inquiries, service credit claims, or support:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2"><strong>Nexabyte Limited (trading as RapidSite)</strong></p>
            <p className="mb-2">123 Tech Street, London EC2A 1AB, United Kingdom</p>
            <p className="mb-2"><strong>SLA Claims:</strong> sla@rapidsite.com</p>
            <p className="mb-2"><strong>Technical Support:</strong> support@rapidsite.com</p>
            <p className="mb-2"><strong>Support Portal:</strong> support.rapidsite.com</p>
            <p className="mb-2"><strong>Status Page:</strong> status.rapidsite.com</p>
            <p><strong>Enterprise Support Hotline:</strong> +44 20 1234 5679</p>
          </div>
        </section>
      </LegalPageTemplate>
    </>
  );
};

export default SLAPage;