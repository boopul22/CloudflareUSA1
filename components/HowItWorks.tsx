import React from 'react';
import { FileText, CheckCircle, DollarSign, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: "Start Your Free Review",
      description: "Fill out a quick form or call us—we’ll evaluate your accident and potential claim.",
      step: "01"
    },
    {
      icon: FileText,
      title: "We Do the Work",
      description: "From gathering documents to negotiating with insurers, our experts take care of it all.",
      step: "02"
    },
    {
      icon: DollarSign,
      title: "You Get Paid",
      description: "After a successful settlement, you receive your payout—no hassle, no hidden fees.",
      step: "03"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2 mb-6">How It Works (3 Easy Steps)</h2>
          <p className="text-gray-600 text-lg">
            We've simplified the process so you can focus on healing. Just three easy steps to get the compensation you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2 scale-x-75"></div>

          {steps.map((item, idx) => (
            <div key={idx} className="relative group perspective-1000">
              <div className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center relative overflow-hidden group-hover:-translate-y-2">
                
                {/* Watermark Number */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-gray-50 opacity-50 group-hover:text-gray-100 group-hover:scale-110 transition-all duration-500 select-none z-0">
                  {item.step}
                </span>

                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-light rounded-2xl rotate-3 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-brand-primary group-hover:rotate-6 transition-all duration-500 border-4 border-white shadow-md z-10 relative">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 lg:mb-4 z-10 relative">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 z-10 relative text-sm lg:text-base">{item.description}</p>
                
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 hidden lg:block">
                    <span className="text-brand-primary font-bold text-sm flex items-center gap-1">
                        Learn more <ArrowRight size={14} />
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};