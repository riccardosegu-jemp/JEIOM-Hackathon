import React from 'react';
import { coachData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Play, Calculator, CheckCircle2, ShieldCheck, ArrowRight, Zap, Building2, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { hero } = coachData;

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 bg-[var(--paper)] text-[var(--ink)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--line)] bg-[var(--card)] text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--volt-text)]" />
            <span className="font-mono text-[var(--ink)]">{hero.eyebrow}</span>
            <span className="text-[var(--ink-muted)] font-mono text-[11px] hidden sm:inline">
              · Banche 500–3.000 dipendenti
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.05] mb-6 text-[var(--ink)]">
            {hero.titleMain}{' '}
            <span className="inline-block px-2 rounded-md bg-[var(--volt)] text-[var(--on-volt)]">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--ink-muted)] max-w-3xl mx-auto leading-relaxed mb-8 font-sans">
            {hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#simulatore"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--volt)] text-[var(--on-volt)] font-semibold text-sm hover:brightness-95 transition-all shadow-md"
            >
              <Play className="w-4 h-4 fill-current" />
              {hero.primaryCta}
            </a>
            <a
              href="#economics"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--sunk)] font-semibold text-sm transition-all"
            >
              <Calculator className="w-4 h-4 text-[var(--volt-text)]" />
              {hero.secondaryCta}
            </a>
          </div>

          {/* Problem Numbers (from LEGGIMI.md) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
            {hero.problemNumbers.map((prob, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] text-center shadow-sm">
                <div className="font-mono font-bold text-2xl sm:text-3xl text-[var(--ink)] mb-1">{prob.num}</div>
                <div className="text-xs font-semibold text-[var(--ink)] mb-0.5">{prob.label}</div>
                <div className="text-[11px] text-[var(--ink-muted)]">{prob.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Above-the-fold Quick Stats Strip */}
        <div className="p-5 rounded-3xl border border-[var(--line)] bg-[var(--card)] grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)] shadow-sm">
          <div className="p-2 text-center">
            <div className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
              <Users className="w-3.5 h-3.5 text-[var(--volt-text)]" />
              ICP Primario
            </div>
            <div className="font-bold text-sm sm:text-base text-[var(--ink)]">Banche 500–3.000 dipendenti</div>
            <div className="text-xs text-[var(--ink-muted)] mt-0.5">50 banche target in lista ABM</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              Leva Finanziamento
            </div>
            <div className="font-bold text-sm sm:text-base text-[var(--volt-text)]">100% Fondo FBA</div>
            <div className="text-xs text-[var(--ink-muted)] mt-0.5">Fondo Banche Assicurazioni (Costo: 0€)</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-1">Rapporto LTV / CAC</div>
            <div className="font-bold text-sm sm:text-base text-[var(--volt-text)]">21×</div>
            <div className="text-xs text-[var(--ink-muted)] mt-0.5">Soglia minima regola: 3×</div>
          </div>

          <div className="p-2 text-center pt-4 lg:pt-2">
            <div className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-1">ROI Iniziale Anno 1</div>
            <div className="font-bold text-sm sm:text-base text-[var(--pista-text)]">+323 %</div>
            <div className="text-xs text-[var(--ink-muted)] mt-0.5">Prudente (2 clienti): +160%</div>
          </div>
        </div>
      </div>
    </section>
  );
};
