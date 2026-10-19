import React, { useState } from 'react';
import Header from './components/Header';
import ClaimChecker from './components/ClaimChecker';
import PublicLibrary from './components/PublicLibrary';
import ViralAlerts from './components/ViralAlerts';
import DigitalLiteracyGuide from './components/DigitalLiteracyGuide';
import TruthCardModal from './components/TruthCardModal';
import CommunityCorrectionModal from './components/CommunityCorrectionModal';
import ReviewerPortalModal from './components/ReviewerPortalModal';
import ReportViralModal from './components/ReportViralModal';
import Footer from './components/Footer';
import { MOCK_CLAIMS, VIRAL_ALERTS } from './data/mockClaims';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('checker'); // 'checker', 'library', 'alerts', 'literacy'
  const [claims, setClaims] = useState(MOCK_CLAIMS);
  const [alerts, setAlerts] = useState(VIRAL_ALERTS);
  
  // Modals & Active selections
  const [selectedClaimForChecker, setSelectedClaimForChecker] = useState(null);
  const [truthCardModalClaim, setTruthCardModalClaim] = useState(null);
  const [correctionModalClaim, setCorrectionModalClaim] = useState(null);
  const [isReviewerModalOpen, setIsReviewerModalOpen] = useState(false);
  const [isReportViralModalOpen, setIsReportViralModalOpen] = useState(false);
  const [isReviewerMode, setIsReviewerMode] = useState(false);

  // Navigate to checker with a specific claim
  const handleSelectClaim = (claim) => {
    setSelectedClaimForChecker(claim);
    setActiveTab('checker');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleSelectClaimById = (claimId) => {
    const found = claims.find(c => c.id === claimId);
    if (found) {
      handleSelectClaim(found);
    }
  };

  // Handle new community correction
  const handleSubmitCorrection = (correctionData) => {
    setClaims(prev => prev.map(c => {
      if (c.id === correctionData.claimId) {
        const nextVersion = (parseFloat(c.revisionHistory[c.revisionHistory.length - 1].version) + 0.1).toFixed(1);
        return {
          ...c,
          revisionHistory: [
            ...c.revisionHistory,
            {
              version: nextVersion,
              timestamp: correctionData.timestamp,
              editor: `${correctionData.submitterName} (Community Contribution - Verified)`,
              note: `Correction submitted regarding ${correctionData.type}: "${correctionData.explanation.slice(0, 80)}...". Source verified: ${correctionData.sourceUrl}`
            }
          ]
        };
      }
      return c;
    }));
  };

  // Handle new viral alert report
  const handleSubmitViralReport = (report) => {
    const newAlert = {
      id: `va-${Date.now().toString().slice(-4)}`,
      headline: report.headline,
      reachIndex: `${report.forwardFrequency} (${report.region})`,
      status: 'INVESTIGATING INTAKE',
      verdictKey: 'UNVERIFIED',
      timestamp: 'Just now',
      alertMessage: `Reported by citizen via ${report.platform} in ${report.region}. Priority queue assigned to evidence desk.`,
      badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40'
    };
    setAlerts(prev => [newAlert, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#08090E] text-[#E2E4E9] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F9E8A2]">
      
      {/* Active Reviewer Mode Floating Notice */}
      {isReviewerMode && (
        <div className="bg-gradient-to-r from-emerald-950 via-[#101422] to-emerald-950 border-b border-emerald-500/40 py-2 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">Reviewer Privilege Active: Kapil (Chief Reviewer - SarlaYash)</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 hidden sm:inline">Audit trail, editorial signatures, and publishing authorization unlocked.</span>
            </div>
            <button
              onClick={() => setIsReviewerMode(false)}
              className="text-[11px] underline text-emerald-400 hover:text-white"
            >
              Exit to Citizen Mode
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReviewerModal={() => setIsReviewerModalOpen(true)}
        claimCount={claims.length}
        alertCount={alerts.length}
        onOpenSubmit={() => {
          setSelectedClaimForChecker(null);
          setActiveTab('checker');
          window.scrollTo({ top: 350, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'checker' && (
          <ClaimChecker
            onOpenTruthCard={(claim) => setTruthCardModalClaim(claim)}
            onOpenCorrection={(claim) => setCorrectionModalClaim(claim)}
            selectedClaimFromParent={selectedClaimForChecker}
            onResetSelectedClaim={() => setSelectedClaimForChecker(null)}
          />
        )}

        {activeTab === 'library' && (
          <PublicLibrary
            claims={claims}
            onSelectClaim={handleSelectClaim}
            onOpenTruthCard={(claim) => setTruthCardModalClaim(claim)}
          />
        )}

        {activeTab === 'alerts' && (
          <ViralAlerts
            alerts={alerts}
            onSelectClaimById={handleSelectClaimById}
            onOpenReportViral={() => setIsReportViralModalOpen(true)}
          />
        )}

        {activeTab === 'literacy' && (
          <DigitalLiteracyGuide
            onJumpToChecker={(keyword) => {
              const lower = keyword.toLowerCase();
              const matched = claims.find(c => 
                c.claimText.toLowerCase().includes(lower) || 
                c.canonicalSubject.toLowerCase().includes(lower) ||
                (c.tags && c.tags.some(t => t.toLowerCase().includes(lower)))
              );
              if (matched) {
                handleSelectClaim(matched);
              } else {
                setActiveTab('checker');
              }
            }}
          />
        )}
      </main>

      {/* Modals */}
      {truthCardModalClaim && (
        <TruthCardModal
          claim={truthCardModalClaim}
          onClose={() => setTruthCardModalClaim(null)}
        />
      )}

      {correctionModalClaim && (
        <CommunityCorrectionModal
          claim={correctionModalClaim}
          onClose={() => setCorrectionModalClaim(null)}
          onSubmitCorrection={handleSubmitCorrection}
        />
      )}

      {isReviewerModalOpen && (
        <ReviewerPortalModal
          onClose={() => setIsReviewerModalOpen(false)}
          isReviewerMode={isReviewerMode}
          setIsReviewerMode={setIsReviewerMode}
        />
      )}

      {isReportViralModalOpen && (
        <ReportViralModal
          onClose={() => setIsReportViralModalOpen(false)}
          onSubmitViralReport={handleSubmitViralReport}
        />
      )}

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenReviewerModal={() => setIsReviewerModalOpen(true)}
      />

    </div>
  );
}
