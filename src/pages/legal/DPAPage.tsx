import React from 'react';
import { Helmet } from 'react-helmet-async';
import LegalPageTemplate from '../../components/ui/LegalPageTemplate';

const DPAPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Processing Agreement - RapidSite</title>
        <meta 
          name="description" 
          content="RapidSite Data Processing Agreement. Learn about our data processing practices and compliance with data protection regulations." 
        />
        <meta name="keywords" content="DPA, data processing agreement, GDPR, data protection, compliance" />
      </Helmet>
      
      <LegalPageTemplate
        title="Data Processing Agreement"
        lastUpdated="July 3, 2025"
      >
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Scope</h2>
          <p className="mb-4">
            This Data Processing Agreement ("DPA") forms part of the Terms of Service ("Agreement") between 
            Nexabyte Limited (trading as "RapidSite"), a company registered in England and Wales (Company No. 15817114), 
            having its registered office at 1 Pettipher Mews, Stratford-upon-Avon, United Kingdom ("Processor", "we", "us") 
            and the customer ("Controller", "you") who uses our website building platform and services.
          </p>
          <p className="mb-4">
            This DPA applies when the Controller uses RapidSite services to process Personal Data on behalf of 
            the Controller or when RapidSite processes Personal Data on the Controller's behalf in connection 
            with the provision of services under the Agreement.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
          <p className="mb-4">
            For the purposes of this DPA, the following definitions apply:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>"Data Protection Laws"</strong> means all applicable data protection and privacy laws and regulations, including but not limited to the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, the Privacy and Electronic Communications Regulations 2003, and any successor legislation.</li>
            <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person as defined in applicable Data Protection Laws.</li>
            <li><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, recording, storage, retrieval, use, disclosure, and deletion.</li>
            <li><strong>"Data Subject"</strong> means the individual to whom Personal Data relates.</li>
            <li><strong>"Sub-processor"</strong> means any third party engaged by the Processor to process Personal Data on behalf of the Controller.</li>
            <li><strong>"Personal Data Breach"</strong> means a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Details of Processing</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Subject Matter and Duration</h3>
          <p className="mb-4">
            The subject matter of processing is the provision of website building, hosting, and related services 
            as described in the Agreement. The duration of processing shall be for the term of the Agreement and 
            any applicable retention period thereafter.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Nature and Purpose</h3>
          <p className="mb-4">
            The nature and purpose of processing includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hosting and serving website content</li>
            <li>Processing form submissions and user interactions</li>
            <li>Managing e-commerce transactions</li>
            <li>Providing analytics and reporting</li>
            <li>Enabling email and communication services</li>
            <li>Backup and disaster recovery</li>
            <li>Security and fraud prevention</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Types of Personal Data</h3>
          <p className="mb-4">
            The types of Personal Data processed may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Names and contact information</li>
            <li>Email addresses</li>
            <li>IP addresses and device information</li>
            <li>Payment information (processed by third-party payment processors)</li>
            <li>User-generated content</li>
            <li>Website visitor behavior and analytics data</li>
            <li>Any other data the Controller chooses to process through the Service</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Categories of Data Subjects</h3>
          <p className="mb-4">
            Categories of Data Subjects may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Website visitors</li>
            <li>Customers and prospective customers</li>
            <li>Employees and contractors of the Controller</li>
            <li>Business partners and suppliers</li>
            <li>Any other individuals whose data the Controller processes</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processor's Obligations</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 General Obligations</h3>
          <p className="mb-4">The Processor shall:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process Personal Data only on documented instructions from the Controller, unless required by law</li>
            <li>Immediately inform the Controller if, in the Processor's opinion, an instruction infringes Data Protection Laws</li>
            <li>Ensure that persons authorized to process Personal Data have committed themselves to confidentiality</li>
            <li>Take all measures required pursuant to Article 32 of the UK GDPR</li>
            <li>Respect the conditions for engaging another processor</li>
            <li>Assist the Controller in ensuring compliance with its obligations under Data Protection Laws</li>
            <li>Delete or return all Personal Data after the end of the provision of services</li>
            <li>Make available to the Controller all information necessary to demonstrate compliance</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Data Subject Rights</h3>
          <p className="mb-4">
            The Processor shall assist the Controller by implementing appropriate technical and organizational 
            measures to fulfill the Controller's obligation to respond to requests for exercising Data Subject 
            rights, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restriction of processing</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security of Processing</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Technical and Organizational Measures</h3>
          <p className="mb-4">
            The Processor shall implement and maintain appropriate technical and organizational measures to ensure 
            a level of security appropriate to the risk, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of Personal Data in transit and at rest</li>
            <li>Ongoing confidentiality, integrity, availability, and resilience of processing systems</li>
            <li>Ability to restore availability and access to Personal Data in a timely manner</li>
            <li>Regular testing, assessment, and evaluation of security measures</li>
            <li>Physical security of data centers</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security audits and penetration testing</li>
            <li>Employee training on data protection and security</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Specific Security Measures</h3>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Infrastructure Security</h4>
            <ul className="list-disc pl-6">
              <li>ISO 27001 certified data centers</li>
              <li>24/7 monitoring and intrusion detection</li>
              <li>Redundant systems and failover capabilities</li>
              <li>DDoS protection</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Application Security</h4>
            <ul className="list-disc pl-6">
              <li>Secure development lifecycle</li>
              <li>Regular vulnerability scanning</li>
              <li>Web application firewall (WAF)</li>
              <li>Input validation and sanitization</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Access Control</h4>
            <ul className="list-disc pl-6">
              <li>Role-based access control (RBAC)</li>
              <li>Multi-factor authentication (MFA)</li>
              <li>Regular access reviews</li>
              <li>Principle of least privilege</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sub-processors</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 General Authorization</h3>
          <p className="mb-4">
            The Controller provides general authorization for the Processor to engage Sub-processors to assist in 
            providing the services. The Processor shall inform the Controller of any intended changes concerning 
            the addition or replacement of Sub-processors, giving the Controller the opportunity to object to such changes.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Current Sub-processors</h3>
          <p className="mb-4">
            The current list of Sub-processors is available at: www.rapidsite.com/legal/subprocessors
          </p>
          <p className="mb-4">Key Sub-processors include:</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Sub-processor</th>
                  <th className="text-left py-2">Service Provided</th>
                  <th className="text-left py-2">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Amazon Web Services</td>
                  <td className="py-2">Cloud infrastructure</td>
                  <td className="py-2">UK/EU</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Cloudflare</td>
                  <td className="py-2">CDN and security</td>
                  <td className="py-2">Global</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Stripe</td>
                  <td className="py-2">Payment processing</td>
                  <td className="py-2">UK/EU</td>
                </tr>
                <tr>
                  <td className="py-2">SendGrid</td>
                  <td className="py-2">Email delivery</td>
                  <td className="py-2">EU</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Sub-processor Obligations</h3>
          <p className="mb-4">
            The Processor shall ensure that any Sub-processor is bound by written agreement to the same data 
            protection obligations as set out in this DPA.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. International Transfers</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Transfer Mechanisms</h3>
          <p className="mb-4">
            Personal Data may be transferred outside the UK and EEA. Where such transfers occur, the Processor 
            shall ensure appropriate safeguards are in place, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>UK-approved Standard Contractual Clauses</li>
            <li>Adequacy decisions by the UK government</li>
            <li>Binding Corporate Rules where applicable</li>
            <li>Other mechanisms approved under Data Protection Laws</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Transfer Impact Assessment</h3>
          <p className="mb-4">
            The Processor has conducted transfer impact assessments and implemented supplementary measures where 
            necessary to ensure an essentially equivalent level of protection.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Personal Data Breach</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Notification</h3>
          <p className="mb-4">
            The Processor shall notify the Controller without undue delay and in any event within 72 hours after 
            becoming aware of a Personal Data Breach. The notification shall include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nature of the breach including categories and approximate number of Data Subjects affected</li>
            <li>Likely consequences of the breach</li>
            <li>Measures taken or proposed to address the breach</li>
            <li>Contact details for more information</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Cooperation</h3>
          <p className="mb-4">
            The Processor shall cooperate with the Controller and take reasonable steps as directed by the 
            Controller to assist in the investigation, mitigation, and remediation of each Personal Data Breach.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Protection Impact Assessment</h2>
          <p className="mb-4">
            The Processor shall provide reasonable assistance to the Controller with any data protection impact 
            assessments and prior consultations with supervisory authorities that the Controller reasonably 
            considers to be required by Data Protection Laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Audits and Inspections</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Right to Audit</h3>
          <p className="mb-4">
            The Processor shall make available to the Controller all information necessary to demonstrate 
            compliance with this DPA and allow for and contribute to audits, including inspections, conducted 
            by the Controller or another auditor mandated by the Controller.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Audit Process</h3>
          <p className="mb-4">
            Audits shall be conducted:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With at least 30 days' written notice</li>
            <li>During normal business hours</li>
            <li>No more than once per year unless required by Data Protection Laws</li>
            <li>Subject to confidentiality agreements</li>
            <li>At the Controller's expense</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Return and Deletion of Personal Data</h2>
          <p className="mb-4">
            Upon termination of the Agreement, the Processor shall, at the choice of the Controller:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Return all Personal Data to the Controller in a commonly used format</li>
            <li>Delete all Personal Data and certify such deletion</li>
            <li>Continue to store Personal Data subject to confidentiality obligations</li>
          </ul>
          <p className="mb-4">
            The Processor may retain Personal Data to the extent required by applicable laws, provided that the 
            Processor ensures the confidentiality of all such Personal Data and that such Personal Data is only 
            processed as necessary for the purposes specified in the applicable laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Liability and Indemnification</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Limitation of Liability</h3>
          <p className="mb-4">
            Each party's liability arising out of or related to this DPA shall be subject to the limitations 
            of liability set forth in the Agreement.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Indemnification</h3>
          <p className="mb-4">
            Each party shall indemnify the other against all damages, losses, and expenses arising out of any 
            breach by that party of this DPA or applicable Data Protection Laws.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. General Terms</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Order of Precedence</h3>
          <p className="mb-4">
            In the event of any conflict between this DPA and the Agreement, the terms of this DPA shall prevail 
            with respect to the processing of Personal Data.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Modification</h3>
          <p className="mb-4">
            This DPA may only be modified by written agreement of both parties, except that the Processor may 
            update the list of Sub-processors in accordance with Section 6.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 Severability</h3>
          <p className="mb-4">
            If any provision of this DPA is held to be invalid or unenforceable, the remaining provisions shall 
            continue in full force and effect.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">13.4 Governing Law</h3>
          <p className="mb-4">
            This DPA shall be governed by and construed in accordance with the laws of England and Wales.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
          <p className="mb-4">
            For questions regarding this DPA or data processing matters:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2"><strong>Nexabyte Limited (trading as RapidSite)</strong></p>
            <p className="mb-2">1 Pettipher Mews, Stratford-upon-Avon, United Kingdom</p>
            <p className="mb-2"><strong>All Inquiries, DPO & Security:</strong> info@nexabyte.co.uk</p>
            <p><strong>ICO Registration Number:</strong> ZB911761</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule 1: Standard Contractual Clauses</h2>
          <p className="mb-4">
            The UK-approved Standard Contractual Clauses for transfers of Personal Data to third countries are 
            incorporated into this DPA by reference and apply to any transfer of Personal Data outside the UK 
            where required by Data Protection Laws.
          </p>
          <p className="mb-4">
            The parties agree that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Module Two (Controller to Processor) applies where the Controller transfers Personal Data to the Processor</li>
            <li>The optional clauses in Section II are not adopted</li>
            <li>The competent supervisory authority is the Information Commissioner's Office (ICO)</li>
            <li>The governing law is the law of England and Wales</li>
          </ul>
        </section>
      </LegalPageTemplate>
    </>
  );
};

export default DPAPage;