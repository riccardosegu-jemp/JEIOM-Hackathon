# Task tracking and versioning: Coach (B2B Landing Page & GTM Platform)

Last updated: Version 1.0.1 (Frontend and Mock Data Architecture Complete)

---

## Task status legend

* `[DONE]`: Task is complete, tested, and production-ready.
* `[IN_PROGRESS]`: Task is actively being built.
* `[MOCKED - PENDING REAL DATA]`: Implemented with realistic mock data, ready for immediate update once the team provides final files.
* `[TODO]`: Queued for execution.

---

## Version 1.0.1 - Architecture, layout, and mock baseline

### Phase 1: Project setup and architectural foundation
* `[DONE]` Analyze hackathon rules and slides ([vibecoding-hackathon.pdf](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/vibecoding-hackathon.pdf)).
* `[DONE]` Draft project requirements and validation rules in [rules.md](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/rules.md).
* `[DONE]` Create versioned task tracker in [task.md](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/task.md).
* `[DONE]` Initialize modern Vite + React + Tailwind CSS project with Lucide icons.
* `[DONE]` Configure 4 visual graphic styles via dynamic switcher in [src/context/ThemeContext.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/context/ThemeContext.tsx):
  1. *Linear Dark Tech*: Cyber-minimalism, slate scuro, neon glow.
  2. *Stripe Corporate*: Enterprise tech chiaro, indigo vivace, card elevate.
  3. *Vercel Monochrome*: Alto contrasto, bianco e nero puro, griglie geometriche.
  4. *Executive Editorial*: Carta calda, ambra scuro, bordi strutturati e navy.
* `[DONE]` Configure 3 frontend view alternatives via dynamic switcher:
  1. *Full Landing*: Esperienza completa di vendita B2B e simulazione.
  2. *Pitch Mode (90s)*: Vista focalizzata sul simulatore live, vista manager e metriche.
  3. *GTM & Financial Hub*: Cruscotto operativo su 50k, canali, imbuto e Fondimpresa.

### Phase 2: Centralized data layer (single source of truth)
* `[DONE]` Build [src/data/mockData.ts](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/data/mockData.ts) decoupling all business logic and copy:
  * `[MOCKED - PENDING REAL DATA]` Product features, 4-step workflow, and enterprise use cases.
  * `[MOCKED - PENDING REAL DATA]` ICP definition (VP Sales & HR Directors in mid-to-large Italian companies).
  * `[MOCKED - PENDING REAL DATA]` Pricing model (Enterprise tier: per-seat / per-month + Fondimpresa grant integration).
  * `[MOCKED - PENDING REAL DATA]` Budget allocation of 50.000 euro broken down line-by-line across 6 items.
  * `[MOCKED - PENDING REAL DATA]` Unit economics: CAC (2.778 €), LTV (36.720 €), LTV/CAC ratio (13.2x >= 3.0x), Initial ROI (+677%), conversion funnel.
  * `[MOCKED - PENDING REAL DATA]` 3 ready-to-publish LinkedIn posts with hooks, full copy, hashtags, and visual prompt.
  * `[MOCKED - PENDING REAL DATA]` 1 short-form video script (45s) for LinkedIn and social ads.
  * `[MOCKED - PENDING REAL DATA]` Fondimpresa execution playbook and B2B partnership proposal.

