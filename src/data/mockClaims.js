// Mock Database of Evidence-Based Claims for SATYAVERIFY (SarlaYash Digital Literacy Initiative)
// Principles: We verify claims, not attack people. No claim is false merely for lack of evidence.

export const VERDICTS = {
  SUPPORTED: {
    key: 'SUPPORTED',
    label: 'SUPPORTED',
    shortDesc: 'Reliable evidence supports the claim.',
    color: '#10B981', // Emerald
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    badgeClass: 'bg-emerald-950/80 text-emerald-400 border-emerald-500/50',
    icon: 'CheckCircle2',
    rationalePrompt: 'Primary documents, verified official statements, or multiple corroborating reports confirm the factual assertions.'
  },
  FALSE: {
    key: 'FALSE',
    label: 'FALSE',
    shortDesc: 'Reliable evidence directly contradicts the claim.',
    color: '#EF4444', // Red
    bgColor: 'rgba(239, 68, 68, 0.12)',
    borderColor: 'rgba(239, 68, 68, 0.4)',
    badgeClass: 'bg-rose-950/80 text-rose-400 border-rose-500/50',
    icon: 'XCircle',
    rationalePrompt: 'Direct contradiction established by primary records, official clarifications, or forensic source debunking.'
  },
  MISLEADING: {
    key: 'MISLEADING',
    label: 'MISLEADING',
    shortDesc: 'The claim omits critical context or creates an inaccurate impression.',
    color: '#F59E0B', // Amber
    bgColor: 'rgba(245, 158, 11, 0.12)',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    badgeClass: 'bg-amber-950/80 text-amber-400 border-amber-500/50',
    icon: 'AlertTriangle',
    rationalePrompt: 'Contains a grain of truth but distorts timeline, quotes selectively, or conflates distinct events to mislead.'
  },
  UNVERIFIED: {
    key: 'UNVERIFIED',
    label: 'UNVERIFIED',
    shortDesc: 'Available evidence is insufficient to determine the truth.',
    color: '#94A3B8', // Slate / Silver
    bgColor: 'rgba(148, 163, 184, 0.12)',
    borderColor: 'rgba(148, 163, 184, 0.4)',
    badgeClass: 'bg-slate-900/80 text-slate-300 border-slate-600/50',
    icon: 'HelpCircle',
    rationalePrompt: 'IMPORTANT: A claim is never labelled false merely because no evidence has been found. When evidence is inconclusive, it remains UNVERIFIED.'
  },
  OUTDATED: {
    key: 'OUTDATED',
    label: 'OUTDATED',
    shortDesc: 'The information was once accurate but is no longer current.',
    color: '#A855F7', // Violet
    bgColor: 'rgba(168, 85, 247, 0.12)',
    borderColor: 'rgba(168, 85, 247, 0.4)',
    badgeClass: 'bg-purple-950/80 text-purple-400 border-purple-500/50',
    icon: 'Clock',
    rationalePrompt: 'Historic advisory or outdated regulation recirculated without the current governing legal or medical status.'
  }
};

