import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalPageTemplate from '../../components/ui/LegalPageTemplate';

const BuyoutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Buyout Option - RapidSite</title>
        <meta 
          name="description" 
          content="Learn about RapidSite's buyout option. Export your website and host it independently whenever you're ready." 
        />
        <meta name="keywords" content="buyout option, export website, self-hosting, website ownership" />
      </Helmet>
      
      <LegalPageTemplate
        title="Website Buyout Terms"
        lastUpdated="January 3, 2025"
      >
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-medium text-blue-900">
            Own Your Website Completely - Export and host it anywhere, anytime with our comprehensive buyout option.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            These Website Buyout Terms ("Buyout Terms") form part of the agreement between Nexabyte Limited 
            (trading as "RapidSite"), a company registered in England and Wales (Company No. 12345678), and 
            customers who wish to purchase a permanent, exportable copy of their website created using the 
            RapidSite platform.
          </p>
          <p className="mb-4">
            The RapidSite Buyout Option provides you with complete ownership of your website's code and assets, 
            enabling you to host it independently on any web hosting service. This one-time purchase gives you 
            full control over your website's future.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility and Requirements</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Eligibility Criteria</h3>
          <p className="mb-4">To be eligible for the buyout option, you must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Have an active RapidSite account in good standing</li>
            <li>Own all content and have rights to all third-party elements used in your website</li>
            <li>Have no outstanding payments or disputes with RapidSite</li>
            <li>Comply with all Terms of Service</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Website Requirements</h3>
          <p className="mb-4">
            The website must be fully built and published on RapidSite before buyout. Websites in draft or 
            development status must be completed before the buyout option becomes available.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. What's Included in the Buyout</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Complete Website Package</h3>
          <p className="mb-4">Your buyout package includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>All HTML files:</strong> Complete markup for every page of your website</li>
            <li><strong>CSS stylesheets:</strong> All styling including responsive design rules</li>
            <li><strong>JavaScript files:</strong> All interactive functionality and animations</li>
            <li><strong>Media assets:</strong> Images, videos, fonts, and icons used on your site</li>
            <li><strong>Configuration files:</strong> robots.txt, sitemap.xml, and other SEO files</li>
            <li><strong>Form structure:</strong> HTML forms (backend processing not included)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Documentation Package</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Deployment guide for major hosting platforms</li>
            <li>File structure documentation</li>
            <li>Basic maintenance instructions</li>
            <li>List of external dependencies and libraries</li>
            <li>SEO configuration guide</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Technical Specifications</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2"><strong>Export Format:</strong> ZIP archive containing all files</p>
            <p className="mb-2"><strong>File Structure:</strong> Standard web directory hierarchy</p>
            <p className="mb-2"><strong>Code Standards:</strong> W3C-compliant HTML5, CSS3, ES6+ JavaScript</p>
            <p className="mb-2"><strong>Compatibility:</strong> Works with any standard web hosting service</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What's Not Included</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Backend Services</h3>
          <p className="mb-4">The following require separate setup after buyout:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Form processing and email delivery</li>
            <li>Database functionality</li>
            <li>User authentication systems</li>
            <li>E-commerce payment processing</li>
            <li>Content management systems</li>
            <li>Analytics and tracking (must add your own)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Third-Party Services</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Domain name (must be purchased separately)</li>
            <li>Web hosting service</li>
            <li>SSL certificates</li>
            <li>CDN services</li>
            <li>Email hosting</li>
            <li>Third-party API keys or licenses</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Buyout Pricing Structure</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Standard Pricing</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-2">Website Category</th>
                  <th className="text-left py-2">Page Count</th>
                  <th className="text-left py-2">Buyout Fee (GBP)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Single Page</td>
                  <td className="py-2">1 page</td>
                  <td className="py-2">£249</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Small Website</td>
                  <td className="py-2">2-5 pages</td>
                  <td className="py-2">£449</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Medium Website</td>
                  <td className="py-2">6-15 pages</td>
                  <td className="py-2">£749</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Large Website</td>
                  <td className="py-2">16-50 pages</td>
                  <td className="py-2">£1,249</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Enterprise Website</td>
                  <td className="py-2">51-100 pages</td>
                  <td className="py-2">£2,499</td>
                </tr>
                <tr>
                  <td className="py-2">Custom Enterprise</td>
                  <td className="py-2">100+ pages</td>
                  <td className="py-2">Contact for Quote</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Additional Fees</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>E-commerce functionality:</strong> +£299 (includes product pages and cart structure)</li>
            <li><strong>Custom animations:</strong> +£199 (for complex JavaScript animations)</li>
            <li><strong>Multi-language versions:</strong> +£149 per additional language</li>
            <li><strong>Priority processing:</strong> +£99 (delivery within 6 hours)</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Payment Terms</h3>
          <p className="mb-4">
            All buyout fees are one-time payments. No recurring charges apply after buyout. Prices are exclusive 
            of VAT where applicable. Payment must be completed before website export is processed.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Buyout Process</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Step-by-Step Process</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2"><strong>Request Initiation:</strong> Submit buyout request through your RapidSite dashboard</li>
            <li className="mb-2"><strong>Review:</strong> Our team reviews your website and confirms eligibility (1-2 business hours)</li>
            <li className="mb-2"><strong>Quote:</strong> Receive detailed quote based on your website specifications</li>
            <li className="mb-2"><strong>Payment:</strong> Complete secure payment through our payment portal</li>
            <li className="mb-2"><strong>Processing:</strong> Website export prepared (up to 24 hours, or 6 hours for priority)</li>
            <li className="mb-2"><strong>Delivery:</strong> Receive download link via email with all files and documentation</li>
            <li className="mb-2"><strong>Confirmation:</strong> Verify successful download and file integrity</li>
          </ol>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Processing Times</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Standard processing:</strong> 24 hours from payment confirmation</li>
            <li><strong>Priority processing:</strong> 6 hours from payment confirmation</li>
            <li><strong>Enterprise websites:</strong> 48-72 hours depending on complexity</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Post-Buyout Support</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Included Support</h3>
          <p className="mb-4">For 30 days after buyout, you receive:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email support for deployment questions (response within 48 hours)</li>
            <li>Assistance with file structure questions</li>
            <li>Guidance on hosting provider selection</li>
            <li>Help with basic configuration issues</li>
            <li>One re-download if files are lost</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Extended Support Options</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="mb-2"><strong>Basic Support Extension:</strong> £49/month - Email support continues</p>
            <p className="mb-2"><strong>Premium Support:</strong> £149/month - Priority email + 2 phone calls</p>
            <p className="mb-2"><strong>Deployment Service:</strong> £299 one-time - We deploy to your hosting</p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Support Limitations</h3>
          <p className="mb-4">Post-buyout support does not include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Custom code modifications</li>
            <li>New feature development</li>
            <li>Third-party integration setup</li>
            <li>Ongoing maintenance or updates</li>
            <li>Security patches or vulnerability fixes</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Ownership Transfer</h3>
          <p className="mb-4">
            Upon completion of buyout payment, you receive a perpetual, worldwide license to use, modify, and 
            distribute the website code for any purpose. This includes commercial use and creating derivative works.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Your Responsibilities</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure you own or have licenses for all content (text, images, videos)</li>
            <li>Obtain necessary licenses for any premium fonts or icons</li>
            <li>Comply with licenses of any third-party libraries included</li>
            <li>Remove any RapidSite trial content or placeholder materials</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 RapidSite Rights</h3>
          <p className="mb-4">
            RapidSite retains the right to use anonymized design patterns and general layout concepts for 
            platform improvement. No specific customer content or branding will be used without permission.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Technical Considerations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Hosting Requirements</h3>
          <p className="mb-4">Minimum hosting requirements for exported websites:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard web server (Apache, Nginx, IIS)</li>
            <li>PHP 7.4+ (only if using contact forms)</li>
            <li>HTTPS support recommended</li>
            <li>Minimum 100MB storage space</li>
            <li>Standard bandwidth based on traffic</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Performance Optimization</h3>
          <p className="mb-4">
            Exported websites are optimized for performance but may require additional configuration:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Enable GZIP compression on your server</li>
            <li>Configure caching headers</li>
            <li>Consider using a CDN for global delivery</li>
            <li>Optimize images if modifying content</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Warranties and Disclaimers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 What We Guarantee</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Files will match the current published version of your website</li>
            <li>Code will be standards-compliant and well-structured</li>
            <li>All assets referenced in code will be included</li>
            <li>Documentation will be comprehensive and accurate</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Limitations</h3>
          <p className="mb-4">
            We do not guarantee:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Compatibility with all hosting environments</li>
            <li>Future browser compatibility</li>
            <li>Security of self-hosted websites</li>
            <li>Performance on third-party hosting</li>
            <li>Functionality of dynamic features without proper backend setup</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Refund Policy</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 No Refunds</h3>
          <p className="mb-4">
            Due to the digital nature of the product, all buyout sales are final. No refunds will be issued 
            after the website files have been delivered. We encourage you to thoroughly review your website 
            before requesting buyout.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Exceptions</h3>
          <p className="mb-4">
            Refunds may be considered only in cases of:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Technical error preventing file delivery</li>
            <li>Significant discrepancy between live site and exported files</li>
            <li>Payment processing errors</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Legal Terms</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Governing Law</h3>
          <p className="mb-4">
            These Buyout Terms are governed by the laws of England and Wales. Any disputes shall be subject 
            to the exclusive jurisdiction of the courts of England and Wales.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Entire Agreement</h3>
          <p className="mb-4">
            These Buyout Terms, together with our Terms of Service, constitute the entire agreement regarding 
            the website buyout option. Any modifications must be in writing.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Severability</h3>
          <p className="mb-4">
            If any provision of these terms is found invalid, the remaining provisions shall continue in full 
            force and effect.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
          <p className="mb-4">
            For buyout inquiries and support:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2"><strong>Nexabyte Limited (trading as RapidSite)</strong></p>
            <p className="mb-2">123 Tech Street, London EC2A 1AB, United Kingdom</p>
            <p className="mb-2"><strong>Buyout Team:</strong> buyout@rapidsite.com</p>
            <p className="mb-2"><strong>Technical Support:</strong> support@rapidsite.com</p>
            <p className="mb-2"><strong>Phone:</strong> +44 20 1234 5678</p>
            <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM GMT</p>
          </div>
        </section>
        
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Request Website Buyout
          </button>
        </div>
      </LegalPageTemplate>
    </>
  );
};

export default BuyoutPage;