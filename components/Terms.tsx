import React, { useEffect } from 'react';
import { FinalCTA } from './FinalCTA';

export const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-12 text-center">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              These Terms and Conditions govern your access to and use of the Auto File Claim website and services.
              By using our Site and services, you agree to these Terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">2. Services Offered</h2>
            <p className="leading-relaxed">
              Auto File Claim assists individuals in filing and managing car accident claims. We are not an insurance company. Our platform helps facilitate the claims process by collecting relevant information and submitting it to insurers or legal partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">3. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 18 years old and capable of entering a legally binding agreement to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">4. User Responsibilities</h2>
            <p className="leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Not misuse our platform for unlawful purposes</li>
              <li>Maintain confidentiality of any login credentials (if applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on our Site, including text, logos, images, and software, is the property of Auto File Claim or its licensors and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">6. Disclaimer</h2>
            <p className="leading-relaxed">
              We do not guarantee the outcome of any claim. Results may vary based on the information provided, the nature of the incident, and third-party decisions (e.g., insurance companies).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Auto File Claim shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">8. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your access to the Site if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-4">9. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by the laws of Florida, USA, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
};