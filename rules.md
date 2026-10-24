# Project rules and requirements: Vibecoding Hackathon

This document defines the technical, business, and strategic requirements for the production-ready deliverable of the Vibecoding Hackathon, based on the official guidelines in [vibecoding-hackathon.pdf](slides/vibecoding-hackathon.pdf).

---

## 1. Hackathon parameters and constraints

* **Time limit**: 2 hours to build (strategy, financial model, production web app, and assets).
* **Delivery mechanism**: Live URL pasted into the official team spreadsheet before the timer expires.
* **Pitch constraints**: 1 minute and 30 seconds timed presentation. The pitch starts directly on the live website and goes straight to metrics, unit economics, and distribution.
* **Scope rule**: Choose exactly one product (Coach B2B or Not Home B2C). Do not combine or build both.

---

## 2. Technical and web application requirements

The deliverable must be a production-ready, deployed web application.

### Hosting and deployment
* The project must be deployed to a public URL (e.g. Vercel, Netlify, or similar cloud hosting).
* Zero broken links, zero console errors, fast initial load time (< 2 seconds).

### Responsive and mobile-first design
* The interface must be completely optimized for mobile viewports (smartphone screens), as the evaluation explicitly tests opening the link on a mobile device.
* Navigation, buttons, interactive modules, and text typography must be touch-friendly without overflow or layout shifts.

### The 5-second value test
* The above-the-fold hero section must communicate the exact product offering and core benefit within 5 seconds of landing.
* No vague taglines; the value proposition must be explicit, concrete, and tied directly to the ICP.

### Interactive demo and simulator
* **For Coach (B2B)**:
  * Interactive landing page with clear CTA (request demo, ROI audit).
  * Interactive simulation module showing the 4 steps: upload procedure, AI voice coach briefing, video avatar role-play with objections, and manager scoring analytics dashboard.
  * Embedded interactive ROI and savings calculator for HR and sales executives.
* **For Not Home (B2C)**:
  * Interactive web app demo simulating the mobile user experience.
  * Functional audio guide preview with player controls (play, pause, progress bar) split into 3 chapters (history, visual description, reflection).
  * Route builder / time planner adapting to user interests, live crowd levels, and weather.

### Architecture guidelines
* Clean, modern component structure (React / Next.js / Vite + Tailwind CSS or standalone high-performance HTML5/Tailwind bundle).
* Semantic HTML5 markup, accessible color contrast, and production asset bundling.

---

## 3. Go-to-market and channel requirements

The distribution plan must combine both digital and physical levers targeting the same ICP.

### Digital levers
* Organic social strategy: platform selection with explicit justification (e.g. LinkedIn for B2B; TikTok and Instagram for B2C; Reddit for travel discovery).
* Paid media strategy: specific ad channels (Meta Ads, LinkedIn Ads, or Google Search), target CPM/CPC assumptions, and clear stop conditions (kill criteria if CAC exceeds target).

### Physical levers
* Tangible point-of-sale, event, or partner touchpoints:
  * For B2B: industry congresses, executive roundtables, direct high-value mail packages, or partnership through training funds (e.g. Fondimpresa).
  * For B2C: QR code placement in boutique hotels and Airbnbs, tourism board collaboration, local travel agency desks, or physical flyers at transit hubs.
* All physical initiatives must feed directly into the digital funnel via trackable links or dedicated QR codes.

### Partnerships and agreements
* At least one structured B2B or distribution partnership detailing:
  * Target partner identity.
  * Mutual value exchange (what we offer vs. what they receive).
  * Timing and execution roadmap.

---

## 4. Content and asset requirements

All marketing and social collateral must be fully produced and included inside the web application or accessible via a dedicated showcase section.

### Social posts ready to publish
* Minimum of 3 complete social media posts.
* Each post must include:
  * Target platform.
  * Complete, non-placeholder copy (hooks, body, call to action, hashtags).
  * Creative asset visual concept or production-ready image/mockup.
  * Target audience segment.

### Video production assets
* Minimum of 1 complete short-form video script (TikTok, Reels, or LinkedIn video).
* Must contain scene-by-scene visual instructions, on-screen text, audio/voiceover copy, and exact timings (30 to 60 seconds).

---

## 5. Financial model and unit economics requirements

The business plan must operate within a strict virtual budget of 50.000 euro.

### Budget allocation rules
* Exactly 50.000 euro distributed across categorized line items (e.g. paid ads, creator collaborations, physical touchpoints, tech tools, sales enablement).
* The sum of all line items must equal exactly 50.000 euro without discrepancies.

### Core economic metrics
* **ICP (Ideal Customer Profile)**: detailed persona specification, location, pain points, and a plan to locate 10 qualified prospects tomorrow.
* **Value proposition**: single, high-impact sentence contrasting against current market alternatives.
* **Pricing structure**: defined price point, billing cycle (monthly/annual subscription or per-transaction), and pricing tiers.
* **Funnel conversion milestones**: calculated conversion rates across the full funnel:
  1. Impressions / reach
  2. Clicks / visits
  3. Trial / demo / lead capture
  4. Closed paying customers
* **CAC (Customer Acquisition Cost)**: total marketing and sales expenditure divided by total new paying customers.
* **LTV (Lifetime Value)**: average gross margin generated per customer over their lifecycle.
  * Mandatory rule: LTV must be at least 3x CAC (LTV/CAC >= 3.0).
* **Initial ROI**: calculated as `(Net revenue generated - 50.000 euro) / 50.000 euro`, expressed as a percentage.
* **North Star metric**: one primary leading KPI reviewed every Monday morning to determine business growth.
* **Hypothesis transparency**: every metric not derived from an empirical source must be explicitly marked as an hypothesis.

---

## 6. Verification and test suite

Before final submission, the deliverable must pass this 6-point verification test:

### Test 1: Mobile responsive test
* Open the deployment URL on an actual smartphone or mobile device emulator (375px and 414px width).
* Verify typography hierarchy, CTA touch targets, media aspect ratios, and zero horizontal scroll.

### Test 2: The 5-second clarity test
* Show the above-the-fold screen to an external viewer or fresh evaluator.
* Confirm they can state what the product does and who it is for within 5 seconds.

### Test 3: The "Ready to publish tomorrow" test
* Inspect all social media posts and video scripts.
* Confirm there is no "Lorem Ipsum", placeholder text, or incomplete copy. Every post must be ready for immediate publication.

### Test 4: Financial sanity and budget balance test
* Sum all budget line items: total must equal exactly 50.000 euro.
* Check metric consistency: verify `LTV >= 3 * CAC`.
* Verify that ROI formula is correctly applied: `(Revenue - 50.000) / 50.000`.

### Test 5: Channel motivation test
* Confirm that both digital and physical acquisition channels address the exact same ICP persona.
* Verify each channel includes a specific rationale explaining why it was chosen over alternatives.

### Test 6: Timed 90-second pitch dry-run
* Rehearse the presentation with a hard stopwatch timer set to 1 minute and 30 seconds.
* The pitch structure must immediately open the live web app, showcase the interactive product demo, present the distribution strategy, and conclude on the unit economics (CAC, LTV, ROI).
