export default function CookiePolicyPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      {/* Sfondo decorativo per coerenza con il brand */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Nexify Automation Agency • Ultimo aggiornamento: Giugno 2026
          </p>
        </div>

        {/* Contenuto Legale */}
        <div className="space-y-12 text-sm leading-relaxed text-indigo-100/70">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Questo sito (nexify-ai.it) utilizza i cookie per migliorare l'esperienza di navigazione e ottimizzare le performance dei nostri sistemi.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Tipologie di Cookie utilizzati</h2>
            <p>
              Nel nostro ecosistema digitale utilizziamo esclusivamente le seguenti categorie di cookie:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Cookie Tecnici e Strettamente Necessari:</strong> Essenziali per il corretto funzionamento del sito, per permetterti l'autenticazione in aree protette o per salvare le tue preferenze di base.</li>
              <li><strong>Cookie di Performance e Analitici:</strong> Raccolgono informazioni in forma anonima e aggregata su come i visitatori interagiscono con il sito (pagine più visitate, tempi di permanenza), al solo scopo di migliorare la struttura web.</li>
              <li><strong>Cookie di Terze Parti:</strong> Elementi integrati da piattaforme esterne per funzionalità specifiche, come i widget dei social network o i sistemi di tracciamento dei pagamenti sicuri forniti da <strong>Stripe</strong>.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Gestione e Disattivazione dei Cookie</h2>
            <p>
              L'utente può scegliere in qualsiasi momento di limitare, bloccare o cancellare i cookie modificando le impostazioni del proprio browser web. Ti ricordiamo che la disattivazione dei cookie tecnici potrebbe compromettere la corretta visualizzazione o l'utilizzo di alcune funzionalità del sito Nexify.
            </p>
            <p>
              Di seguito i link ai principali browser per la gestione delle preferenze:
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4 text-indigo-400">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/windows/gestire-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="space-y-4 border-t border-gray-800 pt-10">
            <h2 className="text-xl font-bold text-white">4. Titolare del Trattamento e Contatti</h2>
            <p>
              Il titolare del trattamento dei dati è Nexify. Per qualunque domanda o richiesta di chiarimento in merito all'utilizzo dei cookie su questo sito, puoi contattarci direttamente attraverso i canali ufficiali o prenotando una sessione di consulenza dal modulo presente in Home Page.
            </p>
          </section>

        </div>

        {/* Pulsante Torna alla Home */}
        <div className="mt-20">
          <a 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
            Torna alla Home
          </a>
        </div>
      </div>
    </main>
  );
}
