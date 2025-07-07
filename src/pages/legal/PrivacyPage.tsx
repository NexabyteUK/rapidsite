import React from 'react'
import { Helmet } from 'react-helmet-async'
import { LegalPageTemplate } from '../../components/ui'

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - RapidSite</title>
        <meta 
          name="description" 
          content="RapidSite Privacy Policy. Learn how we collect, use, and protect your personal information." 
        />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR" />
      </Helmet>
      
      <LegalPageTemplate title="Privacy Policy" lastUpdated="January 1, 2024">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Nexabyte Limited ("RapidSite", "we", "us", or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you use our website building services at rapidsite.nexabyte.co.uk.
          </p>
          <p>
            By using our services, you agree to the collection and use of information in accordance with 
            this policy. If you do not agree with the terms of this privacy policy, please do not access 
            the site or use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
          <p className="mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information (email address, phone number)</li>
            <li>Business information (company name, website URL)</li>
            <li>Billing information (address, payment method details)</li>
            <li>Account credentials (username, password)</li>
            <li>Communication preferences</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our website building services</li>
            <li>To process transactions and send billing information</li>
            <li>To communicate with you about your account and services</li>
            <li>To send promotional communications (with your consent)</li>
            <li>To improve our services and develop new features</li>
            <li>To comply with legal obligations</li>
            <li>To protect against fraudulent or illegal activity</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing (GDPR)</h2>
          <p className="mb-4">We process your personal data under the following legal bases:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Contract:</strong> Processing necessary for the performance of our services</li>
            <li><strong>Consent:</strong> You have given consent for specific purposes</li>
            <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
            <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Service Providers:</strong> Third-party vendors who help us provide our services (hosting, payment processing, analytics)</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>With Your Consent:</strong> When you have given us permission to share your information</li>
          </ul>
          <p>We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. 
            While we strive to protect your personal information, we cannot guarantee absolute security.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
          <p className="mb-4">Under data protection laws, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data (right to be forgotten)</li>
            <li><strong>Restriction:</strong> Request limited processing of your data</li>
            <li><strong>Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Object:</strong> Object to certain types of processing</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
          </ul>
          <p>To exercise these rights, please contact us at privacy@nexabyte.co.uk.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and fulfill 
            the purposes outlined in this policy. Retention periods vary based on:
          </p>
          <ul className="list-disc pl-6 mb-4 mt-4">
            <li>The nature of the data</li>
            <li>Legal and regulatory requirements</li>
            <li>Business needs</li>
            <li>Your requests for deletion</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of 
            residence. We ensure appropriate safeguards are in place for such transfers, including standard 
            contractual clauses approved by the European Commission.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect 
            personal information from children under 16. If we become aware that we have collected such 
            information, we will take steps to delete it.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
            you to review this policy periodically.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
          <div className="mt-4">
            <p><strong>Nexabyte Limited</strong></p>
            <p>Email: info@nexabyte.co.uk</p>
            <p>Address: Stratford-upon-Avon, United Kingdom</p>
          </div>
          <p className="mt-4">
            For data protection concerns, you also have the right to lodge a complaint with the 
            Information Commissioner's Office (ICO) at ico.org.uk.
          </p>
        </section>
      </LegalPageTemplate>
    </>
  )
}

export default PrivacyPage