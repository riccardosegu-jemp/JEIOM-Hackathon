> **Pacchetto di marca di Coach** per chi costruisce il sito.
> - `LEGGIMI.md` (questo file): la guida completa. Puoi darlo così com'è a Claude o ChatGPT insieme al prompt della sezione «Il sito vibecodato».
> - `coach.css`: colori, caratteri e componenti pronti. Basta collegarlo alla pagina.
> - `esempi.html`: aprilo nel browser per vedere logo, colori e componenti.
> - `logo/`: i quattro file del logo in SVG.

# Coach

**Allenati prima che conti.**

Coach è un formatore AI personale per ogni dipendente. L'azienda carica un listino o una procedura; un docente AI la spiega a voce; un avatar in video fa il cliente, il collega o il compratore che chiede lo sconto; un coach dà il voto. Chi dirige vede chi migliora, mentre succede.

Questa è l'identità di marca: chi siamo, come parliamo, come ci presentiamo. Vale per il sito, i post, la presentazione e qualsiasi cosa porti il nome Coach.

## L'idea in una riga

**Coach è la palestra delle conversazioni che contano.**

Le conversazioni difficili (lo sconto al rinnovo, il cliente arrabbiato, la valutazione annuale) si imparano come uno sport: ripetendo, con qualcuno che ti corregge nel momento esatto in cui sbagli. In aula si ascolta; in palestra ci si allena. Tutta l'identità parte da qui: il segno ad anello è un punteggio che cresce, il verde volt è il segnale che stai migliorando, l'arancio è la luce rossa del «si gira».

## A chi parliamo

| Chi | Che cosa gli interessa | Che cosa gli diciamo |
| --- | --- | --- |
| Direttore del personale / HR | Formazione che non resti un costo, adesione dei dipendenti, fondi interprofessionali | «Una formazione che si misura, persona per persona. E si può finanziare con Fondimpresa.» |
| Direttore vendite | Tempo di ingresso dei nuovi, tenuta del listino, sconti concessi | «I tuoi venditori provano il rinnovo dieci volte prima di farlo davvero.» |
| Responsabile formazione | Contenuti sempre aggiornati, meno ore d'aula, dati da portare al capo | «Carichi il listino nuovo oggi, domani ci si allena già.» |
| Il dipendente | Non fare brutta figura, imparare in fretta, in privato | «Sbaglia qui, dove non ti vede nessuno.» |

## Personalità

Coach è **un buon allenatore**: esigente ma dalla tua parte.

- **Diretto.** Frasi corte, verbi all'imperativo, nessun giro di parole.
- **Concreto.** Parla di situazioni vere (il rinnovo, il listino, la prima telefonata), non di «competenze trasversali».
- **Misurabile.** Ogni promessa ha un numero accanto: minuti, punteggi, ripetizioni.
- **Incoraggiante.** Il voto serve a migliorare, mai a giudicare. «Ancora una volta» è il nostro tono.

Non siamo: una startup che grida «rivoluzione», un robot freddo, un corso online noioso.

## Logo

Il logo è la parola **coach** in un tratto unico e arrotondato. La «o» è il **segno**: un anello di progresso quasi completo, con un punto all'estremità. È il punteggio che sale e, insieme, la persona che sta parlando.

- **Logo principale** (`coach-logo.svg`): inchiostro con punto arancio pista, su paper o card.
- **Logo negativo** (`coach-logo-negativo.svg`): carta con punto volt, su campo o su fondo scuro.
- **Segno** (`coach-segno.svg`): l'anello da solo, per spazi piccoli, favicon, avatar social.
- **Icona app** (`coach-icona-app.svg`): segno chiaro con punto volt su riquadro campo.

Regole:

- Lascia attorno al logo almeno l'altezza della «o» libera da testo e immagini.
- Larghezza minima: 96px per il logo, 16px per il segno.
- Il punto è sempre di un colore diverso dall'anello: pista sul chiaro, volt sullo scuro.
- Non ruotare l'anello, non riempirlo, non deformare la parola, non metterla su foto senza un fondo pieno.
- Sul volt il logo va solo in inchiostro, punto compreso.

## Colori

Due colori di marca, un accento, e una base calda di carta e inchiostro.

