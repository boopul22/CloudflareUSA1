import React from 'react';
import { Button } from './ui/Button';
import { Scale, Clock, Award, Shield } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white text-brand-primary border border-gray-100 shadow-sm">
               <Award className="w-4 h-4" />
               <span className="font-bold uppercase tracking-wider text-xs">Our Commitment</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6 leading-tight">
              Helping You Reclaim What You Deserve After a Car Accident
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              If you've been injured in a car accident, we’re here to ensure you receive maximum compensation. Whether it’s damage, medical bills, or lost income — we simplify the claim process and fight for your rights so you can focus on recovery.
            </p>
            
            <div className="space-y-8 mb-10">
                <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-primary/30 group-hover:shadow-md transition-all">
                        <span className="text-brand-primary font-bold text-2xl">1</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-dark text-lg mb-1">Fast & Free Claim Assessment</h4>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">Know your claim's worth in minutes. No fees, no pressure — just straight answers from experts.</p>
                    </div>
                </div>
                <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:border-brand-primary/30 group-hover:shadow-md transition-all">
                        <span className="text-brand-primary font-bold text-2xl">2</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-dark text-lg mb-1">Car Accident Claim Specialists</h4>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">From minor fender-benders to serious injuries, we’ve helped thousands get compensated — and we can help you too.</p>
                    </div>
                </div>
            </div>
            <Button className="w-full sm:w-auto px-8 shadow-xl shadow-brand-primary/20">Get Started Free</Button>
          </div>

          {/* Right Cards */}
          <div className="space-y-6 relative order-1 lg:order-2">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10"></div>

            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-6 hover:translate-x-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                <Scale className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">No Win, No Fee Guarantee</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You only pay when we win your case. That’s how confident we are in securing your rightful compensation.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-6 hover:translate-x-2 transition-transform duration-300 delay-75">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">24/7 Support & Case Updates</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Accidents don’t follow a schedule. Our team is available around the clock to answer your questions and update your case.
                </p>
              </div>
            </div>

             <div className="bg-brand-dark p-6 rounded-3xl shadow-xl flex items-center justify-between text-white hover:translate-x-2 transition-transform duration-300 delay-150">
               <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">100% Confidential</p>
                    <p className="text-xs text-gray-400">Your privacy is protected</p>
                  </div>
               </div>
               <div className="h-2 w-20 bg-white/10 rounded-full overflow-hidden hidden sm:block">
                 <div className="h-full w-2/3 bg-green-400 rounded-full"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};