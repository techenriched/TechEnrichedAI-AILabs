import React, { useState } from 'react';
import { ROADMAP_PHASES } from '../data/mockData';
import { RoadmapPhase } from '../types';
import { ChevronRight, Trophy, CheckCircle, Clock, Sparkles } from 'lucide-react';

export const TournamentRoadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<RoadmapPhase>(ROADMAP_PHASES[2]); // Default Phase 03 Reasoning

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden" id="roadmap">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#D1FF26]/10 border border-[#D1FF26]/30 text-[10px] font-label-sm font-bold text-[#D1FF26] tracking-[0.3em] uppercase mb-2">
              COMPETITIVE CALENDAR
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#EDEDED]">
              TOURNAMENT <span className="text-[#D1FF26]">ROADMAP</span>
            </h2>
            <p className="font-label-sm text-xs md:text-sm text-white/50 tracking-[0.2em] uppercase mt-1">
              Season 01 Competitive Phases & Milestone Progression
            </p>
          </div>
          <div className="text-xs font-label-sm font-bold text-[#D1FF26] bg-[#D1FF26]/10 border border-[#D1FF26]/30 px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D1FF26] animate-pulse" />
            Currently Active: {activePhase.phase} {activePhase.title}
          </div>
        </div>

        {/* Scrollable Timeline */}
        <div className="relative overflow-x-auto custom-scrollbar pb-8 pt-4">
          <div className="relative flex min-w-[1500px] justify-between items-center py-8">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D1FF26] to-transparent -translate-y-1/2 z-0 opacity-40" />

            {ROADMAP_PHASES.map((p, index) => {
              const isSelected = activePhase.phase === p.phase;
              const isChampionship = p.phase === 'Championship';

              return (
                <div
                  key={index}
                  onClick={() => setActivePhase(p)}
                  className="relative z-10 flex flex-col items-center gap-3 text-center group w-36 cursor-pointer"
                >
                  <div
                    className={`transition-all duration-300 flex items-center justify-center ${
                      isChampionship
                        ? 'w-16 h-16 rounded-full bg-[#D1FF26] text-[#0A0A0A] shadow-[0_0_30px_#D1FF26] group-hover:scale-110 font-bold'
                        : isSelected
                        ? 'w-14 h-14 rounded-full bg-[#141414] border-2 border-[#D1FF26] text-[#D1FF26] shadow-[0_0_20px_rgba(209,255,38,0.4)] scale-110'
                        : 'w-12 h-12 rounded-full bg-[#141414] border border-white/20 text-white/60 group-hover:border-[#D1FF26] group-hover:text-[#D1FF26] group-hover:scale-110'
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {p.icon}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h4
                      className={`font-display text-sm font-bold uppercase tracking-tight transition-colors ${
                        isSelected || isChampionship ? 'text-[#D1FF26]' : 'text-[#EDEDED] group-hover:text-[#D1FF26]'
                      }`}
                    >
                      {p.title}
                    </h4>
                    <p className="font-label-sm text-[10px] text-white/40 uppercase tracking-widest font-bold">
                      {p.phase}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Showcase */}
        {activePhase && (
          <div className="glass-card p-8 rounded-3xl border border-[#D1FF26]/30 flex flex-col md:flex-row justify-between gap-8 animate-fade-in relative overflow-hidden bg-[#121212]">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-label-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D1FF26]/10 text-[#D1FF26] border border-[#D1FF26]/30">
                  {activePhase.phase}
                </span>
                <span
                  className={`text-xs font-label-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    activePhase.status === 'Completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : activePhase.status === 'Live'
                      ? 'bg-[#D1FF26]/20 text-[#D1FF26] border border-[#D1FF26]/40'
                      : 'bg-white/5 text-white/50 border border-white/10'
                  }`}
                >
                  {activePhase.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                  {activePhase.status === 'Live' && <span className="w-2 h-2 rounded-full bg-[#D1FF26] animate-ping" />}
                  {activePhase.status === 'Upcoming' && <Clock className="w-3 h-3" />}
                  {activePhase.status}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-4xl font-black uppercase text-[#EDEDED] tracking-tight">
                {activePhase.title} Challenge
              </h3>

              <p className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                {activePhase.description}
              </p>

              {activePhase.winner && (
                <div className="inline-flex items-center gap-2 bg-[#D1FF26]/10 border border-[#D1FF26]/30 px-4 py-2 rounded-xl text-xs font-label-sm text-[#D1FF26] uppercase font-bold tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-[#D1FF26]" /> Phase Winner: <span className="font-extrabold text-[#EDEDED]">{activePhase.winner}</span>
                </div>
              )}
            </div>

            <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 space-y-3 min-w-[280px]">
              <h4 className="font-label-sm text-xs font-bold text-[#D1FF26] uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Key Benchmarks Measured
              </h4>
              <ul className="space-y-2">
                {activePhase.keyBenchmarks.map((bm, i) => (
                  <li key={i} className="text-xs font-body text-[#EDEDED] flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#D1FF26]" />
                    {bm}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