| Ruolo | Token | Quando |
| --- | --- | --- |
| Base | `paper`, `card`, `ink` | Il 70% di ogni schermata: carta calda e inchiostro quasi nero. |
| Marca | `volt` | Il segnale di progresso. Grandi campiture, il bottone principale, l'evidenziatore sotto la parola chiave del titolo. Circa il 15%. |
| Marca | `campo` | Il verde scuro del campo di allenamento: sezioni scure, piè di pagina, barre di progresso sul chiaro. Circa il 15%. |
| Accento | `pista` | Solo per «dal vivo»: il punto del logo, il pallino di registrazione, il badge «In corso». Uno per schermata. |

Regole:

- **Il volt non è un colore da testo** sul chiaro: sopra ci va `on-volt`; per un testo verde si usa `volt-text`.
- **Volt su campo** è l'accoppiata più riconoscibile del marchio: usala per l'apertura del sito e per i post.
- I punteggi e le barre usano `meter` (campo sul chiaro, volt sullo scuro): non servono rosso e verde per dire «bene» e «male», basta la lunghezza della barra e il numero.
- Niente sfumature, niente gradienti viola-blu, niente neon: colori pieni.

## Tipografia

Tre caratteri, tutti gratuiti su Google Fonts.

- **Archivo** (800 e 700) per i titoli: compatto, sportivo, con le spalle larghe.
- **Instrument Sans** (400 e 600) per il testo: pulito e leggibile anche piccolo.
- **JetBrains Mono** (500 e 700) per i numeri: punteggi, cronometri, KPI. Le cifre hanno tutte la stessa larghezza, come su un tabellone.

Da incollare nel `<head>` del sito:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Instrument+Sans:wght@400;600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

Regole:

- Titoli in Archivo 800, interlinea stretta, una sola idea per titolo. Una parola chiave può stare su un evidenziatore volt.
- I numeri si scrivono all'italiana: **4,2** e non 4.2; **3h 20m**; **50.000 €**.
- Occhielli in maiuscolo spaziato (stile `label`), mai titoli interi in maiuscolo.

## Forme

Tutto viene dall'anello del logo: angoli arrotondati, bottoni a pillola, barre con le estremità tonde.

- Bottoni, chip e barre: `radius-pill`.
- Schede e riquadri video: `radius-md`.
- Grandi campiture colorate: `radius-lg`.
- Le schede si separano con un filetto `line`, non con l'ombra. L'ombra (`shadow-lift`) solo per ciò che galleggia, come la finestra del role play.
- Motivo grafico: archi e anelli di progresso, in volt su campo o in campo su paper. Mai più di un motivo per composizione.

## Icone

