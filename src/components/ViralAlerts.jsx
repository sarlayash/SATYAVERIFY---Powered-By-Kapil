import React, { useState } from 'react';
import { 
  Flame, 
  Radio, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { VIRAL_ALERTS } from '../data/mockClaims';

export default function ViralAlerts({ alerts: propAlerts, onSelectClaimById, onOpenReportViral }) {
  const alerts = propAlerts || VIRAL_ALERTS;
  const [upvoted, setUpvoted] = useState({});

  const handleUpvote = (id) => {
    setUpvoted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            <span>Live Transmission Monitor</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Viral Claim Alerts
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Real-time radar tracking high-velocity claims circulating on WhatsApp, Telegram, and social feeds across India.
          </p>
        </div>

        <button
          onClick={onOpenReportViral}
          className="gold-button px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg self-start md:self-auto cursor-pointer"
        >
          <Flame className="w-4 h-4 text-black" />
          <span>Flag a Viral Forward</span>
        </button>
      </div>

      {/* Info card */}
      <div className="p-4 rounded-2xl bg-[#0F121C] border border-[#D4AF37]/25 flex items-start gap-3">
        <Radio className="w-5 h-5 text-[#F5D061] shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-[#F5D061]">Public Vigilance Principle:</strong> Viral reach does not equate to credibility. High velocity often indicates automated coordinated forwarding or sensational clickbait. SarlaYash prioritizes rapid verification before rumors inflict societal or reputational harm.
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="space-y-4">
        {alerts.map((alert) => {
          const isUpvoted = upvoted[alert.id];
          return (
            <div
              key={alert.id}
              className="gold-subtle-box rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-[#D4AF37]/35 transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border uppercase ${alert.badgeColor}`}>
                    {alert.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {alert.timestamp}
                  </span>
                </div>

                <div className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[#F5D061]">
                  {alert.reachIndex}
                </div>
              </div>

              {/* Headline */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {alert.headline}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {alert.alertMessage}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpvote(alert.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isUpvoted
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#F5D061]'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Flame className={`w-3.5 h-3.5 ${isUpvoted ? 'text-[#F5D061]' : 'text-slate-500'}`} />
                    <span>{isUpvoted ? 'Prioritized by you (+1)' : 'Seeing this in groups? (+1)'}</span>
                  </button>
                </div>

                {alert.claimId && (
                  <button
                    onClick={() => onSelectClaimById(alert.claimId)}
                    className="px-4 py-2 rounded-xl bg-[#141824] hover:bg-[#1C2132] border border-[#D4AF37]/35 text-[#F5D061] font-semibold text-xs flex items-center gap-1.5 transition-all"
                  >
                    <span>Inspect Evidence Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
