import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  HelpCircle, 
  Clock, 
  Share2, 
  FileText, 
  Link2, 
  Upload, 
  ExternalLink, 
  ShieldCheck, 
  MessageSquare, 
  Calendar, 
  UserCheck, 
  ArrowRight,
  Flame,
  Check,
  RefreshCw,
  Info,
  Flag
} from 'lucide-react';
import { VERDICTS, SAMPLE_INPUTS, MOCK_CLAIMS } from '../data/mockClaims';
import EvidenceDesk from './EvidenceDesk';

export default function ClaimChecker({ 
  onOpenTruthCard, 
  onOpenCorrection,
  selectedClaimFromParent,
  onResetSelectedClaim
}) {
  const [claimInput, setClaimInput] = useState('');
  const [inputMode, setInputMode] = useState('text'); // 'text', 'url', 'whatsapp', 'image'
  const [isInvestigating, setIsInvestigating] = useState(false);
  const [investigationStep, setInvestigationStep] = useState(0);
  const [currentClaim, setCurrentClaim] = useState(null);
  const [hasCopiedText, setHasCopiedText] = useState(false);

  // Sync if parent passed a claim (e.g. from Viral Alerts or Library)
  useEffect(() => {
    if (selectedClaimFromParent) {
      setCurrentClaim(selectedClaimFromParent);
      setClaimInput(selectedClaimFromParent.claimText);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  }, [selectedClaimFromParent]);

  // Handle sample click
  const handleSelectSample = (sample) => {
    setClaimInput(sample.text);
    if (sample.type === 'url') setInputMode('url');
    else if (sample.type === 'whatsapp') setInputMode('whatsapp');
    else setInputMode('text');
  };

  // Run the 4-stage investigation simulation
  const handleInvestigate = (overrideText = null) => {
    const textToAnalyze = overrideText || claimInput;
    if (!textToAnalyze.trim()) return;

    setIsInvestigating(true);
    setInvestigationStep(1);

    // Progression of investigative steps
    const timer1 = setTimeout(() => setInvestigationStep(2), 700);
    const timer2 = setTimeout(() => setInvestigationStep(3), 1500);
    const timer3 = setTimeout(() => setInvestigationStep(4), 2300);

    const timerFinal = setTimeout(() => {
      // Find matching mock claim or synthesize intelligent evidence-first investigation
      const lower = textToAnalyze.toLowerCase();
      let matched = MOCK_CLAIMS.find(c => 
        lower.includes('baba') || 
        lower.includes('dead') || 
        lower.includes('demise') || 
        lower.includes('unesco') || 
        lower.includes('recharge') || 
        lower.includes('yojana') || 
        lower.includes('lemon') || 
        lower.includes('triage') || 
        lower.includes('isro') || 
        lower.includes('mask')
      );

      if (lower.includes('baba') || lower.includes('iit')) {
        matched = MOCK_CLAIMS[0];
      } else if (lower.includes('unesco') || lower.includes('anthem')) {
        matched = MOCK_CLAIMS[1];
      } else if (lower.includes('recharge') || lower.includes('yojana') || lower.includes('pm')) {
        matched = MOCK_CLAIMS[2];
      } else if (lower.includes('lemon') || lower.includes('soda') || lower.includes('cure')) {
        matched = MOCK_CLAIMS[3];
      } else if (lower.includes('triage') || lower.includes('hospital') || lower.includes('40%')) {
        matched = MOCK_CLAIMS[4];
      } else if (lower.includes('mask') || lower.includes('fine')) {
        matched = MOCK_CLAIMS[5];
      } else if (lower.includes('isro') || lower.includes('engine')) {
        matched = MOCK_CLAIMS[6];
      }

      // If custom user text didn't match existing, build a thoughtful dynamic investigation adhering to our principles
      if (!matched) {
        matched = {
          id: `sv-custom-${Date.now().toString().slice(-4)}`,
          claimText: textToAnalyze,
          canonicalSubject: 'User Submitted Claim',
          targetPerson: 'N/A (Factual Statement)',
          category: 'Social Media Inquiry',
          platformOrigin: inputMode === 'whatsapp' ? 'WhatsApp Forward' : inputMode === 'url' ? 'Web Link' : 'Direct Text Submission',
          firstObserved: new Date().toISOString(),
          verifiedAt: new Date().toISOString(),
          verdict: 'UNVERIFIED',
          confidenceScore: 50,
          investigationSummary: 'No conclusive primary evidence or official government gazette was immediately matched for this specific statement in certified databases. Following our core rule: A claim is never branded FALSE merely because no supporting evidence has yet surfaced. It remains UNVERIFIED pending primary source verification.',
          evidenceDesk: {
            originalSource: 'User submitted text / social forward currently undergoing indexing.',
            officialClarification: 'Query dispatched to SarlaYash verification queue. No conflicting press bureau bulletin yet.',
            sources: [
              {
                name: 'SarlaYash Automated Evidence Cross-Check',
                date: new Date().toISOString().split('T')[0],
                type: 'Initial Automated Scan',
                trustRating: 'B+ (Semantic Lexicon Scan)',
                url: '#',
                quote: 'Initial syntactic entity extraction identified factual assertion. No registered gazette notification found.'
              }
            ],
            conflictingEvidence: 'Awaiting submission of counter-documentation or primary video/gazette corroboration.',
            unresolvedQuestions: 'Primary author, original date of publication, and jurisdiction context remain unverified.'
          },
          revisionHistory: [
            {
              version: '1.0',
              timestamp: new Date().toISOString(),
              editor: 'Kapil & SarlaYash AI Intake',
              note: 'Standard unverified claim intake logged. Awaiting reviewer corroboration.'
            }
          ],
          responsibleTakeaway: 'Before sharing, ask the sender for their original link. If no date or official source exists, hold back from forwarding.',
          shareCount: 1,
          tags: ['Community Submission', 'Under Review']
        };
      }

      setCurrentClaim(matched);
      setIsInvestigating(false);
      setInvestigationStep(0);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerFinal);
    };
  };

  const getVerdictDetails = (verdictKey) => {
    return VERDICTS[verdictKey] || VERDICTS.UNVERIFIED;
  };

  const copyWhatsAppText = () => {
    if (!currentClaim) return;
    const v = getVerdictDetails(currentClaim.verdict);
    const text = `🔍 *FACT CHECK BY SATYAVERIFY (Powered by Kapil)*
──────────────────
📌 *Claim:* "${currentClaim.claimText.slice(0, 140)}..."
⚖️ *Verdict:* *${v.label}*
📊 *Confidence:* ${currentClaim.confidenceScore}%
──────────────────
💡 *What the Evidence Proves:*
${currentClaim.investigationSummary}

🛡️ *Core Rule:* We verify claims, not attack people.
Read full audit & sources: https://satyaverify.ai/v/${currentClaim.id}`;

    navigator.clipboard.writeText(text);
    setHasCopiedText(true);
    setTimeout(() => setHasCopiedText(false), 2500);
  };

  return (
    <div className="space-y-10">
      
      {/* Hero Header & Value Proposition */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4 sm:pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D061] text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SarlaYash Public-Interest Digital Literacy Engine</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight silver-gold-text leading-tight">
          Verify Claims With Evidence. <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Never Attack People.</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Paste viral WhatsApp forwards, news headlines, or suspicious links. 
          SATYAVERIFY tracks primary sources, cross-examines official statements, and generates 
          verifiable truth cards with zero trial-by-social-media.
        </p>

        {/* 4 Steps Micro-bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 text-left">
          <div className="p-2.5 rounded-xl bg-[#12141F]/80 border border-slate-800 flex items-start gap-2.5">
            <span className="font-mono text-xs font-bold text-[#F5D061] px-1.5 py-0.5 rounded bg-[#D4AF37]/15">01</span>
            <div>
              <div className="text-xs font-semibold text-slate-200">Submit Claim</div>
              <div className="text-[11px] text-slate-400">Forward, link, or text</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#12141F]/80 border border-slate-800 flex items-start gap-2.5">
            <span className="font-mono text-xs font-bold text-[#F5D061] px-1.5 py-0.5 rounded bg-[#D4AF37]/15">02</span>
            <div>
              <div className="text-xs font-semibold text-slate-200">Investigate</div>
              <div className="text-[11px] text-slate-400">Sources, dates & quotes</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#12141F]/80 border border-slate-800 flex items-start gap-2.5">
            <span className="font-mono text-xs font-bold text-[#F5D061] px-1.5 py-0.5 rounded bg-[#D4AF37]/15">03</span>
            <div>
              <div className="text-xs font-semibold text-slate-200">Get Verdict</div>
              <div className="text-[11px] text-slate-400">5 rigorous standards</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#12141F]/80 border border-slate-800 flex items-start gap-2.5">
            <span className="font-mono text-xs font-bold text-[#F5D061] px-1.5 py-0.5 rounded bg-[#D4AF37]/15">04</span>
            <div>
              <div className="text-xs font-semibold text-slate-200">Share Truth</div>
              <div className="text-[11px] text-slate-400">Responsible Truth Cards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Claim Submission Box */}
      <div className="max-w-4xl mx-auto">
        <div className="gold-subtle-box rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Mode Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-1.5 bg-[#0C0E16] p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setInputMode('text')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  inputMode === 'text' 
                    ? 'bg-[#1C2030] text-[#F5D061] shadow border border-[#D4AF37]/30' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Text / Post</span>
              </button>
              <button
                onClick={() => setInputMode('whatsapp')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  inputMode === 'whatsapp' 
                    ? 'bg-[#1C2030] text-[#F5D061] shadow border border-[#D4AF37]/30' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Forward</span>
              </button>
              <button
                onClick={() => setInputMode('url')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  inputMode === 'url' 
                    ? 'bg-[#1C2030] text-[#F5D061] shadow border border-[#D4AF37]/30' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Link2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Article / Video URL</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>No login needed for claim submissions</span>
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-3">
            <div className="relative">
              <textarea
                value={claimInput}
                onChange={(e) => setClaimInput(e.target.value)}
                placeholder={
                  inputMode === 'whatsapp'
                    ? 'Paste WhatsApp forward here (e.g., "IIT Baba is dead...", "UNESCO declared national anthem best...", "Free recharge link...")'
                    : inputMode === 'url'
                    ? 'Paste URL of article, tweet, YouTube video, or news report to examine...'
                    : 'Paste claim text, headline, or rumor here for evidence inspection...'
                }
                rows={4}
                className="w-full bg-[#0C0E16]/90 border border-slate-800 rounded-2xl p-4 text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 placeholder-slate-500 transition-all resize-none font-sans"
              />

              {claimInput && (
                <button
                  onClick={() => setClaimInput('')}
                  className="absolute top-3 right-3 text-xs text-slate-400 hover:text-white bg-slate-800/80 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Sample Prompts */}
            <div className="space-y-1.5">
              <div className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                <span>Try curated viral investigations:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_INPUTS.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSample(sample)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-[#1C2030] border border-slate-800 hover:border-[#D4AF37]/40 text-slate-300 hover:text-[#F5D061] transition-all flex items-center gap-1.5"
                  >
                    <span>{sample.label}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#D4AF37]" />
                <span>We evaluate factual assertions, not character judgements.</span>
              </div>

              <button
                onClick={() => handleInvestigate()}
                disabled={!claimInput.trim() || isInvestigating}
                className="w-full sm:w-auto gold-button px-7 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isInvestigating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>Cross-Checking Evidence Desk...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-black" />
                    <span>Investigate Evidence Desk</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Live Investigation Pipeline Animation */}
          {isInvestigating && (
            <div className="mt-6 p-5 rounded-2xl bg-[#0B0D15] border border-[#D4AF37]/30 space-y-4 animate-pulse">
              <div className="flex items-center justify-between text-xs text-[#F5D061]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
                  <span className="font-semibold uppercase tracking-wider">Multi-Stage Evidence Investigation</span>
                </div>
                <span className="font-mono text-slate-400">Step {investigationStep} of 4</span>
              </div>

              <div className="space-y-2">
                <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-3 transition-all ${
                  investigationStep >= 1 ? 'bg-slate-900/90 border-[#D4AF37]/40 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}>
                  <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">01</span>
                  <span>Extracting named entities, timeline assertions & claims from submission...</span>
                </div>

                <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-3 transition-all ${
                  investigationStep >= 2 ? 'bg-slate-900/90 border-[#D4AF37]/40 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}>
                  <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">02</span>
                  <span>Performing reverse source archaeology: tracking first observed timestamp & domains...</span>
                </div>

                <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-3 transition-all ${
                  investigationStep >= 3 ? 'bg-slate-900/90 border-[#D4AF37]/40 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}>
                  <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">03</span>
                  <span>Cross-checking official bureaus (PIB, court bulletins, peer-reviewed registries, verified statements)...</span>
                </div>

                <div className={`p-2.5 rounded-lg border text-xs flex items-center gap-3 transition-all ${
                  investigationStep >= 4 ? 'bg-slate-900/90 border-[#D4AF37]/40 text-slate-200' : 'bg-slate-950/40 border-slate-900 text-slate-600'
                }`}>
                  <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">04</span>
                  <span>Assessing consensus, detecting conflicting assertions & formatting responsible Truth Card...</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Investigation Results & Evidence Desk */}
      {currentClaim && !isInvestigating && (
        <div id="investigation-result" className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          
          {/* Main Verdict Card */}
          <div className="gold-subtle-box rounded-3xl p-6 sm:p-8 border-2 relative overflow-hidden shadow-2xl" style={{ borderColor: getVerdictDetails(currentClaim.verdict).borderColor }}>
            
            {/* Top row: Category, Origin, Verified At */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 font-mono text-slate-300">
                  ID: {currentClaim.id}
                </span>
                <span>•</span>
                <span className="text-[#F5D061] font-medium">{currentClaim.category}</span>
                <span>•</span>
                <span>Circulating on: {currentClaim.platformOrigin}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Verified: {new Date(currentClaim.verifiedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Verdict Hero Banner */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-1.5 rounded-xl border text-sm sm:text-base font-black tracking-wider uppercase font-cinzel flex items-center gap-2 ${getVerdictDetails(currentClaim.verdict).badgeClass}`}>
                    {currentClaim.verdict === 'SUPPORTED' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {currentClaim.verdict === 'FALSE' && <XCircle className="w-5 h-5 text-rose-400" />}
                    {currentClaim.verdict === 'MISLEADING' && <AlertTriangle className="w-5 h-5 text-amber-400" />}
                    {currentClaim.verdict === 'UNVERIFIED' && <HelpCircle className="w-5 h-5 text-slate-400" />}
                    {currentClaim.verdict === 'OUTDATED' && <Clock className="w-5 h-5 text-purple-400" />}
                    <span>{getVerdictDetails(currentClaim.verdict).label}</span>
                  </div>

                  {/* Confidence meter badge */}
                  <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs flex items-center gap-1.5">
                    <span className="text-slate-400">Confidence:</span>
                    <span className="font-mono font-bold text-[#F5D061]">{currentClaim.confidenceScore}%</span>
                  </div>
                </div>

                <div className="text-sm text-slate-300 italic">
                  "{getVerdictDetails(currentClaim.verdict).shortDesc}"
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Claim: “{currentClaim.claimText}”
                </h2>
              </div>

              {/* Action Buttons: Share Truth Card & WhatsApp debunker */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <button
                  onClick={() => onOpenTruthCard(currentClaim)}
                  className="gold-button px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Share2 className="w-4 h-4 text-black" />
                  <span>Generate Truth Card</span>
                </button>

                <button
                  onClick={copyWhatsAppText}
                  className="px-4 py-2.5 rounded-xl bg-[#121520] hover:bg-[#1A1E2E] border border-[#D4AF37]/30 text-xs font-semibold text-slate-200 hover:text-[#F5D061] flex items-center justify-center gap-2 transition-all"
                >
                  {hasCopiedText ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied WhatsApp Debunk!</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Copy WhatsApp Message</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Core Rationale & SarlaYash Cardinal Rule Notice */}
            <div className="p-4 rounded-2xl bg-[#0B0D15] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F5D061]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Executive Investigation Finding</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">
                {currentClaim.investigationSummary}
              </p>
              
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/50">
                <span className="italic">
                  Rule: Never label a claim false merely because no evidence was found. Every verdict requires verified sourcing.
                </span>
                <span className="font-mono text-slate-400 hidden sm:inline">Signed by SarlaYash Editorial Board</span>
              </div>
            </div>

            {/* Responsible Takeaway Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-xs text-slate-200 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#F5D061] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#F5D061] mr-1.5">Responsible Sharing Advice:</span>
                <span>{currentClaim.responsibleTakeaway}</span>
              </div>
            </div>

          </div>

          {/* Evidence Desk Subcomponent */}
          <EvidenceDesk 
            claim={currentClaim} 
            onOpenCorrection={onOpenCorrection}
          />

        </div>
      )}

      {/* 5 Standards Quick Reference Grid */}
      <div className="max-w-4xl mx-auto pt-6 border-t border-slate-800/80 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>Our 5 Strict Evidence Standards</span>
          </h3>
          <span className="text-xs text-slate-400">Zero trial-by-social-media</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {Object.values(VERDICTS).map((v) => (
            <div 
              key={v.key}
              className="p-3.5 rounded-2xl bg-[#0D0F18] border border-slate-800/90 hover:border-[#D4AF37]/30 transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black tracking-wider uppercase font-cinzel" style={{ color: v.color }}>
                  {v.label}
                </span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: v.color }}></span>
              </div>
              <p className="text-[11px] text-slate-300 leading-normal">
                {v.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
