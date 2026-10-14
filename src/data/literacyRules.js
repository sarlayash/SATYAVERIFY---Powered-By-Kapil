// SarlaYash Digital Literacy Manifesto & Ethical Verification Principles
// SATYAVERIFY — Powered by Kapil

export const PLATFORM_PRINCIPLES = {
  coreMotto: 'We verify claims, not attack people.',
  visionStatement: 'A public-interest digital literacy platform designed to examine evidence, unpack viral rumors, and foster responsible discourse—never to declare individuals guilty or innocent based on sensational posts.',
  guidingTenets: [
    {
      number: '01',
      title: 'Analyze Claims, Not Personalities',
      desc: 'We examine verifiable assertions, timestamps, documents, and physical records. Character assassination and trial-by-social-media have no place in responsible verification.'
    },
    {
      number: '02',
      title: 'Absence of Proof is Not Proof of Falsity',
      desc: 'A claim must NEVER be labelled FALSE merely because no supporting evidence has yet been found. When evidence is inconclusive or undisclosed, the honest verdict is UNVERIFIED.'
    },
    {
      number: '03',
      title: 'Every Verdict Demands an Audit Trail',
      desc: 'No conclusion without primary citations, direct quotations, publication dates, and explicit timestamps. Readers deserve to see the evidence desk, not just a binary score.'
    },
    {
      number: '04',
      title: 'Democratize Literacy, Guard Editorial Publishing',
      desc: 'Anyone can submit a claim or flag an error without friction or forced logins. But final truth verdicts require certified reviewer vetting to prevent platforms from being weaponized for smear campaigns.'
    },
    {
      number: '05',
      title: 'Compassionate Debunking',
      desc: 'When sharing corrections in family and community groups, we provide polite, evidence-grounded cards that clarify facts without shaming or humiliating the sender.'
    }
  ]
};

export const DIGITAL_LITERACY_CHECKLIST = [
  {
    id: 'step-1',
    title: 'The Emotional Reflex Pause',
    question: 'Does this message provoke immediate fury, panic, or ecstatic vindication?',
    guidance: 'Disinformation is engineered to hijack amygdala responses. If a forward demands immediate forward before you can think, treat it with 10x suspicion.'
  },
  {
    id: 'step-2',
    title: 'The Date & Origin Test',
    question: 'Is there a specific date, or vague words like "Yesterday", "From tomorrow", or cropped screenshots?',
    guidance: 'Notice how old circulars from 2020 get cropped and recirculated in 2026. Real news reports specify precise calendar dates and institutional bodies.'
  },
  {
    id: 'step-3',
    title: 'The Primary Source Challenge',
    question: 'Can you find this announcement on a recognized official portal (.gov.in, .nic.in, verified press bureau)?',
    guidance: 'If a message says "Supreme Court just ordered..." but Supreme Court registry or PTI has no notice, it is virtually always a fabrication.'
  },
  {
    id: 'step-4',
    title: 'Domain URL Inspection',
    question: 'Does the website address end in strange extensions like .xyz, .top, .buzz, or random numbers?',
    guidance: 'Fraudulent schemes imitate government or banking sites using suspicious top-level domains to steal credentials and OTPs.'
  },
  {
    id: 'step-5',
    title: 'The Responsible Clarifier Response',
    question: 'How do I tell my family WhatsApp group that their forward is untrue?',
    guidance: 'Never call them stupid or gullible. Share the SatyaVerify Truth Card with the calm phrasing: "Hey, looked into this and verified with official press records—this actually turns out to be an old rumor from 2020. Sharing the source breakdown here!"'
  }
];

export const THE_FIVE_VERDICTS = [
  {
    verdict: 'SUPPORTED',
    color: '#10B981',
    meaning: 'Reliable, corroborated primary evidence confirms the claim.',
    example: 'ISRO ground test announcements backed by official technical press releases.'
  },
  {
    verdict: 'FALSE',
    color: '#EF4444',
    meaning: 'Reliable evidence directly contradicts the assertion.',
    example: 'Death hoaxes of public figures who are actively alive and verified in person.'
  },
  {
    verdict: 'MISLEADING',
    color: '#F59E0B',
    meaning: 'The claim mixes facts with distorted context, selective quotes, or flawed logic.',
    example: 'Claiming lemon water cures viral diseases because lemon has Vitamin C.'
  },
  {
    verdict: 'UNVERIFIED',
    color: '#94A3B8',
    meaning: 'Available public evidence is insufficient to substantiate or dispute the claim.',
    example: 'Corporate press release claiming a proprietary internal algorithm cut wait times by 40% without peer review.'
  },
  {
    verdict: 'OUTDATED',
    color: '#A855F7',
    meaning: 'The statement was factually accurate when uttered, but subsequent events have altered the reality.',
    example: 'Circulating pandemic emergency lockdown circulars years after their expiration.'
  }
];
