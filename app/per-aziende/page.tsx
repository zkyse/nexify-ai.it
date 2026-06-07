export default function SoluzioniGrandiAziendePage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione combinata di fluttuazione e rotazione lieve per il segmento Enterprise */}
      <style>{`
        @keyframes enterpriseFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.3deg); }
        }
        @keyframes enterpriseFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-0.3deg); }
        }
      `}</style>

      {/* Sfondo decorativo con gradiente profondo */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[700px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        
        {/* Header Sezione Enterprise */}
        <div className="mb-20 border-b border-gray-800 pb-12 text-center lg:text-left">
          <h1 className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Soluzioni Enterprise
          </h1>
          <p className="max-w-2xl text-lg font-medium text-indigo-200/70 leading-relaxed">
            Integrazione di Intelligenza Artificiale e Orchestrazione di Workflow su larga scala per organizzazioni che esigono efficienza, sicurezza e scalabilità.
          </p>
        </div>

        {/* Griglia dei Servizi Enterprise - Card Fluttuanti */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Orchestrazione Legacy & ERP */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:enterpriseFloat_5.5s_ease-in-out_infinite]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Orchestrazione Sistemi</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Connettiamo i vostri ERP e CRM legacy ad ecosistemi IA moderni, centralizzando il flusso di dati e automatizzando i processi inter-dipartimentali complessi.
            </p>
          </div>

          {/* Card 2: AI Governance & Security */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:enterpriseFloatReverse_6s_ease-in-out_infinite] [animation-delay:0.4s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Governance & Sicurezza</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Soluzioni IA progettate con standard di sicurezza enterprise. Garantiamo la protezione della proprietà intellettuale e la conformità alle policy di data privacy interne.
            </p>
          </div>

          {/* Card 3: Scalabilità & Infrastruttura */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:enterpriseFloat_6.5s_ease-in-out_infinite] [animation-delay:0.8s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Performance Scalabile</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Infrastrutture cloud robuste capaci di gestire volumi di richieste elevati, garantendo uptime critico e risposte in tempo reale per migliaia di utenti simultanei.
            </p>
          </div>

        </div>

        {/* Sezione Metriche di Impatto */}
        <div className="mt-24 rounded-3xl border border-gray-800 bg-indigo-950/10 p-10 lg:p-16 text-center lg:text-left">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white tracking-tight">L'impatto Nexify sulla grande organizzazione</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Non ci limitiamo a implementare tecnologia: trasformiamo il costo operativo in vantaggio competitivo, permettendo ai vostri talenti di concentrarsi sulla strategia anziché sulla gestione dei dati.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-indigo-400">-45%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Costi Operativi</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-indigo-400">x5</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Velocità di Esecuzione</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl font-bold text-indigo-400">100%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Data Ownership</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              {/* Elemento grafico decorativo astratto */}
              <div className="h-64 w-64 rounded-full border border-indigo-500/20 bg-indigo-500/5 blur-3xl" />
              <div className="absolute h-48 w-48 rounded-full border border-indigo-400/30 animate-pulse bg-indigo-500/10" />
            </div>
          </div>
        </div>

        {/* Call to Action Enterprise */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-6 italic">Richiedi un'analisi di fattibilità per la tua infrastruttura aziendale</p>
          <a 
            href="/contatti" 
            className="rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-xl"
          >
            Contatta il Team Nexify
          </a>
          <a href="/" className="mt-8 text-xs font-semibold text-gray-600 hover:text-indigo-400 transition tracking-widest uppercase">
            &larr; Torna alla Home
          </a>
        </div>

      </div>
    </main>
  );
}
