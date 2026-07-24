import React, { useState } from 'react';
import { QUERY_STEPS } from '../data/mockData';
import { QueryStep } from '../types';
import { Terminal, Cpu, Database, ShieldCheck, BrainCircuit, CheckCircle2, Play, Loader2, Sparkles } from 'lucide-react';

export const QueryJourney: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<QueryStep>(QUERY_STEPS[0]);
  const [userQuery, setUserQuery] = useState('How does self-attention compute token weights?');
  const [processing, setProcessing] = useState(false);
  const [journeyResponse, setJourneyResponse] = useState<any>(null);

  const queryPresets = [
    "How does self-attention compute token weights?",
    "Explain how RAG prevents model hallucinations",
    "How do reasoning LLMs plan multi-step logic?"
  ];

  const processQuery = async (queryToRun?: string) => {
    const q = queryToRun || userQuery;
    setUserQuery(q);
    setProcessing(true);
    setJourneyResponse(null);

    try {
      const res = await fetch('/api/query/journey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q }),
      });
      const data = await res.json();
      setJourneyResponse(data);
    } catch (err) {
      console.error('Error processing query journey:', err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden" id="about">
      {/* Dot matrix pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 space-y-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D1FF26]/10 border border-[#D1FF26]/30 text-[10px] font-label-sm font-bold text-[#D1FF26] tracking-[0.3em] uppercase">
            NEURAL ENGINE VISUALIZATION
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#EDEDED]">
            JOURNEY OF A <span className="text-[#D1FF26]">QUERY</span>
          </h2>
          <p className="font-body text-base md:text-lg text-white/70">
            See inside the neural network in real-time cinematic detail.
          </p>
        </div>

        {/* 5 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {QUERY_STEPS.map((step) => {
            const isSelected = selectedStep.step === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(step)}
                className={`glass-card p-6 rounded-2xl space-y-4 transition-all duration-300 cursor-pointer border hover:bg-white/10 ${
                  isSelected
                    ? 'border-[#D1FF26] bg-[#141414] shadow-[0_0_20px_rgba(209,255,38,0.25)] -translate-y-1'
                    : 'border-white/10 bg-[#121212]'
                }`}
              >
                <div className={`font-display font-black text-4xl ${isSelected ? 'text-[#D1FF26]' : 'text-white/20'}`}>
                  {step.step}
                </div>
                <h3 className="font-display font-bold uppercase text-lg text-[#EDEDED] tracking-tight">
                  {step.title}
                </h3>
                <p className="font-label-sm text-[11px] text-white/50 leading-snug">
                  {step.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Step Technical Inspector / Simulator */}
        <div className="glass-card p-8 rounded-3xl border border-[#D1FF26]/30 space-y-8 bg-[#121212]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-label-sm text-[#D1FF26] uppercase tracking-widest font-bold">
                Stage {selectedStep.step} Deep-Dive
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-[#EDEDED] tracking-tight mt-1">
                {selectedStep.title}: {selectedStep.subtitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50 bg-[#0A0A0A] px-3.5 py-1.5 rounded-lg border border-white/10">
              Latency: ~12ms | Memory: 4.2GB VRAM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              <p className="font-body text-base text-white/80 leading-relaxed">
                {selectedStep.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-label-sm text-xs font-bold text-[#D1FF26] uppercase tracking-widest">
                  Technical Operations Executed:
                </h4>
                <ul className="space-y-2">
                  {selectedStep.technicalDetails?.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-mono text-[#EDEDED] bg-[#0A0A0A] p-3 rounded-xl border border-white/10 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D1FF26] shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Neural Query Simulator */}
            <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-xs text-[#D1FF26] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> Live Neural Query Simulator
                </span>
                <span className="text-[11px] font-mono text-white/40">gemini-3.6-flash</span>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap gap-2">
                {queryPresets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => processQuery(preset)}
                    className="text-[11px] font-body text-white/70 hover:text-[#D1FF26] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 cursor-pointer"
                  >
                    "{preset.slice(0, 32)}..."
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Enter query to trace through all 5 neural stages..."
                  className="flex-1 bg-[#121212] border border-white/15 focus:border-[#D1FF26] rounded-xl px-4 py-3 text-xs text-[#EDEDED] focus:outline-none font-mono"
                  onKeyDown={(e) => e.key === 'Enter' && processQuery()}
                />
                <button
                  onClick={() => processQuery()}
                  disabled={processing}
                  className="bg-[#D1FF26] text-[#0A0A0A] font-label-sm text-xs px-5 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b0dc1a] transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-[0_0_15px_rgba(209,255,38,0.3)]"
                >
                  {processing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  Trace
                </button>
              </div>

              {/* Real AI Step Trace Output */}
              {journeyResponse && (
                <div className="space-y-3 pt-2 max-h-56 overflow-y-auto custom-scrollbar">
                  <span className="text-[11px] font-mono text-[#D1FF26] uppercase tracking-wider font-bold">
                    Live Trace Output: "{journeyResponse.query}"
                  </span>
                  <div className="space-y-2">
                    {journeyResponse.steps?.map((st: any, i: number) => (
                      <div key={i} className="bg-[#141414] p-3 rounded-lg border border-white/10 space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-[#D1FF26] font-bold">Stage {st.step}: {st.title}</span>
                          <span className="text-[10px] text-white/40 uppercase">Verified</span>
                        </div>
                        <p className="text-xs text-white/80 font-body">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
