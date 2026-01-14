import React, { useEffect } from 'react';
import { FinalCTA } from './FinalCTA';

export const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-12 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Auto File Claim. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [https://auto-file-claim.com] or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Full name, email address, phone number, address, vehicle details, accident details, insurance policy information, and any documents uploaded by you.</li>
              <li><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, and usage data collected via cookies or analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process car accident claims</li>
              <li>Communicate with you regarding your claim</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">4. Sharing of Information</h2>
            <p className="leading-relaxed mb-4">We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Insurance companies and legal representatives to process your claim</li>
              <li>Third-party service providers who assist in website operations</li>
              <li>Government or legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement reasonable security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute protection.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">7. Your Rights</h2>
            <p className="leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access or correct your personal data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">8. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our Site may contain links to other websites. We are not responsible for the content or privacy practices of such sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new effective date.
            </p>
          </section>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};