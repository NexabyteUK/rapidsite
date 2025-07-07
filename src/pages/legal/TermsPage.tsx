import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalPageTemplate from '../../components/ui/LegalPageTemplate';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - RapidSite</title>
        <meta 
          name="description" 
          content="RapidSite Terms of Service. Read our terms and conditions for using our website building platform." 
        />
        <meta name="keywords" content="terms of service, terms and conditions, legal agreement, user agreement" />
      </Helmet>
      
      <LegalPageTemplate
        title="Terms of Service"
        lastUpdated="July 3, 2025"
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Nexabyte Limited 
            (trading as "RapidSite"), a company registered in England and Wales (Company No. 15817114), having its 
            registered office at 123 Tech Street, London, EC2A 1AB, United Kingdom ("Company", "we", "us", or "our").
          </p>
          <p className="mb-4">
            By accessing or using our website building platform and services at www.rapidsite.com (the "Service"), 
            you agree to be bound by these Terms. If you disagree with any part of these terms, then you do not 
            have permission to access the Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Service Description</h3>
          <p className="mb-4">
            RapidSite provides a comprehensive website building platform that enables users to create, design, 
            host, and manage websites without requiring technical coding knowledge. Our Service includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Drag-and-drop website builder interface</li>
            <li>Website hosting and content delivery</li>
            <li>Domain management services</li>
            <li>E-commerce functionality</li>
            <li>SEO tools and analytics</li>
            <li>Customer support and resources</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Eligibility</h3>
          <p className="mb-4">
            You must be at least 18 years old to use our Service. By using our Service, you represent and warrant 
            that you have the legal capacity to enter into these Terms.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Acceptable Use</h3>
          <p className="mb-4">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights of others</li>
            <li>Transmit malicious code, viruses, or harmful software</li>
            <li>Engage in fraudulent or deceptive practices</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Create or distribute spam or unsolicited communications</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the Service for illegal gambling, adult content, or hate speech</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Registration</h3>
          <p className="mb-4">
            To access certain features of the Service, you must register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your password and account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Account Security</h3>
          <p className="mb-4">
            You are responsible for safeguarding your account credentials. We will never ask for your password 
            via email or phone. You agree not to share your account credentials with third parties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription Plans and Payment</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Subscription Plans</h3>
          <p className="mb-4">
            We offer various subscription plans with different features and pricing. Details of current plans 
            are available on our pricing page. We reserve the right to modify plans and pricing with 30 days' notice.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Billing and Payment</h3>
          <p className="mb-4">
            By subscribing to a paid plan, you agree to pay all applicable fees. Subscriptions automatically 
            renew unless cancelled. All fees are exclusive of taxes unless stated otherwise.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Refunds</h3>
          <p className="mb-4">
            We offer a 14-day money-back guarantee for new subscriptions. Refunds are subject to our Refund 
            Policy. Domain registrations and third-party services are non-refundable.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Our Intellectual Property</h3>
          <p className="mb-4">
            The Service and its original content, features, functionality, design, and software are owned by 
            Nexabyte Limited and are protected by international copyright, trademark, patent, trade secret, 
            and other intellectual property laws.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Your Content</h3>
          <p className="mb-4">
            You retain all rights to content you create using our Service. By using our Service, you grant us 
            a worldwide, non-exclusive, royalty-free license to host, store, and display your content solely 
            for the purpose of providing the Service.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Feedback</h3>
          <p className="mb-4">
            Any feedback, suggestions, or ideas you provide about the Service may be used by us without any 
            obligation to compensate you.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
          <p className="mb-4">
            Your use of the Service is subject to our Privacy Policy, which is incorporated into these Terms 
            by reference. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data 
            Protection Act 2018.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
          <p className="mb-4">
            Our Service may contain links to third-party websites or services that are not owned or controlled 
            by us. We have no control over, and assume no responsibility for, the content, privacy policies, 
            or practices of any third-party websites or services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations of Liability</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Service Availability</h3>
          <p className="mb-4">
            We strive to provide reliable service but cannot guarantee uninterrupted access. The Service is 
            provided "as is" and "as available" without warranties of any kind.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Limitation of Liability</h3>
          <p className="mb-4">
            To the maximum extent permitted by law, Nexabyte Limited shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including loss of profits, data, use, 
            or goodwill.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Total Liability</h3>
          <p className="mb-4">
            Our total liability to you for all claims arising from or related to these Terms or the Service 
            shall not exceed the amount paid by you to us in the twelve months preceding the claim.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless Nexabyte Limited, its officers, directors, employees, 
            and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) 
            arising from your use of the Service or violation of these Terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Termination by You</h3>
          <p className="mb-4">
            You may terminate your account at any time through your account settings. Termination does not 
            entitle you to a refund of any prepaid fees unless otherwise required by law.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Termination by Us</h3>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account immediately, without prior notice, for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Breach of these Terms</li>
            <li>Non-payment of fees</li>
            <li>Suspected fraudulent or illegal activity</li>
            <li>Extended period of inactivity</li>
            <li>Request by law enforcement</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Effect of Termination</h3>
          <p className="mb-4">
            Upon termination, your right to use the Service will immediately cease. We may delete your content 
            and data after 30 days following termination. Provisions that should survive termination will remain 
            in effect.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Informal Resolution</h3>
          <p className="mb-4">
            We encourage you to contact us first to resolve any disputes informally. Most concerns can be 
            resolved quickly and amicably through our customer support team.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Formal Proceedings</h3>
          <p className="mb-4">
            Any disputes that cannot be resolved informally shall be subject to the exclusive jurisdiction of 
            the courts of England and Wales.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. General Provisions</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Governing Law</h3>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
            without regard to conflict of law principles.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Changes to Terms</h3>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Material changes will be notified via email 
            or prominent notice on the Service at least 30 days before taking effect.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Entire Agreement</h3>
          <p className="mb-4">
            These Terms constitute the entire agreement between you and Nexabyte Limited regarding the Service 
            and supersede all prior agreements and understandings.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.4 Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue 
            in full force and effect.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.5 Waiver</h3>
          <p className="mb-4">
            No waiver of any term or condition shall be deemed a further or continuing waiver of such term or 
            any other term.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2"><strong>Nexabyte Limited (trading as RapidSite)</strong></p>
            <p className="mb-2">Stratford-upon-Avon, United Kingdom</p>
            <p className="mb-2"><strong>Email:</strong> info@nexabyte.co.uk</p>
            <p><strong>Company Registration:</strong> 15817114 (England and Wales)</p>
          </div>
        </section>
      </LegalPageTemplate>
    </>
  );
};

export default TermsPage;