export const MOCK_CLAIMS = [
  {
    id: 'sv-2026-120',
    claimText: 'Viral social media posts claim actor Tiger Shroff was "shot dead" or "critically injured in the ICU" after a drive-by shooting in Juhu, with conspiracy theories calling it a promotional movie stunt.',
    canonicalSubject: 'Tiger Shroff Juhu Drive-by Shooting & ICU / PR Stunt Claims',
    targetPerson: 'Tiger Shroff (Actor)',
    category: 'Public Figures',
    platformOrigin: 'WhatsApp Forwards, YouTube Clickbait & X (Twitter)',
    firstObserved: '2026-10-18T19:30:00Z',
    verifiedAt: '2026-10-19T10:00:00Z',
    verdict: 'MISLEADING',
    confidenceScore: 99,
    investigationSummary: 'While a serious, genuine drive-by shooting did occur on the evening of Sunday, October 18, 2026 near Pushpa Narsee Park in Juhu targeting the vehicle carrying Tiger Shroff as he left a football match, viral claims that the actor is "critically injured in the ICU", "dead", or that the incident was a "staged movie publicity stunt" are completely misleading and false. Tiger Shroff escaped direct bullet hits, sustaining only minor glass abrasions. Tragically, his driver (bullet wound to hand) and a passerby were injured. Mumbai Police Crime Branch registered an FIR for Attempted Murder (BNS) and the Arms Act, and tracked down and arrested all three motorcycle-borne shooters in Kota, Rajasthan while attempting to flee. Both Mumbai Police and hospital bulletins confirm the actor is medically stable and out of danger.',
    evidenceDesk: {
      originalSource: 'Sensational YouTube live streams with siren sound effects and fake hospital ward graphics, combined with cynical social media posts dismissing real gun violence as a marketing gimmick.',
      officialClarification: 'Joint Commissioner of Police (Crime), Mumbai Police, confirmed live ammunition was fired, 3 shooters were arrested in Kota (Rajasthan), and Tiger Shroff is medically safe.',
      sources: [
        {
          name: 'Mumbai Police Crime Branch Official Press Conference',
          date: '2026-10-19',
          type: 'Law Enforcement Briefing',
          trustRating: 'A+ (Primary Law Enforcement)',
          url: 'https://mumbaipolice.gov.in/press/juhu-firing-arrests',
          quote: 'We have arrested all three shooters from Kota, Rajasthan following an interstate chase. Real firearms were discharged at the vehicle. The actor escaped bullet injury, while his driver and a passerby are receiving medical treatment. This was a grave criminal act, not any promotional activity.'
        },
        {
          name: 'Kokilaben Dhirubhai Ambani Hospital Bulletin',
          date: '2026-10-19',
          type: 'Medical Bulletin',
          trustRating: 'A+ (Direct Hospital Authority)',
          url: 'https://kokilabenhospital.com/bulletin/actor-outpatient-clearance',
          quote: 'Patient was examined for minor superficial abrasions caused by shattered glass fragments. Vital signs normal, no penetrating trauma. Discharged under security protocol.'
        },
        {
          name: 'India Today Crime Bureau',
          date: '2026-10-19',
          type: 'Accredited Journalism',
          trustRating: 'A (National News Desk)',
          url: 'https://indiatoday.in/movies/bollywood/story/tiger-shroff-firing-juhu-mumbai-police-arrests',
          quote: 'Tiger Shroff firing incident: Mumbai Crime Branch tracks suspects across state lines; actor safe, police probing potential extortion angles.'
        },
        {
          name: 'The Quint Fact Check Desk',
          date: '2026-10-19',
          type: 'Independent Fact Check',
          trustRating: 'A (IFCN Certified)',
          url: 'https://thequint.com/news/india/fact-check-tiger-shroff-shooting-rumours',
          quote: 'Fact Check: Debunking viral ICU death rumors and PR stunt theories surrounding the Juhu gunfire targeting Tiger Shroff.'
        }
      ],
      conflictingEvidence: 'Online posts attributing claims to Lawrence Bishnoi gang associates are under active cyber and intelligence investigation; no judicial motive has yet been finalized.',
      unresolvedQuestions: 'Mastermind coordination, weapon supply chain, and exact extortion motive remain under active police probe.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-18T23:00:00Z',
        editor: 'Kapil & Crime Desk',
        note: 'Breaking fact-check published confirming actor is alive following viral hospital admission claims.'
      },
      {
        version: '1.1',
        timestamp: '2026-10-19T10:00:00Z',
        editor: 'SarlaYash Editorial Board',
        note: 'Updated with Kota arrest details of 3 shooters and Crime Branch formal briefing dismissing PR stunt rumors.'
      }
    ],
    responsibleTakeaway: 'During active shooting investigations, spreading uncorroborated ICU death claims or branding real gun violence as a "movie stunt" endangers public safety and trivializes grave crimes. Rely strictly on verified police press briefings.',
    shareCount: 76500,
    tags: ['Tiger Shroff', 'Juhu Attack', 'Crime Branch', 'Mumbai Police', 'Drive-by Shooting', 'Bollywood', 'Public Figures']
  },
  {
    id: 'sv-2026-118',
    claimText: 'Viral image mimicking a front-page Hindi/English daily newspaper clipping claims that Cockroach Janta Party (CJP) founder Abhijeet Dipke passed away following clashes during Delhi protests.',
    canonicalSubject: 'Abhijeet Dipke CJP Protests Death Hoax Clipping',
    targetPerson: 'Abhijeet Dipke (Founder, Cockroach Janta Party)',
    category: 'Public Figures',
    platformOrigin: 'WhatsApp Forwards, X (Twitter) & Telegram Channels',
    firstObserved: '2026-10-15T12:00:00Z',
    verifiedAt: '2026-10-16T14:30:00Z',
    verdict: 'FALSE',
    confidenceScore: 99,
    investigationSummary: 'The viral graphic resembling a legitimate newspaper report announcing the death of Cockroach Janta Party (CJP) founder Abhijeet Dipke is entirely fabricated. Delhi Police issued an official clarification and cyber advisory confirming that Dipke is alive, physically safe, and in good health, cautioning users against spreading forged clippings intended to trigger public panic. Dipke subsequently conducted live video addresses on his verified social handles and spoke with national media.',
    evidenceDesk: {
      originalSource: 'A digitally manipulated graphic imitating the masthead layout of a leading national daily with warped typography, circulated anonymously on Telegram channels before jumping to X.',
      officialClarification: 'Delhi Police Cyber Cell and Central District police issued a formal public debunking stating Dipke is safe and active, with an FIR lodged for forgery and malicious dissemination of false information.',
      sources: [
        {
          name: 'Delhi Police Cyber Cell Official Advisory',
          date: '2026-10-16',
          type: 'Law Enforcement Clarification',
          trustRating: 'A+ (Primary Law Enforcement)',
          url: 'https://delhipolice.gov.in/cybercell/advisory-fake-clippings',
          quote: 'Social media reports circulating a forged newspaper clipping regarding the alleged demise of Abhijeet Dipke are false. The person is safe and well. Citizens are requested not to share fake screenshots.'
        },
        {
          name: 'Times of India / IndiaTimes Fact Check',
          date: '2026-10-16',
          type: 'Accredited Fact Check',
          trustRating: 'A (National News Desk)',
          url: 'https://timesofindia.indiatimes.com/fact-check/cjp-abhijeet-dipke-death-clipping-debunk',
          quote: 'Fact Check: Fabricated newspaper clipping falsely claims Cockroach Janta Party convenor Abhijeet Dipke died in Delhi.'
        },
        {
          name: 'BOOM Fact Check Desk',
          date: '2026-10-16',
          type: 'Independent Fact Check',
          trustRating: 'A (IFCN Certified)',
          url: 'https://boomlive.in/fact-check/abhijeet-dipke-cjp-fake-newspaper-death-hoax',
          quote: 'Visual forensic examination of the clipping reveals misaligned fonts, absent bylines, and a counterfeit volume/issue number.'
        }
      ],
      conflictingEvidence: 'None from accredited sources. Only anonymous aggregator handles and parody accounts reposted the fabricated clipping.',
      unresolvedQuestions: 'Cyber Cell tracing the offshore VPN endpoints utilized to upload the initial edited masthead image.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-16T10:00:00Z',
        editor: 'Kapil & Fact Check Desk',
        note: 'Initial emergency debunking published following Delhi Police statement.'
      },
      {
        version: '1.1',
        timestamp: '2026-10-16T14:30:00Z',
        editor: 'SarlaYash Editorial Board',
        note: 'Added visual typography forensic analysis from independent fact-check desks.'
      }
    ],
    responsibleTakeaway: 'Newspaper clippings with blurred headers and missing datelines are a common tool of disinformation. Before forwarding sensational death reports, verify with police bulletins or direct newsroom archives.',
    shareCount: 28400,
    tags: ['Abhijit Dipke', 'CJP', 'Cockroach Janta Party', 'Death Hoax', 'Delhi Police', 'Public Figures']
  },
  {
    id: 'sv-2026-119',
    claimText: 'Viral videos across Instagram and Facebook featuring Abhijeet Dipke ask citizens to scan a phone QR code to send donations to the Cockroach Janta Party (CJP) legal defense fund.',
    canonicalSubject: 'CJP & Abhijeet Dipke Fake QR Code Donation Deepfakes',
    targetPerson: 'Abhijeet Dipke & CJP Movement',
    category: 'Social Media Scams',
    platformOrigin: 'Instagram Reels, Facebook Ads & WhatsApp Links',
    firstObserved: '2026-10-16T08:00:00Z',
    verifiedAt: '2026-10-17T11:00:00Z',
    verdict: 'FALSE',
    confidenceScore: 98,
    investigationSummary: 'The circulating videos soliciting funds via QR codes are AI-generated deepfakes created by imposter accounts to harvest financial contributions from unsuspecting supporters. Independent audio-visual forensic analysis conducted by The Quint’s WebQoof and BOOM confirmed the lip-sync and voice track were synthesized using AI voice-cloning tools. The authentic Cockroach Janta Party movement has issued warnings that it does not solicit funds via QR codes or unverified third-party pages.',
    evidenceDesk: {
      originalSource: 'Blue-tick verified imposter page "Abhijeet.dipke.update" and multiple newly created Facebook advertising handles posting synthetic video snippets with payment UPI QR overlays.',
      officialClarification: 'Abhijeet Dipke publicly clarified via his verified accounts that he does not operate a public Facebook page and has never authorized any QR code donation drives.',
      sources: [
        {
          name: 'The Quint (WebQoof) Deepfake Forensic Desk',
          date: '2026-10-17',
          type: 'Deepfake Forensics',
          trustRating: 'A (IFCN Certified)',
          url: 'https://thequint.com/news/webqoof/cjp-abhijeet-dipke-ai-donation-scam-fact-check',
          quote: 'Spectral voice analysis and facial landmark drift confirm the donation appeal video was synthetically generated using off-the-shelf generative AI voice models.'
        },
        {
          name: 'BOOM Live Fact Check',
          date: '2026-10-17',
          type: 'Fact Check Desk',
          trustRating: 'A (IFCN Certified)',
          url: 'https://boomlive.in/fact-check/cjp-donation-scam-fake-facebook-page',
          quote: 'Imposter pages with compromised verification badges were running paid campaigns targeting Gen-Z youth with fake UPI QR codes.'
        },
        {
          name: 'CyberPeace Foundation Alert',
          date: '2026-10-17',
          type: 'Cyber Advisory',
          trustRating: 'A+ (Cyber Security Agency)',
          url: 'https://cyberpeace.org/alerts/ai-qr-code-political-scam',
          quote: 'Fraud advisory on coordinated AI financial scam exploiting viral political movements.'
        }
      ],
      conflictingEvidence: 'None. The UPI accounts linked in the QR codes resolved to private merchant entities unrelated to any registered trust or civic body.',
      unresolvedQuestions: 'Takedown request pending with Meta regarding fraudulent advertising accounts using stolen verified badges.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-17T11:00:00Z',
        editor: 'Kapil & Cyber Desk',
        note: 'Comprehensive cyber fraud advisory published with deepfake forensic indicators.'
      }
    ],
    responsibleTakeaway: 'Never scan payment QR codes embedded in social media video appeals without independently verifying the beneficiary registered account with official banking portals.',
    shareCount: 19800,
    tags: ['CJP', 'Abhijit Dipke', 'Deepfake', 'AI Scam', 'QR Code Fraud', 'Cyber Safety']
  },
  {
    id: 'sv-2026-081',
    claimText: 'Viral social media posts claim that "IIT Baba" (spiritual ascetic with an engineering degree) has passed away in his ashram.',
    canonicalSubject: 'IIT Baba Life Status Rumor',
    targetPerson: 'IIT Baba (Alok Kumar)',
    category: 'Public Figures',
    platformOrigin: 'WhatsApp Forwards & X (Twitter)',
    firstObserved: '2026-10-12T14:30:00Z',
    verifiedAt: '2026-10-14T09:15:00Z',
    verdict: 'FALSE',
    confidenceScore: 98,
    investigationSummary: 'The widely circulating claim that IIT Baba has died is false. The subject is alive and well, appearing in live video confirmations on official social channels and giving an in-person interview to regional correspondents on October 13, 2026. The rumor originated from an unverified clickbait YouTube thumbnail misconstruing a condolence post for a different ashram disciple.',
    evidenceDesk: {
      originalSource: 'Sensationalist YouTube channel "Bharat Live News Daily" which published an unverified video with a black-and-white portrait thumbnail on Oct 11, 2026.',
      officialClarification: 'District Magistrate Office & Ashram General Secretary released a joint signed notice on Oct 13, 2026 confirming health and routine activities.',
      sources: [
        {
          name: 'Press Information Bureau (PIB) Fact Check / Regional Desk',
          date: '2026-10-13',
          type: 'Official Clarification',
          trustRating: 'A+ (High Authority)',
          url: 'https://pib.gov.in/factcheck/iit-baba-rumor-debunk',
          quote: 'Reports circulating across messaging apps claiming the demise of the spiritual leader known colloquially as IIT Baba are completely baseless and untrue. Local administration has verified his wellbeing in person.'
        },
        {
          name: 'The Hindu National Newsroom',
          date: '2026-10-13',
          type: 'Independent Reporting',
          trustRating: 'A (Reputable Media)',
          url: 'https://thehindu.com/news/national/iit-baba-clarifies-death-hoax',
          quote: 'IIT Baba addressed devotees in Varanasi on Sunday evening, dismissing rumors of his illness: "I am in sound health; beware of deceptive forwards designed to harvest clicks."'
        },
        {
          name: 'Varanasi Ashram Official Channel',
          date: '2026-10-12',
          type: 'Direct Primary Source',
          trustRating: 'A (Direct Video Evidence)',
          url: 'https://youtube.com/watch?v=ashram-live-oct13',
          quote: 'Live evening discourse broadcast showing the ascetic conducting prayers on October 12, 2026 at 18:00 IST.'
        }
      ],
      conflictingEvidence: 'None from credible newsrooms. Only automated aggregator blogs re-published the initial fabricated video claim without primary sourcing.',
      unresolvedQuestions: 'Investigation is pending with cyber police regarding the monetary monetization network behind the specific YouTube channel that generated the false graphic.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-13T10:00:00Z',
        editor: 'Kapil (Chief Reviewer - SarlaYash)',
        note: 'Initial emergency notice issued based on Ashram video broadcast and district magistrate confirmation.'
      },
      {
        version: '1.1',
        timestamp: '2026-10-14T09:15:00Z',
        editor: 'SarlaYash Editorial Desk',
        note: 'Added secondary corroboration from national print journalists and updated confidence index to 98%.'
      }
    ],
    responsibleTakeaway: 'Do not forward condolence messages without corroborating with reputable newsrooms or official state press bureaus. Slander and death hoaxes cause severe distress to families and followers.',
    shareCount: 14200,
    tags: ['IIT Baba', 'Death Hoax', 'YouTube Clickbait', 'Public Figures']
  },
  {
    id: 'sv-2026-044',
    claimText: 'WhatsApp message states: "UNESCO has just declared the Indian National Anthem as the best national anthem in the world."',
    canonicalSubject: 'UNESCO National Anthem Award Rumor',
    targetPerson: 'N/A (Institutional Claim)',
    category: 'Society & Culture',
    platformOrigin: 'WhatsApp Forward (Recurrent since 2008)',
    firstObserved: '2008-09-01T00:00:00Z',
    verifiedAt: '2026-10-01T11:00:00Z',
    verdict: 'FALSE',
    confidenceScore: 100,
    investigationSummary: 'UNESCO does not rank, adjudicate, or award "Best National Anthem" competitions for any nation. UNESCO spokespersons have repeatedly confirmed that no such competition or proclamation exists in their mandate.',
    evidenceDesk: {
      originalSource: 'Chain email originating around 2008, resurfacing seasonally on Independence Day and Republic Day.',
      officialClarification: 'UNESCO official media liaisons have formally dismissed the claim multiple times over the past decade.',
      sources: [
        {
          name: 'UNESCO Official Spokesperson Statement',
          date: '2012-06-14',
          type: 'Official Institution',
          trustRating: 'A+ (Direct Agency)',
          url: 'https://unesco.org/en/clarifications-anthems',
          quote: 'We are aware of circulating emails claiming UNESCO declared the Indian anthem the best. UNESCO does not organize or sanction any contest comparing or rating national anthems.'
        },
        {
          name: 'India Today Fact Check',
          date: '2024-08-15',
          type: 'Independent Fact Check',
          trustRating: 'A (IFCN Signatory)',
          url: 'https://indiatoday.in/fact-check/unesco-indian-anthem-debunk',
          quote: 'A 16-year-old internet hoax resurfaces with identical wording every festive cycle. UNESCO has no such ranking category.'
        }
      ],
      conflictingEvidence: 'None. Every formal archive check with the United Nations confirms absence of any such ranking or program.',
      unresolvedQuestions: 'None.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-01T11:00:00Z',
        editor: 'Kapil (Chief Reviewer)',
        note: 'Standard canonical entry logged for digital literacy educational repository.'
      }
    ],
    responsibleTakeaway: 'National pride does not require manufactured foreign trophies. Respect Jana Gana Mana on its constitutional and poetic merits rather than fake UNESCO honors.',
    shareCount: 89000,
    tags: ['UNESCO', 'National Anthem', 'WhatsApp Hoax', 'Evergreen']
  },
  {
    id: 'sv-2026-092',
    claimText: 'Government is providing free ₹2,500 monthly smartphone internet vouchers to all college students under "PM Yuva Digital Yojana" via an unofficial link.',
    canonicalSubject: 'PM Yuva Digital Yojana Voucher Scam',
    targetPerson: 'Government Scheme / Ministry of Electronics & IT',
    category: 'Social Media Scams',
    platformOrigin: 'Telegram Channels & WhatsApp Links',
    firstObserved: '2026-10-10T08:00:00Z',
    verifiedAt: '2026-10-11T16:20:00Z',
    verdict: 'FALSE',
    confidenceScore: 99,
    investigationSummary: 'The Government of India runs no such scheme called "PM Yuva Digital Yojana" granting cash recharge vouchers through third-party websites. The linked website (.xyz domain) is a phishing portal designed to harvest student mobile numbers and OTPs.',
    evidenceDesk: {
      originalSource: 'Phishing domain `pm-digital-recharge-2026.xyz` hosted on offshore bulletproof servers.',
      officialClarification: 'PIB Fact Check flagged the link as an active data theft and phishing campaign targeting youth.',
      sources: [
        {
          name: 'PIB Fact Check Twitter/X Broadcast',
          date: '2026-10-11',
          type: 'Government Alert',
          trustRating: 'A+ (Official Verification)',
          url: 'https://twitter.com/PIBFactCheck/status/184478',
          quote: 'Claim: All students will get ₹2500 free recharge under PM Yuva scheme. Fact: This is a scam. No such scheme is launched by the Ministry. Never enter your details on unofficial domains.'
        },
        {
          name: 'National Cyber Crime Reporting Portal (I4C)',
          date: '2026-10-11',
          type: 'Cyber Advisory',
          trustRating: 'A+ (Law Enforcement)',
          url: 'https://cybercrime.gov.in/advisories/phishing-fake-schemes',
          quote: 'Advisory on fraudulent domain imitating official portals for student monetary aid.'
        }
      ],
      conflictingEvidence: 'None. Legitimate government domains invariably terminate in `.gov.in` or `.nic.in`.',
      unresolvedQuestions: 'Domain registrar takedown underway.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-11T16:20:00Z',
        editor: 'Kapil & Cyber Desk',
        note: 'Immediate public warning card synthesized.'
      }
    ],
    responsibleTakeaway: 'Always inspect the top-level domain. Official central and state government programs will always be on .gov.in or .nic.in portals, never on .xyz, .top, or blogspot links.',
    shareCount: 31000,
    tags: ['Cyber Scam', 'Phishing', 'Gov Schemes', 'OTP Theft']
  },
  {
    id: 'sv-2026-033',
    claimText: 'A medical forward claims that drinking hot lemon water with baking soda destroys 100% of viral cells within 3 hours and renders vaccines redundant.',
    canonicalSubject: 'Hot Lemon Water & Soda Cure Hoax',
    targetPerson: 'N/A (Medical Claim)',
    category: 'Health & Medicine',
    platformOrigin: 'WhatsApp Audio Clip & Text Forward',
    firstObserved: '2026-09-18T10:00:00Z',
    verifiedAt: '2026-09-20T12:00:00Z',
    verdict: 'MISLEADING',
    confidenceScore: 96,
    investigationSummary: 'While lemon contains Vitamin C and baking soda is a mild antacid, neither changes blood pH nor kills systemic viral infections in living tissue. Conflates simple culinary hydration with clinical pharmacology.',
    evidenceDesk: {
      originalSource: 'Spurious audio message attributed falsely to an unnamed "German virology institute".',
      officialClarification: 'World Health Organization (WHO) and Indian Council of Medical Research (ICMR) clinical advisories.',
      sources: [
        {
          name: 'World Health Organization (WHO) Mythbusters',
          date: '2025-04-12',
          type: 'International Health Agency',
          trustRating: 'A+ (Global Authority)',
          url: 'https://who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
          quote: 'There is no scientific evidence that lemon juice or alkaline solutions cure or prevent viral respiratory illnesses. Human blood pH is tightly regulated biologically.'
        },
        {
          name: 'AIIMS New Delhi Faculty Editorial',
          date: '2025-11-05',
          type: 'Academic Clinical Paper',
          trustRating: 'A (Medical Peer Review)',
          url: 'https://aiims.edu/publications/health-misinformation-alkaline-diets',
          quote: 'Dietary intake does not significantly shift intracellular pH to neutralize pathogens. Delaying medical consultation in favor of home remedies poses severe risks.'
        }
      ],
      conflictingEvidence: 'None. Vitamin C supports normal immune function, but that does not constitute an acute anti-viral cure.',
      unresolvedQuestions: 'None.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-09-20T12:00:00Z',
        editor: 'Medical Verification Fellow',
        note: 'Published with peer-reviewed medical references.'
      }
    ],
    responsibleTakeaway: 'Nutrition is valuable for general vitality, but never replace prescribed clinical care with WhatsApp remedies. Consult licensed medical practitioners for acute illnesses.',
    shareCount: 52000,
    tags: ['Health', 'WHO', 'Home Remedies', 'Medical Misinformation']
  },
  {
    id: 'sv-2026-105',
    claimText: 'A circular claims that a private hospital chain in Bengaluru has implemented an experimental AI triage protocol that reduced emergency wait times by 40%.',
    canonicalSubject: 'AI Emergency Triage Clinical Trial',
    targetPerson: 'N/A (Technological Claim)',
    category: 'Science & Tech',
    platformOrigin: 'LinkedIn Post & Tech Blogs',
    firstObserved: '2026-10-05T09:00:00Z',
    verifiedAt: '2026-10-09T14:40:00Z',
    verdict: 'UNVERIFIED',
    confidenceScore: 54,
    investigationSummary: 'Available evidence is insufficient to confirm or deny the claimed 40% reduction. While the hospital has deployed a pilot triage algorithm, no independent peer-reviewed clinical audit, ICMR trial registry entry, or open dataset has been published to substantiate the performance metrics.',
    evidenceDesk: {
      originalSource: 'Marketing press release distributed by an AI startup and reshared by LinkedIn influencers.',
      officialClarification: 'Hospital clinical director confirmed the pilot test is ongoing but cautioned that formal outcome statistics have not been finalized.',
      sources: [
        {
          name: 'Hospital Administration Media Desk',
          date: '2026-10-08',
          type: 'Direct Corporate Statement',
          trustRating: 'B+ (Uncorroborated Corporate Press)',
          url: 'https://hospitalpress.in/ai-pilot-update',
          quote: 'We are currently running a pilot phase in one unit. Preliminary internal metrics are promising, but final audited reports will only be presented next quarter.'
        },
        {
          name: 'Clinical Trials Registry - India (CTRI)',
          date: '2026-10-07',
          type: 'Public Registry Check',
          trustRating: 'A (Official Registry)',
          url: 'https://ctri.nic.in/search?q=ai-triage',
          quote: 'Search returned no registered completed clinical trial with published primary endpoint data matching this specific 40% claim.'
        }
      ],
      conflictingEvidence: 'Internal startup presentation claims 42% speedup; however, independent physicians in the same department report intermittent manual overrides and no net decrease during peak surge hours.',
      unresolvedQuestions: 'Peer-reviewed comparative trial results and patient cohort methodology remain undisclosed.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-09T14:40:00Z',
        editor: 'Kapil & Tech Reviewer',
        note: 'Marked as UNVERIFIED in accordance with our core principle: absence of public proof warrants unverified classification, not an assumption of fraud or falsity.'
      }
    ],
    responsibleTakeaway: 'Distinguish corporate marketing claims from validated clinical trials. Until independent peer-reviewed metrics are published, treat pilot statistics with healthy skepticism.',
    shareCount: 6800,
    tags: ['AI Healthcare', 'Clinical Trials', 'Corporate PR', 'Unverified']
  },
  {
    id: 'sv-2026-018',
    claimText: 'Viral graphic claims that wearing dark blue or black masks in public spaces is strictly prohibited under municipal health bylaws carrying a ₹500 fine.',
    canonicalSubject: 'Municipal Mask Color Penalty Regulation',
    targetPerson: 'Municipal Corporation',
    category: 'Governance & Policy',
    platformOrigin: 'Instagram Story & Facebook Group',
    firstObserved: '2026-09-02T15:00:00Z',
    verifiedAt: '2026-09-04T10:30:00Z',
    verdict: 'OUTDATED',
    confidenceScore: 95,
    investigationSummary: 'The graphic recirculates a temporary municipal advisory issued in April 2020 during the early pandemic surge which discouraged unregulated non-medical multi-layer fashion masks before standardized masks were widely manufactured. That advisory expired in late 2020 and is no longer legally binding or in effect.',
    evidenceDesk: {
      originalSource: 'Screenshot of an old 2020 municipal commissioner notification with the year cropped out.',
      officialClarification: 'Municipal legal department confirmed that no current mask color restrictions or fines exist in 2026.',
      sources: [
        {
          name: 'Municipal Corporation Public Notice Archives',
          date: '2020-04-18',
          type: 'Archived Government Gazette',
          trustRating: 'A+ (Historical Primary Source)',
          url: 'https://mc.gov.in/archives/notices/2020/mask-advisory-04',
          quote: 'Historical advisory from April 2020 noting cotton weave specifications. Sunsets automatically after 90 days.'
        },
        {
          name: 'Municipal Legal Cell Clarification',
          date: '2026-09-03',
          type: 'Current Administrative Response',
          trustRating: 'A+ (Current Authority)',
          url: 'https://mc.gov.in/press/2026/fake-mask-fine-clarification',
          quote: 'Citizens are advised that old 2020 pandemic circulars are being maliciously circulated with modified dates. No fines are being levied regarding mask color.'
        }
      ],
      conflictingEvidence: 'The text was genuinely genuine in 2020 as an advisory, but applying it to 2026 misrepresents current law.',
      unresolvedQuestions: 'None.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-09-04T10:30:00Z',
        editor: 'Governance Editor',
        note: 'Categorized under OUTDATED to distinguish true historical records from modern fabrications.'
      }
    ],
    responsibleTakeaway: 'Always verify the effective date on government circulars. Outdated regulations are often weaponized to generate unneeded civic anxiety.',
    shareCount: 19500,
    tags: ['Outdated Regulation', 'Municipal Law', 'Cropped Screenshot']
  },
  {
    id: 'sv-2026-112',
    claimText: 'ISRO announced the successful ground testing of the semi-cryogenic engine SCE-200 at Mahendragiri propulsion complex.',
    canonicalSubject: 'ISRO SCE-200 Hot Fire Test Announcement',
    targetPerson: 'Indian Space Research Organisation (ISRO)',
    category: 'Science & Tech',
    platformOrigin: 'Official Press Release & Space Tech Fora',
    firstObserved: '2026-10-12T06:00:00Z',
    verifiedAt: '2026-10-12T11:00:00Z',
    verdict: 'SUPPORTED',
    confidenceScore: 100,
    investigationSummary: 'The claim is accurate and verified. ISRO officially confirmed the successful long-duration hot test of the SCE-200 semi-cryogenic engine at the ISRO Propulsion Complex (IPRC), Mahendragiri, releasing video documentation and technical parameters across official portals.',
    evidenceDesk: {
      originalSource: 'ISRO Official Press Release and Department of Space official communique.',
      officialClarification: 'Direct press notification with verified engine telemetry.',
      sources: [
        {
          name: 'ISRO Official Portal (isro.gov.in)',
          date: '2026-10-12',
          type: 'Primary Government Agency',
          trustRating: 'A+ (Primary Agency)',
          url: 'https://isro.gov.in/sce200-successful-hot-test-mahendragiri',
          quote: 'The intermediate ignition test of the SCE-200 semi-cryogenic stage was successfully accomplished for a duration of 150 seconds, meeting all planned parameters.'
        },
        {
          name: 'Press Trust of India (PTI)',
          date: '2026-10-12',
          type: 'Wire Agency Corroboration',
          trustRating: 'A+ (Reputable News Wire)',
          url: 'https://ptinews.com/isro-propulsion-milestone',
          quote: 'ISRO scientists at Mahendragiri celebrated the landmark test marking critical progress toward Next Gen Launch Vehicles.'
        }
      ],
      conflictingEvidence: 'None.',
      unresolvedQuestions: 'Next orbital integration schedule to be announced in Q1 2027.'
    },
    revisionHistory: [
      {
        version: '1.0',
        timestamp: '2026-10-12T11:00:00Z',
        editor: 'Kapil (Chief Reviewer)',
        note: 'Full scientific claim confirmed with direct telemetry documentation.'
      }
    ],
    responsibleTakeaway: 'Genuine scientific milestones are supported by transparent technical briefings and official government gazettes.',
    shareCount: 44000,
    tags: ['ISRO', 'Space Tech', 'Cryogenic Engine', 'Verified Fact']
  }
];

