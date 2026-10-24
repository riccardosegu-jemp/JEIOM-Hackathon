import React from 'react';
import { coachData } from '../data/mockData';
import { Play, Calculator, ArrowRight, Zap, Building2, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { hero } = coachData;

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-paper text-ink border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill border border-line bg-card text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-volt-text" />
            <span className="font-mono text-ink">{hero.eyebrow}</span>
            <span className="text-ink-muted font-mono text-[11px] hidden sm:inline border-l border-line pl-2 ml-1">
              Banche 500–3.000 dipendenti
            </span>
          </div>

          {/* Headline: Huge, Bold, and Impactful Font */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] font-display font-extrabold tracking-[-0.04em] leading-[0.93] mb-6 text-ink">
            {hero.titleMain}{' '}
            <span className="co-mark inline-block px-3 py-1 rounded-sm shadow-sm font-extrabold">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="lead text-ink-muted max-w-3xl mx-auto leading-relaxed mb-8">
            {hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#simulatore"
              className="w-full sm:w-auto co-btn co-btn-primary shadow-md"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#prezzi"
              className="w-full sm:w-auto co-btn co-btn-secondary"
            >
              <Calculator className="w-4 h-4 text-volt-text" />
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

          {/* Problem Numbers (from LEGGIMI.md) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
            {hero.problemNumbers.map((prob, idx) => (
              <div key={idx} className="co-stat p-5 text-center">
                <div className="font-mono font-bold text-3xl sm:text-4xl text-ink mb-1.5">{prob.num}</div>
                <div className="text-xs font-bold text-ink mb-1">{prob.label}</div>
                <div className="text-[11px] text-ink-muted font-sans">{prob.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Above-the-fold Quick Stats Strip */}
        <div className="p-5 rounded-md border border-line bg-card grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-line shadow-sm max-w-5xl mx-auto">
          <div className="p-2 text-center">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-volt-text" />
              ICP Primario
            </div>
            <div className="font-bold text-sm sm:text-base text-ink">Banche 500–3.000 dipendenti</div>
            <div className="text-xs text-ink-muted mt-0.5">50 banche target in lista ABM</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-volt-text" />
              Leva Finanziamento
            </div>
            <div className="font-bold text-sm sm:text-base text-volt-text">100% Fondo FBA</div>
            <div className="text-xs text-ink-muted mt-0.5">Fondo Banche Assicurazioni (Costo: 0€)</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider mb-1">Rapporto LTV / CAC</div>
            <div className="font-bold text-sm sm:text-base text-volt-text font-mono">21×</div>
            <div className="text-xs text-ink-muted mt-0.5">Soglia minima regola: 3×</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-wider mb-1">ROI Iniziale Anno 1</div>
            <div className="font-bold text-sm sm:text-base text-pista-text font-mono">+323 %</div>
            <div className="text-xs text-ink-muted mt-0.5">Prudente (2 clienti): +160%</div>
          </div>
        </div>
      </div>
    </section>
  );
};
