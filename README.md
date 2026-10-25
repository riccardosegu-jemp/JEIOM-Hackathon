# JEIOM hackathon - Vibecoding Next Leaders

Repository ufficiale contenente la web application, la strategia di go-to-market e i materiali di riferimento per l'hackathon Vibecoding (Next Leaders, 24 ottobre 2026). Prodotto selezionato: Coach (B2B).

> "Costruire un prodotto oggi e facile. La gara e portarlo sul mercato."

---

## Overview

Coach e un formatore AI personale per ogni dipendente aziendale. L'azienda carica procedure o listini; un docente vocale AI la spiega; un avatar video simula clienti e colleghi in un role play interattivo; un coach valuta le competenze in tempo reale e genera analytics per la direzione.

Target primario validato: banche italiane da 500 a 3.000 dipendenti (50 banche target in lista ABM). La formazione e finanziabile al 100% tramite il fondo interprofessionale FBA (Fondo Banche Assicurazioni).

---

## Quickstart & comandi di sviluppo

### Prerequisiti
- Node.js >= 18
- npm

### Comandi disponibili
```bash
# Installazione dipendenze
npm install

# Avvio del server di sviluppo locale (porta 3000)
npm run dev

# Controllo tipi TypeScript e assenza codice morto
npm run lint

# Build di produzione ottimizzata
npm run build

# Anteprima locale della build di produzione
npm run preview
```

---

## Repository structure

La repository e organizzata nel seguente modo:

```text
JEIOM-Hackathon/
├── Coach-brand/                     # Linee guida e documentazione di marca Coach
│   ├── coach.css                    # Classi e stili di riferimento del brand
│   ├── esempi.html                  # Anteprima visiva componenti di marca
│   ├── LEGGIMI.md                   # Guida all'identita verbale e visiva
│   └── logo/                        # File SVG vettoriali ufficiali
├── public/                          # Asset statici serviti alla radice
│   ├── logo/                        # Loghi e favicon del sito
│   └── media/                       # Video e immagini dell'avatar demo
├── slides/                          # Slide ufficiali dell'evento
│   └── vibecoding-hackathon.pdf
├── src/                             # Codice sorgente della web application
│   ├── components/                  # Componenti modulari della landing page
│   │   ├── BudgetSection.tsx        # Tabella interattiva e progress bar del budget da 50k
│   │   ├── EconomicsCalculator.tsx  # Calcolatore ROI, pricing 35 €/mese e unit economics
│   │   ├── Footer.tsx               # Footer di navigazione con crediti e metriche
│   │   ├── GtmStrategySection.tsx   # Strategia account-based e leva Fondo FBA
│   │   ├── HeroSection.tsx          # Hero con proposta di valore e statistiche chiave
│   │   ├── IndustriesSection.tsx    # Personas degli avatar e casi d'uso
│   │   ├── ManagerDashboardPreview.tsx # Cruscotto manager con esportazione CSV/Excel
│   │   ├── Navbar.tsx               # Navigazione responsive e link diretti
│   │   ├── RolePlaySimulator.tsx    # Simulatore interattivo con video avatar e riscontri
│   │   ├── ScoreRing.tsx            # Anello di punteggio SVG animato
│   │   ├── SocialContentSection.tsx # Copy LinkedIn e script video pronti per la pubblicazione
│   │   └── WorkflowSteps.tsx        # Guida interattiva in 4 step (Carica, Impara, Allenati, Migliora)
│   ├── data/
│   │   └── mockData.ts              # Single source of truth per testi, dati e metriche
│   ├── views/
│   │   └── FullLandingView.tsx      # Composizione della landing page completa
│   ├── App.tsx                      # Componente radice dell'applicazione
│   ├── index.css                    # Tailwind CSS e sistema di design Coach
│   └── main.tsx                     # Entry point React 19
├── strategy/                        # Documenti strategici ed economici dettagliati
│   ├── 01-ICP-cliente-ideale.md     # Definizione ICP bancario e regolamentazione ESMA/IVASS
│   ├── 02-budget-50000-euro.md      # Ripartizione analitica del budget e stop rules
│   ├── 03-canali-partnership-distributori.md # Dettaglio canali e accordi FBA
│   └── 04-prezzi-funnel-CAC-LTV.md  # Funnel, metriche unitarie, CAC, LTV e ROI
├── index.html                       # Template HTML con meta tag SEO e font Google
├── package.json                     # Configurazione pacchetti e script
├── rules.md                         # Requisiti e criteri di validazione del deliverable
├── task.md                          # Registro storico delle attivita e rilasci
├── tailwind.config.js               # Configurazione tema e colori Coach
├── tsconfig.json                    # Configurazione TypeScript strict
└── vite.config.ts                   # Configurazione del bundler Vite
```

---

## Strategy & unit economics summary

- **Virtual budget**: esattamente 50.000 euro distribuiti su 9 voci mirate (vendita diretta, eventi ABI, LinkedIn ads mirate, referral partner, demo su misura, colazioni riservate, contenuti, dossier sicurezza DORA e webinar).
- **Target pricing**: 35 euro a utente al mese (minimo 200 utenti) con 5.000 euro di setup e pilot pagato da 10.000 euro (scalato alla firma).
- **Contratto medio banca (300 utenti)**: 126.000 euro all'anno.
- **Margine lordo**: 70%.
- **CAC medio**: 12.500 euro (50.000 euro / 4 banche clienti).
- **LTV per cliente**: 264.600 euro (126.000 euro x 70% x 3 anni).
- **Rapporto LTV / CAC**: 21x (la regola di gara richiede >= 3x).
- **Rientro del CAC**: meno di 2 mesi.
- **ROI anno 1**: +323% (+160% nello scenario prudente con soli 2 clienti).
- **Leva di finanziamento**: 100% coperto dal conto formazione FBA (Fondo Banche Assicurazioni, 0,30% INPS).

---

## Evaluation criteria

I progetti vengono valutati su quattro dimensioni aventi pari peso (25% ciascuna):
- **Funzionamento del sito**: navigabile da mobile, chiaro nella proposta di valore in 5 secondi.
- **Prontezza dei contenuti**: post e video immediatamente pubblicabili e con un copy efficace.
- **Solidita dei numeri**: ICP coerente, unit economics sensati e allocazione dei 50.000 euro precisa.
- **Motivazione dei canali**: scelte digitali e fisiche giustificate e allineate al target di riferimento.

---

## Resources and links

- Piattaforma di riferimento: [vibecoding-hackathon-nl.vercel.app](https://vibecoding-hackathon-nl.vercel.app)
- Slide complete: [slides/vibecoding-hackathon.pdf](slides/vibecoding-hackathon.pdf)
