import React from 'react';
import { Youtube, Instagram, Twitter, MessageSquare, Sparkles } from 'lucide-react';

export const FooterQuote: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-20 relative z-10">
        {/* Quote Block */}
        <div className="text-center max-w-4xl mx-auto py-8 space-y-6">
          <blockquote className="font-serif-italic text-2xl sm:text-4xl md:text-[42px] text-[#EDEDED] leading-relaxed italic font-normal">
            "The best way to understand AI isn't by reading about it. <br className="hidden md:block" />
            It's by <span className="text-[#D1FF26] text-glow font-display font-black not-italic tracking-tight uppercase">WATCHING IT THINK.</span>"
          </blockquote>
          <cite className="block font-label-sm text-xs md:text-sm text-[#D1FF26] tracking-[0.3em] uppercase font-bold not-italic">
            — TECHENRICHED AI
          </cite>
        </div>

        {/* Footer Navigation & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#D1FF26]/10 border border-[#D1FF26]/40 flex items-center justify-center text-[#D1FF26]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-black text-xl text-[#EDEDED] tracking-tighter">
              TECHENRICHED<span className="text-[#D1FF26]">.AI</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-8 text-xs font-label-sm uppercase tracking-widest font-bold">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#D1FF26] transition-colors flex items-center gap-2"
            >
              <Youtube className="w-4 h-4 text-[#D1FF26]" /> YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#D1FF26] transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#D1FF26]" /> Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#D1FF26] transition-colors flex items-center gap-2"
            >
              <Twitter className="w-4 h-4 text-[#D1FF26]" /> X / Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#D1FF26] transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#D1FF26]" /> Discord
            </a>
          </div>

          <div className="font-label-sm text-[11px] text-white/40 tracking-[0.2em] uppercase font-bold">
            © 2024 TECHENRICHED.AI — THE CINEMATIC FRONTIER
          </div>
        </div>
      </div>
    </footer>
  );
};
