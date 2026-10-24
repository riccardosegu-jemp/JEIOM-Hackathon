import React from 'react';
import { coachData } from '../data/mockData';
import { Landmark, ArrowRight, ShieldCheck, CheckCircle2, FileCheck, Users, HelpCircle } from 'lucide-react';

export const GtmStrategySection: React.FC = () => {
  return (
    <div id="fba">
      {/* High-Impact Fascia su Volt (Finanziamento FBA) */}
      <section className="bg-volt text-on-volt py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="label bg-campo text-campo-text px-2.5 py-0.5 rounded-pill text-[11px]">
                  FBA & Fondi paritetici
                </span>
                <span className="font-mono text-xs font-semibold">
                  Zero uscite dal budget ordinario
                </span>
              </div>

              <h2 className="display-l text-ink mb-4">
                Si finanzia al 100% con il fondo FBA.
              </h2>

              <p className="lead text-ink/90 font-medium max-w-2xl mb-6">
                Nel settore bancario e assicurativo, la formazione obbligatoria e continua può essere coperta integralmente dal Fondo Banche Assicurazioni (FBA), attingendo ai contributi che la banca versa già ogni mese all'INPS per legge.
              </p>

              <div className="space-y-2.5 mb-6 text-sm font-sans font-semibold text-ink">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-campo shrink-0" />
                  <span>Nessun costo extra: attivi i crediti formativi già maturati dalla tua banca.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-campo shrink-0" />
                  <span>Valido per i requisiti formativi obbligatori MiFID II, IVASS ed ESMA.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-campo shrink-0" />
                  <span>Per le aziende non bancarie: attivazione analoga su Fondimpresa e Fondirigenti.</span>
                </div>
              </div>

              <a
                href="#budget"
                className="co-btn co-btn-dark inline-flex items-center gap-2"
              >
                <span>Scopri se la tua azienda può</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-4 bg-campo text-campo-text p-6 rounded-md shadow-sm">
              <div className="label text-volt mb-2">Come funziona il conto formazione</div>
              <div className="font-mono font-bold text-2xl mb-2 text-white">0,30% INPS</div>
              <p className="small text-campo-text/80 mb-4">
                Lo 0,30% delle retribuzioni versate all'INPS viene accantonato nel fondo FBA della banca. Se non viene utilizzato per la formazione continua, le risorse restano inutilizzate.
              </p>
              <div className="p-3 rounded-sm bg-white/10 text-xs text-campo-text/90 font-mono">
                Coach predispone il piano, la rendicontazione oraria e il dossier di conformità.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Strategic Levers (slide 7 replica) */}
      <section className="py-16 md:py-20 bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="label text-ink-muted">Strategia di go-to-market</span>
            <h3 className="display-l text-ink mt-2 mb-3">
              Come portiamo Coach a 4 banche clienti in 12 mesi
            </h3>
            <p className="lead text-ink-muted">
              Le banche target sono circa 50 e si conoscono per nome. Non serve disperdere budget: combiniamo vendita diretta, eventi di settore e la leva FBA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="co-stat flex flex-col justify-between">
              <div>
                <span className="co-chip co-chip-campo text-xs mb-3">1. Account-Based Outreach</span>
                <h4 className="title text-xl text-ink mb-2">Vendita diretta qualificata</h4>
                <p className="body text-ink-muted text-sm leading-relaxed mb-4">
                  Un commerciale part-time per 6 mesi lavora la lista delle 50 banche con Sales Navigator e demo personalizzate per il responsabile della rete commerciale.
                </p>
              </div>
              <div className="pt-3 border-t border-line text-xs font-mono text-ink-muted">
                Budget: 13.000 € (26%) · Target 2 clienti
              </div>
            </div>

            <div className="co-stat flex flex-col justify-between">
              <div>
                <span className="co-chip co-chip-campo text-xs mb-3">2. Presenza istituzionale</span>
                <h4 className="title text-xl text-ink mb-2">Eventi ABI e colazioni riservate</h4>
                <p className="body text-ink-muted text-sm leading-relaxed mb-4">
                  Partecipazione a Il Salone dei Pagamenti (ABIEventi) con role play dal vivo allo stand, più 3 colazioni riservate per 8–10 responsabili formazione a Milano e Roma.
                </p>
              </div>
              <div className="pt-3 border-t border-line text-xs font-mono text-ink-muted">
                Budget: 14.000 € (28%) · Target 1 cliente
              </div>
            </div>

            <div className="co-stat flex flex-col justify-between">
              <div>
                <span className="co-chip co-chip-campo text-xs mb-3">3. Canale FBA & Partner</span>
                <h4 className="title text-xl text-ink mb-2">Enti e distributori accreditati</h4>
                <p className="body text-ink-muted text-sm leading-relaxed mb-4">
                  Accordi con enti di formazione accreditati su FBA: 5.000 € di referral per ogni contratto portato. Gli enti inseriscono Coach nei piani formativi già attivi.
                </p>
              </div>
              <div className="pt-3 border-t border-line text-xs font-mono text-ink-muted">
                Budget: 5.000 € (10%) · Target 1 cliente
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
