import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-light pt-24 pb-16 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-brand-primary font-semibold text-xs md:text-sm rounded-full mb-6">
              #1 Accident Assistance Service
            </div>
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-brand-dark leading-tight mb-6">
              Injured in a Car Accident? <span className="text-brand-primary block lg:inline">We're Here to Help.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get expert help to claim compensation for repairs, medical bills, and lost wages.
              We fight the insurance companies so you don't have to. No fees unless you win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#contact" className="shadow-lg shadow-blue-500/30 w-full sm:w-auto">
                Free Claim Review
              </Button>
              <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`/images/avatar${i}.png`}
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    width="32"
                    height="32"
                  />
                ))}
              </div>
              <p>Trusted by 10,000+ drivers</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative mt-4 lg:mt-0">
            <div className="absolute -inset-4 bg-brand-primary/5 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/images/hero.png"
                alt="Person inspecting car damage"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <p className="font-semibold">Fast Assessment</p>
                <p className="text-sm opacity-90">Get results in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved SVG Shape */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};