### Phase 3: Core frontend components
* `[DONE]` [src/components/Navbar.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/Navbar.tsx): Sticky header, theme selector (4 styles), view selector (3 modes), mock status tag, pitch 90s button.
* `[DONE]` [src/components/HeroSection.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/HeroSection.tsx): 5-second value proposition, dual CTAs, above-the-fold unit economics strip.
* `[DONE]` [src/components/WorkflowSteps.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/WorkflowSteps.tsx): Interactive 4-step guide (Carica -> Impara -> Allenati -> Migliora).
* `[DONE]` [src/components/RolePlaySimulator.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/RolePlaySimulator.tsx): Interactive avatar objection handling, instant AI coach feedback, and 5-skill scorecard.
* `[DONE]` [src/components/ManagerDashboardPreview.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/ManagerDashboardPreview.tsx): Slide 18 replica with live stats, rep breakdown, and real CSV/Excel download.
* `[DONE]` [src/components/IndustriesSection.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/IndustriesSection.tsx): Slide 19 replica with 6 industries and 4 use cases.
* `[DONE]` [src/components/GtmStrategySection.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/GtmStrategySection.tsx): 5 levers (Slide 7) and dedicated Fondimpresa playbook (Slide 11).
* `[DONE]` [src/components/BudgetSection.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/BudgetSection.tsx): 50.000 euro exact allocation table, visual progress bars, rationale, and stop rules.
* `[DONE]` [src/components/EconomicsCalculator.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/EconomicsCalculator.tsx): 8 official cards, funnel, customer ROI slider, and North Star metric.
* `[DONE]` [src/components/SocialContentSection.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/SocialContentSection.tsx): 3 ready-to-publish LinkedIn posts with copy button and 45s video script.
* `[DONE]` [src/components/PitchDrawer.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/PitchDrawer.tsx): 90-second countdown stopwatch and timed cues with section jump links.
* `[DONE]` [src/components/Footer.tsx](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/components/Footer.tsx).

### Phase 4: Production verification and quality tests
* `[DONE]` Test 1: Mobile responsive test across 390px (iPhone viewport tested via headless DevTools).
* `[DONE]` Test 2: 5-second clarity test verified on hero headline and subtitle.
* `[DONE]` Test 3: Math verification (budget sum === 50.000 euro; LTV / CAC = 13.2x >= 3.0x; ROI formula (+677%) confirmed by subagent audit).
* `[DONE]` Test 4: Complete copy validation (zero placeholder text, 3 full posts and complete video script).
* `[DONE]` Test 5: Production build execution (`npm run build` completed in 7.26s with code 0).
* `[DONE]` Test 6: Dev server running locally at `http://127.0.0.1:3000/`.

---

## Version 1.1.0 - Ingestion of real team data
* `[DONE]` Ingest real ICP, company target, and value proposition from strategy files.
* `[DONE]` Ingest real budget allocation lines (50.000 euro across 9 items).
* `[DONE]` Ingest real marketing channels, sponsor agreements (Salone dei Pagamenti ABI), and FBA partnership terms.
* `[DONE]` Ingest real team pricing tiers (35 euro/seat/month, setup 5k, pilot 10k) and unit metrics (CAC 12.500 euro, LTV 264.600 euro, LTV/CAC 21x, ROI +323%).
* `[DONE]` Update [src/data/mockData.ts](file:///c:/Users/ricca/Documents/Riccardo/Antigravity/JEIOM-Hackathon/src/data/mockData.ts) and transition tags from `MOCKED` to `VERIFIED`.

---

## Version 1.2.0 - Production readiness and code cleanup
* `[DONE]` Dead code elision: removed unused views (`PitchModeView.tsx`, `GtmHubView.tsx`).
* `[DONE]` Context cleanup: removed obsolete `ThemeContext.tsx` and unused imports.
* `[DONE]` Component cleanup: removed orphaned `PitchDrawer.tsx` and unreachable state in `App.tsx`.
* `[DONE]` Import cleanup: pruned 28 unused imports across 10 components.
* `[DONE]` Compiler hardening: enabled `noUnusedLocals` and `noUnusedParameters` in `tsconfig.json`.
* `[DONE]` Assets reorganization: migrated root `video e immagini/` into `public/media/` (`avatar-giulia.mp4`, `avatar-giulia.jpg`).
* `[DONE]` Feature integration: connected real avatar video to `RolePlaySimulator.tsx` with fallback support.
* `[DONE]` SEO and meta tags: configured OpenGraph, Twitter card, theme color, and semantic metadata in `index.html`.
* `[DONE]` Performance optimization: removed redundant `@import` font rule in `index.css`.
* `[DONE]` Tooling: added `npm run lint` typecheck script to `package.json`.
* `[DONE]` Formatting compliance: normalized all en-dashes and em-dashes to standard hyphens across the entire repo.
* `[DONE]` Verification: validated build with `npm run lint` and `npm run build` (exited code 0).
