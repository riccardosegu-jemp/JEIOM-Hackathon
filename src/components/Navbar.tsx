import React, { useState } from 'react';
import { coachData } from '../data/mockData';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered links as requested by user
  const navLinks = [
    { href: '#simulatore', label: 'Simulatore' },
    { href: '#prezzi', label: 'Prezzi' },
    { href: '#budget', label: 'Budget 50k' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center group py-1" aria-label="Coach home">
            <img
              src="/logo/coach-logo.svg"
              alt="Coach"
              className="h-8 sm:h-9 w-auto block"
            />
          </a>
        </div>

        {/* Minimal Navigation: only Simulatore, Prezzi, Budget 50k */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium text-ink-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: only Prova un role play */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#simulatore"
            className="co-btn co-btn-primary co-btn-sm"
          >
            <span>Prova un role play</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink rounded-lg border border-line hover:bg-sunk"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-card px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2 text-sm font-sans">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-ink-muted hover:text-ink font-semibold"
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
