import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { StatsBanner } from './components/StatsBanner';
import { HowItWorks } from './components/HowItWorks';
import { ContactForm } from './components/ContactForm';
import { Features } from './components/Features';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (route === '#terms') return <Terms />;
    if (route === '#privacy') return <Privacy />;
    
    // Default Landing Page
    return (
      <>
        <Hero />
        <TrustSection />
        <StatsBanner />
        <HowItWorks />
        <ContactForm />
        <Features />
        <FinalCTA />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;