import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  BookOpen, 
  AlertCircle, 
  Sparkles, 
  Menu, 
  X, 
  ExternalLink,
  Award,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onOpenReviewerModal,
  claimCount,
  alertCount,
  onOpenSubmit
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'checker', label: 'Claim Checker', icon: Search, badge: 'Live AI + Desk' },
    { id: 'library', label: 'Public Library', icon: BookOpen, count: claimCount },
    { id: 'alerts', label: 'Viral Alerts', icon: AlertCircle, count: alertCount, pulse: true },
    { id: 'literacy', label: 'Digital Literacy', icon: Sparkles }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#08090E]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 transition-all">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-[#12141F] via-[#1C1F2E] to-[#12141F] border-b border-[#D4AF37]/10 py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="font-medium text-slate-300">SarlaYash Public-Interest Platform</span>
            <span className="text-slate-600">•</span>
            <span className="hidden sm:inline italic text-slate-400">“We verify claims, not attack people”</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href="https://verifymate.ai/" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
            >
              Inspired by verifymate.ai <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-mono">v1.2 • Verified Public Desk</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('checker')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1C1E2A] via-[#10121A] to-[#08090E] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg shadow-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all">
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-xl blur-[8px] group-hover:bg-[#D4AF37]/20 transition-all"></div>
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-[#F5D061] relative z-10" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider gold-gradient-text">
                  SATYAVERIFY
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#D4AF37]/15 text-[#F5D061] border border-[#D4AF37]/30 rounded">
                  OFFICIAL
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-tight flex items-center gap-1">
                <span>Powered by</span>
                <span className="text-[#E5C158] font-semibold">Kapil</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">Digital Literacy Hub</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#10131E]/80 p-1.5 rounded-2xl border border-slate-800/80">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
                    isActive
                      ? 'bg-gradient-to-b from-[#24293E] to-[#161A28] text-[#F9E8A2] border border-[#D4AF37]/40 shadow-md shadow-[#D4AF37]/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#F5D061]' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                  {item.count !== undefined && (
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-[#D4AF37]/20 text-[#F5D061]' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.count}
                    </span>
                  )}
                  {item.pulse && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenReviewerModal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-[#F5D061] rounded-xl hover:bg-[#1A1E2C] border border-transparent hover:border-[#D4AF37]/30 transition-all"
              title="Reviewer & Publishing Policy Desk"
            >
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Reviewer Desk</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('checker');
                if (onOpenSubmit) onOpenSubmit();
              }}
              className="gold-button px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg"
            >
              <Search className="w-4 h-4 text-black" />
              <span>Check a Claim</span>
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setActiveTab('checker')}
              className="gold-button px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-black" />
              <span>Verify</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F18] border-b border-[#D4AF37]/25 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'bg-[#1C2030] text-[#F5D061] border border-[#D4AF37]/40'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#F5D061]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined ? (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 font-mono text-slate-400">
                    {item.count}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                )}
              </button>
            );
          })}
          
          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenReviewerModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs text-slate-400 bg-slate-900/60 border border-slate-800"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#D4AF37]" />
                <span>Reviewer & Publishing Governance</span>
              </div>
              <span className="text-[10px] text-[#D4AF37]">Kapil Policy</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
