// Single Source of Truth for Coach B2B
// Aligned with Coach Brand Identity and Strategy (Banche 500-3.000 dipendenti, FBA, 50k budget)

export interface BudgetItem {
  id: number;
  category: string;
  amount: number;
  sharePercentage: number;
  channelType: 'Persone' | 'Fisico' | 'Digitale' | 'Abilitazione' | 'Partner';
  description: string;
  rationale: string;
  kpi: string;
  stopCondition: string;
}

export interface FunnelStage {
  stage: string;
  volume: number;
  conversionRate: string;
  description: string;
}

export interface MetricCard {
  label: string;
  value: string;
  benchmark: string;
  status: 'VERIFIED';
  description: string;
}

export interface PersonaScenario {
  id: string;
  name: string;
  role: string;
  context: string;
  quote: string;
  scenarioTitle: string;
  initial: string;
  defaultTimer: string;
}

export const coachData = {
  meta: {
    version: '2.0.0-brand',
    lastUpdated: '2026-10-24',
    productName: 'Coach',
    payoff: 'Allenati prima che conti.',
    positioning: 'La palestra delle conversazioni che contano.',
    oneLiner: 'Coach trasforma i listini e le procedure di una banca o azienda in allenamenti: un docente AI li spiega a voce, un avatar in video fa il cliente o il compratore che chiede lo sconto, un coach dà il voto. Chi dirige vede chi migliora, mentre succede.',
    dataStatus: 'VERIFIED' as const,
  },

  hero: {
    eyebrow: 'Formazione AI per chi vende e chi gestisce persone',
    titleMain: 'Allenati',
    titleHighlight: 'prima che conti.',
    subtitle: 'Un formatore AI personale per ogni dipendente: spiega il listino a voce, fa la parte del cliente in video e dà il voto.',
    primaryCta: 'Prova un role play',
    secondaryCta: 'Guarda la demo',
    problemNumbers: [
      {
        num: '600-1.000 €',
        label: 'Costo aula all\'anno a persona',
        note: 'Più il costo della filiale scoperta (ipotesi di mercato)',
      },
      {
        num: '75%',
        label: 'Si dimentica dopo 7 giorni',
        note: 'La perdita di competenze senza allenamento pratico',
      },
      {
        num: '4 mesi',
        label: 'Per rendere autonomo un neoassunto',
        note: 'Oggi impara rischiando coi clienti veri',
      },
    ],
  },

  fourSteps: [
    {
      stepNumber: 1,
      title: 'Carica',
      description: 'Un listino, una procedura, una scheda prodotto.',
      detail: 'I docenti interni aggiungono le best practice e i vincoli di compliance in pochi minuti.',
    },
    {
      stepNumber: 2,
      title: 'Impara',
      description: 'Un docente AI la spiega a voce. Puoi interromperlo e chiedere.',
      detail: 'Sessioni audio 1-to-1 su misura del livello di partenza di ciascun dipendente.',
    },
    {
      stepNumber: 3,
      title: 'Allenati',
      description: 'Role play in video con un avatar che fa il cliente, il collega o il collaboratore.',
      detail: 'Reazioni facciali realistiche, obiezioni sul prezzo e richieste impreviste.',
    },
    {
      stepNumber: 4,
      title: 'Migliora',
      description: 'Ogni role play prepara il successivo, finché sei pronto.',
      detail: 'Il coach restituisce il riscontro sul momento esatto con punteggio su anello di progresso.',
    },
  ],

  personas: [
    {
      id: 'giulia',
      name: 'Giulia',
      role: 'Buyer della grande distribuzione',
      context: 'Vendite',
      quote: '«Il vostro concorrente mi fa il 12%. Voi?»',
      scenarioTitle: 'Il rinnovo con richiesta di sconto',
      initial: 'G',
      defaultTimer: '03:52',
    },
    {
      id: 'roberto',
      name: 'Roberto',
      role: 'Cliente private filiale bancaria',
      context: 'Banche & Finanza',
      quote: '«Voglio disinvestire tutto e spostare i risparmi sulla concorrenza.»',
      scenarioTitle: 'Gestione del panico di mercato e ritenzione',
      initial: 'R',
      defaultTimer: '02:18',
    },
    {
      id: 'marco',
      name: 'Marco',
      role: 'Cliente arrabbiato',
      context: 'Servizio clienti',
      quote: '«È la terza volta che chiamo.»',
      scenarioTitle: 'Il disservizio da spiegare senza perdere il cliente',
      initial: 'M',
      defaultTimer: '01:45',
    },
    {
      id: 'elena',
      name: 'Elena',
      role: 'Collaboratrice di team',
      context: 'Manager',
      quote: '«Pensavo di aver fatto un buon anno.»',
      scenarioTitle: 'La valutazione annuale e il riscontro difficile',
      initial: 'E',
      defaultTimer: '04:12',
    },
    {
      id: 'paolo',
      name: 'Paolo',
      role: 'Il primo cliente',
      context: 'Neoassunti',
      quote: '«Mi spieghi in due minuti che cosa fate.»',
      scenarioTitle: 'La prima telefonata e il pitch d\'ingresso',
      initial: 'P',
      defaultTimer: '01:10',
    },
  ] as PersonaScenario[],

  rolePlayDemo: {
    scenarioTitle: 'Il rinnovo con richiesta di sconto',
    avatarName: 'Giulia',
    avatarRole: 'Buyer della grande distribuzione',
    avatarQuote: '«Il vostro concorrente mi fa il 12%. Voi?»',
    responses: [
      {
        id: 'opt-good',
        label: 'Risposta solida (Ancoraggio al valore)',
        text: '«Capisco la richiesta, Giulia. Prima di parlare di percentuali, possiamo rivedere i 42.000 € di risparmio generati nell\'ultimo trimestre grazie alla nostra piattaforma?»',
        score: 4.6,
        scoreText: '4,6',
        deltaText: '+0,6',
        timestamp: '03:52',
        headline: 'Risposta solida.',
        critique: 'Hai difeso il listino ancorando i 42.000 € di margine generati nell\'ultimo trimestre, prima di discutere i volumi della fornitura.',
        nextAction: 'Pronto per la trattativa vera →',
        skills: [
          { name: 'Ascolto attivo', val: '4,6', delta: '+0,4', pct: 92 },
          { name: 'Tono di voce', val: '4,4', delta: '+0,3', pct: 88 },
          { name: 'Argomentare con i dati', val: '4,8', delta: '+0,8', pct: 96 },
          { name: 'Generare opzioni', val: '4,2', delta: '+0,2', pct: 84 },
          { name: 'Interessi e posizioni', val: '4,5', delta: '+0,5', pct: 90 },
        ],
      },
      {
        id: 'opt-early',
        label: 'Cessione immediata (Errore comune)',
        text: '«Beh, se il concorrente fa il 12%, posso venirle incontro e proporle il 10% subito se chiudiamo entro venerdì.»',
        score: 3.1,
        scoreText: '3,1',
        deltaText: '-0,4',
        timestamp: '03:52',
        headline: 'Hai ceduto troppo presto.',
        critique: 'Giulia ha chiesto il 12% e hai offerto il 10% in quattro secondi. La prossima volta chiedi prima su quali volumi ragiona.',
        nextAction: 'Riprova il rinnovo →',
        skills: [
          { name: 'Ascolto attivo', val: '3,2', delta: '-0,2', pct: 64 },
          { name: 'Tono di voce', val: '3,0', delta: '-0,3', pct: 60 },
          { name: 'Argomentare con i dati', val: '2,6', delta: '-0,6', pct: 52 },
          { name: 'Generare opzioni', val: '3,1', delta: '-0,1', pct: 62 },
          { name: 'Interessi e posizioni', val: '3,4', delta: '-0,2', pct: 68 },
        ],
      },
      {
        id: 'opt-passive',
        label: 'Risposta passiva (Nessuna opzione)',
        text: '«Il nostro listino è questo, non ho margini di manovra. Devo sentire la direzione e farle sapere.»',
        score: 2.4,
        scoreText: '2,4',
        deltaText: '-0,8',
        timestamp: '03:52',
        headline: 'Chiusura difensiva non efficace.',
        critique: 'Hai bloccato la conversazione senza indagare le reali esigenze del cliente. Si rischia la perdita immediata del cliente.',
        nextAction: 'Riprova il rinnovo →',
        skills: [
          { name: 'Ascolto attivo', val: '2,4', delta: '-0,5', pct: 48 },
          { name: 'Tono di voce', val: '2,2', delta: '-0,4', pct: 44 },
          { name: 'Argomentare con i dati', val: '2,0', delta: '-0,8', pct: 40 },
          { name: 'Generare opzioni', val: '2,1', delta: '-0,5', pct: 42 },
          { name: 'Interessi e posizioni', val: '2,8', delta: '-0,3', pct: 56 },
        ],
      },
    ],
  },

  managerDashboard: {
    title: 'Chi dirige vede chi migliora',
    subtitle: 'Nessun voto a sorpresa. La direzione monitora tempo di pratica, role play completati e competenze della squadra in tempo reale.',
    todayStats: [
      {
        label: 'Tempo di pratica',
        num: '3h 20m',
        note: '+42% sulla settimana scorsa',
        isDark: false,
      },
      {
        label: 'Role play',
        num: '11',
        note: 'Squadra vendite, oggi',
        isDark: false,
      },
      {
        label: 'Argomentare con i dati',
        num: '4,2',
        note: '+0,8 in tre settimane',
        isDark: true,
      },
    ],
    reps: [
      { name: 'Marco Rossi', role: 'Consulente Titoli', practice: '45m', score: '4,3', trend: '+0,4', status: 'In miglioramento' },
      { name: 'Giulia Sala', role: 'Gestore Imprese', practice: '1h 10m', score: '4,6', trend: '+0,6', status: 'Pronto' },
      { name: 'Alessandro Bianchi', role: 'Consulente Mutui', practice: '35m', score: '3,4', trend: '+0,2', status: 'In allenamento' },
      { name: 'Elena Moretti', role: 'Operatore Filiale', practice: '50m', score: '4,1', trend: '+0,5', status: 'Pronto' },
    ],
  },

  fbaFinancing: {
    badge: 'Finanziamento',
    title: 'Si può finanziare con FBA a costo zero.',
    lead: 'Nel settore bancario e assicurativo, la formazione obbligatoria e continua può essere coperta al 100% dal Fondo Banche Assicurazioni (FBA), attingendo ai contributi già versati all\'INPS.',
    points: [
      'Nessun esborso dal budget ordinario: si attivano i crediti formativi già versati per legge.',
      'Valido per l\'aggiornamento obbligatorio MiFID II e IVASS (polizze e investimenti).',
      'Reportistica oggettiva conforme alle linee guida ESMA: dimostra chi sa fare davvero la conversazione.',
    ],
    cta: 'Scopri se la tua banca può',
  },

  strategy: {
    icp: {
      tag: 'ICP Convalidato',
      headline: 'Banche italiane con 500-3.000 dipendenti e rete di filiali.',
      summary: 'La formazione dei consulenti è obbligatoria per legge (MiFID II, IVASS), quindi il budget esiste già. Sotto i 3.000 dipendenti si evitano gare lunghissime e si chiudono 4 contratti con 50.000 € di budget.',
      targetList: 'Circa 50 banche regionali, popolari e gruppi BCC in Italia lavorate con account-based marketing.',
      painPoints: [
        'I prodotti e le regole cambiano spesso: l\'aula arriva tardi e costa 600-1.000 € a persona l\'anno.',
        'La formazione va dimostrata: le linee guida ESMA chiedono la verifica delle competenze, non la sola presenza in aula.',
        'Le conversazioni difficili oggi si imparano sbagliando con i clienti veri in filiale.',
      ],
      valueProp: 'Ogni consulente si allena sulla conversazione vera prima di farla, e voi vedete chi è pronto. A circa metà del costo dell\'aula, senza togliere nessuno dalla filiale.',
    },
    targetSectors: [
      { name: 'Banche & Credito', desc: 'Rinegoziazione mutui, collocamento polizze, consulenza investimenti MiFID II.' },
      { name: 'Assicurazioni', desc: 'Presentazione polizze complesse e gestione reclami sinistri.' },
      { name: 'Reti di vendita B2B', desc: 'Tenuta del listino contro la richiesta di sconto del compratore ostico.' },
      { name: 'Customer care & Filiali', desc: 'Gestione del cliente arrabbiato e spiegazione tempestiva dei disservizi.' },
    ],
  },

  budget: {
    total: 50000,
    currency: '€',
    objective: '4 banche clienti in 12 mesi',
    byCategory: [
      { name: 'Fisico (eventi + colazioni)', amount: 14000, pct: 28 },
      { name: 'Persone (vendita diretta)', amount: 13000, pct: 26 },
      { name: 'Digitale (LinkedIn + contenuti + webinar)', amount: 11000, pct: 22 },
      { name: 'Abilitazione (demo bancaria + dossier)', amount: 7000, pct: 14 },
      { name: 'Partner (referral)', amount: 5000, pct: 10 },
    ],
    items: [
      {
        id: 1,
        category: 'Vendita diretta',
        amount: 13000,
        sharePercentage: 26,
        channelType: 'Persone',
        description: 'Un commerciale part-time per 6 mesi che lavora le 50 banche della lista, più Sales Navigator e CRM.',
        rationale: 'È il canale che chiude i contratti enterprise: crea il contatto, fissa la demo e porta al pilot.',
        kpi: '50 banche contattate, 18 conversazioni avviate, 2 contratti firmati.',
        stopCondition: 'Se entro il mese 3 non ha generato almeno 6 demo qualificate.',
      },
      {
        id: 2,
        category: 'Eventi del settore bancario',
        amount: 10000,
        sharePercentage: 20,
        channelType: 'Fisico',
        description: 'Presenza a 1-2 eventi del settore (es. Il Salone dei Pagamenti di ABI con ABIServizi) con role play dal vivo allo stand.',
        rationale: 'Nel settore bancario la fiducia e la prova dal vivo sbloccano i decisori.',
        kpi: 'Almeno 7 conversazioni qualificate con banche della lista, 1 contratto firmato.',
        stopCondition: 'Se il primo evento porta meno di 3 conversazioni qualificate, il secondo viene cancellato.',
      },
      {
        id: 3,
        category: 'LinkedIn Ads mirate',
        amount: 7000,
        sharePercentage: 14,
        channelType: 'Digitale',
        description: 'Annunci mostrati solo ai dipendenti delle 50 banche della lista nei ruoli HR, formazione e rete commerciale.',
        rationale: 'Prepara il terreno alla chiamata diretta, creando familiarità con il marchio Coach.',
        kpi: 'Target: reach su 100% dei decisori profilati delle 50 banche.',
        stopCondition: 'Se dopo 6 settimane non hanno portato nessun incontro, il budget rimasto passa alle colazioni di lavoro.',
      },
      {
        id: 4,
        category: 'Referral ai partner',
        amount: 5000,
        sharePercentage: 10,
        channelType: 'Partner',
        description: '5.000 € una tantum riconosciuti all\'ente di formazione o società di consulenza che porta un contratto firmato.',
        rationale: 'Gli enti FBA gestiscono già i conti formazione delle banche e hanno accesso diretto.',
        kpi: '1 contratto firmato da partner.',
        stopCondition: 'Se nessun partner porta un contratto entro il mese 9, i fondi tornano alla vendita diretta.',
      },
      {
        id: 5,
        category: 'Demo bancaria su misura',
        amount: 4000,
        sharePercentage: 8,
        channelType: 'Abilitazione',
        description: 'Costruzione di 4 scenari realistici: cliente che disinveste, rinegoziazione mutuo, polizza, reclamo filiale.',
        rationale: 'Far provare a un responsabile formazione la conversazione esatta della sua filiale rende evidente il valore.',
        kpi: '4 scenari convalidati usati in tutte le demo e pilot.',
        stopCondition: 'Completato nei primi 45 giorni.',
      },
      {
        id: 6,
        category: 'Colazioni di lavoro riservate',
        amount: 4000,
        sharePercentage: 8,
        channelType: 'Fisico',
        description: '3 incontri riservati con 8-10 responsabili formazione di banche a Milano, Roma e Nord-Est.',
        rationale: 'Formato intimo, autorevole e a basso costo per contatto. Titolo: "Come cambia la formazione obbligatoria con l\'AI".',
        kpi: '24-30 decisori incontrati di persona, conversioni a pilot.',
        stopCondition: 'Se le conferme sono meno di 6 per incontro.',
      },
      {
        id: 7,
        category: 'Contenuti & Casi studio',
        amount: 3000,
        sharePercentage: 6,
        channelType: 'Digitale',
        description: 'Video demo del role play, caso studio del primo pilot bancario e guida tecnica "Formazione MiFID con l\'AI".',
        rationale: 'Supporto essenziale sia per l\'outbound che per la diffusione organica su LinkedIn.',
        kpi: '1 guida scaricabile, 3 video role-play ad alto ingaggio, 1 caso studio.',
        stopCondition: 'Rilascio cadenzato nei primi 6 mesi.',
      },
      {
        id: 8,
        category: 'Dossier sicurezza e conformità (DORA/GDPR)',
        amount: 3000,
        sharePercentage: 6,
        channelType: 'Abilitazione',
        description: 'Documentazione pronta su GDPR, normativa europea DORA, crittografia e residenza dati, più audit di sicurezza.',
        rationale: 'Voce distintiva: ogni banca lo chiede prima di firmare. Averlo pronto accorcia il ciclo di vendita di mesi.',
        kpi: 'Approvazione compliance al primo round di revisione.',
        stopCondition: 'Pronto entro il primo mese.',
      },
      {
        id: 9,
        category: 'Webinar con partner di settore',
        amount: 1000,
        sharePercentage: 2,
        channelType: 'Digitale',
        description: 'Un webinar congiunto con un ente o associazione di settore (es. AIDP o ABIFormazione).',
        rationale: 'Genera credibilità istituzionale e contatti qualificati tra i soci.',
        kpi: 'Almeno 15 decisori delle 50 banche target collegati dal vivo.',
        stopCondition: 'Se gli iscritti delle banche target sono meno di 15 a 48h dall\'evento.',
      },
    ] as BudgetItem[],
  },

  economics: {
    status: 'VERIFIED' as const,
    pricingTiers: [
      {
        name: 'Pilot 3 mesi',
        price: '10.000 €',
        period: 'una tantum',
        seats: 'Circa 30 consulenti di filiale',
        desc: '3 scenari personalizzati, docente vocale AI e report per la direzione.',
        highlight: 'Scalato dal primo anno di contratto se la banca firma.',
      },
      {
        name: 'Licenza Annuale',
        price: '35 €',
        period: 'a utente al mese',
        seats: 'Minimo 200 utenti (tipo: 300 consulenti)',
        desc: '420 € a persona l\'anno, circa metà dell\'aula tradizionale.',
        highlight: 'Fatturazione annuale (126.000 €/anno per 300 utenti). 100% finanziabile FBA.',
        popular: true,
      },
      {
        name: 'Setup & Scenari',
        price: '5.000 €',
        period: 'una tantum',
        seats: 'Per banca',
        desc: 'Integrazione listini, procedure MiFID/IVASS e creazione avatar dedicati.',
        highlight: 'Dossier sicurezza DORA/GDPR incluso.',
      },
    ],
    keyMetrics: [
      {
        label: 'Budget investito',
        value: '50.000 €',
        benchmark: 'Tetto hackathon',
        status: 'VERIFIED',
        description: 'Ripartito su 9 voci analitiche con stop rules chiare.',
      },
      {
        label: 'Obiettivo clienti 12m',
        value: '4 banche',
        benchmark: '50 banche target',
        status: 'VERIFIED',
        description: 'Circa 300 consulenti per banca cliente.',
      },
      {
        label: 'Ricavo annuo / cliente',
        value: '126.000 €',
        benchmark: '300 utenti × 35 € × 12m',
        status: 'VERIFIED',
        description: 'Canone ricorrente annuale al netto del setup.',
      },
      {
        label: 'CAC medio',
        value: '12.500 €',
        benchmark: '50.000 € / 4 clienti',
        status: 'VERIFIED',
        description: 'Comprende tutti i costi di acquisizione e abilitazione.',
      },
      {
        label: 'LTV stimato',
        value: '264.600 €',
        benchmark: '126k € × 70% × 3 anni',
        status: 'VERIFIED',
        description: 'Margine del 70% e durata media di 3 anni di contratto.',
      },
      {
        label: 'Rapporto LTV / CAC',
        value: '21×',
        benchmark: 'Soglia minima: >= 3×',
        status: 'VERIFIED',
        description: 'Supera di 7 volte la soglia richiesta dal regolamento.',
      },
      {
        label: 'Ricavi anno 1',
        value: '302.000 €',
        benchmark: 'Contratti + pilot + setup',
        status: 'VERIFIED',
        description: 'Calcolo con avvio contratti a metà anno (ciclo vendita 6 mesi).',
      },
      {
        label: 'ROI iniziale anno 1',
        value: '+323 %',
        benchmark: '(211.400 € marg. − 50k) / 50k',
        status: 'VERIFIED',
        description: 'Formula ufficiale regolamento sul margine netto generato.',
      },
    ],
    prudentScenario: {
      title: 'Scenario prudente: 2 clienti invece di 4',
      cac: '25.000 €',
      ltvCac: '10,6×',
      revenue: '186.000 €',
      roi: '+160 %',
      note: 'Anche chiudendo la metà dei clienti previsti, il modello economico è ampiamente sostenibile.',
    },
    funnel: [
      { stage: '1. Banche nella lista (500-3.000 dip.)', volume: 50, conversionRate: '100%', description: 'Tutte le banche regionali, popolari e BCC della fascia target.' },
      { stage: '2. Banche con cui parliamo davvero', volume: 18, conversionRate: '36%', description: 'Decision-maker con cui si apre un tavolo di confronto qualificato.' },
      { stage: '3. Pilot bancari pagati (10.000 €)', volume: 7, conversionRate: '39%', description: 'Test su 30 consulenti con scenari personalizzati.' },
      { stage: '4. Contratti annuali firmati', volume: 4, conversionRate: '57%', description: 'Adozione su tutta la rete commerciale della banca.' },
    ] as FunnelStage[],
  },

  socialContent: {
    status: 'VERIFIED' as const,
    formats: [
      {
        id: 'format-1',
        name: '1. Il momento esatto',
        channel: 'LinkedIn Carosello (1080 × 1350)',
        hook: 'Il cliente chiede il 12% di sconto. Che cosa rispondi?',
        structure: 'Slide 1 su campo: domanda provocatoria. Slide 2-4 su paper: tre risposte possibili con punteggi in JetBrains Mono. Slide 5: riscontro del coach con il minuto esatto.',
        copyText: `Il 12% di sconto chiesto al rinnovo.

Tre risposte possibili:
1. «Posso farle il 10% subito se chiudiamo venerdì.» → Punteggio 3,1 (hai ceduto troppo presto)
2. «Il listino è questo, devo sentire la direzione.» → Punteggio 2,4 (chiusura passiva)
3. «Prima di parlare di cifre, possiamo rivedere i 42.000 € di risparmio generati?» → Punteggio 4,6 (ancoraggio al valore)

Tu quale daresti?
Rispondi nei commenti, domani pubblichiamo l'analisi del coach.

#Coach #B2BSales #FormazioneAziendale #Negoziazione`,
      },
      {
        id: 'format-2',
        name: '2. Prima e dopo',
        channel: 'Video Verticale 9:16 (30 secondi)',
        hook: 'Un consulente affronta Giulia due volte.',
        structure: '0-3s testo grande su volt: "Tentativo 1". 3-12s role play esitante, punteggio 2,4. 12-15s stacco su campo: "Tentativo 11". 15-25s risposta sicura, punteggio 4,6 che sale con l\'anello. 25-30s logo negativo e payoff.',
        copyText: `Tentativo 1: cede il 10% in 4 secondi. Punteggio 2,4.
Tentativo 11: ancora i 42.000 € di margine con tono fermo. Punteggio 4,6.

La differenza non è il talento: sono 10 prove fatte dove non vede nessuno.

Allenati prima che conti.

#Coach #SalesEnablement #AI #Banche`,
      },
      {
        id: 'format-3',
        name: '3. Il numero della settimana',
        channel: 'Post Quadrato (1080 × 1080)',
        hook: '«11» role play fatti prima della prima telefonata vera.',
        structure: 'Numero 11 gigante in JetBrains Mono su sfondo volt. Spiegazione sotto in Archivo: "role play fatti da un neoassunto prima della sua prima vera telefonata". Logo in basso a destra.',
        copyText: `11.

Sono i role play che un neoassunto completa con Coach prima di parlare con il primo cliente reale.

In aula ascolta e annuisce.
In palestra sbaglia 11 volte, riceve il riscontro al secondo esatto, ed entra pronto.

#Coach #Onboarding #B2B #HR`,
      },
    ],
  },
};
