import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PitchDrawer } from './components/PitchDrawer';
import { FullLandingView } from './views/FullLandingView';

export const App: React.FC = () => {
  const [pitchDrawerOpen, setPitchDrawerOpen] = useState(false);

  return (
    <div className="co-root min-h-screen flex flex-col font-sans bg-paper text-ink selection:bg-volt selection:text-on-volt">
      <Navbar onOpenPitch={() => setPitchDrawerOpen(true)} />

      <main className="flex-1">
        <FullLandingView />
      </main>

      <Footer />

      {/* Floating 90s Pitch Runbook for hackathon presentation */}
      <PitchDrawer
        isOpen={pitchDrawerOpen}
        onClose={() => setPitchDrawerOpen(false)}
      />
    </div>
  );
};

export default App;
