import React, { useState, useRef } from 'react';
import { ARENA_MODELS } from '../data/mockData';
import { ArenaModel, BattleResult } from '../types';
import { Swords, Sparkles, Loader2, ArrowRight, Info, CheckCircle2 } from 'lucide-react';

export const BattleArena: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ArenaModel | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [battleResult, setBattleResult] = useState<BattleResult | null>(null);

  const presets = [
    "Write an async Rust worker for order book matching",
    "Explain quantum superposition using a spinning coin analogy",
    "Compare transformer self-attention vs state-space Mamba models"
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
  };

  const runLiveBattle = async (promptToRun?: string) => {
    const activePrompt = promptToRun || customPrompt || presets[0];
    setCustomPrompt(activePrompt);
    setLoading(true);
    setBattleResult(null);

    try {
      const res = await fetch('/api/arena/battle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: activePrompt }),
      });
      const data = await res.json();
      setBattleResult(data);
    } catch (err) {
      console.error('Arena battle error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]" id="arena">
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center space-y-12 relative z-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#D1FF26]/10 border border-[#D1FF26]/30 text-[10px] font-label-sm font-bold text-[#D1FF26] tracking-[0.3em] uppercase">
            LIVE BENCHMARK MATRIX
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#EDEDED]">
            AI BATTLE <span className="text-[#D1FF26] text-glow">ARENA</span>
          </h2>
          <p className="font-label-sm text-xs md:text-sm text-white/50 tracking-[0.25em] uppercase max-w-xl mx-auto">
            Real Benchmarks • Real Battles • Zero Bias
          </p>
        </div>

        {/* 3 Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {ARENA_MODELS.map((model) => (
            <div
              key={model.id}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => setSelectedModel(model)}
              className="holographic-card glass-card p-8 rounded-2xl flex flex-col justify-between gap-6 border border-white/10 hover:border-[#D1FF26]/60 cursor-pointer group shadow-2xl relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#121212] border border-white/10">
                <img
                  src={model.image}
                  alt={`${model.name} AI Representation`}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <button className="absolute top-3 right-3 bg-[#0A0A0A]/80 border border-white/20 p-2 rounded-lg text-[10px] font-label-sm text-[#D1FF26] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> Specs
                </button>
              </div>

              {/* Title & Metrics */}
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-2xl font-black text-[#EDEDED] uppercase tracking-tight group-hover:text-[#D1FF26] transition-colors">
                    {model.name}
                  </h3>
                  <span className="text-[10px] font-label-sm font-bold text-white/60 uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10">
                    {model.specifications.contextWindow}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {model.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 text-[11px] font-label-sm">
                      <div className="flex justify-between text-white/50 tracking-wider">
                        <span>{metric.label}</span>
                        <span className="text-[#EDEDED] font-bold">{metric.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="bg-[#D1FF26] h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_#D1FF26]"
                          style={{
                            width: `${metric.value}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Arena Playground Runner */}
        <div className="glass-card p-8 rounded-3xl border border-[#D1FF26]/30 text-left space-y-6 mt-12 relative overflow-hidden bg-[#121212]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#D1FF26] font-label-sm text-xs uppercase tracking-widest font-bold mb-1">
                <Swords className="w-4 h-4" /> Live Battle Judging Engine
              </div>
              <h3 className="font-display text-xl md:text-3xl font-black uppercase text-[#EDEDED] tracking-tight">
                Head-To-Head Benchmark Tester
              </h3>
            </div>
            <span className="text-[10px] font-label-sm font-bold text-white/50 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
              Powered by Gemini 3.6 Flash
            </span>
          </div>

          {/* Preset Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[11px] font-label-sm text-white/40 uppercase tracking-wider self-center mr-2">Presets:</span>
            {presets.map((preset, i) => (
              <button
                key={i}
                onClick={() => runLiveBattle(preset)}
                className="text-xs font-body text-white/80 hover:text-[#D1FF26] bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition-colors text-left cursor-pointer"
              >
                "{preset}"
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Enter custom prompt to benchmark models in real-time..."
              className="flex-1 bg-[#0A0A0A] border border-white/20 focus:border-[#D1FF26] rounded-xl px-4 py-3.5 text-sm text-[#EDEDED] placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#D1FF26] transition-all font-body"
              onKeyDown={(e) => e.key === 'Enter' && runLiveBattle()}
            />
            <button
              onClick={() => runLiveBattle()}
              disabled={loading}
              className="bg-[#D1FF26] text-[#0A0A0A] font-label-sm text-xs font-black uppercase tracking-widest px-7 py-3.5 rounded-xl hover:bg-[#b0dc1a] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(209,255,38,0.35)]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Evaluating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Run Battle
                </>
              )}
            </button>
          </div>

          {/* Battle Evaluation Results */}
          {battleResult && (
            <div className="pt-6 border-t border-white/10 space-y-6 animate-fade-in">
              <h4 className="font-label-sm text-xs text-[#D1FF26] uppercase tracking-widest font-bold">
                EVALUATION RESULTS FOR: "{battleResult.prompt}"
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {battleResult.models.map((resModel, idx) => (
                  <div
                    key={idx}
                    className="glass p-5 rounded-xl border border-white/10 space-y-3 bg-[#0A0A0A]"
                  >
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="font-display font-bold text-lg text-[#EDEDED] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D1FF26]" />
                        {resModel.name}
                      </span>
                      <span className="text-xs font-label-sm font-black text-[#0A0A0A] bg-[#D1FF26] px-2.5 py-1 rounded-md">
                        Score: {resModel.score}/100
                      </span>
                    </div>
                    <p className="text-xs text-white/70 font-serif-italic italic leading-relaxed">
                      "{resModel.summary}"
                    </p>
                    <div className="bg-[#141414] p-3 rounded-lg text-xs font-mono text-white/90 max-h-32 overflow-y-auto custom-scrollbar border border-white/10">
                      {resModel.response}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Model Specs Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="glass-card max-w-lg w-full p-8 rounded-3xl border border-[#D1FF26]/40 space-y-6 relative bg-[#121212]">
            <button
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-[#EDEDED] text-xl font-bold p-2"
            >
              ✕
            </button>
            <div className="flex items-center gap-4">
              <img
                src={selectedModel.image}
                alt={selectedModel.name}
                className="w-16 h-16 rounded-xl object-cover border border-[#D1FF26]/40"
              />
              <div>
                <h3 className="font-display text-2xl font-black uppercase text-[#EDEDED]">
                  {selectedModel.name} Specs
                </h3>
                <span className="text-xs font-label-sm text-[#D1FF26] uppercase tracking-widest font-bold">
                  {selectedModel.specifications.architecture}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed font-body">
              {selectedModel.description}
            </p>

            <div className="space-y-3 bg-[#0A0A0A] p-4 rounded-xl border border-white/10 text-xs font-label-sm">
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-white/40 uppercase">Context Window</span>
                <span className="text-[#EDEDED] font-bold">{selectedModel.specifications.contextWindow}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-white/40 uppercase">Architecture</span>
                <span className="text-[#EDEDED] font-bold">{selectedModel.specifications.architecture}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/40 uppercase">Best For</span>
                <span className="text-[#EDEDED] text-right max-w-[200px] font-bold">
                  {selectedModel.specifications.bestFor}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedModel(null)}
              className="w-full bg-[#D1FF26] text-[#0A0A0A] font-label-sm text-xs font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-[#b0dc1a] transition-all cursor-pointer shadow-[0_0_20px_rgba(209,255,38,0.35)]"
            >
              Close Specifications
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
