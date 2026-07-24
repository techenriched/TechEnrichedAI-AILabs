import React, { useState } from 'react';
import { X, Terminal, Cpu, Sparkles, Sliders, Zap, CheckCircle2, Play, Loader2 } from 'lucide-react';

interface AlphaPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlphaPlaygroundModal: React.FC<AlphaPlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'system' | 'invite'>('sandbox');
  const [prompt, setPrompt] = useState('Visualize the step-by-step memory updates during a 100K token conversation.');
  const [temp, setTemp] = useState(0.7);
  const [thinkingLevel, setThinkingLevel] = useState('High');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleRunSandbox = async () => {
    setLoading(true);
    setOutput(null);

    try {
      const res = await fetch('/api/query/journey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: prompt }),
      });
      const data = await res.json();
      setOutput(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setOutput(`Error running sandbox: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-fade-in">
      <div className="glass-card max-w-2xl w-full p-8 rounded-3xl border border-[#D1FF26]/50 space-y-6 relative max-h-[90vh] overflow-y-auto custom-scrollbar bg-[#121212]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-[#EDEDED] p-2 text-xl font-bold cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#D1FF26]/10 border border-[#D1FF26]/40 flex items-center justify-center text-[#D1FF26]">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-2xl font-black uppercase text-[#EDEDED]">
                Alpha Command Center
              </h3>
              <span className="text-[10px] font-label-sm uppercase bg-[#D1FF26] text-[#0A0A0A] font-black px-2.5 py-0.5 rounded-full">
                v0.9.4 Alpha
              </span>
            </div>
            <p className="text-xs font-label-sm uppercase tracking-widest text-white/50">
              TECHENRICHED.AI Interactive Control Suite
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-2">
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-4 py-2 rounded-full text-[11px] font-label-sm uppercase font-extrabold tracking-wider transition-all cursor-pointer ${
              activeTab === 'sandbox'
                ? 'bg-[#D1FF26] text-[#0A0A0A]'
                : 'text-white/60 hover:text-[#EDEDED] bg-white/5'
            }`}
          >
            Neural Sandbox
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2 rounded-full text-[11px] font-label-sm uppercase font-extrabold tracking-wider transition-all cursor-pointer ${
              activeTab === 'system'
                ? 'bg-[#D1FF26] text-[#0A0A0A]'
                : 'text-white/60 hover:text-[#EDEDED] bg-white/5'
            }`}
          >
            System Telemetry
          </button>
          <button
            onClick={() => setActiveTab('invite')}
            className={`px-4 py-2 rounded-full text-[11px] font-label-sm uppercase font-extrabold tracking-wider transition-all cursor-pointer ${
              activeTab === 'invite'
                ? 'bg-[#D1FF26] text-[#0A0A0A]'
                : 'text-white/60 hover:text-[#EDEDED] bg-white/5'
            }`}
          >
            Alpha Pass
          </button>
        </div>

        {/* Tab 1: Sandbox */}
        {activeTab === 'sandbox' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-label-sm font-bold text-[#D1FF26] uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Input Neural Prompt:
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                className="w-full bg-[#0A0A0A] border border-white/20 focus:border-[#D1FF26] rounded-xl p-3.5 text-xs font-mono text-[#EDEDED] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[#0A0A0A] p-4 rounded-xl border border-white/10">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-label-sm text-white/50 uppercase tracking-wider">
                  <span>Temperature</span>
                  <span className="text-[#D1FF26] font-bold">{temp}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temp}
                  onChange={(e) => setTemp(parseFloat(e.target.value))}
                  className="w-full accent-[#D1FF26] cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-label-sm text-white/50 uppercase tracking-wider">
                  <span>Reasoning Level</span>
                  <span className="text-[#D1FF26] font-bold">{thinkingLevel}</span>
                </div>
                <div className="flex gap-1 pt-1">
                  {['Low', 'Medium', 'High'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setThinkingLevel(lvl)}
                      className={`flex-1 text-[10px] font-mono py-1 rounded border uppercase font-bold ${
                        thinkingLevel === lvl
                          ? 'bg-[#D1FF26]/20 border-[#D1FF26] text-[#D1FF26]'
                          : 'bg-white/5 border-white/10 text-white/50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleRunSandbox}
              disabled={loading}
              className="w-full bg-[#D1FF26] text-[#0A0A0A] font-label-sm text-xs font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-[#b0dc1a] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(209,255,38,0.35)]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Compiling Neural Output...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" /> Execute Sandbox Stream
                </>
              )}
            </button>

            {output && (
              <div className="bg-[#0A0A0A] p-4 rounded-xl border border-[#D1FF26]/30 text-xs font-mono text-[#D1FF26] max-h-48 overflow-y-auto custom-scrollbar">
                <pre>{output}</pre>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: System Telemetry */}
        {activeTab === 'system' && (
          <div className="space-y-3 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 text-xs font-mono">
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-white/40 uppercase">Primary Model Engine</span>
              <span className="text-[#D1FF26] font-bold">gemini-3.6-flash (Server-Side)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-white/40 uppercase">Cluster Region</span>
              <span className="text-[#EDEDED]">asia-southeast1 (Cloud Run)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-white/40 uppercase">Security Proxy</span>
              <span className="text-[#EDEDED]">Encrypted Server API Proxy</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/10">
              <span className="text-white/40 uppercase">Active Renderer</span>
              <span className="text-[#EDEDED]">Brutalist Vector Matrix Shader Engine</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-white/40 uppercase">API Latency (P99)</span>
              <span className="text-[#D1FF26] font-bold">18ms</span>
            </div>
          </div>
        )}

        {/* Tab 3: Alpha Pass */}
        {activeTab === 'invite' && (
          <div className="space-y-4 bg-[#0A0A0A] p-6 rounded-2xl border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D1FF26]/10 border border-[#D1FF26] text-[#D1FF26] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(209,255,38,0.3)]">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-display text-xl font-black uppercase text-[#EDEDED]">
              Alpha Pioneer Access Granted
            </h4>
            <p className="font-body text-xs text-white/70 max-w-md mx-auto">
              You are unlocked for Season 01 Alpha access. Your account has unlimited access to real-time Battle Arena comparisons and 4K visual query breakdowns.
            </p>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 inline-block font-mono text-xs text-[#D1FF26] font-bold">
              ALPHA-PASS-KEY: TE-2026-ALPHA-VIP
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full bg-white/10 hover:bg-white/20 text-[#EDEDED] font-label-sm text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all cursor-pointer"
        >
          Close Command Center
        </button>
      </div>
    </div>
  );
};
