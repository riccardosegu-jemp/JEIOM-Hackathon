import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { Share2, Copy, Check } from 'lucide-react';

export const SocialContentSection: React.FC = () => {
  const [selectedFormatIdx, setSelectedFormatIdx] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const formats = coachData.socialContent.formats;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="contenuti" className="py-16 md:py-24 border-t border-[var(--line)] bg-[var(--paper)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--sunk)] border border-[var(--line)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--volt-text)] mb-2">
            <Share2 className="w-3.5 h-3.5" />
            Slide 10 & 13 · Contenuti Pronti da Usare
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4 text-[var(--ink)]">
            Post e formati video pronti per essere pubblicati domani
          </h2>
          <p className="text-base text-[var(--ink-muted)]">
            Tre formati fissi per LinkedIn e video verticali (9:16). Nessun testo segnaposto né lorem ipsum: copy completi con ganci e strutture grafiche pronte.
          </p>
        </div>

        {/* 3 Formats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Format Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {formats.map((fmt, idx) => (
              <button
                key={fmt.id}
                onClick={() => setSelectedFormatIdx(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-xs ${
                  selectedFormatIdx === idx
                    ? 'bg-[var(--card)] border-[var(--volt)] shadow-md ring-2 ring-[var(--volt)]'
                    : 'bg-[var(--card)] border-[var(--line)] hover:border-[var(--line-strong)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[var(--volt-text)] font-semibold">{fmt.channel.split(' ')[0]}</span>
                  <span className="text-[10px] text-[var(--ink-muted)] uppercase">Formato {idx + 1}</span>
                </div>
                <div className="font-display font-bold text-[var(--ink)] mb-1 text-sm">{fmt.name}</div>
                <div className="text-[11px] text-[var(--ink-muted)] line-clamp-1">{fmt.hook}</div>
              </button>
            ))}
          </div>

          {/* Format Content Showcase (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 shadow-sm">
            {(() => {
              const currentFmt = formats[selectedFormatIdx];
              return (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--line)] mb-5">
                    <div>
                      <div className="text-xs font-mono text-[var(--volt-text)] font-bold uppercase">
                        {currentFmt.channel}
                      </div>
                      <h3 className="font-display font-bold text-lg text-[var(--ink)] mt-0.5">
                        {currentFmt.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopy(currentFmt.copyText, currentFmt.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--volt)] text-[var(--on-volt)] text-xs font-semibold self-start sm:self-auto hover:brightness-95 transition-all"
                    >
                      {copiedId === currentFmt.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === currentFmt.id ? 'Copiato!' : 'Copia Testo'}</span>
                    </button>
                  </div>

                  {/* Structure Box */}
                  <div className="p-3.5 rounded-2xl bg-[var(--sunk)] border border-[var(--line)] text-xs mb-5">
                    <span className="text-[var(--ink)] font-mono font-bold block mb-1">
                      Struttura Visiva e Grafica (Brand Identity):
                    </span>
                    <p className="text-[var(--ink-muted)] leading-relaxed">
                      {currentFmt.structure}
                    </p>
                  </div>

                  {/* Copy Text */}
                  <div className="bg-[var(--paper)] p-5 rounded-2xl border border-[var(--line)]">
                    <span className="text-[11px] font-mono text-[var(--ink-muted)] uppercase tracking-wider block mb-2 font-semibold">
                      Testo del Post / Script Video:
                    </span>
                    <p className="text-xs sm:text-sm text-[var(--ink)] whitespace-pre-line leading-relaxed font-sans">
                      {currentFmt.copyText}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