export const VIRAL_ALERTS = [
  {
    id: 'va-tiger-shroff',
    headline: 'Tiger Shroff Juhu Drive-by Shooting: False "Critically Shot in ICU / Movie Stunt" Claims',
    reachIndex: 'High Velocity Breaking Alert (>100k shares)',
    status: 'ACTIVE CRIME PROBE & DEBUNK',
    verdictKey: 'MISLEADING',
    claimId: 'sv-2026-120',
    timestamp: 'Just now (Breaking)',
    alertMessage: 'Genuine shooting occurred near Juhu park; however, actor escaped bullet wounds (minor glass cuts). 3 shooters arrested in Kota, Rajasthan. Police deny PR stunt rumors.',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40'
  },
  {
    id: 'va-cjp-dipke',
    headline: 'Forged Newspaper Clipping Claiming CJP Founder Abhijeet Dipke Died in Protests',
    reachIndex: 'Severe Political Viral Rumor',
    status: 'DEBUNKED BY POLICE',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-118',
    timestamp: '3 hours ago',
    alertMessage: 'Delhi Police officially confirmed newspaper clipping is counterfeit. Dipke is safe and healthy; FIR registered against malicious creators.',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
  },
  {
    id: 'va-cjp-qr',
    headline: 'AI Deepfake Videos Soliciting Cockroach Janta Party (CJP) UPI Donations via QR',
    reachIndex: 'Active Cyber Financial Scam',
    status: 'AI FORENSICS FLAGGED',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-119',
    timestamp: '6 hours ago',
    alertMessage: 'Synthetic voice-cloned video impersonating Abhijeet Dipke asking for QR donations. Authentic CJP does not solicit funds via QR codes.',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
  },
  {
    id: 'va-01',
    headline: 'IIT Baba demise rumors flooding Uttar Pradesh WhatsApp groups',
    reachIndex: 'High Virality (Over 50k forwards in 24h)',
    status: 'DEBUNKED',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-081',
    timestamp: '1 day ago',
    alertMessage: 'Official video and local administration confirm subject is alive and well. Slander and death hoaxes circulate to monetize ads.',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
  },
  {
    id: 'va-02',
    headline: 'Fake "Free Electricity & Solar Subsidy Portal" registration links via SMS',
    reachIndex: 'Critical Scam Alert (Active Cyber Threat)',
    status: 'ACTIVE INVESTIGATION',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-092',
    timestamp: '2 days ago',
    alertMessage: 'Multiple users reporting SMS with non-gov shortlinks asking for bank account linkage. Do not click non-gov domains.',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40'
  },
  {
    id: 'va-04',
    headline: 'UNESCO national anthem audio circulating again before festive season',
    reachIndex: 'Recurrent Evergreen Myth',
    status: 'DOCUMENTED HOAX',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-044',
    timestamp: '3 days ago',
    alertMessage: 'Evergreen myth since 2008. UNESCO does not rank or award anthems.',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
  }
];

