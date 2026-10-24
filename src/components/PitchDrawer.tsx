import React, { useState, useEffect } from 'react';
import { coachData } from '../data/mockData';
import { Timer, Play, Pause, RotateCcw, X, ArrowRight } from 'lucide-react';

interface PitchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDrawer: React.FC<PitchDrawerProps> = ({ isOpen, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(90);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[var(--card)] border-l border-[var(--line)] p-6 flex flex-col justify-between shadow-2xl h-full overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--volt)] text-[var(--on-volt)] flex items-center justify-center font-bold">
                <Timer className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)]">Pitch Assistant · 90 Secondi</h3>
                <p className="text-[11px] text-[var(--ink-muted)] font-mono">Cronometro ufficiale & scaletta per la giuria</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--sunk)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Countdown Timer */}
          <div className="p-5 rounded-3xl bg-[var(--campo)] text-[var(--on-campo)] mb-6 text-center shadow-lg">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--on-campo)]/70 mb-1">
              Tempo a disposizione
            </div>
            <div className={`text-5xl font-mono font-bold tracking-tight mb-4 ${
              secondsLeft <= 15 ? 'text-[var(--pista)] animate-pulse' : 'text-[var(--volt)]'
            }`}>
              {formatTime(secondsLeft)}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleTimer}
                className="px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 bg-[var(--volt)] text-[var(--on-volt)] hover:brightness-95 transition-all shadow-md"
              >
                {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isActive ? 'Pausa' : 'Avvia Pitch'}</span>
              </button>

              <button
                onClick={resetTimer}
                className="px-4 py-2.5 rounded-full border border-white/20 text-[var(--on-campo)] hover:bg-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* 4 Timed Pitch Milestones */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--ink-muted)] mb-2">
              Scaletta minuto e mezzo (Slide 5 & 14)
            </div>

            {coachData.pitchRunbook.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-[var(--line)] bg-[var(--paper)] text-xs"
              >
                <div className="flex items-center justify-between font-mono font-bold text-[var(--volt-text)] mb-1">
                  <span>{item.timing}</span>
                  <span className="text-[var(--ink)]">{item.title}</span>
                </div>
                <p className="text-[var(--ink-muted)] leading-relaxed text-[11px] mb-2">
                  {item.cue}
                </p>
                <div className="pt-2 border-t border-[var(--line)] flex justify-end">
                  <a
                    href={
                      idx === 0 ? '#prodotto' :
                      idx === 1 ? '#simulatore' :
                      idx === 2 ? '#fba' : '#economics'
                    }
                    onClick={onClose}
                    className="text-[11px] font-mono text-[var(--volt-text)] hover:underline flex items-center gap-1"
                  >
                    <span>Salta a questa sezione</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quick Stats */}
        <div className="pt-4 border-t border-[var(--line)] mt-6 grid grid-cols-3 gap-2 text-center text-xs font-mono">
          <div className="p-2 rounded-xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-[var(--ink-muted)] text-[10px]">Budget</div>
            <div className="font-bold text-[var(--ink)]">50.000 €</div>
          </div>
          <div className="p-2 rounded-xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-[var(--ink-muted)] text-[10px]">LTV/CAC</div>
            <div className="font-bold text-[var(--volt-text)]">21×</div>
          </div>
          <div className="p-2 rounded-xl bg-[var(--paper)] border border-[var(--line)]">
            <div className="text-[var(--ink-muted)] text-[10px]">ROI Anno 1</div>
            <div className="font-bold text-[var(--pista-text)]">+323 %</div>
          </div>
        </div>
      </div>
    </div>
  );
};
