import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { CheckCircle2, AlertCircle, PieChart, ShieldAlert } from 'lucide-react';

export const BudgetSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tutti');
  const budget = coachData.budget;

  const categories = ['Tutti', 'Persone', 'Fisico', 'Digitale', 'Abilitazione', 'Partner'];

  const filteredItems = selectedFilter === 'Tutti'
    ? budget.items
    : budget.items.filter(item => item.channelType === selectedFilter);

  return (
    <section id="budget" className="py-16 md:py-24 bg-card border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="label text-ink-muted">Allocazione analitica</span>
            <span className="co-chip co-chip-volt text-xs">Esattamente 50.000 €</span>
          </div>
          <h2 className="display-l text-ink mt-1 mb-3">
            Divisione del budget da 50.000 €
          </h2>
          <p className="lead text-ink-muted">
            Le banche giuste sono circa 50 e si conoscono per nome. Il budget è concentrato su persone, eventi e relazioni, con stop rules rigorose per riallocare ogni euro sul canale a CAC più basso.
          </p>
        </div>

        {/* Category Breakdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {budget.byCategory.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-md border border-line bg-paper">
              <span className="text-xs font-sans text-ink-muted font-medium block mb-1">
                {cat.name.split(' ')[0]}
              </span>
              <div className="font-mono font-bold text-xl text-ink">
                {cat.amount.toLocaleString('it-IT')} €
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-line text-xs font-mono">
                <span className="text-ink-muted">{cat.pct}% del totale</span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="label text-ink-muted mr-2">Filtra per tipo:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`co-chip transition-colors cursor-pointer text-xs ${
                selectedFilter === cat
                  ? 'co-chip-campo font-bold'
                  : 'hover:bg-sunk/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table of 9 Items */}
        <div className="rounded-md border border-line bg-card overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-sans">
              <thead>
                <tr className="border-b border-line bg-sunk/40 text-ink-muted text-xs uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4 sm:px-6">#</th>
                  <th className="py-3 px-4 sm:px-6">Voce di spesa</th>
                  <th className="py-3 px-4 sm:px-6">Importo</th>
                  <th className="py-3 px-4 sm:px-6">%</th>
                  <th className="py-3 px-4 sm:px-6">Tipo</th>
                  <th className="py-3 px-4 sm:px-6">A cosa serve & KPI</th>
                  <th className="py-3 px-4 sm:px-6">Regola di stop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-sunk/20 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold text-ink-muted">
                      {item.id}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-ink">
                      <div>{item.category}</div>
                      <div className="text-xs font-normal text-ink-muted mt-0.5 line-clamp-1">{item.description}</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono font-bold text-ink whitespace-nowrap">
                      {item.amount.toLocaleString('it-IT')} €
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-ink-muted whitespace-nowrap">
                      {item.sharePercentage}%
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                      <span className="co-chip text-[11px]">
                        {item.channelType}
                      </span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-ink-muted max-w-xs">
                      <p className="text-ink font-medium">{item.rationale}</p>
                      <p className="text-volt-text font-mono mt-1 font-semibold">{item.kpi}</p>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-ink-muted font-sans max-w-xs">
                      {item.stopCondition}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-sunk/60 border-t-2 border-line font-mono font-bold text-ink">
                  <td className="py-3.5 px-4 sm:px-6" colSpan={2}>
                    Totale verificato
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap text-base">
                    50.000 €
                  </td>
                  <td className="py-3.5 px-4 sm:px-6">
                    100%
                  </td>
                  <td colSpan={3} className="py-3.5 px-4 sm:px-6 font-sans text-xs text-ink-muted font-normal text-right">
                    Controllo matematico: 13k + 10k + 7k + 5k + 4k + 4k + 3k + 3k + 1k = 50.000 €
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Spending Phasing & Stop Rules Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-md border border-line bg-paper">
            <span className="label text-ink-muted mb-2 block">Ordine di spesa</span>
            <h4 className="title text-lg text-ink mb-3">Tre fasi di roll-out</h4>
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-ink shrink-0">Mesi 1–3:</span>
                <span className="text-ink-muted">Preparazione (~22.000 €). Lista 50 banche, dossier sicurezza DORA, demo bancaria, avvio LinkedIn e vendita diretta, prima colazione.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-ink shrink-0">Mesi 3–6:</span>
                <span className="text-ink-muted">Spinta (~23.000 €). Eventi ABI, webinar con partner, altre colazioni, avvio dei primi pilot retribuiti.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-ink shrink-0">Mesi 6–12:</span>
                <span className="text-ink-muted">Chiusura (~5.000 €). Firma contratti definitivi, referral al partner, caso studio usato come leva per le altre banche.</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-md border border-line bg-paper">
            <span className="label text-ink-muted mb-2 block">Criterio di flessibilità</span>
            <h4 className="title text-lg text-ink mb-3">Riallocazione sul canale top</h4>
            <p className="body text-xs text-ink-muted leading-relaxed mb-3">
              Ogni mese il budget viene monitorato rispetto al CAC reale per canale. Se LinkedIn Ads non porta incontri entro 6 settimane, i fondi passano alle colazioni. Se il primo evento non performa, i fondi tornano alla vendita diretta.
            </p>
            <div className="p-3 rounded-sm bg-card border border-line text-xs font-mono text-ink">
              CAC medio obiettivo: 12.500 € per cliente enterprise firmato.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
