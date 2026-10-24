import React from 'react';
import { coachData } from '../data/mockData';
import { GtmStrategySection } from '../components/GtmStrategySection';
import { BudgetSection } from '../components/BudgetSection';
import { EconomicsCalculator } from '../components/EconomicsCalculator';
import { SocialContentSection } from '../components/SocialContentSection';
import { Briefcase, Landmark } from 'lucide-react';

export const GtmHubView: React.FC = () => {
  return (
    <div className="space-y-8 bg-paper">
      {/* Top Banner on Campo */}
      <div className="bg-campo text-campo-text py-12 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="co-chip co-chip-volt text-xs">
              <Briefcase className="w-3.5 h-3.5" />
              GTM & Financial hub
            </span>
            <span className="text-xs font-mono text-campo-text/80">
              Allocazione 50.000 € e sostenibilità
            </span>
          </div>
          <h1 className="display-l text-white mb-3">
            Strategia di vendita, ripartizione budget e unit economics
          </h1>
          <p className="lead text-campo-text/85 max-w-3xl leading-relaxed">
            La vista dedicata alla revisione strategica ed economica per la giuria: canali fisici e digitali, convenzioni Fondo Banche Assicurazioni (FBA), ripartizione analitica dei 50.000 euro e metriche di rendimento.
          </p>
        </div>
      </div>

      <GtmStrategySection />
      <BudgetSection />
      <EconomicsCalculator />
      <SocialContentSection />
    </div>
  );
};
