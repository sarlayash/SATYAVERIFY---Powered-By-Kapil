import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  UserCheck, 
  KeyRound, 
  FileCheck2, 
  AlertTriangle, 
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ReviewerPortalModal({ onClose, isReviewerMode, setIsReviewerMode }) {
  const [accessCode, setAccessCode] = useState('');
  const [message, setMessage] = useState(null);

  const handleToggle = () => {
    // For demo/interactive exploration, allow quick unlock with KAPIL or SARLAYASH, or demo switch
    if (!isReviewerMode) {
      setIsReviewerMode(true);
      setMessage({ type: 'success', text: 'Reviewer permissions activated for Kapil & SarlaYash Editorial Board.' });
    } else {
      setIsReviewerMode(false);
      setMessage({ type: 'info', text: 'Switched back to Public Citizen Mode.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0C0E16] border border-[#D4AF37]/35 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-auto animate-scaleUp space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#F5D061]" />
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              Reviewer & Editorial Governance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Core Architecture Principle */}
        <div className="p-4 rounded-2xl bg-[#101320] border border-[#D4AF37]/25 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#F5D061] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>The SarlaYash Trust Architecture</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            To prevent bad actors from using SATYAVERIFY to defame rivals or circulate accusations, 
            <strong> ordinary citizens can submit claims with zero login friction</strong>, but 
            <strong> publishing final verdicts to the public library is strictly restricted</strong> to verified editorial reviewers.
          </p>
        </div>

        {/* Current Mode Badge */}
        <div className="p-4 rounded-2xl bg-[#080A10] border border-slate-800 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400">Current Session State:</div>
            <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
              <span className={`w-2.5 h-2.5 rounded-full ${isReviewerMode ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`}></span>
              <span>{isReviewerMode ? 'Trusted Reviewer Desk (Kapil)' : 'Public Citizen Reader'}</span>
            </div>
          </div>

          <button
            onClick={handleToggle}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              isReviewerMode
                ? 'bg-rose-950/60 text-rose-300 border border-rose-800 hover:bg-rose-900/80'
                : 'gold-button text-black'
            }`}
          >
            {isReviewerMode ? 'Exit Reviewer Mode' : 'Simulate Reviewer Access'}
          </button>
        </div>

        {/* Explanatory Workflow */}
        <div className="space-y-2 text-xs">
          <div className="font-semibold text-slate-200">The 3-Tier Publishing Pipeline:</div>
          <div className="space-y-1.5 font-sans">
            <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-[#F5D061]">1. Intake</span>
              <span>Anonymous citizen paste or URL submission (Private instant AI preview).</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-[#F5D061]">2. Audit</span>
              <span>Reviewer checks primary gazettes, contacts official bodies, and verifies dates.</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 flex items-center gap-2">
              <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-[#F5D061]">3. Publish</span>
              <span>Signed with cryptographic reviewer ID to the Public Fact-Check Library.</span>
            </div>
          </div>
        </div>

        {message && (
          <div className={`p-3 rounded-xl border text-xs ${
            message.type === 'success' 
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
              : 'bg-slate-900 border-slate-700 text-slate-300'
          }`}>
            {message.text}
          </div>
        )}

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
