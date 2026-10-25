import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FullLandingView } from './views/FullLandingView';

export const App: React.FC = () => {
  return (
    <div className="co-root min-h-screen flex flex-col font-sans bg-paper text-ink selection:bg-volt selection:text-on-volt">
      <Navbar />

      <main className="flex-1">
        <FullLandingView />
      </main>

      <Footer />
    </div>
  );
};

export default App;
