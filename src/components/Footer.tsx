import React from 'react';
import { coachData } from '../data/mockData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[var(--line)] bg-[var(--campo)] text-[var(--on-campo)] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--volt)] text-[var(--on-volt)] flex items-center justify-center font-bold font-display">
              C
            </div>
            <div>
              <div className="font-display font-bold text-base text-[var(--on-campo)]">COACH</div>
              <div className="text-[11px] text-[var(--on-campo)]/70">{coachData.meta.payoff} · Hackathon 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[var(--on-campo)]">
              Budget: 50.000 € (9 Voci)
            </span>
            <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[var(--volt)] font-bold">
              LTV/CAC: 21×
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[var(--on-campo)] transition-colors flex items-center gap-1.5"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Inizio</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--on-campo)]/70 gap-4">
          <p>
            Coach B2B · Settore Bancario (500-3.000 dipendenti). Finanziabile con Fondo FBA.
          </p>
          <div className="flex items-center gap-4 font-mono">
            <span>Versione 2.0.0-brand</span>
            <span>•</span>
            <span>LTV/CAC 21× &gt;= 3×</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
