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
    id: 'va-01',
    headline: 'IIT Baba demise rumors flooding Uttar Pradesh WhatsApp groups',
    reachIndex: 'High Virality (Over 50k forwards in 24h)',
    status: 'DEBUNKED',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-081',
    timestamp: '2 hours ago',
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
    timestamp: '35 minutes ago',
    alertMessage: 'Multiple users reporting SMS with non-gov shortlinks asking for bank account linkage. Do not click non-gov domains.',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/40'
  },
  {
    id: 'va-03',
    headline: 'AI Emergency Triage 40% speed claims reshared by health tech influencers',
    reachIndex: 'Moderate (LinkedIn & Tech X)',
    status: 'EVIDENCE INSUFFICIENT',
    verdictKey: 'UNVERIFIED',
    claimId: 'sv-2026-105',
    timestamp: '5 hours ago',
    alertMessage: 'No clinical peer review or ICMR registered trial published yet. Labeled UNVERIFIED under our evidence standards.',
    badgeColor: 'border-slate-500/40 text-slate-400 bg-slate-900/60'
  },
  {
    id: 'va-04',
    headline: 'UNESCO national anthem audio circulating again before festive season',
    reachIndex: 'Recurrent Evergreen Myth',
    status: 'DOCUMENTED HOAX',
    verdictKey: 'FALSE',
    claimId: 'sv-2026-044',
    timestamp: '1 day ago',
    alertMessage: 'Evergreen myth since 2008. UNESCO does not rank or award anthems.',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
  }
];

export const SAMPLE_INPUTS = [
  {
    label: '“IIT Baba has died in ashram” (Rumor)',
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
  },
  {
    label: 'AI Hospital Triage 40% Speedup',
    text: 'Hospital in Bengaluru deploys revolutionary AI triage system that cuts emergency wait time by 40% across all emergency departments.',
    type: 'news'
  },
  {
    label: 'ISRO SCE-200 Engine Test',
    text: 'https://isro.gov.in/press-release/sce-200-successful-hot-test-mahendragiri',
    type: 'url'
  }
];
