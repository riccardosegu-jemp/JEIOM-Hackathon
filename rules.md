# Project rules and requirements: Coach (B2B AI Training Platform)

This document defines the technical, business, and strategic requirements for the production-ready deliverable of Coach (B2B) for the Vibecoding Hackathon, based on the official guidelines in [vibecoding-hackathon.pdf](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/vibecoding-hackathon.pdf).

---

## 1. Hackathon parameters and constraints

* **Selected product**: Coach (B2B AI Corporate Training Platform).
* **Core value proposition**: Un formatore AI personale per ogni dipendente. L'azienda carica procedure o listini; un docente vocale AI la spiega; un avatar video simula clienti/colleghi in un role play interattivo; un coach valuta le competenze e genera analytics per i manager.
* **Time limit**: 2 hours build phase, followed by a 90-second timed pitch.
* **Delivery mechanism**: Public web application URL deployed on cloud infrastructure (e.g. Vercel) pasted into the official team sheet.
* **Pitch focus**: Begins directly on the live mobile-friendly site, highlighting the product demo, go-to-market channels, 50.000 euro budget allocation, and unit economics (CAC, LTV, ROI).

---

## 2. Technical and web application requirements

The web application must be modern, modular, production-ready, and responsive.

### Architecture and data decoupling
* **Single source of truth data layer**: All strategy texts, budget line items, funnel metrics, and marketing copy must be loaded from a centralized configuration file (e.g., `src/data/mockData.ts`). This guarantees that updating mock data to real data takes seconds without touching component markup.
* **Multiple visual themes / frontend styles**: Support 4 distinct design archetypes accessible via a seamless UI switcher:
  1. *Linear Dark Tech*: Sleek slate backgrounds, subtle glows, enterprise precision.
  2. *Vercel Modern Minimal*: High contrast monochrome, sharp typography, clean grid lines.
  3. *Stripe Vibrant Corporate*: Crisp light background, indigo/violet accents, layered depth.
  4. *Editorial Precision*: Warm off-white canvas, sharp editorial type, structured borders.

### Mobile-first responsive execution
* Must render flawlessly on desktop and mobile viewports (down to 375px width).
* Zero layout overflow, smooth touch navigation, and fast interactive response.

### 5-second clarity test
* The hero section must clearly communicate the target audience (HR, Sales Directors, Training Heads) and the core value proposition within 5 seconds of loading.

### Core interactive modules
1. **Hero & value proposition**: Impactful headline, subtitle, CTAs, and trust metrics.
2. **Interactive 4-step workflow**:
   - Step 1: Upload (listino, procedura, scheda tecnica).
   - Step 2: Impara (docente vocale AI interattivo).
   - Step 3: Allenati (role-play interattivo con avatar video, obiezioni del cliente, gestione sconti).
   - Step 4: Migliora (dashboard analytics per manager con punteggi, tempi di pratica ed esportazione Excel).
3. **Live role-play simulator**: A functional preview where evaluators can trigger a simulated objection (e.g., "Il vostro prezzo è troppo alto") and receive instant AI feedback and score breakdown.
4. **Go-to-market and channel strategy section**: Digital levers (LinkedIn Ads, Outbound) + physical levers (executive roundtables, Fondimpresa partnership) targeting the same ICP.
5. **Budget breakdown (50.000 euro)**: Line-by-line interactive budget table and visual distribution chart summing exactly to 50.000 euro.
6. **Startup unit economics & ROI calculator**: Interactive calculator showing ICP, conversion funnel, CAC, LTV (>= 3x CAC), and ROI on 50.000 euro.
7. **Production-ready marketing assets**: Embedded section with ready-to-publish LinkedIn posts, social video scripts, and downloadable sales one-pager.

---

## 3. Financial and unit economics rules

* **Virtual budget**: Exactly 50.000 euro. Sum of all items must equal 50.000 euro with zero discrepancy.
* **Target unit metrics**:
  * LTV >= 3.0 * CAC.
  * ROI calculation: `(Net Revenue - 50.000) / 50.000`.
  * Funnel stages: Impressions -> Website Visits -> Qualified Leads / Trials -> Signed Enterprise Contracts.
* **Data status tagging**: Every metric must be tagged as either `MOCK` (provisional placeholder) or `VERIFIED` (final team data).

---

## 4. Verification and quality tests

1. **Mobile viewport test**: Flawless rendering on smartphone screens (iPhone / Android).
2. **5-second test**: Evaluator understands who it is for and what it solves in under 5 seconds.
3. **Budget math test**: Line items sum to exactly 50.000 euro.
4. **Economic coherence test**: LTV / CAC >= 3.0.
5. **Asset completeness test**: All social copy and video scripts are fully written without placeholder text.
6. **Pitch 90s check**: Pitch flow can be fully articulated within 90 seconds while displaying the live site.
