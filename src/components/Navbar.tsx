import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { Timer, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPitch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPitch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#metodo', label: 'Come funziona' },
    { href: '#simulatore', label: 'Simulatore' },
    { href: '#direzione', label: 'Vista direzione' },
    { href: '#casi', label: 'Per chi' },
    { href: '#fba', label: 'FBA a costo zero' },
    { href: '#prezzi', label: 'Prezzi' },
    { href: '#budget', label: 'Budget 50k' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo with generous clearance */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center group py-1" aria-label="Coach home">
            <img
              src="/logo/coach-logo.svg"
              alt="Coach"
              className="h-8 sm:h-9 w-auto block"
            />
          </a>
          <span className="hidden xl:inline text-xs font-mono text-ink-muted border-l border-line pl-3">
            {coachData.meta.payoff}
          </span>
        </div>

        {/* Desktop Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-sans font-medium text-ink-muted whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPitch}
            className="co-btn co-btn-secondary co-btn-sm"
            title="Apri cronometro e scaletta pitch 90s"
          >
            <Timer className="w-3.5 h-3.5 text-pista" />
            <span className="hidden sm:inline">Pitch 90s</span>
          </button>

          <a
            href="#simulatore"
            className="co-btn co-btn-primary co-btn-sm hidden sm:inline-flex"
          >
            <span>Prova un role play</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink rounded-lg border border-line hover:bg-sunk"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-card px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-sans">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-ink-muted hover:text-ink font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#simulatore"
              onClick={() => setMobileMenuOpen(false)}
              className="co-btn co-btn-primary w-full text-center justify-center"
            >
              Prova un role play
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
