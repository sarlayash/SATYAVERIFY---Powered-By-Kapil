import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  ExternalLink, 
  Lock, 
  BookOpen, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function Footer({ setActiveTab, onOpenReviewerModal }) {
  return (
    <footer className="mt-20 border-t border-[#D4AF37]/20 bg-[#06070B] text-slate-400 text-xs font-sans">
      
      {/* Top Gold Accent Bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#12141F] border border-[#D4AF37]/40 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#F5D061]" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider gold-gradient-text">
                  SATYAVERIFY
                </span>
                <div className="text-[11px] text-slate-400 font-medium">
                  Powered by <span className="text-[#F5D061] font-semibold">Kapil</span> • SarlaYash Platform
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
              A public-interest digital literacy initiative designed to verify claims with rigorous evidence, 
              never to declare individuals guilty or innocent based on viral posts. 
              Grounded in primary documents, timestamp forensics, and civil discourse.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#0D0F18] border border-slate-800 text-[11px] text-slate-400 leading-normal flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Our Inviolable Principle:</strong> A claim is never labeled false merely because no evidence has been found. Every verdict requires an explanation, supporting citations, and a verifiable timestamp.
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F5D061]">
              Platform Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => { setActiveTab('checker'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Claim Investigation Desk</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('library'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Public Fact-Check Archives</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('alerts'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Viral Transmission Alerts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('literacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>The 5 Satyavachans Literacy Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReviewerModal}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400 hover:text-[#F5D061]"
                >
                  <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>Reviewer & Publishing Desk</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Governance & Inspiration */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#F5D061]">
              Ethical Architecture
            </h4>
            <div className="space-y-2 text-[11px] text-slate-400">
              <p>
                Zero login barriers for ordinary citizen submissions. Publishing permissions restricted to trusted editorial reviewers to prevent platform abuse.
              </p>
              <div className="pt-2">
                <a
                  href="https://verifymate.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline font-medium"
                >
                  <span>Inspired by VerifyMate.ai</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="text-[10px] text-slate-400 pt-1">
                Conforms with non-partisan evidentiary standards and international fact-checking transparency conventions.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <span>SATYAVERIFY — Powered by Kapil</span>
            <span>•</span>
            <span>SarlaYash Digital Literacy Foundation</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Truth with Evidence. Compassion in Discourse.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
