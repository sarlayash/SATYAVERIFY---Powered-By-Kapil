import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  ExternalLink, 
  Quote, 
  ShieldAlert, 
  HelpCircle, 
  History, 
  Flag, 
  FileCheck2, 
  AlertCircle, 
  Clock 
} from 'lucide-react';

export default function EvidenceDesk({ claim, onOpenCorrection }) {
  const [activeTab, setActiveTab] = useState('sources'); // 'sources', 'conflicts', 'history', 'unresolved'

  if (!claim || !claim.evidenceDesk) return null;
  const desk = claim.evidenceDesk;

  return (
    <div className="gold-subtle-box rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Evidence Desk Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>
            <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
              The Evidence Desk
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#D4AF37]/15 text-[#F5D061] font-mono border border-[#D4AF37]/30">
              AUDITED
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Primary documents, publication dates, direct quotations, and conflict detection.
          </p>
        </div>

        {/* Community Correction CTA */}
        <button
          onClick={() => onOpenCorrection(claim)}
          className="self-start sm:self-auto px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#1A1E2E] border border-slate-700 hover:border-[#D4AF37]/40 text-xs text-slate-300 hover:text-[#F5D061] flex items-center gap-2 transition-all shadow-sm"
        >
          <Flag className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Report Error or Submit New Evidence</span>
        </button>
      </div>

      {/* Origin Archaeology & Official Clarification Quick Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Origin Tracking */}
        <div className="p-4 rounded-2xl bg-[#0B0D15] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Origin Archaeology & First Appearance</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {desk.originalSource}
          </p>
        </div>

        {/* Official Clarification */}
        <div className="p-4 rounded-2xl bg-[#0B0D15] border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>Official Administrative Position</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {desk.officialClarification}
          </p>
        </div>

      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-800 text-xs font-medium">
        <button
          onClick={() => setActiveTab('sources')}
          className={`pb-3 px-3 transition-all relative flex items-center gap-1.5 ${
            activeTab === 'sources'
              ? 'text-[#F5D061] font-semibold border-b-2 border-[#D4AF37]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Verified Sources ({desk.sources?.length || 0})</span>
        </button>

        <button
          onClick={() => setActiveTab('conflicts')}
          className={`pb-3 px-3 transition-all relative flex items-center gap-1.5 ${
            activeTab === 'conflicts'
              ? 'text-[#F5D061] font-semibold border-b-2 border-[#D4AF37]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Conflicting Evidence</span>
        </button>

        <button
          onClick={() => setActiveTab('unresolved')}
          className={`pb-3 px-3 transition-all relative flex items-center gap-1.5 ${
            activeTab === 'unresolved'
              ? 'text-[#F5D061] font-semibold border-b-2 border-[#D4AF37]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Unresolved Questions</span>
        </button>

        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 px-3 transition-all relative flex items-center gap-1.5 ${
            activeTab === 'history'
              ? 'text-[#F5D061] font-semibold border-b-2 border-[#D4AF37]'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Revision Ledger ({claim.revisionHistory?.length || 1})</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div>
        
        {/* Sources Tab */}
        {activeTab === 'sources' && (
          <div className="space-y-3.5">
            {desk.sources && desk.sources.length > 0 ? (
              desk.sources.map((src, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0B0D15]/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-100">{src.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                        {src.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#D4AF37]" />
                        {src.date}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-mono">
                        {src.trustRating}
                      </span>
                    </div>
                  </div>

                  {/* Direct Quotation */}
                  {src.quote && (
                    <div className="p-3 rounded-xl bg-slate-900/60 border-l-2 border-[#D4AF37] text-xs text-slate-300 italic font-sans flex items-start gap-2">
                      <Quote className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <span>"{src.quote}"</span>
                      </div>
                    </div>
                  )}

                  {/* Link out */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                      Verified Reference: {src.url}
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Inspect Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-500 text-xs">
                No external primary records mapped yet.
              </div>
            )}
          </div>
        )}

        {/* Conflicts Tab */}
        {activeTab === 'conflicts' && (
          <div className="p-5 rounded-2xl bg-[#0B0D15] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-400">
              <AlertCircle className="w-4 h-4" />
              <span>Independent Discrepancy & Conflict Analysis</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {desk.conflictingEvidence || 'No conflicting reports from accredited news agencies or official statutory bodies were identified during this audit.'}
            </p>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              Note: When conflicting reports occur between verified outlets, the platform notes the divergence explicitly rather than declaring an arbitrary victor.
            </div>
          </div>
        )}

        {/* Unresolved Questions Tab */}
        {activeTab === 'unresolved' && (
          <div className="p-5 rounded-2xl bg-[#0B0D15] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Unresolved Inquiries & Pending Disclosures</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {desk.unresolvedQuestions || 'All key factual claims in this query have been addressed with verifiable documentation.'}
            </p>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              Any public member with access to official documentation addressing these open questions may submit them via Community Corrections.
            </div>
          </div>
        )}

        {/* Revision Ledger Tab */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {claim.revisionHistory?.map((rev, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0B0D15] border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#F5D061] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      v{rev.version}
                    </span>
                    <span className="font-semibold text-slate-200">{rev.editor}</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">
                    {new Date(rev.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rev.note}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
