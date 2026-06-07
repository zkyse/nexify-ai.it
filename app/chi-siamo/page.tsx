export default function ChiSiamoPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      {/* Sfondo decorativo per coerenza con il brand */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Chi Siamo
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Nexify • Al servizio dell'efficienza e dell'innovazione aziendale
          </p>
        </div>

        {/* Contenuto Principale */}
        <div className="space-y-12 text-base leading-relaxed text-indigo-100/70">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">La Nostra Vision</h2>
            <p>
              In un panorama aziendale in continua e rapidissima evoluzione, il tempo è la risorsa più preziosa. 
              <strong> Nexify</strong> nasce con un obiettivo chiaro e ambizioso: liberare le Piccole e Medie Imprese (PMI) e i professionisti dal peso delle attività manuali, ripetitive e frammentate, trasformando la complessità operativa in flussi di lavoro fluidi, scalabili e intelligenti.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Cosa Facciamo</h2>
            <p>
              Non ci limitiamo a installare software o a proporre strumenti tecnologici fine a se stessi. Noi di Nexify <strong>ingegnerizziamo i processi aziendali</strong>. Analizziamo l'ecosistema di ogni cliente per connettere gestionali, CRM e piattaforme di comunicazione, inserendo soluzioni avanzate di Intelligenza Artificiale e automazione strategica (tramite piattaforme leader come Make.com e API su misura).
            </p>
            <p>
              Dalla qualificazione autonoma dei lead alla gestione dei clienti H24 tramite assistenti WhatsApp intelligenti, sviluppiamo infrastrutture tecnologiche capaci di lavorare in autonomia, riducendo i costi di gestione e azzerando gli errori umani.
            </p>
          </section>

          {/* Sezione i Nostri Valori */}
          <section className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">I Nostri Pilastri</h2>
            <div className="grid gap-6 sm:grid-cols-3 text-sm">
              <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 backdrop-blur-sm">
                <h3 className="mb-2 font-semibold text-white">Ingegneria del Flusso</h3>
                <p className="text-gray-400 text-xs">Ogni automazione è progettata per essere solida, pulita e scalabile nel tempo.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 backdrop-blur-sm">
                <h3 className="mb-2 font-semibold text-white">IA Concreta</h3>
                <p className="text-gray-400 text-xs">Utilizziamo l'intelligenza artificiale solo dove porta un reale e misurabile ritorno economico.</p>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 backdrop-blur-sm">
                <h3 className="mb-2 font-semibold text-white">Trasparenza Totale</h3>
                <p className="text-gray-400 text-xs">Costruiamo ecosistemi di cui il cliente mantiene sempre il pieno controllo e la proprietà.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 border-t border-gray-800 pt-10">
            <h2 className="text-2xl font-bold text-white tracking-tight">Pronti a fare il salto di qualità?</h2>
            <p>
              Il futuro dei processi aziendali è automatico. Il nostro team è pronto ad affiancarti per analizzare la tua infrastruttura attuale e mappare i colli di bottiglia che frenano la tua crescita.
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
