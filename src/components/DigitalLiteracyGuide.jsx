import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertOctagon, 
  HelpCircle, 
  Compass, 
  BookOpen, 
  Send, 
  Lightbulb,
  FileCheck,
  Check,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { PLATFORM_PRINCIPLES, DIGITAL_LITERACY_CHECKLIST } from '../data/literacyRules';

export default function DigitalLiteracyGuide({ onJumpToChecker }) {
  const [activeChecklist, setActiveChecklist] = useState('step-1');
  const [quizAnswer, setQuizAnswer] = useState(null);

  const practiceScenarios = [
    {
      id: 'scen-1',
      senderText: 'URGENT: Forwarded as received. All mobile towers are being converted to 6G frequencies tonight from 2 AM to 5 AM. Keep your phones switched off to avoid high-voltage battery radiation. Ministry of Telecom confirmed!',
      question: 'What is the most responsible action before forwarding to family?',
      options: [
        { id: 'a', text: 'Forward immediately just to be safe, because family safety comes first.', correct: false, explanation: 'Forwarding unverified panic messages "just in case" is how panic spreads. Mobile frequencies cannot cause batteries to explode at night.' },
        { id: 'b', text: 'Search the Department of Telecommunications (dot.gov.in) or PIB Fact Check for any official circular.', correct: true, explanation: 'Spot on! Real telecom maintenance orders are published in official gazettes, never exclusively via midnight WhatsApp chain messages.' },
        { id: 'c', text: 'Label the sender a fraud and insult them publicly in the family group.', correct: false, explanation: 'Remember our golden rule: We verify claims, not attack people. Compassionate, evidence-first clarification is far more effective than public humiliation.' }
      ]
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D061] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The SarlaYash Digital Literacy Curriculum</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold silver-gold-text">
          We Verify Claims. <br />
          <span className="gold-gradient-text">We Do Not Attack People.</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The purpose of SATYAVERIFY is public enlightenment, not public shaming. 
          When viral rumors ignite, our duty is to dissect the evidence, identify primary records, 
          and empower citizens to pause before sharing.
        </p>
      </div>

      {/* Exemplar Case Study: The "IIT Baba" Principle */}
      <div className="gold-subtle-box rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono tracking-widest uppercase bg-[#D4AF37]/15 text-[#F5D061] px-2.5 py-0.5 rounded border border-[#D4AF37]/30">
              CASE STUDY 01: THE GOLDEN BENCHMARK
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
              The “IIT Baba is Dead” Rumor Anatomy
            </h3>
          </div>
          <button
            onClick={() => onJumpToChecker('baba')}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#1A1F30] border border-[#D4AF37]/40 text-[#F5D061] text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <span>Inspect Full Evidence Audit</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wide">
              <AlertOctagon className="w-4 h-4" />
              <span>What Toxic Platforms Do</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Turn social post volume into a hasty verdict without calling the subject.</li>
              <li>Brand people frauds or criminals to generate engagement and fury.</li>
              <li>Allow anonymous crowds to cast guilt or innocence based on cropped clips.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>What SATYAVERIFY Does</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Identifies the living individual and checks physical wellbeing with authorities.</li>
              <li>Locates the earliest clickbait YouTube video that harvested condolences.</li>
              <li>Publishes verified ashram video and district administration notices.</li>
              <li>Explains precisely what evidence proves: subject is alive; post is false.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-2xl bg-[#090A0F] border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
          <strong className="text-[#F5D061]">Core Rule:</strong> A rumor does not transform into a verdict merely because thousands of well-meaning citizens have forwarded it. Every verdict must stand upon documented records, verified dates, and transparent accountability.
        </div>
      </div>

      {/* The 5 Guiding Tenets */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Our 5 Guiding Tenets
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Ethical fact-checking standards that protect human dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLATFORM_PRINCIPLES.guidingTenets.map((tenet) => (
            <div
              key={tenet.number}
              className="gold-subtle-box rounded-2xl p-5 border border-slate-800 hover:border-[#D4AF37]/35 transition-all space-y-2"
            >
              <span className="font-mono text-sm font-bold text-[#F5D061] px-2 py-0.5 rounded bg-[#D4AF37]/15">
                {tenet.number}
              </span>
              <h4 className="font-cinzel text-sm font-bold text-white pt-1">
                {tenet.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {tenet.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 5-Step Verification Checklist */}
      <div className="gold-subtle-box rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <span>The 5 Satyavachans: Digital Literacy Checklist</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Ask these five questions before tapping "Forward" in any family or work chat.
          </p>
        </div>

        <div className="space-y-3">
          {DIGITAL_LITERACY_CHECKLIST.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveChecklist(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                activeChecklist === item.id
                  ? 'bg-[#151928] border-[#D4AF37]/50 shadow-lg'
                  : 'bg-[#0B0D15] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#F5D061] flex items-center justify-center font-mono font-bold text-xs">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-100 text-sm">{item.title}</span>
                </div>
                <span className="text-[11px] font-mono text-[#D4AF37]">
                  {activeChecklist === item.id ? 'Active Focus' : 'Tap to expand'}
                </span>
              </div>

              {activeChecklist === item.id && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="font-semibold text-white">
                    Question: "{item.question}"
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans">
                    {item.guidance}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Scenario Quiz */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0F121D] border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#F5D061] uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
          <span>Interactive Practice Simulator</span>
        </div>

        <div className="p-4 rounded-2xl bg-[#090A0F] border border-slate-800 space-y-2">
          <div className="text-[11px] font-mono text-emerald-400">Incoming WhatsApp Forward:</div>
          <p className="text-xs sm:text-sm text-slate-200 italic font-mono bg-slate-900/70 p-3 rounded-xl border border-slate-800">
            "{practiceScenarios[0].senderText}"
          </p>
        </div>

        <div className="text-xs sm:text-sm font-semibold text-white">
          {practiceScenarios[0].question}
        </div>

        <div className="space-y-2">
          {practiceScenarios[0].options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setQuizAnswer(opt)}
              className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3 ${
                quizAnswer?.id === opt.id
                  ? opt.correct
                    ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500 text-rose-300'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <span className="font-mono font-bold uppercase">{opt.id}.</span>
              <div className="space-y-1">
                <div>{opt.text}</div>
                {quizAnswer?.id === opt.id && (
                  <div className="text-[11px] mt-1 pt-1 border-t border-slate-800/60 font-sans">
                    {opt.explanation}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {quizAnswer && (
          <div className="p-3 rounded-xl bg-slate-900/90 border border-[#D4AF37]/30 text-xs text-[#F5D061] flex items-center justify-between">
            <span>{quizAnswer.correct ? '🎉 Excellent! You applied evidence-first digital literacy.' : '💡 Review the guidance above and try another option.'}</span>
            <button
              onClick={() => setQuizAnswer(null)}
              className="text-[11px] underline text-slate-300 hover:text-white"
            >
              Reset
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
