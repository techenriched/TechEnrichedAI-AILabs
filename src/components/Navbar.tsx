import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Play, Menu, X } from 'lucide-react';

interface NavbarProps {
  onLaunchAlpha: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLaunchAlpha }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(209,255,38,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#D1FF26]/10 border border-[#D1FF26]/40 flex items-center justify-center text-[#D1FF26] group-hover:scale-105 transition-transform glow-lime">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 leading-none">THE CINEMATIC FRONTIER</span>
            <span className="font-display font-black text-xl md:text-2xl tracking-tighter text-[#EDEDED] group-hover:text-[#D1FF26] transition-colors">
              TECHENRICHED<span className="text-[#D1FF26]">.AI</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 font-label-sm text-[11px] uppercase tracking-[0.25em] font-semibold text-white/70">
          <a
            href="#arena"
            className="hover:text-[#D1FF26] transition-colors hover:scale-105"
          >
            Arena
          </a>
          <a
            href="#roadmap"
            className="hover:text-[#D1FF26] transition-colors hover:scale-105"
          >
            Roadmap
          </a>
          <a
            href="#episodes"
            className="hover:text-[#D1FF26] transition-colors hover:scale-105"
          >
            Episodes
          </a>
          <a
            href="#about"
            className="hover:text-[#D1FF26] transition-colors hover:scale-105"
          >
            About
          </a>
        </div>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onLaunchAlpha}
            className="bg-[#D1FF26] text-[#0A0A0A] hover:bg-[#b0dc1a] px-7 py-3 rounded-full font-label-sm font-bold tracking-widest text-[11px] uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(209,255,38,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            Launch Alpha
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#EDEDED] hover:text-[#D1FF26] p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in bg-[#0A0A0A]/95 backdrop-blur-2xl">
          <a
            href="#arena"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-bold uppercase tracking-wider text-[#EDEDED] hover:text-[#D1FF26]"
          >
            Arena
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-bold uppercase tracking-wider text-[#EDEDED] hover:text-[#D1FF26]"
          >
            Roadmap
          </a>
          <a
            href="#episodes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-bold uppercase tracking-wider text-[#EDEDED] hover:text-[#D1FF26]"
          >
            Episodes
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-bold uppercase tracking-wider text-[#EDEDED] hover:text-[#D1FF26]"
          >
            About
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onLaunchAlpha();
              }}
              className="w-full bg-[#D1FF26] text-[#0A0A0A] py-3.5 rounded-full font-label-sm font-bold text-xs uppercase tracking-widest text-center shadow-[0_0_20px_rgba(209,255,38,0.35)] cursor-pointer"
            >
              Launch Alpha
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
