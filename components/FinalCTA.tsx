import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          We’re Here When You Need Us Most
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Being in a car accident is stressful — getting help shouldn’t be. At Auto File Claim, we make it easy to connect with our claims team so you can get the support and answers you need, fast.
        </p>
        <Button size="lg" className="px-10 py-4 text-lg bg-brand-primary hover:bg-brand-primaryHover shadow-xl shadow-blue-900/50">
          Get Free Claim Now
        </Button>
      </div>
    </section>
  );
};