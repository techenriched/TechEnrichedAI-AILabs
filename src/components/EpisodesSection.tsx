import React, { useState } from 'react';
import { EPISODES } from '../data/mockData';
import { Episode } from '../types';
import { Play, ArrowRight, Clock, Tag, X, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export const EpisodesSection: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden" id="episodes">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#D1FF26]/10 border border-[#D1FF26]/30 text-[10px] font-label-sm font-bold text-[#D1FF26] tracking-[0.3em] uppercase mb-2">
              CINEMATIC ARCHIVE
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#EDEDED]">
              LATEST <span className="text-[#D1FF26]">EPISODES</span>
            </h2>
            <p className="font-label-sm text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] mt-1">
              Season 01: The Digital Frontier
            </p>
          </div>
          <a
            href="#episodes"
            className="hidden md:flex items-center gap-2 text-[#D1FF26] font-label-sm text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group cursor-pointer"
          >
            VIEW ALL{' '}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EPISODES.map((ep) => (
            <div
              key={ep.id}
              onClick={() => setActiveEpisode(ep)}
              className="relative group overflow-hidden rounded-3xl h-[380px] cursor-pointer shadow-2xl border border-white/10 hover:border-[#D1FF26]/60 transition-all duration-500 bg-[#121212]"
            >
              {/* Background Cover Image with Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                style={{ backgroundImage: `url('${ep.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-95 group-hover:opacity-85 transition-opacity" />

              {/* Episode Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end gap-3 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-label-sm text-[#D1FF26] tracking-widest uppercase font-bold">
                    {ep.number}
                  </span>
                  <span className="text-[11px] font-mono text-white/60 bg-black/80 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D1FF26]" /> {ep.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-black uppercase text-[#EDEDED] group-hover:text-[#D1FF26] transition-colors leading-tight">
                  {ep.title}
                </h3>

                <p className="text-xs font-body text-white/70 line-clamp-2">
                  {ep.description}
                </p>

                <div className="pt-2">
                  <button className="w-fit bg-[#D1FF26] text-[#0A0A0A] px-5 py-2.5 rounded-full text-[11px] font-label-sm font-black tracking-widest uppercase flex items-center gap-2 hover:bg-[#b0dc1a] transition-all cursor-pointer shadow-[0_0_15px_rgba(209,255,38,0.3)]">
                    <Play className="w-3.5 h-3.5 fill-current" /> WATCH EPISODE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal Player & Takeaways */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="glass-card max-w-3xl w-full p-8 rounded-3xl border border-[#D1FF26]/40 space-y-6 relative max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#121212]">
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-[#EDEDED] p-2 text-xl font-bold cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Simulated Hero Player Header */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#0A0A0A] group">
              <img
                src={activeEpisode.image}
                alt={activeEpisode.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#D1FF26] text-[#0A0A0A] flex items-center justify-center shadow-[0_0_25px_#D1FF26] hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <span className="font-label-sm text-xs text-[#EDEDED] uppercase tracking-widest font-bold bg-black/80 px-4 py-1.5 rounded-full border border-white/20">
                  Simulated 4K Visualizer Streaming ({activeEpisode.duration})
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-label-sm font-bold text-[#D1FF26] uppercase tracking-widest">
                  {activeEpisode.number}
                </span>
                <div className="flex gap-2">
                  {activeEpisode.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded border border-white/10 uppercase"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-[#EDEDED]">
                {activeEpisode.title}
              </h3>

              <p className="font-body text-sm text-white/80 leading-relaxed">
                {activeEpisode.description}
              </p>

              <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 space-y-3">
                <h4 className="font-label-sm text-xs font-bold text-[#D1FF26] uppercase tracking-widest flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Episode Key Insights & Takeaways
                </h4>
                <ul className="space-y-2.5">
                  {activeEpisode.takeaways.map((takeaway, i) => (
                    <li
                      key={i}
                      className="text-xs font-body text-[#EDEDED] flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5"
                    >
                      <CheckCircle className="w-4 h-4 text-[#D1FF26] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setActiveEpisode(null)}
              className="w-full bg-[#D1FF26] text-[#0A0A0A] font-label-sm text-xs font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-[#b0dc1a] transition-all cursor-pointer shadow-[0_0_20px_rgba(209,255,38,0.35)]"
            >
              Close Episode Player
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
