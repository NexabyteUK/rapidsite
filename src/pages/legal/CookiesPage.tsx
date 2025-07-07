import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalPageTemplate from '../../components/ui/LegalPageTemplate';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - RapidSite</title>
        <meta 
          name="description" 
          content="RapidSite Cookie Policy. Learn how we use cookies and similar technologies on our platform." 
        />
        <meta name="keywords" content="cookie policy, cookies, tracking, web analytics" />
      </Helmet>
      
      <LegalPageTemplate
        title="Cookie Policy"
        lastUpdated="July 3, 2025"
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Cookie Policy explains how Nexabyte Limited (trading as "RapidSite"), a company registered in 
            England and Wales (Company No. 15817114), uses cookies and similar tracking technologies on our website 
            www.rapidsite.com and our website building platform (collectively, the "Service").
          </p>
          <p className="mb-4">
            By using our Service, you consent to our use of cookies as described in this policy. This Cookie Policy 
            forms part of our Privacy Policy and should be read in conjunction with it.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer, smartphone, or other device when you 
            visit a website. They are widely used to make websites work more efficiently, provide a better user 
            experience, and provide information to website owners.
          </p>
          <p className="mb-4">
            Cookies can be "persistent" or "session" cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Persistent cookies</strong> remain on your device for a set period or until you delete them</li>
            <li><strong>Session cookies</strong> are temporary and are deleted when you close your web browser</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
          <p className="mb-4">
            We use cookies and similar technologies for the following purposes:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Essential Operation</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Authentication and maintaining your logged-in status</li>
            <li>Securing your account and preventing fraudulent activity</li>
            <li>Remembering items in your shopping cart</li>
            <li>Load balancing and ensuring website stability</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Performance and Analytics</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Understanding how visitors use our website</li>
            <li>Testing different design elements and features</li>
            <li>Monitoring and improving website performance</li>
            <li>Analyzing user behavior to enhance our services</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Functionality and Preferences</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Remembering your language and regional preferences</li>
            <li>Customizing content based on your preferences</li>
            <li>Remembering your website builder settings</li>
            <li>Providing chat support functionality</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Marketing and Advertising</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Showing relevant advertisements on third-party websites</li>
            <li>Measuring the effectiveness of our marketing campaigns</li>
            <li>Limiting the number of times you see an advertisement</li>
            <li>Understanding which advertisements led you to our Service</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 First-Party Cookies</h3>
          <p className="mb-4">
            These are cookies set by RapidSite directly. They include:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Cookie Name</th>
                  <th className="text-left py-2">Purpose</th>
                  <th className="text-left py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">rs_session</td>
                  <td className="py-2">Maintains user session</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">rs_auth</td>
                  <td className="py-2">Authentication token</td>
                  <td className="py-2">30 days</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">rs_prefs</td>
                  <td className="py-2">User preferences</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr>
                  <td className="py-2">rs_consent</td>
                  <td className="py-2">Cookie consent status</td>
                  <td className="py-2">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Third-Party Cookies</h3>
          <p className="mb-4">
            We work with trusted third-party services that may set cookies on your device:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Google Analytics</h4>
            <p className="mb-2">Used to analyze website usage and improve our services</p>
            <p className="text-sm">Cookies: _ga, _gid, _gat</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Stripe</h4>
            <p className="mb-2">Payment processing and fraud prevention</p>
            <p className="text-sm">Cookies: __stripe_mid, __stripe_sid</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Intercom</h4>
            <p className="mb-2">Customer support chat functionality</p>
            <p className="text-sm">Cookies: intercom-id-[app_id], intercom-session-[app_id]</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">CloudFlare</h4>
            <p className="mb-2">Security and performance optimization</p>
            <p className="text-sm">Cookies: __cfduid, cf_clearance</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Other Tracking Technologies</h2>
          <p className="mb-4">
            In addition to cookies, we may use other similar technologies:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Web Beacons</h3>
          <p className="mb-4">
            Small graphic images (also known as "pixel tags" or "clear GIFs") that may be included in our emails 
            to help us understand email campaign effectiveness.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Local Storage</h3>
          <p className="mb-4">
            Similar to cookies but can store larger amounts of data. Used to improve website performance and 
            remember your website builder progress.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Device Fingerprinting</h3>
          <p className="mb-4">
            Collection of device information for security purposes and fraud prevention. This does not personally 
            identify you but helps us detect unusual activity.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Cookie Choices</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Cookie Consent</h3>
          <p className="mb-4">
            When you first visit our website, you will be presented with a cookie consent banner allowing you to 
            accept or customize your cookie preferences. You can change these preferences at any time through the 
            cookie settings link in our website footer.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Browser Controls</h3>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>View what cookies are stored on your device</li>
            <li>Delete some or all cookies</li>
            <li>Block cookies from specific or all websites</li>
            <li>Receive notifications when cookies are set</li>
          </ul>
          
          <p className="mb-4">
            Popular browser cookie settings:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Chrome:</strong> Settings {'>'} Privacy and security {'>'} Cookies and other site data</li>
            <li><strong>Firefox:</strong> Settings {'>'} Privacy & Security {'>'} Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences {'>'} Privacy {'>'} Cookies and website data</li>
            <li><strong>Edge:</strong> Settings {'>'} Privacy, search, and services {'>'} Cookies and site permissions</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Impact of Disabling Cookies</h3>
          <p className="mb-4">
            Please note that if you disable or block certain cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Some features of our Service may not function properly</li>
            <li>You may need to sign in every time you visit</li>
            <li>Your preferences may not be remembered</li>
            <li>You may see less relevant content and advertisements</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
          <p className="mb-4">
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want 
            your online activity tracked. Currently, there is no industry standard for responding to DNT signals, 
            and we do not respond to DNT signals at this time.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies on Customer Websites</h2>
          <p className="mb-4">
            When you create a website using RapidSite, you have control over what cookies are used on your website. 
            We provide:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Tools to add cookie consent banners to your website</li>
            <li>Integration options for analytics services</li>
            <li>Guidance on cookie compliance for your website</li>
          </ul>
          <p className="mb-4">
            You are responsible for ensuring your website complies with applicable cookie laws based on your 
            location and your visitors' locations.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
          <p className="mb-4">
            Our Service is not directed to children under 13 (or 16 in the European Economic Area). We do not 
            knowingly collect personal information from children. If you believe we have collected information 
            from a child, please contact us immediately.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Transfers</h2>
          <p className="mb-4">
            Information collected through cookies may be transferred to and processed in countries other than the 
            country in which you are located. These countries may have data protection laws that are different 
            from the laws of your country.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
            new Cookie Policy on this page and updating the "Last updated" date.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2"><strong>Nexabyte Limited (trading as RapidSite)</strong></p>
            <p className="mb-2">Stratford-upon-Avon, United Kingdom</p>
            <p className="mb-2"><strong>Email:</strong> info@nexabyte.co.uk</p>
            <p><strong>ICO Registration:</strong> ZB911761</p>
          </div>
        </section>
      </LegalPageTemplate>
    </>
  );
};

export default CookiesPage;