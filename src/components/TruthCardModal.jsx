import React, { useRef, useState } from 'react';
import { 
  X, 
  Download, 
  Share2, 
  MessageSquare, 
  Copy, 
  Check, 
  ShieldCheck, 
  ExternalLink,
  QrCode,
  Sparkles,
  Smartphone,
  Layers
} from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import confetti from 'canvas-confetti';
import { VERDICTS } from '../data/mockClaims';

export default function TruthCardModal({ claim, onClose }) {
  const cardRef = useRef(null);
  const [format, setFormat] = useState('feed'); // 'feed' (square 1:1), 'story' (9:16), 'compact'
  const [isExporting, setIsExporting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  if (!claim) return null;
  const verdictInfo = VERDICTS[claim.verdict] || VERDICTS.UNVERIFIED;
  const shareableUrl = `https://satyaverify.ai/v/${claim.id}`;

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;
    setIsExporting(true);
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: 2,
        backgroundColor: '#090A0F'
      });
      const link = document.createElement('a');
      link.download = `satyaverify-${claim.id}.png`;
      link.href = dataUrl;
      link.click();

      // Trigger polite confetti
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F5D061', '#E5C158', '#FFFFFF']
      });
    } catch (err) {
      console.error('Failed to export image', err);
    } finally {
      setIsExporting(false);
    }
  };

  const copyShareableLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const copyWhatsAppText = () => {
    const text = `🔍 *FACT CHECK BY SATYAVERIFY (Powered by Kapil)*
──────────────────
📌 *Claim:* "${claim.claimText.slice(0, 140)}..."
⚖️ *Verdict:* *${verdictInfo.label}*
📊 *Confidence:* ${claim.confidenceScore}%
──────────────────
💡 *What the Evidence Proves:*
${claim.investigationSummary}

🛡️ *Core Rule:* We verify claims, not attack people.
Read full audit & sources: ${shareableUrl}`;

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#0C0E16] border border-[#D4AF37]/35 rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative my-auto animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[#F5D061]" />
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                Shareable Truth Card
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Generate respectful, evidence-backed graphics for WhatsApp & LinkedIn.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="flex items-center justify-between gap-2 py-3">
          <div className="flex items-center gap-1.5 bg-[#121520] p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setFormat('feed')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                format === 'feed'
                  ? 'bg-[#1C2030] text-[#F5D061] border border-[#D4AF37]/30 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Square (1:1 Feed)
            </button>
            <button
              onClick={() => setFormat('story')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                format === 'story'
                  ? 'bg-[#1C2030] text-[#F5D061] border border-[#D4AF37]/30 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Story / Status (9:16)
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            High-Res 2x PNG Export
          </span>
        </div>

        {/* The Card Render Container */}
        <div className="bg-[#07080D] p-3 sm:p-5 rounded-2xl border border-slate-800 flex justify-center items-center overflow-hidden">
          
          <div
            ref={cardRef}
            className={`w-full bg-gradient-to-b from-[#141724] via-[#0E1019] to-[#08090E] border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden transition-all ${
              format === 'story' ? 'max-w-xs min-h-[500px]' : 'max-w-md min-h-[380px]'
            }`}
            style={{ borderColor: verdictInfo.color }}
          >
            {/* Top Emblem and Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#0C0E16] border border-[#D4AF37]/50 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#F5D061]" />
                  </div>
                  <div>
                    <div className="font-cinzel text-xs font-bold tracking-wider gold-gradient-text">
                      SATYAVERIFY
                    </div>
                    <div className="text-[9px] text-slate-400">Powered by Kapil • SarlaYash</div>
                  </div>
                </div>

                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {claim.id}
                </div>
              </div>

              {/* Verdict Pill */}
              <div className="mt-4 flex items-center justify-between">
                <div 
                  className="px-3.5 py-1 rounded-xl text-xs sm:text-sm font-black font-cinzel tracking-wider uppercase border inline-flex items-center gap-1.5 shadow-md"
                  style={{
                    backgroundColor: verdictInfo.bgColor,
                    color: verdictInfo.color,
                    borderColor: verdictInfo.color
                  }}
                >
                  <span>{verdictInfo.label}</span>
                </div>

                <span className="text-[11px] font-mono font-bold text-[#F5D061]">
                  {claim.confidenceScore}% Confidence
                </span>
              </div>

              {/* Claim Body */}
              <div className="mt-3">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Examined Claim
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-1 line-clamp-3 leading-snug">
                  "{claim.claimText}"
                </p>
              </div>

              {/* Evidence Summary */}
              <div className="mt-3 p-3 rounded-xl bg-[#090B12] border border-slate-800/80">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#F5D061] mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>The Established Evidence</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-4">
                  {claim.investigationSummary}
                </p>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <div>
                <div className="text-slate-300 font-medium">“We verify claims, not attack people”</div>
                <div className="text-slate-400 font-mono text-[9px] mt-0.5">
                  Verified {new Date(claim.verifiedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex items-center gap-1 bg-[#10131E] px-2 py-1 rounded-md border border-slate-800">
                <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono text-[9px] text-slate-300">satyaverify.ai</span>
              </div>
            </div>

          </div>

        </div>

        {/* Action Controls */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            onClick={handleDownloadImage}
            disabled={isExporting}
            className="gold-button py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-black" />
            <span>{isExporting ? 'Generating PNG...' : 'Download PNG Card'}</span>
          </button>

          <button
            onClick={copyWhatsAppText}
            className="py-2.5 px-4 rounded-xl bg-[#121520] hover:bg-[#1A1F2E] border border-emerald-600/40 text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
          >
            {copiedText ? (
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

          <button
            onClick={copyShareableLink}
            className="py-2.5 px-4 rounded-xl bg-[#121520] hover:bg-[#1A1F2E] border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-[#F5D061]" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Web Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
