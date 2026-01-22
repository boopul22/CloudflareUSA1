import React, { useEffect, useState } from 'react';
import { FinalCTA } from './FinalCTA';
import { ChevronUp, List, X } from 'lucide-react';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'services', title: '2. Services Offered' },
  { id: 'eligibility', title: '3. Eligibility' },
  { id: 'user-responsibilities', title: '4. User Responsibilities' },
  { id: 'consent', title: '5. TCPA & Communication Consent' },
  { id: 'intellectual-property', title: '6. Intellectual Property' },
  { id: 'disclaimer', title: '7. Disclaimer' },
  { id: 'limitation', title: '8. Limitation of Liability' },
  { id: 'indemnification', title: '9. Indemnification' },
  { id: 'termination', title: '10. Termination' },
  { id: 'dispute', title: '11. Dispute Resolution' },
  { id: 'arbitration', title: '12. Arbitration Agreement' },
  { id: 'governing-law', title: '13. Governing Law' },
  { id: 'amendments', title: '14. Amendments' },
  { id: 'contact', title: '15. Contact Information' },
];

export const Terms: React.FC = () => {
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
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Terms and Conditions</h1>
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
              Welcome to Autoclaimfiling.online. These Terms and Conditions ("Terms") govern your access to and use of the Autoclaimfiling.online website located at <a href="https://autoclaimfiling.online" className="text-brand-primary hover:underline">https://autoclaimfiling.online</a> ("Site") and all related services ("Services").
            </p>
            <p className="leading-relaxed mt-4">
              By accessing or using our Site and Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Site or Services.
            </p>
          </section>

          <section id="services">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">2. Services Offered</h2>
            <p className="leading-relaxed">
              Autoclaimfiling.online is a marketing and lead generation service that assists individuals in connecting with legal professionals and insurance claim specialists for car accident claims.
            </p>
            <p className="leading-relaxed mt-4 font-medium text-brand-dark">
              Important: We are NOT an insurance company, law firm, or legal service provider. We do not provide legal advice, representation, or make any decisions regarding your claims.
            </p>
            <p className="leading-relaxed mt-4">
              Our platform facilitates the claims process by collecting relevant information and connecting you with qualified third-party professionals who may be able to assist with your claim.
            </p>
          </section>

          <section id="eligibility">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">3. Eligibility</h2>
            <p className="leading-relaxed mb-4">To use our Services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Be legally capable of entering into a binding agreement</li>
              <li>Reside in the United States</li>
              <li>Provide accurate and truthful information</li>
            </ul>
          </section>

          <section id="user-responsibilities">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">4. User Responsibilities</h2>
            <p className="leading-relaxed mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information about yourself and your claim</li>
              <li>Not submit false, fraudulent, or misleading information</li>
              <li>Not use our platform for any unlawful or unauthorized purposes</li>
              <li>Maintain the confidentiality of any login credentials (if applicable)</li>
              <li>Not interfere with or disrupt the operation of our Site or Services</li>
              <li>Not attempt to gain unauthorized access to any portion of our Site</li>
            </ul>
          </section>

          <section id="consent">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">5. TCPA & Communication Consent</h2>
            <p className="leading-relaxed mb-4">
              <strong>By submitting your information through our Site, you expressly consent to the following:</strong>
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-4">
              <h4 className="font-bold text-brand-dark mb-3">Telephone Consumer Protection Act (TCPA) Consent</h4>
              <p className="text-sm leading-relaxed">
                By providing your phone number and submitting a form on this Site, you provide your express written consent to receive telemarketing and other calls, text messages (SMS/MMS), and pre-recorded/artificial voice messages from Autoclaimfiling.online, our marketing partners, affiliates, and/or the third-party service providers at the telephone number you provided. You understand that these communications may be made using an automatic telephone dialing system (autodialer) or prerecorded voice technology.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent is not required</strong> to purchase any goods or services</li>
              <li>Message and data rates may apply</li>
              <li>Message frequency varies</li>
              <li>You may opt-out at any time by replying "STOP" to any text message or by contacting us directly</li>
              <li>For help, reply "HELP" to any text message or contact us at the information provided below</li>
            </ul>
          </section>

          <section id="intellectual-property">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on our Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Autoclaimfiling.online or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="leading-relaxed mt-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without prior written consent.
            </p>
          </section>

          <section id="disclaimer">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">7. Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <p className="leading-relaxed font-medium text-yellow-800">
                OUR SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
            </div>
            <p className="leading-relaxed mt-4">
              We do not guarantee the outcome of any claim. Results may vary based on the information provided, the nature of the incident, individual circumstances, and decisions made by third parties (e.g., insurance companies, attorneys, courts).
            </p>
            <p className="leading-relaxed mt-4">
              Any testimonials or case results displayed on our Site are not a guarantee of similar outcomes for your case.
            </p>
          </section>

          <section id="limitation">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AUTOCLAIMFILING.ONLINE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR PARTNERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your access to or use of (or inability to access or use) the Site or Services</li>
              <li>Any conduct or content of any third party on the Site</li>
              <li>Any content obtained from the Site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section id="indemnification">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">9. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to defend, indemnify, and hold harmless Autoclaimfiling.online, its officers, directors, employees, agents, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Site or Services, your violation of these Terms, or your violation of any rights of a third party.
            </p>
          </section>

          <section id="termination">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">10. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your access to our Site and Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className="leading-relaxed mt-4">
              Upon termination, your right to use the Site and Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section id="dispute">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">11. Dispute Resolution</h2>
            <p className="leading-relaxed">
              Any dispute, controversy, or claim arising out of or relating to these Terms or the breach thereof shall first be attempted to be resolved through good-faith negotiation between the parties.
            </p>
            <p className="leading-relaxed mt-4">
              If such dispute cannot be resolved within thirty (30) days of written notice of the dispute, either party may proceed with the arbitration process outlined below.
            </p>
          </section>

          <section id="arbitration">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">12. Arbitration Agreement</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-4">
              <p className="leading-relaxed font-medium text-red-800">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
              </p>
            </div>
            <p className="leading-relaxed">
              You and Autoclaimfiling.online agree that any dispute, claim, or controversy arising out of or relating to these Terms or the use of the Site or Services shall be settled by binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Class Action Waiver:</strong> You and Autoclaimfiling.online agree that any arbitration shall be conducted on an individual basis and not on a class, consolidated, or representative basis. You waive your right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section id="governing-law">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">13. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
            </p>
            <p className="leading-relaxed mt-4">
              Any legal action or proceeding arising under these Terms will be brought exclusively in the state or federal courts located in Florida, and you hereby consent to personal jurisdiction and venue therein.
            </p>
          </section>

          <section id="amendments">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">14. Amendments</h2>
            <p className="leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p className="leading-relaxed mt-4">
              By continuing to access or use our Site or Services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Site and Services.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">15. Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="mb-2"><strong>Autoclaimfiling.online</strong></p>
              <p className="mb-1">Email: <a href="mailto:autoclaimfiling@gmail.com" className="text-brand-primary hover:underline">autoclaimfiling@gmail.com</a></p>
              <p className="mb-1">Phone: <a href="tel:8886263214" className="text-brand-primary hover:underline">888 626 3214</a></p>
              <p>Address: Florida, USA</p>
            </div>
          </section>
        </div>

        {/* Acceptance Notice */}
        <div className="mt-12 p-6 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
          <p className="text-center text-gray-700">
            By using our Site or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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