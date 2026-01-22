import React, { useEffect, useState } from 'react';
import { FinalCTA } from './FinalCTA';
import { ChevronUp, List, X } from 'lucide-react';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-collected', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'sharing', title: '4. Sharing of Information' },
  { id: 'cookies', title: '5. Cookies & Tracking Technologies' },
  { id: 'data-security', title: '6. Data Security' },
  { id: 'data-retention', title: '7. Data Retention' },
  { id: 'your-rights', title: '8. Your Rights' },
  { id: 'california', title: '9. California Privacy Rights (CCPA)' },
  { id: 'do-not-sell', title: '10. Do Not Sell My Information' },
  { id: 'children', title: '11. Children\'s Privacy' },
  { id: 'third-party', title: '12. Third-Party Links' },
  { id: 'changes', title: '13. Changes to This Policy' },
  { id: 'contact', title: '14. Contact Information' },
];

export const Privacy: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowToc(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">
            Last Updated: January 14, 2025
          </p>
        </div>

        {/* Mobile TOC Toggle */}
        <button
          onClick={() => setShowToc(!showToc)}
          className="lg:hidden fixed bottom-20 right-4 z-40 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-primaryHover transition-colors"
          aria-label="Toggle Table of Contents"
        >
          {showToc ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Mobile TOC Overlay */}
        {showToc && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setShowToc(false)}>
            <div
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl p-6 pt-20 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-bold text-lg text-brand-dark mb-4">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className="text-left w-full text-gray-600 hover:text-brand-primary transition-colors py-1 text-sm"
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Table of Contents */}
        <div className="hidden lg:block bg-gray-50 rounded-xl p-6 mb-12 border border-gray-100">
          <h3 className="font-bold text-lg text-brand-dark mb-4">Table of Contents</h3>
          <nav>
            <ul className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-left text-gray-600 hover:text-brand-primary transition-colors text-sm"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
          <section id="introduction">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Autoclaimfiling.online ("we," "our," or "us"). Your privacy is important to us, and we are committed to protecting the personal information you share with us.
            </p>
            <p className="leading-relaxed mt-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://autoclaimfiling.online" className="text-brand-primary hover:underline">https://autoclaimfiling.online</a> ("Site") or use our services ("Services"). Please read this Privacy Policy carefully.
            </p>
            <p className="leading-relaxed mt-4">
              By using our Site or Services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site or use our Services.
            </p>
          </section>

          <section id="information-collected">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect the following types of information:</p>

            <h3 className="text-lg font-semibold text-brand-dark mb-3">Personal Information</h3>
            <p className="leading-relaxed mb-2">Information that identifies you personally, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (mobile and/or landline)</li>
              <li>Mailing address</li>
              <li>Date and location of accident</li>
              <li>Vehicle information</li>
              <li>Insurance policy details</li>
              <li>Description of accident and injuries</li>
              <li>Medical treatment information</li>
              <li>Any documents you choose to upload</li>
            </ul>

            <h3 className="text-lg font-semibold text-brand-dark mb-3">Non-Personal Information</h3>
            <p className="leading-relaxed mb-2">Information that does not directly identify you, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Date and time of visits</li>
              <li>Click-through data and usage statistics</li>
            </ul>
          </section>

          <section id="how-we-use">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Claim Processing:</strong> To evaluate and process your car accident claim inquiry</li>
              <li><strong>Communication:</strong> To contact you via phone, email, or text message regarding your claim or our services</li>
              <li><strong>Partner Matching:</strong> To connect you with appropriate legal professionals, insurance specialists, or other service providers</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our Site and Services</li>
              <li><strong>Marketing:</strong> To send you promotional materials and updates (with your consent where required)</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              <li><strong>Fraud Prevention:</strong> To detect, prevent, and address technical issues or fraudulent activity</li>
            </ul>
          </section>

          <section id="sharing">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">4. Sharing of Information</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
              <p className="leading-relaxed font-medium text-blue-800">
                We do not sell your personal information to third parties for their own marketing purposes.
              </p>
            </div>
            <p className="leading-relaxed mb-4">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Service Partners:</strong> We share your information with attorneys, insurance professionals, and other service providers who may assist with your claim. These partners are required to protect your information and use it only for the services requested.</li>
              <li><strong>Marketing Partners:</strong> With your consent, we may share your information with marketing partners and affiliates.</li>
              <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., hosting, analytics, customer service).</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information when required by law, court order, or government request.</li>
              <li><strong>Protection of Rights:</strong> We may share information to protect the rights, property, or safety of Autoclaimfiling.online, our users, or others.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the successor entity.</li>
            </ul>
          </section>

          <section id="cookies">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">5. Cookies & Tracking Technologies</h2>
            <p className="leading-relaxed mb-4">
              We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to improve your experience on our Site.
            </p>

            <h3 className="text-lg font-semibold text-brand-dark mb-3">Types of Cookies We Use:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic Site functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site (e.g., Google Analytics)</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-brand-dark mb-3">Managing Cookies:</h3>
            <p className="leading-relaxed">
              You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling cookies may affect the functionality of our Site.
            </p>
          </section>

          <section id="data-security">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="leading-relaxed mt-4">
              These measures include encryption of sensitive data in transit (SSL/TLS), secure storage systems, access controls, and regular security assessments.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mt-4">
              <p className="leading-relaxed text-yellow-800">
                <strong>Important:</strong> No method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section id="data-retention">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.
            </p>
            <p className="leading-relaxed mt-4">
              When determining the appropriate retention period, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
            </p>
            <p className="leading-relaxed mt-4">
              You may request deletion of your data at any time by contacting us using the information provided below.
            </p>
          </section>

          <section id="your-rights">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">8. Your Rights</h2>
            <p className="leading-relaxed mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          <section id="california">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">9. California Privacy Rights (CCPA)</h2>
            <p className="leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected, the sources of that information, and how we use and share it.</li>
              <li><strong>Right to Delete:</strong> You can request that we delete personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
            </ul>
            <p className="leading-relaxed">
              To submit a request, please contact us using the information below. We may need to verify your identity before processing your request.
            </p>
          </section>

          <section id="do-not-sell">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">10. Do Not Sell My Personal Information</h2>
            <p className="leading-relaxed">
              California residents have the right to opt out of the "sale" of their personal information as defined under the CCPA.
            </p>
            <p className="leading-relaxed mt-4">
              While we do not sell personal information in the traditional sense, certain data sharing activities (such as sharing information with marketing partners) may be considered a "sale" under CCPA.
            </p>
            <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-5 mt-4">
              <p className="leading-relaxed">
                <strong>To opt out of the sale of your personal information:</strong> Please email us at <a href="mailto:autoclaimfiling@gmail.com" className="text-brand-primary hover:underline">autoclaimfiling@gmail.com</a> with the subject line "Do Not Sell My Personal Information" or call us at <a href="tel:8886263214" className="text-brand-primary hover:underline">888 626 3214</a>.
              </p>
            </div>
          </section>

          <section id="children">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">11. Children's Privacy</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
              <p className="leading-relaxed font-medium text-red-800">
                Our Site and Services are not intended for children under the age of 18.
              </p>
            </div>
            <p className="leading-relaxed">
              We do not knowingly collect personal information from children under 18 years of age. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
            </p>
            <p className="leading-relaxed mt-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">12. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our Site may contain links to third-party websites, services, or applications that are not operated by us. This Privacy Policy does not apply to those third-party sites.
            </p>
            <p className="leading-relaxed mt-4">
              We encourage you to review the privacy policies of any third-party sites you visit. We are not responsible for the content, privacy practices, or security of any third-party websites.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">13. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="leading-relaxed mt-4">
              When we make material changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically.
            </p>
            <p className="leading-relaxed mt-4">
              Your continued use of the Site or Services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">14. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="mb-2"><strong>Autoclaimfiling.online</strong></p>
              <p className="mb-1">Email: <a href="mailto:autoclaimfiling@gmail.com" className="text-brand-primary hover:underline">autoclaimfiling@gmail.com</a></p>
              <p className="mb-1">Phone: <a href="tel:8886263214" className="text-brand-primary hover:underline">888 626 3214</a></p>
              <p>Address: Florida, USA</p>
            </div>
            <p className="leading-relaxed mt-4">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </section>
        </div>

        {/* Acceptance Notice */}
        <div className="mt-12 p-6 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
          <p className="text-center text-gray-700">
            By using our Site or Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-40 bg-brand-dark text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          aria-label="Back to Top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <FinalCTA />
    </div>
  );
};