import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { FileSpreadsheet, Clock, BarChart3, Award } from 'lucide-react';

export const ManagerDashboardPreview: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const stats = coachData.managerDashboard.todayStats;
  const reps = coachData.managerDashboard.reps;

  const handleExportCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Nome Consulente,Ruolo,Tempo Pratica,Punteggio Medio,Trend,Stato\n"
      + reps.map(r => `"${r.name}","${r.role}","${r.practice}","${r.score}","${r.trend}","${r.status}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Coach_Report_Banca_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 border-t border-[var(--line)] bg-[var(--paper)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--volt-text)] mb-2">
            Slide 18 Replica · Coach Misurabile
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4 text-[var(--ink)]">
            Chi dirige vede chi migliora, mentre succede
          </h2>
          <p className="text-base text-[var(--ink-muted)] leading-relaxed">
            Ogni percorso parte dal ruolo e dal livello della persona. Ognuno si allena in privato. Tempo di pratica, punteggi e progressi si aggiornano a fine sessione, per persona e per squadra, ed esportano in Excel con un clic per le linee guida ESMA.
          </p>
        </div>

        {/* Dashboard Box Card */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8 shadow-md">
          {/* Top Bar of Dashboard */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--line)] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--volt-text)]" />
                <span className="font-display font-bold text-lg text-[var(--ink)]">Rete consulenti · Riepilogo di oggi</span>
              </div>
              <div className="text-xs text-[var(--ink-muted)] mt-0.5">Aggiornato in tempo reale con attestazione competenze MiFID II</div>
            </div>

            {/* Export in Excel Button */}
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[var(--campo)] text-[var(--on-campo)] text-xs font-semibold hover:brightness-110 transition-all self-start sm:self-auto"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>{downloadSuccess ? 'File Excel scaricato!' : 'Esporta in Excel'}</span>
            </button>
          </div>

          {/* 3 Metric StatTiles from Slide 18 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  st.isDark
                    ? 'bg-[var(--campo)] text-[var(--on-campo)] border-[var(--campo)]'
                    : 'bg-[var(--paper)] text-[var(--ink)] border-[var(--line)]'
                }`}
              >
                <div className={`text-xs font-mono mb-1 ${st.isDark ? 'text-[var(--on-campo)]/80' : 'text-[var(--ink-muted)]'}`}>
                  {st.label}
                </div>
                <div className="text-3xl font-mono font-bold tracking-tight my-1">{st.num}</div>
                <div className={`text-[11px] font-mono ${st.isDark ? 'text-[var(--volt)]' : 'text-[var(--volt-text)]'}`}>
                  {st.note}
                </div>
              </div>
            ))}
          </div>

          {/* Reps Detail Table */}
          <div className="rounded-2xl border border-[var(--line)] overflow-hidden bg-[var(--paper)]">
            <div className="px-4 py-3 bg-[var(--sunk)] border-b border-[var(--line)] text-[11px] font-mono uppercase tracking-wider text-[var(--ink-muted)] grid grid-cols-12 gap-2">
              <span className="col-span-5">Consulente / Filiale</span>
              <span className="col-span-3 text-center">Tempo Pratica</span>
              <span className="col-span-2 text-center">Score</span>
              <span className="col-span-2 text-right">Stato</span>
            </div>

            <div className="divide-y divide-[var(--line)] text-xs">
              {reps.map((rep, idx) => (
                <div key={idx} className="px-4 py-3.5 grid grid-cols-12 gap-2 items-center hover:bg-[var(--card)] transition-colors">
                  <div className="col-span-5">
                    <div className="font-semibold text-[var(--ink)]">{rep.name}</div>
                    <div className="text-[11px] text-[var(--ink-muted)]">{rep.role}</div>
                  </div>
                  <div className="col-span-3 text-center font-mono text-[var(--ink)]">
                    {rep.practice}
                  </div>
                  <div className="col-span-2 text-center font-mono font-bold text-[var(--volt-text)]">
                    {rep.score}/5
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--sunk)] text-[var(--ink)] border border-[var(--line)]">
                      {rep.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
