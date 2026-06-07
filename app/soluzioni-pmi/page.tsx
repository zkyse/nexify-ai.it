export default function SoluzioniPMIPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione combinata di fluttuazione e rotazione lieve specifica per le PMI */}
      <style>{`
        @keyframes pmiFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.4deg); }
        }
        @keyframes pmiFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-0.4deg); }
        }
      `}</style>

      {/* Sfondo decorativo con gradiente radiale indaco */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[650px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        
        {/* Header Sezione PMI */}
        <div className="mb-20 border-b border-gray-800 pb-12 text-center lg:text-left">
          <h1 className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Soluzioni per PMI
          </h1>
          <p className="max-w-2xl text-lg font-medium text-indigo-200/70 leading-relaxed">
            Automazioni intelligenti pensate per far crescere le Piccole e Medie Imprese. Ottimizza le risorse, elimina le attività ripetitive e focalizzati sul valore del tuo business.
          </p>
        </div>

        {/* Griglia delle Soluzioni - Card Fluttuanti e Asincrone */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Lead Qualification Automatica */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:pmiFloat_5s_ease-in-out_infinite]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Qualificazione Lead H24</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Basta perdere tempo con contatti non in target. I nostri agenti IA filtrano, profilano e scaldano i potenziali clienti in arrivo dal sito o dalle ads, lasciando al tuo team solo la chiusura commerciale.
            </p>
          </div>

          {/* Card 2: Integrazione WhatsApp & CRM */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:pmiFloatReverse_5.6s_ease-in-out_infinite] [animation-delay:0.3s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Sincronizzazione Canali</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Colleghiamo le chat di WhatsApp, le email e i form direttamente al tuo CRM. Ogni interazione aggiorna automaticamente lo stato del cliente, eliminando i copia-incolla manuali sui fogli di calcolo.
            </p>
          </div>

          {/* Card 3: Automazione Preventivi e Documenti */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] [animation:pmiFloat_6.2s_ease-in-out_infinite] [animation-delay:0.6s]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white tracking-tight">Fatturazione e Preventivi</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Generazione automatica di contratti ricorsivi, solleciti di pagamento intelligenti e bozze di preventivi basati sui dati storici. Meno burocrazia interna, più velocità operativa.
            </p>
          </div>

        </div>

        {/* Focus sul ROI per le PMI */}
        <div className="mt-24 rounded-3xl border border-gray-800 bg-indigo-950/10 p-10 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white tracking-tight">Liberiamo ore di lavoro, ogni singolo giorno</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Nelle aziende di medie e piccole dimensioni, il tempo speso dietro alla burocrazia digitale o a rincorrere i dati è il freno principale alla crescita. Le nostre soluzioni si ripagano da sole già nei primi mesi di rilascio.
              </p>
              <ul className="space-y-3 text-sm text-indigo-200/80">
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 font-bold">✓</span> Zero stravolgimenti: usiamo i software che già utilizzi
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 font-bold">✓</span> Monitoraggio costante dei flussi su Make
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-indigo-400 font-bold">✓</span> Supporto e ottimizzazione continua post-rilascio
                </li>
              </ul>
            </div>
            
            {/* Box Metrica Evidenziata */}
            <div className="rounded-2xl border border-gray-800/80 bg-gray-900/40 p-8 text-center backdrop-blur-sm">
              <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Risparmio Medio Stimato</div>
              <div className="text-5xl font-extrabold text-white tracking-tight mb-2">+120 Ore</div>
              <div className="text-sm text-gray-400">al mese liberate per dipendente dalle mansioni ripetitive.</div>
            </div>
          </div>
        </div>

        {/* Sezione Interattiva di Chiusura */}
        <div className="mt-20 flex flex-col items-center border-t border-gray-900 pt-12">
          <p className="text-gray-500 text-sm mb-6 text-center">Vuoi capire quali processi della tua azienda possono essere automatizzati?</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a 
              href="/contatti" 
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white text-center transition hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              Richiedi una Consulenza Gratuita
            </a>
            <a 
              href="https://wa.me/message/Y7G7NANQK6ACA1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 bg-gray-950/40 px-8 py-3.5 text-sm font-bold text-white text-center transition hover:border-gray-500 hover:bg-gray-900"
            >
              Parla su WhatsApp
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
