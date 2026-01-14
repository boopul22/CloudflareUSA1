import React from 'react';
import { CheckCircle2, Phone, Clock, Trophy } from 'lucide-react';
import { Button } from './ui/Button';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-brand-dark py-12 lg:py-20 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5 border-b border-white/10 md:border-b-0 md:border-r pb-8 md:pb-0 md:pr-8">
            <div className="p-3 bg-white/5 rounded-2xl">
                <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
            </div>
            <div>
              <p className="text-4xl font-bold tracking-tight">100%</p>
              <p className="text-gray-400 text-sm font-medium">Success Rate</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 border-b border-white/10 md:border-b-0 lg:border-r pb-8 md:pb-0 md:pr-8">
            <div className="p-3 bg-white/5 rounded-2xl">
                 <Clock className="w-8 h-8 text-brand-primary flex-shrink-0" />
            </div>
            <div>
              <p className="text-xl font-bold leading-tight">Fast Review</p>
              <p className="text-gray-400 text-sm">Same-day analysis</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 border-b border-white/10 md:border-b-0 pb-8 md:pb-0">
            <div className="relative">
                <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-20 animate-pulse"></div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary">
                <img src="https://picsum.photos/seed/person1/100/100" alt="Support" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-brand-dark rounded-full"></div>
            </div>
            <div>
              <p className="font-bold flex items-center gap-2 text-sm text-gray-300 uppercase tracking-wide">
                 Help Desk 24/7
              </p>
              <a href="tel:8884080938" className="text-white font-mono text-xl font-bold hover:text-brand-primary transition-colors">
                888 408 0938
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0">
            <Button variant="white" fullWidth className="md:w-auto font-bold shadow-lg shadow-white/10 hover:shadow-white/20">
              Get Started
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};