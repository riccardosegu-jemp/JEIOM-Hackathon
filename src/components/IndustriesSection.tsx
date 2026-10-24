import React from 'react';
import { coachData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { Landmark, ShieldCheck, Briefcase, HelpCircle, Users, Sparkles } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const personas = coachData.personas;
  const sectors = coachData.strategy.targetSectors;

  return (
    <section className="py-16 md:py-24 border-t border-[var(--line)] bg-[var(--paper)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--volt-text)] mb-2">
            Slide 19 & Brand · Le Personas degli Avatar
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4 text-[var(--ink)]">
            Per le conversazioni che contano di più
          </h2>
          <p className="text-base text-[var(--ink-muted)]">
            Gli avatar hanno un nome, un carattere e una frase tipica. Un personaggio si ricorda più di una funzione.
          </p>
        </div>

        {/* 5 Avatar Personas from LEGGIMI.md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="p-5 rounded-3xl border border-[var(--line)] bg-[var(--card)] flex flex-col justify-between shadow-sm hover:border-[var(--volt)] transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[var(--volt)] text-[var(--on-volt)] flex items-center justify-center font-display font-extrabold text-xl mb-3 shadow-sm">
                  {persona.initial}
                </div>
                <div className="font-display font-bold text-lg text-[var(--ink)] mb-0.5">{persona.name}</div>
                <div className="text-xs text-[var(--volt-text)] font-semibold mb-2">{persona.role}</div>
                <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-3">Area: {persona.context}</div>
                <div className="p-3 rounded-2xl bg-[var(--sunk)] border border-[var(--line)] text-xs text-[var(--ink)] italic font-medium leading-relaxed">
                  "{persona.quote}"
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--line)] text-[11px] font-mono text-[var(--ink-muted)] flex items-center justify-between">
                <span>Timer tipico:</span>
                <span className="font-bold text-[var(--ink)]">{persona.defaultTimer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Target Sectors */}
        <div className="p-6 sm:p-8 rounded-3xl border border-[var(--line)] bg-[var(--card)]">
          <div className="text-xs font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-4 font-semibold">
            Settori target prioritari
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[var(--paper)] border border-[var(--line)]">
                <div className="font-display font-bold text-sm text-[var(--ink)] mb-1">{sec.name}</div>
                <div className="text-xs text-[var(--ink-muted)] leading-relaxed">{sec.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
