# SATYAVERIFY — Powered by Kapil
### *A Public-Interest Digital Literacy & Claim Verification Platform for SarlaYash*

> **Our Inviolable Principle:** *“We verify claims, not attack people.”*  
> Inspired by and positioned alongside [VerifyMate.ai](https://verifymate.ai/).

---

## 🏛️ Executive Positioning
Unlike social media mobs that declare people guilty or innocent based on viral outrage, **SATYAVERIFY** positions fact-checking as a **public-interest digital literacy tool**. 

For example, when a rumor breaks stating *"IIT Baba is dead,"* the platform:
1. Identifies the named subject and verifies their living status via district magistrates and in-person broadcasts.
2. Traces the origin back to an unverified clickbait YouTube video that harvested condolences for ad clicks.
3. Cross-examines official press bureaus (e.g. PIB, verified ashram livestreams, accredited news agencies).
4. Explains precisely what the evidence establishes.
5. Emits a **Truth Card** that enables family members and group members to de-escalate rumor propagation politely and compassionately.

A claim is **never labelled false merely because no evidence has been found**. Every verdict requires an explanation, supporting citations, and a verifiable timestamp.

---

## 🧭 The 4-Step Core User Journey

1. **01 Submit a Claim:**  
   Paste WhatsApp forwards, news headlines, social media posts, URLs, or screenshots with **zero forced login friction**.
2. **02 Investigate the Evidence:**  
   Multi-stage automated and editorial pipeline: entity extraction, first-seen timestamp archaeology, official gazette checks, and conflict detection.
3. **03 Get a Verdict:**  
   Evidence-backed status, confidence percentage, direct quotes, and explicit documentation of unresolved questions.
4. **04 Share Responsibly:**  
   Generate high-resolution Truth Cards (1:1 feed or 9:16 story), 1-click WhatsApp-formatted polite debunking text, and permalinks with QR codes.

---

## ⚖️ The 5 Fact-Checking Verdicts

| Verdict | Standard & Color Code | Meaning |
|---|---|---|
| **SUPPORTED** | 🟢 Emerald / Gold | Reliable, corroborated primary evidence confirms the claim. |
| **FALSE** | 🔴 Crimson | Reliable evidence directly contradicts the assertion. |
| **MISLEADING** | 🟡 Saffron / Amber | Omits critical context, distorts timeline, or misquotes selectively. |
| **UNVERIFIED** | ⚪ Slate / Silver | Inconclusive or undisclosed evidence. *Never assumed false!* |
| **OUTDATED** | 🟣 Violet / Bronze | Was factually accurate at origin, but subsequent events altered reality. |

---

## 🚀 Key Features in Version 1.0

- 🔍 **Interactive Claim Checker:** Live multi-stage investigation simulation and instant semantic parsing.
- 📂 **The Evidence Desk:** Direct source URLs, publication dates, confidence ratings, and discrepancy logs.
- 🚨 **Viral Claim Alerts:** Live transmission monitor tracking high-velocity claims spreading on WhatsApp & Telegram.
- 🛡️ **Community Corrections Desk:** Open public submission form for citizens to log new evidence or correct errors into the public ledger.
- 🎴 **Shareable Truth Card Generator:** High-resolution 2x PNG card export using `html-to-image`, custom aspect ratios, and WhatsApp copy format.
- 📚 **Public Fact-Check Library:** Searchable by keyword, topic, and verdict with permanent audit & revision ledgers.
- 🔐 **Reviewer & Editorial Gatekeeping:** Dual-tier architecture ensuring ordinary citizens submit freely without accounts, while public library publishing requires signed reviewer validation to prevent weaponized defamation.
- 📖 **The 5 Satyavachans Literacy Guide:** Practical educational checklist to help citizens dissect sensational forwards before hitting "Forward".

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 with bespoke Obsidian & Metallic Gold branding (`#090A0F`, `#D4AF37`, `#F5D061`)
- **Graphics Export:** `html-to-image` for high-fidelity client-side PNG card generation
- **Micro-interactions:** `lucide-react` icons and `canvas-confetti`
- **Recommended Deployment:** Static frontend via GitHub Pages / Firebase Hosting; lightweight API or Firebase Data Connect / Cloud Functions for persistent community submissions.

---

## 💻 Running the App Locally

```bash
# 1. Clone or navigate to the project directory
cd "C:\Users\LC\.gemini\antigravity\scratch\satyaverify"

# 2. Install dependencies (already installed)
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

---

*SATYAVERIFY — Powered by Kapil • SarlaYash Digital Literacy Foundation*
