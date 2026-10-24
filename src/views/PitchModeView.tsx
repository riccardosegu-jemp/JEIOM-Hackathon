import React from 'react';
import { coachData } from '../data/mockData';
import { RolePlaySimulator } from '../components/RolePlaySimulator';
import { ManagerDashboardPreview } from '../components/ManagerDashboardPreview';
import { Timer, Target, DollarSign, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';

export const PitchModeView: React.FC = () => {
  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-paper">
      {/* Top Pitch Banner on Campo */}
      <div className="p-6 sm:p-8 rounded-md bg-campo text-campo-text border border-line flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="co-chip co-chip-volt text-xs">
              <Timer className="w-3.5 h-3.5 text-pista" />
              Modalità pitch · 90 secondi
            </span>
          </div>
          <h1 className="display-l text-white mb-2">
            Coach per il settore bancario
          </h1>
          <p className="body text-campo-text/85 max-w-2xl leading-relaxed">
            «Ogni consulente si allena sulla conversazione vera prima di farla, e voi vedete chi è pronto. A circa metà del costo dell'aula, senza togliere nessuno dalla filiale.»
          </p>
        </div>

        {/* 4 Super Metrics in JetBrains Mono */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto shrink-0 font-mono text-center">
          <div className="p-3 rounded-sm bg-white/10 border border-white/15">
            <div className="text-[11px] text-campo-text/80">Budget GTM</div>
            <div className="text-xl font-bold text-volt">50.000 €</div>
          </div>
          <div className="p-3 rounded-sm bg-white/10 border border-white/15">
            <div className="text-[11px] text-campo-text/80">CAC medio</div>
            <div className="text-xl font-bold text-white">12.500 €</div>
          </div>
          <div className="p-3 rounded-sm bg-white/10 border border-white/15">
            <div className="text-[11px] text-campo-text/80">LTV / CAC</div>
            <div className="text-xl font-bold text-volt">21×</div>
          </div>
          <div className="p-3 rounded-sm bg-white/10 border border-white/15">
            <div className="text-[11px] text-campo-text/80">ROI anno 1</div>
            <div className="text-xl font-bold text-white">+323 %</div>
          </div>
        </div>
      </div>

      {/* Point 1: Live Interactive Role-Play */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="co-chip co-chip-campo text-xs">Punto 1 (Secondi 15–40)</span>
          <span className="text-xs font-mono text-ink-muted">Live demo · Giulia, buyer: richiesta di sconto</span>
        </div>
        <RolePlaySimulator />
      </div>

      {/* Point 2: Manager Dashboard */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="co-chip co-chip-campo text-xs">Punto 2 (Secondi 40–55)</span>
          <span className="text-xs font-mono text-ink-muted">Vista direzione · Tempo di pratica, punteggio e conformità ESMA</span>
        </div>
        <ManagerDashboardPreview />
      </div>

      {/* Point 3: Executive Summary of Strategy & Numbers */}
      <div className="p-6 sm:p-8 rounded-md border border-line bg-card">
        <div className="flex items-center gap-2 mb-2">
          <span className="co-chip co-chip-campo text-xs">Punto 3 (Secondi 55–90)</span>
          <span className="text-xs font-mono text-ink-muted">Numeri convalidati per la giuria</span>
        </div>
        <h2 className="title text-2xl text-ink mb-6">
          Sintesi per la giuria dell'hackathon
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-sm bg-paper border border-line flex flex-col justify-between">
            <div>
              <div className="font-bold text-ink mb-2 flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-campo" />
                Chi compra (ICP bancario)
              </div>
              <p className="text-ink-muted leading-relaxed mb-3">
                50 banche italiane (500–3.000 dipendenti). Decisori: responsabile rete commerciale (vede il problema) e responsabile formazione/HR (gestisce il budget FBA).
              </p>
            </div>
            <div className="text-volt-text font-semibold flex items-center gap-1.5 pt-3 border-t border-line">
              <Landmark className="w-3.5 h-3.5" />
              100% finanziabile con Fondo FBA
            </div>
          </div>

          <div className="p-5 rounded-sm bg-paper border border-line flex flex-col justify-between">
            <div>
              <div className="font-bold text-ink mb-2 flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-campo" />
                Budget 50.000 € (9 voci)
              </div>
              <p className="text-ink-muted leading-relaxed mb-3">
                Vendita diretta 13k€, Eventi ABI Milano 10k€, LinkedIn Ads mirate 7k€, Referral partner FBA 5k€, Demo bancaria 4k€, Colazioni 4k€, Contenuti 3k€, Dossier DORA 3k€, Webinar 1k€.
              </p>
            </div>
            <div className="text-volt-text font-semibold flex items-center gap-1.5 pt-3 border-t border-line">
              <ShieldCheck className="w-3.5 h-3.5" />
              Stop rules su ogni canale
            </div>
          </div>

          <div className="p-5 rounded-sm bg-paper border border-line flex flex-col justify-between">
            <div>
              <div className="font-bold text-ink mb-2 flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-campo" />
                Unit economics & ROI
              </div>
              <p className="text-ink-muted leading-relaxed mb-3">
                35 €/mese a utente (420 €/anno, metà dell'aula). 4 banche chiuse (126k €/anno cad.). CAC 12.500 €, LTV 264.600 €, LTV/CAC 21× (minimo 3×). ROI anno 1: +323%.
              </p>
            </div>
            <div className="text-volt-text font-semibold flex items-center gap-1.5 pt-3 border-t border-line">
              <span>Scenario prudente (2 clienti): LTV/CAC 10,6×</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
