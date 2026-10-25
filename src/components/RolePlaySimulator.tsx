import React, { useState } from 'react';
import { coachData, PersonaScenario } from '../data/mockData';
import { ScoreRing } from './ScoreRing';
import { Mic, RotateCcw } from 'lucide-react';

export const RolePlaySimulator: React.FC = () => {
  const [activePersona, setActivePersona] = useState<PersonaScenario>(coachData.personas[0]);
  const [selectedResponseIdx, setSelectedResponseIdx] = useState<number>(1); // default to 3,1 feedback to showcase coaching critique
  const [isSimulatingAudio, setIsSimulatingAudio] = useState(false);

  const demoData = coachData.rolePlayDemo;
  const currentResponse = demoData.responses[selectedResponseIdx] || demoData.responses[0];

  const handleSelectOption = (idx: number) => {
    setSelectedResponseIdx(idx);
  };

  const handleReset = () => {
    setSelectedResponseIdx(1);
    setIsSimulatingAudio(false);
  };

  return (
    <section id="simulatore" className="py-16 md:py-24 bg-card border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="co-chip co-chip-live">
              Simulatore interattivo
            </span>
          </div>
          <h2 className="display-l text-ink mb-4">
            Un allenamento che sembra la conversazione vera
          </h2>
          <p className="lead text-ink-muted">
            Gli avatar hanno volto, voce e reazioni realistiche. Interrompono, insistono, chiedono lo sconto. Scegli come rispondere a Giulia e osserva il riscontro del coach al secondo esatto.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="label text-ink-muted mr-1 hidden sm:inline">Scenario:</span>
          {coachData.personas.map((persona) => {
            const isActive = persona.id === activePersona.id;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona)}
                className={`co-chip transition-all cursor-pointer ${
                  isActive
                    ? 'co-chip-campo font-bold shadow-sm'
                    : 'bg-sunk hover:bg-line/70 text-ink'
                }`}
              >
                <span className="font-semibold">{persona.name}</span>
                <span className="opacity-75 text-[11px] font-normal">({persona.context})</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: RoleplayCard + Responses + ScoreRing & Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: RoleplayCard (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="co-rp border border-line bg-card shadow-lift w-full max-w-[400px]">
              {/* Video Area */}
              <div className="co-rp-video min-h-[260px] relative overflow-hidden bg-black/40">
                {activePersona.id === 'giulia' ? (
                  <video
                    src="/media/avatar-giulia.mp4"
                    poster="/media/avatar-giulia.jpg"
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="co-rp-avatar">
                    <span>{activePersona.initial}</span>
                  </div>
                )}

                {/* Top Overlay */}
                <div className="co-rp-top pointer-events-none">
                  <span className="co-chip co-chip-live bg-card">
                    In corso
                  </span>
                  <span className="co-rp-time">
                    {activePersona.defaultTimer}
                  </span>
                </div>

                {/* Bottom Quote Overlay */}
                <div className="co-rp-quote pointer-events-none">
                  {activePersona.quote}
                </div>
              </div>

              {/* Card Body */}
              <div className="co-rp-body">
                <div className="label text-ink-muted mb-1">
                  {activePersona.context} · {activePersona.name}, {activePersona.role}
                </div>
                <div className="co-rp-title text-xl font-bold font-display text-ink">
                  {activePersona.scenarioTitle}
                </div>
                <p className="small text-ink-muted mb-5 leading-relaxed">
                  L'avatar attende la tua risposta vocale. Nel test rapido qui a destra puoi selezionare una risposta per vedere la valutazione istantanea.
                </p>
                <div className="co-rp-actions">
                  <button
                    onClick={() => setIsSimulatingAudio(!isSimulatingAudio)}
                    className="co-btn co-btn-primary co-btn-sm"
                  >
                    <Mic className="w-4 h-4" />
                    <span>{isSimulatingAudio ? 'In ascolto...' : 'Rispondi a voce'}</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="co-btn co-btn-secondary co-btn-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Ricomincia</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Choices + CoachFeedback + ScoreRing & SkillMeters (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Response Choices */}
            <div className="bg-paper p-5 sm:p-6 rounded-md border border-line">
              <div className="flex items-center justify-between mb-3.5">
                <span className="label text-ink-muted">Scegli la tua risposta:</span>
                <span className="text-xs font-mono text-ink-muted">1 click per valutare</span>
              </div>

              <div className="space-y-3">
                {demoData.responses.map((resp, idx) => {
                  const isSelected = selectedResponseIdx === idx;
                  return (
                    <button
                      key={resp.id}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-sm border transition-all text-sm font-sans cursor-pointer ${
                        isSelected
                          ? 'border-campo bg-card shadow-sm ring-2 ring-campo'
                          : 'border-line bg-card/70 hover:bg-card hover:border-line-strong text-ink'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-ink text-xs uppercase tracking-wide">
                          {resp.label}
                        </span>
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-pill bg-sunk text-ink">
                          Voto: {resp.scoreText}
                        </span>
                      </div>
                      <p className="text-ink leading-relaxed">
                        {resp.text}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CoachFeedback Component & Score Display */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* ScoreRing Card (5 cols) */}
              <div className="md:col-span-5 bg-paper p-6 rounded-md border border-line flex flex-col items-center justify-center text-center">
                <span className="label text-ink-muted mb-3">Punteggio del coach</span>
                <ScoreRing score={currentResponse.score} size={130} />
                <div className="mt-3 text-xs font-mono text-ink-muted">
                  Scala ufficiale da 0 a 5
                </div>
              </div>

              {/* CoachFeedback Box (7 cols) */}
              <div className="md:col-span-7">
                <div className="co-fb">
                  <span className="co-fb-time">{currentResponse.timestamp}</span>
                  <div>
                    <h4 className="font-sans font-bold text-base text-ink mb-1">
                      {currentResponse.headline}
                    </h4>
                    <p className="co-fb-text">
                      {currentResponse.critique}
                    </p>
                    <div className="co-fb-next pt-3 border-t border-line mt-3">
                      <span className="font-mono font-bold text-ink">
                        Punteggio {currentResponse.scoreText}
                      </span>
                      <a
                        href="#simulatore"
                        onClick={(e) => { e.preventDefault(); setSelectedResponseIdx(0); }}
                        className="text-volt-text font-semibold hover:underline"
                      >
                        {currentResponse.nextAction}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SkillMeters Breakdown */}
            <div className="bg-paper p-6 rounded-md border border-line">
              <div className="flex items-center justify-between mb-4">
                <span className="label text-ink-muted">Competenze valutate nel role play</span>
                <span className="text-xs font-mono text-ink-muted">5 metriche oggettive</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentResponse.skills.map((skill, idx) => (
                  <div key={idx} className="co-skill">
                    <span className="co-skill-name text-ink">{skill.name}</span>
                    <span className="co-skill-val">
                      {skill.val}
                      <span className="co-skill-delta">{skill.delta}</span>
                    </span>
                    <div className="co-skill-bar">
                      <i style={{ width: `${skill.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
