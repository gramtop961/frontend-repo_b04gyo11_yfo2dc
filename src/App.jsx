import React from 'react';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import TechHighlights from './components/TechHighlights';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Hero />
      <FeatureCards />
      <TechHighlights />
      <CTASection />
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-white/60">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Bullet Hell Concept • Crafted for performance and precision.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Patterns</a>
          <a href="#" className="hover:text-white">Community</a>
        </nav>
      </div>
    </footer>
  );
}
