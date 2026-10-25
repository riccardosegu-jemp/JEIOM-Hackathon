import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export const EconomicsCalculator: React.FC = () => {
  const [userCount, setUserCount] = useState<number>(300);
  const economics = coachData.economics;

  // Real formula from strategy/04-prezzi-funnel-CAC-LTV.md:
  // Coach = userCount * 35 € * 12
  // Aula = userCount * 800 € (average of 600-1000 €)
  const coachAnnualCost = userCount * 35 * 12;
  const classroomAnnualCost = userCount * 800;
  const netSavings = classroomAnnualCost - coachAnnualCost;
  const savingsPct = Math.round((netSavings / classroomAnnualCost) * 100);

  return (
    <section id="prezzi" className="py-16 md:py-24 bg-paper border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="label text-ink-muted">Modello di business & prezzi</span>
          <h2 className="display-l text-ink mt-2 mb-3">
            Prezzi chiari, sostenibilità e ritorno d'investimento
          </h2>
          <p className="lead text-ink-muted">
            420 € a persona l'anno, circa metà dell'aula tradizionale, senza togliere nessuno dalla filiale. Margine lordo solido (70%) e rientro del CAC in meno di 2 mesi.
          </p>
        </div>

        {/* Polished 3 Pricing Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {economics.pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-md border p-6 sm:p-7 flex flex-col justify-between transition-all bg-card ${
                tier.popular
                  ? 'border-campo ring-2 ring-campo shadow-lift'
                  : 'border-line shadow-sm hover:border-line-strong'
              }`}
            >
              <div>
                {/* Header with Title and Optional Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="title text-xl text-ink font-bold">
                    {tier.name}
                  </h3>
                  {tier.popular && (
                    <span className="co-chip co-chip-volt text-xs font-bold">
                      Consigliato
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 my-4">
                  <span className="font-mono font-bold text-4xl sm:text-5xl text-ink tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs font-sans text-ink-muted font-medium">
                    {tier.period}
                  </span>
                </div>

                {/* Seats info */}
                <div className="p-3 rounded-sm bg-sunk/60 text-xs font-mono text-ink mb-4 font-semibold border border-line/60">
                  {tier.seats}
                </div>

                {/* Description */}
                <p className="body text-sm text-ink-muted mb-5 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              {/* Bottom Details & CTA Button */}
              <div className="pt-5 border-t border-line space-y-4">
                <div className="p-3 rounded-sm bg-paper border border-line text-xs font-mono text-volt-text font-bold">
                  {tier.highlight}
                </div>

                <a
                  href="#simulatore"
                  className={`co-btn w-full justify-center text-center ${
                    tier.popular
                      ? 'co-btn-primary'
                      : 'co-btn-secondary'
                  }`}
                >
                  <span>{tier.popular ? 'Prova un role play' : 'Richiedi dettagli'}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Savings Simulator */}
        <div className="rounded-md border border-line bg-card p-6 md:p-8 mb-16 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="label text-ink-muted">Simulatore di risparmio per la banca</span>
            <h3 className="title text-2xl text-ink mt-1 mb-2">
              Calcola il risparmio rispetto all'aula tradizionale
            </h3>
            <p className="small text-ink-muted">
              L'aula tradizionale costa in media 800 € a persona l'anno (forchetta 600-1.000 €), più il costo della filiale scoperta. Coach costa 420 € l'anno (35 €/mese).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Column (7 cols) */}
            <div className="lg:col-span-7 bg-paper p-6 rounded-md border border-line">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="user-slider" className="font-sans font-bold text-sm text-ink">
                  Consulenti di filiale da formare:
                </label>
                <span className="font-mono font-bold text-2xl text-ink">
                  {userCount} <span className="text-xs font-normal text-ink-muted">utenti</span>
                </span>
              </div>

              <input
                id="user-slider"
                type="range"
                min={100}
                max={1000}
                step={25}
                value={userCount}
                onChange={(e) => setUserCount(Number(e.target.value))}
                className="w-full accent-campo cursor-pointer h-2 bg-sunk rounded-pill mb-4"
              />

              <div className="flex justify-between text-xs font-mono text-ink-muted">
                <span>100 utenti</span>
                <span>300 (banca tipo)</span>
                <span>1.000 utenti</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-line text-xs font-sans">
                <div>
                  <span className="text-ink-muted block">Costo stimato aula tradizionale:</span>
                  <span className="font-mono font-bold text-base text-ink line-through opacity-70">
                    {classroomAnnualCost.toLocaleString('it-IT')} € / anno
                  </span>
                </div>
                <div>
                  <span className="text-ink-muted block">Costo licenza annuale Coach:</span>
                  <span className="font-mono font-bold text-base text-campo font-bold">
                    {coachAnnualCost.toLocaleString('it-IT')} € / anno
                  </span>
                </div>
              </div>
            </div>

            {/* Savings Result (5 cols) */}
            <div className="lg:col-span-5 bg-campo text-campo-text p-6 sm:p-7 rounded-md">
              <span className="label text-volt mb-2 block">Risparmio netto stimato</span>
              <div className="font-mono font-bold text-4xl text-white mb-2">
                {netSavings.toLocaleString('it-IT')} €
              </div>
              <p className="small text-campo-text/85 mb-4 leading-relaxed">
                Circa il <span className="text-volt font-bold">{savingsPct}% in meno</span> rispetto ai corsi d'aula esterni. E l'intero canone di Coach può essere rimborsato tramite il conto FBA della banca.
              </p>
              <div className="p-3 bg-white/10 rounded-sm text-xs font-mono text-campo-text/90">
                Zero ore perse in trasferta · Monitoraggio ESMA in tempo reale
              </div>
            </div>
          </div>
        </div>

        {/* 8 Official Metric Cards */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="label text-ink-muted">I numeri chiave</span>
              <h3 className="title text-2xl text-ink mt-1">Metriche convalidate dal modello economico</h3>
            </div>
            <span className="co-chip co-chip-volt text-xs font-bold hidden sm:inline-flex">
              LTV / CAC = 21× (minimo 3×)
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {economics.keyMetrics.map((m, idx) => (
              <div key={idx} className="co-stat p-4 sm:p-5">
                <span className="label text-[11px] text-ink-muted block line-clamp-1">{m.label}</span>
                <div className="font-mono font-bold text-2xl sm:text-3xl text-ink my-2 tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs font-mono text-volt-text font-semibold mb-1">
                  {m.benchmark}
                </div>
                <div className="text-[11px] font-sans text-ink-muted line-clamp-2">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel & Prudent Scenario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Funnel (7 cols) */}
          <div className="lg:col-span-7 bg-card p-6 rounded-md border border-line">
            <span className="label text-ink-muted mb-3 block">Imbuto di conversione a 12 mesi</span>
            <div className="space-y-3">
              {economics.funnel.map((stage, idx) => (
                <div key={idx} className="p-3.5 rounded-sm bg-paper border border-line">
                  <div className="flex items-center justify-between mb-1 text-xs">
                    <span className="font-bold text-ink">{stage.stage}</span>
                    <span className="font-mono font-bold text-campo">
                      {stage.volume} {idx === 3 ? 'banche' : ''} ({stage.conversionRate})
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-muted font-sans">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prudent Scenario Callout (5 cols) */}
          <div className="lg:col-span-5 bg-sunk/60 p-6 rounded-md border border-line flex flex-col justify-between">
            <div>
              <span className="label text-ink-muted mb-2 block">Test di robustezza</span>
              <h4 className="title text-xl text-ink mb-3">
                {economics.prudentScenario.title}
              </h4>
              <p className="small text-ink-muted mb-4 leading-relaxed">
                {economics.prudentScenario.note} Se anche i tempi di firma delle banche dimezzassero le conversioni:
              </p>

              <div className="space-y-2 font-mono text-xs text-ink mb-4">
                <div className="flex justify-between py-1.5 border-b border-line">
                  <span>CAC nello scenario prudente:</span>
                  <span className="font-bold">{economics.prudentScenario.cac}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-line">
                  <span>Rapporto LTV / CAC:</span>
                  <span className="font-bold text-volt-text">{economics.prudentScenario.ltvCac}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-line">
                  <span>Ricavi anno 1:</span>
                  <span className="font-bold">{economics.prudentScenario.revenue}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span>ROI iniziale anno 1:</span>
                  <span className="font-bold text-campo">{economics.prudentScenario.roi}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-card rounded-sm border border-line text-xs text-ink-muted font-sans">
              Anche nel caso peggiore, il modello supera abbondantemente la soglia di sostenibilità di 3x richiesta dal regolamento.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
