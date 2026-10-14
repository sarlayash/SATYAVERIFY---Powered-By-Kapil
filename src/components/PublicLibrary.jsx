import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  ShieldCheck, 
  History, 
  Share2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  HelpCircle, 
  Clock,
  ArrowUpRight,
  Tag
} from 'lucide-react';
import { VERDICTS, MOCK_CLAIMS } from '../data/mockClaims';

export default function PublicLibrary({ onSelectClaim, onOpenTruthCard }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVerdict, setSelectedVerdict] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeRevisionClaim, setActiveRevisionClaim] = useState(null);

  const categories = useMemo(() => {
    const cats = new Set(MOCK_CLAIMS.map(c => c.category));
    return ['ALL', ...Array.from(cats)];
  }, []);

  const filteredClaims = useMemo(() => {
    return MOCK_CLAIMS.filter(claim => {
      const matchesSearch = 
        claim.claimText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.canonicalSubject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.investigationSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesVerdict = selectedVerdict === 'ALL' || claim.verdict === selectedVerdict;
      const matchesCat = selectedCategory === 'ALL' || claim.category === selectedCategory;

      return matchesSearch && matchesVerdict && matchesCat;
    });
  }, [searchTerm, selectedVerdict, selectedCategory]);

  const getVerdict = (v) => VERDICTS[v] || VERDICTS.UNVERIFIED;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D061] text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Public Evidence Archives</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white">
            Public Fact-Check Library
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Search peer-reviewed investigations, evidence desks, and complete revision histories.
            Indexed under SarlaYash digital literacy governance.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
            Showing <strong className="text-[#F5D061]">{filteredClaims.length}</strong> of {MOCK_CLAIMS.length} Investigations
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="gold-subtle-box p-4 rounded-2xl space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by keywords, subject (e.g. 'IIT Baba', 'UNESCO', 'solar recharge'), or ID..."
            className="w-full bg-[#0C0E16] border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Verdict Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#D4AF37]" />
            Verdict:
          </span>
          <button
            onClick={() => setSelectedVerdict('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedVerdict === 'ALL'
                ? 'bg-[#1C2030] text-[#F5D061] border border-[#D4AF37]/50 shadow'
                : 'text-slate-400 hover:text-white bg-slate-900/60 border border-transparent'
            }`}
          >
            All Verdicts
          </button>
          {Object.keys(VERDICTS).map((k) => {
            const v = VERDICTS[k];
            const isSelected = selectedVerdict === k;
            return (
              <button
                key={k}
                onClick={() => setSelectedVerdict(k)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? `${v.badgeClass} shadow-md`
                    : 'text-slate-400 border-slate-800/80 bg-slate-900/60 hover:text-white hover:border-slate-700'
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80 text-xs">
          <span className="text-slate-400 text-[11px] mr-1">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37]/15 text-[#F5D061] border border-[#D4AF37]/40'
                  : 'text-slate-400 hover:text-slate-200 bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Claims List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredClaims.map((claim) => {
          const v = getVerdict(claim.verdict);
          return (
            <div
              key={claim.id}
              className="gold-subtle-box rounded-2xl p-5 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Card Top: ID, Verdict, Date */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-2.5 py-0.5 rounded-lg text-xs font-black font-cinzel tracking-wider uppercase border inline-flex items-center gap-1"
                      style={{
                        backgroundColor: v.bgColor,
                        color: v.color,
                        borderColor: v.borderColor
                      }}
                    >
                      {claim.verdict === 'SUPPORTED' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {claim.verdict === 'FALSE' && <XCircle className="w-3.5 h-3.5" />}
                      {claim.verdict === 'MISLEADING' && <AlertTriangle className="w-3.5 h-3.5" />}
                      {claim.verdict === 'UNVERIFIED' && <HelpCircle className="w-3.5 h-3.5" />}
                      {claim.verdict === 'OUTDATED' && <Clock className="w-3.5 h-3.5" />}
                      <span>{v.label}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      {claim.id}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#F5D061] font-semibold">
                    {claim.confidenceScore}% Confidence
                  </span>
                </div>

                {/* Subject and Claim Text */}
                <div className="mt-3 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {claim.canonicalSubject}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F5D061] transition-colors leading-snug">
                    "{claim.claimText}"
                  </h3>
                </div>

                {/* Summary */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                  {claim.investigationSummary}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {claim.tags?.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveRevisionClaim(claim)}
                  className="text-slate-400 hover:text-slate-200 flex items-center gap-1 text-[11px]"
                >
                  <History className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{claim.revisionHistory?.length || 1} revision log(s)</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenTruthCard(claim)}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#F5D061] border border-slate-800"
                    title="Generate Truth Card"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectClaim(claim)}
                    className="px-3 py-1.5 rounded-lg bg-[#141824] hover:bg-[#1E2436] border border-[#D4AF37]/30 text-xs font-semibold text-[#F5D061] flex items-center gap-1 group-hover:border-[#D4AF37]"
                  >
                    <span>Full Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {filteredClaims.length === 0 && (
        <div className="text-center py-12 gold-subtle-box rounded-2xl space-y-2">
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
          <h4 className="text-sm font-semibold text-slate-300">No matching investigations found</h4>
          <p className="text-xs text-slate-400">Try adjusting your keyword search or filter criteria.</p>
        </div>
      )}

      {/* Revision History Viewer Modal */}
      {activeRevisionClaim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0C0E16] border border-[#D4AF37]/30 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-[#F5D061]" />
                <h3 className="font-cinzel text-base font-bold text-white">
                  Audit & Revision Ledger
                </h3>
              </div>
              <button
                onClick={() => setActiveRevisionClaim(null)}
                className="text-slate-400 hover:text-white text-xs bg-slate-900 px-2 py-1 rounded"
              >
                Close
              </button>
            </div>

            <div className="text-xs text-slate-300">
              <span className="text-slate-400">Claim ID: </span>
              <strong className="text-white font-mono">{activeRevisionClaim.id}</strong>
              <div className="mt-1 line-clamp-2 italic text-slate-300">
                "{activeRevisionClaim.claimText}"
              </div>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {activeRevisionClaim.revisionHistory?.map((rev, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#F5D061]">Version {rev.version}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {new Date(rev.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-semibold">
                    Editor: {rev.editor}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {rev.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
              All modifications are permanently logged to preserve provenance and editorial accountability.
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
