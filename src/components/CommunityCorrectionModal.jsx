import React, { useState } from 'react';
import { 
  X, 
  Flag, 
  Send, 
  CheckCircle2, 
  Link2, 
  FileText, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CommunityCorrectionModal({ claim, onClose, onSubmitCorrection }) {
  const [correctionType, setCorrectionType] = useState('new_evidence');
  const [sourceUrl, setSourceUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  const [submitterName, setSubmitterName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!explanation.trim()) return;

    if (onSubmitCorrection) {
      onSubmitCorrection({
        claimId: claim?.id || 'general',
        type: correctionType,
        sourceUrl,
        explanation,
        submitterName: submitterName || 'Community Contributor',
        timestamp: new Date().toISOString()
      });
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#10B981', '#FFFFFF']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0C0E16] border border-[#D4AF37]/35 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-auto animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Flag className="w-5 h-5 text-[#F5D061]" />
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              Community Corrections Desk
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
            <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-cinzel text-lg font-bold text-white">
                Correction Logged Into Public Ledger
              </h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for safeguarding truth. Your submitted primary source reference has been queued for verification by the SarlaYash Editorial Board.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              Audit ID: CORR-{Date.now().toString().slice(-6)} • Tracked in Public Ledger
            </div>
            <button
              onClick={onClose}
              className="gold-button px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              Return to Fact Check
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            
            {/* Target Claim Context */}
            {claim && (
              <div className="p-3 rounded-xl bg-[#121522] border border-slate-800 text-xs">
                <span className="text-slate-400">Reviewing Investigation: </span>
                <span className="font-bold text-slate-200">{claim.canonicalSubject}</span>
                <div className="text-[11px] text-slate-400 truncate mt-0.5 font-mono">
                  ID: {claim.id}
                </div>
              </div>
            )}

            {/* Correction Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Nature of Correction
              </label>
              <select
                value={correctionType}
                onChange={(e) => setCorrectionType(e.target.value)}
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="new_evidence">New Primary Document / Official Press Release</option>
                <option value="timeline_error">Timeline or Publication Date Inaccuracy</option>
                <option value="missing_context">Missing Context or Selective Quotation</option>
                <option value="status_update">Subsequent Legal or Institutional Clarification</option>
              </select>
            </div>

            {/* Source URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Primary Source Link / Official Gazette URL</span>
              </label>
              <input
                type="url"
                required
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://pib.gov.in/... or official registry link"
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] placeholder-slate-600 font-mono"
              />
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Factual Explanation & Evidence Quote</span>
              </label>
              <textarea
                required
                rows={3}
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Quote the exact official statement or specify what fact requires amendment..."
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] placeholder-slate-600 resize-none"
              />
            </div>

            {/* Submitter Name (Optional) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">
                Your Name / Organization (Optional)
              </label>
              <input
                type="text"
                value={submitterName}
                onChange={(e) => setSubmitterName(e.target.value)}
                placeholder="Leave blank for anonymous public contribution"
                className="w-full bg-[#10121D] border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-[#D4AF37] placeholder-slate-600"
              />
            </div>

            {/* Note */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                All submitted corrections undergo peer review. Verified updates are added to the public revision ledger with full provenance timestamps.
              </span>
            </div>

            {/* Action */}
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
                <span>Submit to Editorial Desk</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
