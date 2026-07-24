import React from 'react';
import { Play, Swords } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onArenaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onArenaClick }) => {
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Radial grid dot-matrix background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Subtle volumetric glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D1FF26]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Giant Background Number Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[260px] sm:text-[420px] font-black text-white/[0.02] pointer-events-none select-none font-display">
        01
      </div>

      <div className="relative z-10 max-w-5xl space-y-8 animate-fade-in flex flex-col items-center">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] font-label-sm text-[#D1FF26] tracking-[0.4em] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#D1FF26] animate-pulse" />
          FEATURE VOLUME 01 • THE CINEMATIC FRONTIER
        </div>

        {/* Main Brutalist Headline */}
        <h1 className="font-display text-[52px] sm:text-[90px] lg:text-[120px] leading-[0.88] font-black tracking-tighter uppercase text-[#EDEDED] select-none">
          AI VISUALIZED.<br />
          <span className="text-[#D1FF26] text-glow">CINEMATIC</span> FORMS.
        </h1>

        {/* Subtitle with Serif Italic Pullquote style from design */}
        <div className="mt-4 max-w-2xl text-left border-l-2 border-[#D1FF26] pl-6 py-1 bg-white/[0.02] rounded-r-2xl">
          <p className="font-serif-italic text-lg md:text-xl text-white/90 leading-relaxed font-light italic">
            "Artificial Intelligence is not complicated. It has simply never been visualized through cinematic storytelling and benchmark battles."
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={onExploreClick}
            className="bg-[#D1FF26] text-[#0A0A0A] flex items-center justify-center gap-3 px-8 py-4 rounded-full font-label-sm text-[11px] uppercase tracking-[0.2em] font-black hover:bg-[#b0dc1a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(209,255,38,0.4)] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Explore AI Visualized
          </button>
          <button
            onClick={onArenaClick}
            className="border border-white/20 text-[#EDEDED] flex items-center justify-center gap-3 px-8 py-4 rounded-full font-label-sm text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:bg-white/10 hover:border-[#D1FF26] active:scale-95 cursor-pointer"
          >
            <Swords className="w-4 h-4 text-[#D1FF26]" />
            Enter Battle Arena
          </button>
        </div>
      </div>
    </header>
  );
};