export const SAMPLE_INPUTS = [
  {
    label: '“Tiger Shroff shot in Juhu attack”',
    text: 'BREAKING: Bollywood actor Tiger Shroff was shot in the chest and is critically injured in hospital ICU after bike assailants opened fire in Juhu Mumbai. People are saying this might be a PR stunt for his movie.',
    type: 'whatsapp'
  },
  {
    label: '“Abhijit Dipke (CJP) died in Delhi”',
    text: 'A newspaper clipping says Cockroach Janta Party founder Abhijeet Dipke has died during Delhi protests following clashes with police. RIP to the youth leader.',
    type: 'whatsapp'
  },
  {
    label: '“CJP donation video QR code”',
    text: 'Watch this viral video of Abhijeet Dipke asking everyone to scan this QR code to donate ₹500 immediately for Cockroach Janta Party protest fund.',
    type: 'whatsapp'
  },
  {
    label: '“IIT Baba has died in ashram”',
    text: 'BREAKING NEWS: IIT Baba, the famous spiritual engineer guru from Varanasi, has passed away in his ashram today at age 52. Devotees are gathering in large numbers. Share with everyone.',
    type: 'whatsapp'
  },
  {
    label: 'UNESCO National Anthem Claim',
    text: 'UNESCO declared Indian National Anthem Jana Gana Mana as the best national anthem in the world yesterday. A moment of great pride for every Indian! Forward this to at least 10 groups.',
    type: 'whatsapp'
  },
  {
    label: 'PM Free Student Recharge Scam',
    text: 'Govt is giving ₹2,500 free recharge to all Indian students under PM Yuva Digital Yojana. Register your number before midnight here: http://pm-digital-recharge-2026.xyz',
    type: 'sms'
  }
];
