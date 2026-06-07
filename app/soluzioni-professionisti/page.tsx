export default function SoluzioniProfessionistiPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione combinata di fluttuazione e rotazione per Professionisti */}
      <style>{`
        @keyframes profFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-0.5deg); }
        }
        @keyframes profFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.5deg); }
        }
      `}</style>

      {/* Sfondo decorativo radiale */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[650px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        
        {/* Header Sezione Professionisti */}
        <div className="mb-20 border-b border-gray-800 pb-12 text-center lg:text-left">
          <h1 className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Soluzioni per Professionisti
          </h1>
          <p className="max-w-2xl text-lg font-medium text-indigo-200/70 leading-relaxed">
            Automazioni e assistenti virtuali su misura per Freelance, Consulenti e Studi Professionali. Delega la burocrazia all'Intelligenza Artificiale e riprenditi il tuo tempo.
          </p>
        </div>

        {/* Griglia delle Soluzioni - Card Fluttuanti */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Onboarding & Booking automatico */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:profFloat_4.8s_ease-in-out_infinite]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Gestione Appuntamenti</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Sincronizza i tuoi form e calendari (Calendly/Google Calendar). L'IA invia promemoria personalizzati su WhatsApp, raccoglie i dati pre-consulenza e prepara i link per le videocall senza muovere un dito.
            </p>
          </div>

          {/* Card 2: Reportistica & Note con IA */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:profFloatReverse_5.4s_ease-in-out_infinite] [animation-delay:0.2s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Report e Sintesi Riunioni</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Trasforma le registrazioni delle tue call con i clienti in riassunti strutturati, to-do list operative ed email di follow-up pronte da inviare, risparmiando ore di lavoro per ogni singola riunione.
            </p>
          </div>

          {/* Card 3: Second Brain & Ricerca Rapida */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:profFloat_6s_ease-in-out_infinite] [animation-delay:0.5s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Knowledge Base Privata</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Organizziamo i tuoi materiali di studio, normative o vecchi progetti in un database intelligente interrogabile. Trova risposte o genera nuove idee partendo dal tuo storico in pochi secondi.
            </p>
          </div>

        </div>

        {/* Box focalizzato sulla produttività individuale */}
        <div className="mt-24 rounded-3xl border border-gray-800 bg-indigo-950/10 p-10 lg:p-16 text-center lg:text-left">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white tracking-tight">Smetti di scambiare tutto il tuo tempo per denaro</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Da professionista, la tua risorsa più scarsa è il tempo. Automatizzando i task ripetitivi di segretariato, follow-up e data-entry, puoi accogliere più clienti o semplicemente goderti più tempo libero, mantenendo la stessa qualità operativa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800/80 bg-gray-900/40 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-400">100%</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Autonomia dei Workflow</div>
              </div>
              <div className="rounded-xl border border-gray-800/80 bg-gray-900/40 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-400">-50%</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Tempo di Amministrazione</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Finali */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-6 italic">Crea la tua infrastruttura di lavoro asincrona</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a 
              href="/contatti" 
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black text-center transition hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-xl"
            >
              Ottimizza il tuo Business
            </a>
          </div>
          <a href="/" className="mt-12 text-xs font-semibold text-gray-600 hover:text-indigo-400 transition tracking-widest uppercase">
            &larr; Torna alla Home
          </a>
        </div>

      </div>
    </main>
  );
}