[Lucide](https://lucide.dev), tratto 2px, angoli arrotondati: lo stesso tratto del logo. Colore `ink` o `ink-muted`; in volt solo sopra campo. Icone utili: `mic`, `video`, `play`, `message-circle`, `target`, `trending-up`, `users`, `file-text`, `bar-chart-3`, `timer`.

Niente icone di cervelli, robot, lampadine o strette di mano.

## Immagini

- **Persone vere al lavoro, in conversazione**: al telefono, a una scrivania, davanti a un cliente. Inquadrature strette, luce naturale.
- Gli avatar si mostrano dentro il riquadro video del role play (componente RoleplayCard), mai come «faccia» del marchio.
- Da evitare: strette di mano, sale riunioni vuote, persone che indicano uno schermo, robot, circuiti, cervelli luminosi.

## Le personas degli avatar

Gli avatar hanno un nome e un carattere. Un personaggio si ricorda più di una funzione: usali nel sito, nei post e nella demo.

| Avatar | Chi fa | La frase tipica |
| --- | --- | --- |
| **Giulia**, buyer della grande distribuzione | Il rinnovo con richiesta di sconto | «Il vostro concorrente mi fa il 12%. Voi?» |
| **Marco**, cliente arrabbiato | Il disservizio da spiegare | «È la terza volta che chiamo.» |
| **Elena**, collaboratrice | La valutazione annuale, il riscontro difficile | «Pensavo di aver fatto un buon anno.» |
| **Paolo**, il primo cliente | La prima telefonata del neoassunto | «Mi spieghi in due minuti che cosa fate.» |


---

# Voce e messaggi

## I messaggi pronti

- **Payoff:** Allenati prima che conti.
- **Posizionamento:** La palestra delle conversazioni che contano.
- **In una frase:** Coach trasforma i listini e le procedure di un'azienda in allenamenti: un docente AI li spiega a voce, un avatar in video fa il cliente, un coach dà il voto. Chi dirige vede chi è pronto.
- **Per HR:** Formazione che si misura, persona per persona.
- **Per le vendite:** Prova il rinnovo dieci volte prima di farlo davvero.
- **Per la formazione:** Carichi il listino oggi, domani ci si allena.
- **Per il dipendente:** Sbaglia qui, dove non ti vede nessuno.
- **Contro l'aula:** L'aula ti dice come si fa. Coach ti dice se lo sai fare.

## I quattro passi, sempre con queste parole

1. **Carica.** Un listino, una procedura, una scheda prodotto.
2. **Impara.** Un docente AI la spiega a voce. Puoi interromperlo e chiedere.
3. **Allenati.** Role play in video con un avatar che fa il cliente, il collega o il collaboratore.
4. **Migliora.** Ogni role play prepara il successivo, finché sei pronto.

## Come scriviamo

| Sì | No |
| --- | --- |
| Allenati sul rinnovo prima della riunione. | Potenzia le tue competenze negoziali con l'intelligenza artificiale. |
| Il riscontro arriva al minuto 03:52, dove hai ceduto sullo sconto. | Ricevi feedback personalizzati e actionable. |
| 11 role play questa settimana, punteggio medio 4,2. | Monitora le performance del team in modo efficace. |
| Sbaglia qui, dove non ti vede nessuno. | Un ambiente sicuro e inclusivo per la crescita. |
| Si aggiorna il giorno dopo. | Una soluzione scalabile e all'avanguardia. |

Regole veloci:

- **Tu**, non «voi» né «lei», con il dipendente e anche con il manager.
- **Verbi all'imperativo** nei bottoni: «Prova un role play», «Guarda la demo», «Calcola il risparmio». Mai «Scopri di più».
- **Un numero in ogni promessa.** Se non abbiamo un dato, scriviamo che è un'ipotesi.
- **Parole nostre:** allenamento, role play, pronto, riscontro, punteggio, squadra, momento esatto, ancora una volta.
- **Parole vietate:** rivoluzionario, potenziato dall'AI, all'avanguardia, sinergia, upskilling, gamification, game changer, soluzione a 360°.
- «AI» si scrive così, maiuscolo, e non è mai il soggetto della frase: il soggetto è la persona che si allena.

## Il voto, scritto bene

Il coach dà il voto in modo che si possa rifare meglio subito:

> **03:52 · Hai ceduto troppo presto.** Giulia ha chiesto il 12% e hai offerto il 10% in quattro secondi. La prossima volta chiedi prima su quali volumi ragiona.
> **Punteggio 3,1 → riprova il rinnovo**

Struttura: momento esatto, che cosa è successo, che cosa fare la prossima volta. Mai un giudizio sulla persona.


---

# Contenuti social

Coach parla a chi compra formazione, quindi il canale principale è **LinkedIn**, con video verticali riusati su **Instagram** e **YouTube Shorts** per la notorietà. Tre formati fissi, riconoscibili a colpo d'occhio.

## 1. Il momento esatto (carosello LinkedIn, 1080 × 1350)

Una conversazione difficile raccontata slide per slide, con il voto del coach alla fine.

- **Slide 1** su campo, titolo in Archivo volt: «Il cliente chiede il 12% di sconto. Che cosa rispondi?»
- **Slide 2–4** su paper: tre risposte possibili, ognuna con il suo punteggio in JetBrains Mono.
- **Slide 5**: il riscontro del coach con il minuto esatto, poi logo e «Allenati prima che conti».

Testo del post: «Il 12% di sconto chiesto al rinnovo. Tre risposte, tre punteggi. Tu quale daresti? Rispondi nei commenti, domani pubblichiamo il voto del coach.»

## 2. Prima e dopo (video verticale, 9:16, 30 secondi)

Un venditore affronta Giulia due volte.

- **0–3 s:** testo grande su volt: «Tentativo 1».
- **3–12 s:** il role play va male: risposta esitante, punteggio 2,4 in basso a destra.
- **12–15 s:** stacco su campo: «Tentativo 11».
- **15–25 s:** stessa domanda, risposta sicura, punteggio 4,6 che sale con l'anello di progresso.
- **25–30 s:** logo negativo su campo, «Allenati prima che conti.»

Sottotitoli sempre attivi, in Instrument Sans 600, bianco su fascia campo.

## 3. Il numero della settimana (post quadrato, 1080 × 1080)

Un solo numero grande in JetBrains Mono su volt, una riga di spiegazione sotto in Archivo. Esempio: **«11»** e sotto «role play fatti da un neoassunto prima della sua prima vera telefonata». Se il numero è un'ipotesi, si scrive in piccolo in fondo: «Dato ipotetico».

## Regole per tutti i post

- Un'idea per post, un colore di marca dominante (volt **o** campo), l'arancio pista solo per il pallino «dal vivo».
- Il logo sempre nell'angolo in basso a destra, mai al centro.
- Gli avatar compaiono dentro il riquadro video con il cronometro, così si capisce che è un allenamento.
- Ritmo suggerito: 3 post a settimana su LinkedIn (martedì, mercoledì, giovedì mattina), 2 video verticali.


---

# Il sito vibecodato

## La landing, sezione per sezione

Il sito si giudica dal telefono in cinque secondi: l'apertura deve dire che cosa fa Coach e far vedere un role play.

1. **Apertura** su `campo`. Occhiello «Formazione AI per chi vende e chi gestisce persone». Titolo `display-xl`: «Allenati **prima che conti**.» con «prima che conti» su evidenziatore volt. Sotto, in `lead`: «Un formatore AI per ogni dipendente: spiega il tuo listino a voce, fa la parte del cliente in video e dà il voto.» Bottone volt «Prova un role play» e bottone secondario «Guarda la demo». A destra (sotto, sul telefono) una RoleplayCard con Giulia.
2. **Il problema**, tre numeri su paper: quanto costa l'aula, quanto si dimentica, quanto ci mette un neoassunto a essere pronto. Ogni numero con la fonte o con scritto «ipotesi».
3. **Come funziona**: i quattro Step.
4. **Un allenamento che sembra vero**: RoleplayCard accanto a CoachFeedback e SkillMeter.
5. **Chi dirige vede chi migliora**: tre StatTile e il bottone «Esporta in Excel».
6. **Per chi**: chip dei settori e quattro schede (Vendite, Servizio clienti, Manager, Neoassunti) con una situazione tipica ciascuna.
7. **Si può finanziare**: una fascia su volt che spiega Fondimpresa in tre righe, con bottone campo «Scopri se la tua azienda può».
8. **Prezzo**: per dipendente al mese, con un esempio di calcolo.
9. **Chiusura** su campo con il logo negativo e il payoff.

## Le variabili da incollare

```css
:root{
  --paper:#f4f2ec; --card:#ffffff; --sunk:#e8e5dc;
  --ink:#111311; --ink-muted:#565a52; --line:#dcd8cd; --line-strong:#7d8177;
  --volt:#c6f432; --on-volt:#111311; --volt-text:#4a6400;
  --campo:#0d3b2e; --on-campo:#f4f2ec; --meter:#0d3b2e;
  --pista:#ff5a36; --pista-text:#c2381a;
  --font-display:"Archivo",sans-serif; --font-sans:"Instrument Sans",sans-serif; --font-mono:"JetBrains Mono",monospace;
  --radius-sm:8px; --radius-md:16px; --radius-lg:28px; --radius-pill:999px;
}
```

## Il prompt per costruirlo

Da incollare in Claude o ChatGPT, insieme a questa pagina:

> Costruisci una landing page responsive in un solo file HTML per **Coach**, un formatore AI personale per ogni dipendente (B2B). Usa esattamente queste variabili CSS e questi caratteri Google Fonts: Archivo 800 per i titoli, Instrument Sans per il testo, JetBrains Mono per i numeri. Fondo `--paper`, sezioni scure in `--campo`, colore di marca `--volt` solo per campiture, bottone principale ed evidenziatore; sopra il volt il testo è sempre `--ink`. Arancio `--pista` solo per il pallino «in corso». Bottoni a pillola, schede con raggio 16px e filetto `--line`, niente gradienti, niente emoji, niente icone di robot. Icone Lucide a tratto 2px. Segui le sezioni elencate, con questi testi in italiano. Deve funzionare prima di tutto da telefono (margini 16px, titolo d'apertura 44px), poi da desktop. Aggiungi una demo cliccabile del role play: l'avatar Giulia dice «Il vostro concorrente mi fa il 12%. Voi?», l'utente sceglie tra tre risposte e riceve il riscontro del coach con il minuto esatto e il punteggio su un anello di progresso.


---

# Componenti

Tutte le classi sono in `coach.css`; li vedi disegnati in `esempi.html`.

## Button

Il bottone di Coach è una pillola con un verbo all'imperativo: dice che cosa succede quando lo premi.

- `co-btn co-btn-primary` (volt): l'azione principale, **una sola per schermata**. Sul sito: «Prova un role play».
- `co-btn co-btn-secondary`: l'alternativa, con bordo `line-strong`.
- `co-btn co-btn-dark` (campo): l'azione principale quando il fondo è volt.
- `co-btn-sm`: versione compatta (36px) per schede e barre.

Testi: «Prova un role play», «Guarda la demo», «Calcola il risparmio», «Prenota una call». Mai «Scopri di più» o «Clicca qui». L'icona, se c'è, sta a destra ed è una freccia Lucide.

```html
<a class="co-btn co-btn-primary" href="#demo">Prova un role play</a>
```

## Chip

Etichetta corta a pillola per settori, ruoli e stati.

- `co-chip`: neutra, su `sunk`. Settori e filtri.
- `co-chip-campo`: il ruolo o l'area (Vendite, Servizio clienti, Manager, Neoassunti).
- `co-chip-volt`: un traguardo raggiunto («Pronto», «+0,8»).
- `co-chip-live`: il role play in corso, con il pallino arancio pista. Al massimo uno per schermata.

Una o due parole, mai frasi.

## ScoreRing

L'anello di punteggio: lo stesso segno della «o» del logo, riempito quanto vale il voto. È l'elemento più riconoscibile del prodotto: usalo nel sito, nella demo e nei post.

- Binario in `sunk`, riempimento in `meter` (campo sul chiaro, volt sullo scuro), punto finale in `pista`.
- Il numero al centro in JetBrains Mono, virgola decimale: **4,2** «su 5».
- Il colore non dice «bene» o «male»: lo dicono la lunghezza dell'anello e il numero.

Chi lo usa fornisce il valore da 0 a 5; l'anello si calcola come frazione della circonferenza (vedi lo script dell'anteprima).

## SkillMeter

La barra di una competenza, con il punteggio e il miglioramento dall'ultima sessione.

- Binario `sunk` alto 8px, riempimento `meter`, estremità tonde.
- Valore in JetBrains Mono; il miglioramento in `volt-text` con il segno «+».
- I peggioramenti non si colorano di rosso: si mostra solo il valore. Il tono è da allenatore, non da pagella.

Usala in gruppo (le competenze di un role play) dentro una scheda `card`.

## StatTile

Il riquadro di un numero: tempo di pratica, role play fatti, punteggio medio. È la vista di chi dirige.

- Occhiello `label`, numero in JetBrains Mono 44px, nota in `small` `ink-muted`.
- Il miglioramento in `volt-text` (o volt su campo).
- `co-stat-campo`: la variante scura, per il numero più importante della riga. Una per riga.

Nel sito, sotto la sezione «Chi dirige vede chi migliora». Se il numero è un'ipotesi, scrivilo nella nota.

## RoleplayCard

La scheda del role play: il riquadro video con l'avatar, il cronometro, la frase che l'avatar ha appena detto e le azioni.

- Riquadro video su `campo`; al posto del video vero, un cerchio volt con l'iniziale dell'avatar (nella demo si può usare un video o una foto).
- In alto il chip «In corso» (pista) e il cronometro in JetBrains Mono.
- In basso la battuta dell'avatar, tra virgolette basse «».
- Sotto: occhiello con area e avatar, titolo dello scenario, al massimo due azioni.

È l'unico componente con l'ombra `shadow-lift`, perché nella demo galleggia sopra la pagina. Avatar e battute: vedi le personas nella pagina principale.

## CoachFeedback

Il riscontro del coach, legato al minuto esatto della conversazione.

Struttura fissa: **momento** (timestamp in `pista-text`) · **che cosa è successo** (titolo corto) · **che cosa fare la prossima volta** (una frase) · punteggio e invito a riprovare.

Il tono è quello di un allenatore: parla dell'azione, mai della persona. «Hai ceduto troppo presto», non «Non sei bravo a negoziare».

## Step

Un passo del «come funziona»: numero in un cerchio volt, verbo all'imperativo come titolo, una frase sotto.

Sono sempre quattro e sempre con queste parole: **Carica, Impara, Allenati, Migliora**. Su desktop in fila da quattro, sul telefono uno sotto l'altro.


---

# File del logo

Il logo è la parola «coach» a tratto unico; la «o» è un anello di progresso con un punto all'estremità.

- `coach-logo.svg`: inchiostro #111311 con punto pista #ff5a36. Su paper, card o foto con fondo chiaro pieno.
- `coach-logo-negativo.svg`: carta #f4f2ec con punto volt #c6f432. Su campo o su fondo scuro.
- `coach-segno.svg`: solo l'anello, per favicon, avatar dei profili social e spazi sotto i 96px.
- `coach-icona-app.svg`: anello chiaro e punto volt su riquadro campo arrotondato.

Margine libero attorno: l'altezza della «o». Larghezza minima 96px (logo) e 16px (segno).
