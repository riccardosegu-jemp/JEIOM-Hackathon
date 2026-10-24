import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WorkflowSteps } from '../components/WorkflowSteps';
import { RolePlaySimulator } from '../components/RolePlaySimulator';
import { ManagerDashboardPreview } from '../components/ManagerDashboardPreview';
import { IndustriesSection } from '../components/IndustriesSection';
import { GtmStrategySection } from '../components/GtmStrategySection';
import { BudgetSection } from '../components/BudgetSection';
import { EconomicsCalculator } from '../components/EconomicsCalculator';
import { SocialContentSection } from '../components/SocialContentSection';

export const FullLandingView: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WorkflowSteps />
      <RolePlaySimulator />
      <ManagerDashboardPreview />
      <IndustriesSection />
      <GtmStrategySection />
      <BudgetSection />
      <EconomicsCalculator />
      <SocialContentSection />
    </div>
  );
};
