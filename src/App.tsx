import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BattleArena } from './components/BattleArena';
import { TournamentRoadmap } from './components/TournamentRoadmap';
import { QueryJourney } from './components/QueryJourney';
import { EpisodesSection } from './components/EpisodesSection';
import { FooterQuote } from './components/FooterQuote';
import { AlphaPlaygroundModal } from './components/AlphaPlaygroundModal';

export default function App() {
  const [alphaModalOpen, setAlphaModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-[#dce4e4] font-body selection:bg-[#00f2ff] selection:text-[#00363a] relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onLaunchAlpha={() => setAlphaModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => scrollToSection('about')}
        onArenaClick={() => scrollToSection('arena')}
      />

      {/* Section 1: AI Battle Arena */}
      <BattleArena />

      {/* Section 2: Tournament Roadmap */}
      <TournamentRoadmap />

      {/* Section 3: Journey of a Query */}
      <QueryJourney />

      {/* Section 4: Latest Episodes */}
      <EpisodesSection />

      {/* Section 5: Quote & Footer */}
      <FooterQuote />

      {/* Alpha Playground Modal */}
      <AlphaPlaygroundModal
        isOpen={alphaModalOpen}
        onClose={() => setAlphaModalOpen(false)}
      />
    </div>
  );
}
