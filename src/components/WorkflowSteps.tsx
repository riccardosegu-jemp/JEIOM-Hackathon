import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { Upload, Headphones, Video, TrendingUp, FileText, ArrowRight } from 'lucide-react';

export const WorkflowSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Upload className="w-5 h-5 text-blue-500" />;
      case 2:
        return <Headphones className="w-5 h-5 text-violet-500" />;
      case 3:
        return <Video className="w-5 h-5 text-indigo-500" />;
      case 4:
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="prodotto" className="py-16 md:py-24 border-t border-[var(--line)] bg-[var(--paper)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--volt-text)] mb-2">
            Coach · Come Funziona
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4 text-[var(--ink)]">
            Dal documento all'allenamento, in quattro passi
          </h2>
          <p className="text-base text-[var(--ink-muted)]">
            Dimenticate i corsi di formazione generici. Coach assorbe i dati reali della banca e crea simulazioni personalizzate per ogni consulente.
          </p>
        </div>

        {/* 4 Interactive Step Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {coachData.fourSteps.map((step) => {
            const isActive = activeStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-5 rounded-2xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-[var(--card)] border-[var(--volt)] shadow-lg ring-2 ring-[var(--volt)]'
                    : 'bg-[var(--card)] border-[var(--line)] hover:border-[var(--line-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--volt)] text-[var(--on-volt)] flex items-center justify-center font-mono font-bold text-sm">
                    {step.stepNumber}
                  </div>
                  {getStepIcon(step.stepNumber)}
                </div>
                <div className="font-display font-bold text-xl mb-1 text-[var(--ink)]">{step.title}</div>
                <p className="text-xs text-[var(--ink-muted)] leading-relaxed line-clamp-3">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Step Detail Box */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 md:p-8 shadow-sm">
          {activeStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--sunk)] text-[var(--ink)] font-semibold border border-[var(--line)]">
                  Passo 1 · Carica
                </span>
                <h3 className="text-2xl font-display font-bold mt-3 mb-2 text-[var(--ink)]">Carica la documentazione bancaria</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {coachData.fourSteps[0].detail} Basta caricare il PDF del listino mutui, le condizioni dei conti titoli, o i moduli di adeguatezza MiFID II e IVASS.
                </p>
                <div className="space-y-2 text-xs font-mono text-[var(--ink)]">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--sunk)] border border-[var(--line)]">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span>Manuale_MiFID_II_Consulenti_2026.pdf</span>
                    <span className="ml-auto text-emerald-600 font-bold">100% Indicizzato</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--sunk)] border border-[var(--line)]">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span>Listino_Mutui_Bancari_Q4.pdf</span>
                    <span className="ml-auto text-emerald-600 font-bold">100% Indicizzato</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border-2 border-dashed border-[var(--line-strong)] p-8 text-center bg-[var(--paper)]">
                <Upload className="w-10 h-10 text-[var(--ink-muted)] mx-auto mb-3" />
                <div className="font-display font-bold text-sm mb-1 text-[var(--ink)]">Trascina qui le schede prodotto bancarie</div>
                <div className="text-xs text-[var(--ink-muted)] mb-4">Supporta PDF, DOCX, audio delle migliori trattative e circolari interne</div>
                <span className="inline-block px-4 py-2 rounded-full bg-[var(--volt)] text-[var(--on-volt)] text-xs font-semibold">
                  Ingestion attiva in meno di 2 minuti
                </span>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--sunk)] text-[var(--ink)] font-semibold border border-[var(--line)]">
                  Passo 2 · Impara
                </span>
                <h3 className="text-2xl font-display font-bold mt-3 mb-2 text-[var(--ink)]">Docente vocale AI 1-to-1 in cuffia</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {coachData.fourSteps[1].detail} Nessun corso registrato noioso: il docente AI spiega le clausole a voce. Il consulente può interrompere e chiedere: "Come rispondo se il cliente dice che l'inflazione erode il rendimento?".
                </p>
                <div className="p-4 rounded-xl bg-[var(--campo)] text-[var(--on-campo)] text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[var(--volt)] font-semibold">
                    <Headphones className="w-4 h-4" />
                    Docente Vocale AI (in cuffia in filiale):
                  </div>
                  <p className="italic">
                    "Nel nuovo piano mutui abbiamo inserito la clausola di opzione tasso fisso dopo 24 mesi. Vuoi provare come argomentarla al cliente prima della riunione?"
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--paper)] border border-[var(--line)] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--volt)] text-[var(--on-volt)] flex items-center justify-center mb-4">
                  <Headphones className="w-10 h-10" />
                </div>
                <div className="font-display font-bold text-sm mb-1 text-[var(--ink)]">Docente Vocale Connesso</div>
                <div className="text-xs text-[var(--ink-muted)]">Latenza ultra-bassa (&lt; 350ms) per una conversazione fluida</div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--sunk)] text-[var(--ink)] font-semibold border border-[var(--line)]">
                  Passo 3 · Allenati
                </span>
                <h3 className="text-2xl font-display font-bold mt-3 mb-2 text-[var(--ink)]">Role play in video con avatar fotorealistico</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {coachData.fourSteps[2].detail} L'avatar fa il correntista allarmato, il cliente che minaccia di andare alla concorrenza o il compratore che esige lo sconto. Ha reazioni umane e mette sotto pressione.
                </p>
                <a
                  href="#simulatore"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-[var(--volt)] text-[var(--on-volt)] transition-transform hover:scale-105"
                >
                  Salta subito al simulatore live
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--campo)] text-[var(--on-campo)] border border-[var(--line)]">
                <div className="flex items-center justify-between text-xs mb-3 font-mono">
                  <span className="flex items-center gap-1.5 text-[var(--pista)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--pista)] animate-ping" />
                    DAL VIVO · 02:41
                  </span>
                  <span className="text-[var(--on-campo)]/70">Consulente vs Avatar</span>
                </div>
                <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-center">
                  <div className="font-display font-bold text-base text-[var(--volt)]">Giulia (Buyer GDO)</div>
                  <div className="text-xs italic text-[var(--on-campo)] mt-2">
                    "Il vostro concorrente mi fa il 12%. Voi che cosa mi offrite?"
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--sunk)] text-[var(--ink)] font-semibold border border-[var(--line)]">
                  Passo 4 · Migliora
                </span>
                <h3 className="text-2xl font-display font-bold mt-3 mb-2 text-[var(--ink)]">Chi dirige vede chi migliora, mentre succede</h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-6">
                  {coachData.fourSteps[3].detail} Rispetto all'aula che finisce il venerdì, Coach aggiorna la dashboard il giorno dopo: ore di pratica, role-play completati ed esportazione Excel per le linee guida ESMA.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[var(--sunk)] border border-[var(--line)]">
                    <div className="text-[var(--ink-muted)]">Tempo di pratica medio</div>
                    <div className="text-lg font-mono font-bold text-[var(--ink)] mt-1">3h 20m / mese</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[var(--sunk)] border border-[var(--line)]">
                    <div className="text-[var(--ink-muted)]">Argomentare con dati</div>
                    <div className="text-lg font-mono font-bold text-[var(--volt-text)] mt-1">4,2 / 5 (+0,8)</div>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--paper)] border border-[var(--line)]">
                <div className="text-xs font-mono text-[var(--ink-muted)] mb-3 flex items-center justify-between">
                  <span>Monitoraggio Rete Filiali</span>
                  <span className="text-[var(--volt-text)] font-bold">Export Excel Pronto</span>
                </div>
                <div className="space-y-2 text-xs">
                  {coachData.managerDashboard.reps.map((rep, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)]">
                      <div>
                        <span className="font-semibold text-[var(--ink)]">{rep.name}</span>
                        <span className="text-[var(--ink-muted)] ml-2 text-[11px]">({rep.role})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--ink-muted)] font-mono">{rep.practice}</span>
                        <span className="font-mono font-bold text-[var(--volt-text)]">{rep.score}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
