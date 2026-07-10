import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import TrustSection from './components/TrustSection';
import StorySection from './components/StorySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const benefits = [
  {
    title: 'Better Health',
    description: 'Clean water reduces disease and helps families thrive.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3c2.5 3 5 5.2 5 8.2a5 5 0 1 1-10 0C7 8.2 9.5 6 12 3Z" />
        <path d="M9 13.5c.8 1.3 1.7 2 3 2s2.2-.7 3-2" />
      </svg>
    ),
  },
  {
    title: 'Better Education',
    description: 'Children spend less time collecting water and more time learning.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 7.5 12 4l8 3.5-8 3.5-8-3.5Z" />
        <path d="M7 10.5v4.2c0 1.4 2.2 2.8 5 2.8s5-1.4 5-2.8v-4.2" />
      </svg>
    ),
  },
  {
    title: 'Stronger Communities',
    description: 'Access to clean water creates opportunities for growth and a brighter future.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 20v-6m6 6v-9m6 9V8" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    title: '100% Model',
    description: '100% of public donations go directly to fund clean water projects.',
    href: 'https://www.charitywater.org/about',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 4v16" />
        <path d="M4 8h16" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    title: 'GPS Tracking',
    description: 'Every project is mapped so supporters can see where their impact reaches.',
    href: 'https://www.charitywater.org/waterproof',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2.2" />
      </svg>
    ),
  },
  {
    title: 'Real Photos',
    description: 'Updates and photos show communities as they grow with reliable access to water.',
    href: 'https://www.charitywater.org/stories',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m8 14 2.5-2.5 2 2 3.5-4 2 3" />
      </svg>
    ),
  },
  {
    title: 'Complete Transparency',
    description: 'Clear reporting and measurable progress make the journey easy to trust and follow.',
    href: 'https://www.charitywater.org/about',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 7h14" />
        <path d="M7 11h10" />
        <path d="M9 15h6" />
        <path d="M4 4h16v16H4z" />
      </svg>
    ),
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy">
      <Navbar isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((prev) => !prev)} />
      <main>
        <Hero />
        <BenefitsSection benefits={benefits} />
        <TrustSection trustItems={trustItems} />
        <StorySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
