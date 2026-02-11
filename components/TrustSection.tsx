import React from 'react';
import { ShieldCheck, UserCheck, Check, Building2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 z-0"></div>
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none z-0">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" className="text-brand-dark fill-current" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative w-full group mt-8 lg:mt-0">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-primary/20 rounded-2xl z-0 hidden lg:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/trust.png"
                alt="Expert Inspection"
                className="w-full object-cover transform transition-transform duration-700 hover:scale-105"
                width="600"
                height="700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>




          </div>

          {/* Text Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 text-brand-primary border border-blue-100">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Your Trusted Car Accident <br className="hidden lg:block" /> <span className="text-brand-primary">Claim Experts</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in fighting for victims of car accidents—because you deserve justice, not just a settlement.
              Whether you're facing vehicle repairs, lost wages, or insurance pushback, our experienced legal team is here to guide you every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                "Specialized Expertise",
                "Zero Upfront Costs",
                "Local & Trusted",
                "Fast & Responsive",
                "Help Desk 24/7",
                "Max Compensation"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};