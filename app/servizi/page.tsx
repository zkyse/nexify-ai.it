export default function ServiziPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazioni Nexify: Fluttuazione e Rotazione Micro */}
      <style>{`
        @keyframes servicesFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes servicesFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-0.5deg); }
        }
      `}</style>

      {/* Sfondo Astratto */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[800px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_75%)]" />

      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        
        {/* Intestazione */}
        <div className="mb-20 text-center lg:text-left border-b border-gray-800 pb-12">
          <h1 className="mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            I Nostri Servizi
          </h1>
          <p className="max-w-3xl text-lg font-medium text-indigo-100/60 leading-relaxed">
            Sviluppiamo agenti intelligenti e pipeline di automazione che trasformano il modo in cui la tua azienda trova, qualifica e gestisce i clienti.
          </p>
        </div>

        {/* Griglia Servizi - 4 Colonne su schermi grandi */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Servizio 1: Lead Gen & Data Mining */}
          <div className="group rounded-3xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] [animation:servicesFloat_6s_ease-in-out_infinite]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Ricerca Lead & Data Mining</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Scansione automatica del web per estrarre email, numeri di telefono e dati strategici di aziende e agenzie. Costruiamo database iper-targetizzati senza alcun intervento manuale.
            </p>
          </div>

          {/* Servizio 2: Qualification & Follow-up */}
          <div className="group rounded-3xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] [animation:servicesFloatReverse_5.5s_ease-in-out_infinite] [animation-delay:0.2s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Qualificazione & Follow-Up H24</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Analisi istantanea dell'intento dei lead tramite IA. Smistiamo le richieste, eliminiamo lo spam e inviamo risposte personalizzate immediate per non perdere mai un potenziale cliente.
            </p>
          </div>

          {/* Servizio 3: CRM & Chat Assistants */}
          <div className="group rounded-3xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(79,70,229,0.15)] [animation:servicesFloat_7s_ease-in-out_infinite] [animation-delay:0.4s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Sincronizzazione & Assistenti Chat</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Integrazione profonda con i vostri CRM e sistemi di messaggistica. Automatizziamo il passaggio dei dati e creiamo assistenti WhatsApp/Chat capaci di interagire in modo naturale.
            </p>
          </div>

          {/* NUOVO Servizio 4: Agenti IA su Misura */}
          <div className="group rounded-3xl border border-indigo-500/30 bg-gray-950/60 p-6 backdrop-blur-xl transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_40px_rgba(79,70,229,0.25)] [animation:servicesFloatReverse_6.2s_ease-in-out_infinite] [animation-delay:0.6s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 group-hover:scale-110 transition-transform">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Agenti IA su Misura</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              Hai un flusso unico o un software proprietario? Progettiamo e addestriamo agenti autonomi basati sulle tue specifiche direttive per risolvere colli di bottiglia aziendali complessi ed esclusivi.
            </p>
          </div>

        </div>

        {/* Sezione Infrastruttura IA */}
        <div className="mt-32 rounded-[3rem] border border-gray-800 bg-indigo-950/5 p-10 lg:p-20 text-center">
          <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl tracking-tight">Non solo strumenti, ma ecosistemi intelligenti</h2>
          <p className="mx-auto max-w-2xl text-gray-400 leading-relaxed mb-12">
            Ogni nostro servizio è progettato per essere interconnesso. La lead generation alimenta la qualificazione, che a sua volta aggiorna il CRM e attiva l'assistente chat. Un ciclo continuo di efficienza.
          </p>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="/contatti" 
              className="rounded-full bg-indigo-600 px-10 py-4 text-sm font-bold text-white transition hover:bg-indigo-500 hover:scale-105 active:scale-95"
            >
              Richiedi una Demo dei Flussi
            </a>
            <a 
              href="/il-nostro-metodo" 
              className="text-sm font-semibold text-gray-400 hover:text-white transition"
            >
              Scopri il nostro metodo &rarr;
            </a>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
          <a href="/" className="text-xs font-semibold text-gray-700 hover:text-indigo-400 transition tracking-[0.2em] uppercase">
            &larr; Torna alla Home
          </a>
        </div>

      </div>
    </main>
  );
}
