import React, { useState } from 'react';
import { 
  X, 
  Flame, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Radio, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReportViralModal({ onClose, onSubmitViralReport }) {
  const [headline, setHeadline] = useState('');
  const [platform, setPlatform] = useState('WhatsApp');
  const [region, setRegion] = useState('Pan-India');
  const [forwardFrequency, setForwardFrequency] = useState('Multiple Groups (>5)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!headline.trim()) return;

    if (onSubmitViralReport) {
      onSubmitViralReport({
        headline,
        platform,
        region,
        forwardFrequency,
        timestamp: 'Just now'
      });
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 },
      colors: ['#EF4444', '#F59E0B', '#D4AF37']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0C0E16] border border-[#D4AF37]/35 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-auto animate-scaleUp space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-rose-500" />
            <h3 className="font-cinzel text-lg font-bold text-white">
              Flag a Rapidly Spreading Forward
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-950/80 border border-rose-500/50 text-rose-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-cinzel text-lg font-bold text-white">
                Transmission Alert Queued
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for the early warning. The SarlaYash verification desk has prioritized this claim for source archaeology and official clarification.
              </p>
            </div>
            <button
              onClick={onClose}
              className="gold-button px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              Back to Alerts
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="text-xs text-slate-400">
              Notice an alarming or sensational forward circulating in your messaging groups? Alert our evidence desk early.
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Forward Text / Headline Snippet
              </label>
              <textarea
                required
                rows={3}
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Paste the forward or headline spreading across your chats..."
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] placeholder-slate-600 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Platform</label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Telegram">Telegram</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Region</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="e.g. Uttar Pradesh, Delhi, Mumbai"
                  className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Estimated Frequency
              </label>
              <select
                value={forwardFrequency}
                onChange={(e) => setForwardFrequency(e.target.value)}
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Single Family Chat">Received in 1 chat</option>
                <option value="Multiple Groups (>5)">Circulating in 5+ groups</option>
                <option value="High Velocity Viral Wave">Explosive viral spread across multiple circles</option>
              </select>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="gold-button px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-black" />
                <span>Submit Alert</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
