"use client";

import Link from "next/link";

export default function DataMiningPage() {
  const benefici = [
    {
      titolo: "Targeting Chirurgico",
      descrizione: "Non semplici liste, ma dati filtrati per intenzione d'acquisto, settore di nicchia e ruolo decisionale. Trova esattamente chi sta cercando te.",
      icona: "🎯"
    },
    {
      titolo: "Dati Verificati 100%",
      descrizione: "I nostri sistemi validano email e contatti in tempo reale, eliminando i bounce rate e garantendo che ogni lead sia raggiungibile.",
      icona: "✅"
    },
    {
      titolo: "Scalabilità Massiva",
      descrizione: "Mentre un umano può trovare 50 lead al giorno, i nostri script di mining ne processano migliaia in pochi minuti, 24 ore su 24.",
      icona: "🚀"
    },
    {
      titolo: "Intelligence Competitiva",
      descrizione: "Monitora automaticamente i movimenti della concorrenza, variazioni di prezzo o nuovi trend di mercato estratti direttamente dal web.",
      icona: "🌐"
    }
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 bg-[#02040a] text-gray-100">
      
      {/* INIEZIONE DI TUTTI I KEYFRAMES IDENTICI ALLA HERO */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cosmicNebulaPerfect {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(2%, 4%, 0) rotate(90deg); }
          100% { transform: translate3d(0, 0, 0) rotate(180deg); }
        }
        @keyframes gridPanPerfect {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-40px, -40px, 0); }
        }
        @keyframes cardPopInUp {
          0% { opacity: 0; transform: translate3d(0, 12px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes techRainLuminous {
          0% { transform: translate3d(0, -120%, 0); }
          100% { transform: translate3d(0, 110vh, 0); }
        }
        @keyframes pulseButtonHero { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); box-shadow: 0 4px 20px rgba(168,85,247,0.4); } }

        .animate-card {
          opacity: 0;
          animation: cardPopInUp 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        .animate-auto-hero-primary { animation: pulseButtonHero 3s ease-in-out infinite; }
        
        .rain-stream {
          position: absolute;
          top: 0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          writing-mode: vertical-rl;
          text-orientation: uppercase;
          white-space: nowrap;
          user-select: none;
          animation: techRainLuminous linear infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
          letter-spacing: 0.25em;
          font-weight: 700;
        }
      `}} />

      {/* STRATO PIOGGIA CONCEPTUALE (PERSONALIZZATA DATA MINING) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="rain-stream left-[6%] text-[#a855f7]/15 text-[8px] blur-[1px]" style={{ animationDuration: '22s', animationDelay: '2s' }}>DATABASE_SYNC</div>
        <div className="rain-stream left-[32%] text-[#6366f1]/15 text-[8px]" style={{ animationDuration: '19s', animationDelay: '0s' }}>DATA_EXTRACTION</div>
        <div className="rain-stream left-[58%] text-[#22d3ee]/10 text-[9px] blur-[2px]" style={{ animationDuration: '25s', animationDelay: '5s' }}>LEAD_VALIDATION</div>
        <div className="rain-stream left-[85%] text-[#c084fc]/15 text-[8px]" style={{ animationDuration: '20s', animationDelay: '1s' }}>CRM_FEED_AUTO</div>
        
        <div className="rain-stream left-[15%] text-[#38bdf8]/30 text-[10px]" style={{ animationDuration: '14s', animationDelay: '1.2s', textShadow: '0 0 4px rgba(56,189,248,0.2)' }}>SCRAPING_FLOW</div>
        <div className="rain-stream left-[72%] text-[#c084fc]/35 text-[11px]" style={{ animationDuration: '12s', animationDelay: '3s', textShadow: '0 0 4px rgba(192,132,252,0.2)' }}>TARGET_FOUND</div>
        
        <div className="rain-stream left-[45%] text-[#6366f1]/65 text-[14px]" style={{ animationDuration: '8s', animationDelay: '1.5s', textShadow: '0 0 10px rgba(99,102,241,0.5)' }}>LEAD_GEN_MAX</div>
        <div className="rain-stream left-[91%] text-[#38bdf8]/55 text-[13px]" style={{ animationDuration: '6s', animationDelay: '2.5s', textShadow: '0 0 8px rgba(56,189,248,0.4)' }}>PARSING_DYNAMICS</div>
      </div>

      {/* STRATO GRIGLIA PROSPETTICA */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 20s linear infinite", transform: "translateZ(0)" }} />
      </div>

      {/* STRATO NEBULOSE / NEON BLOB (ACCENTO PIÙ PURPLE) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-purple-600/10 blur-[100px]" style={{ animation: "cosmicNebulaPerfect 40s linear infinite", transform: "translateZ(0)" }} />
        <div className="absolute bottom-[-10%] right-[-20%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-indigo-600/6 blur-[110px]" style={{ animation: "cosmicNebulaPerfect 35s linear infinite reverse", transform: "translateZ(0)" }} />
      </div>

      {/* STRUTTURA CONTENUTI */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full relative z-10">
        
        {/* Torna alla Home */}
        <Link href="/" className="text-xs text-purple-300/70 hover:text-white transition-colors flex items-center gap-2 mb-10 group w-fit">
          <span className="transform group-hover:-translate-x-1 transition-transform inline-block">&lt;-</span> Torna alla Home
        </Link>

        {/* HERO SECTION */}
        <section className="space-y-4 mb-16 animate-card" style={{ animationDelay: '0.1s' }}>
          <span className="text-[10px] font-bold tracking-wider uppercase text-purple-400 bg-gray-900/90 border border-gray-800/70 rounded-full px-3 py-1">
            Lead Generation
          </span>
          <h1 className="bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl sm:text-5xl font-bold text-transparent tracking-tight leading-[1.1]">
            Ricerca Lead & Data Mining
          </h1>
          <p className="text-base md:text-lg text-purple-200/65 max-w-3xl leading-relaxed">
            Smettila di cercare database obsoleti o profili manualmente. Utilizziamo algoritmi avanzati per estrarre, incrociare, pulire e strutturare liste di potenziali clienti target da qualsiasi risorsa web in tempo reale.
          </p>
        </section>

        {/* GRIGLIA BENEFICI */}
        <section className="mb-16">
          <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-6">Data Intelligence</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefici.map((b, idx) => (
              <div 
                key={idx} 
                className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/30 group animate-card"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-center text-sm mb-4">
                    {b.icona}
                  </div>
                  <h3 className="text-sm font-bold text-gray-200 tracking-tight group-hover:text-purple-400 transition-colors uppercase">
                    {b.titolo}
                  </h3>
                  <p className="mt-2 text-xs text-indigo-200/65 leading-relaxed">
                    {b.descrizione}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPONENTE SCENARIO */}
        <section className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-6 mb-16 animate-card" style={{ animationDelay: '0.6s' }}>
          <span className="block text-[8px] font-bold tracking-wider mb-2 uppercase text-purple-400">
            Estrazione B2B Realtime
          </span>
          <h2 className="text-base font-bold text-gray-200 mb-2">Automazione del flusso commerciale</h2>
          <p className="text-xs text-indigo-200/65 leading-relaxed">
            Un'architettura software proprietaria esegue scansioni cicliche del web per rilevare specifici parametri (cambi di organico, nuove registrazioni, keyword attive), estrae l'anagrafica aziendale verificata e popola i campi del tuo CRM, pronta per essere lavorata dal tuo team commerciale.
          </p>
        </section>

        {/* CALL TO ACTION ACCENTATA (SFUMATURA PURPLE) */}
        <section className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-8 text-center relative overflow-hidden animate-card" style={{ animationDelay: '0.7s' }}>
          <div className="absolute w-48 h-48 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 blur-[40px]" />
          <h2 className="text-xl font-bold text-gray-100 mb-2">Quanti contatti qualificati stai perdendo?</h2>
          <p className="text-xs text-indigo-200/65 max-w-md mx-auto mb-6">
            Calcola quanto tempo risparmierebbe il tuo team commerciale delegando la ricerca dei dati ai nostri sistemi automatici di mining.
          </p>
          <Link 
            className="btn group bg-gradient-to-t from-purple-600 to-purple-500 text-white shadow-md rounded-xl py-3 px-6 text-sm font-medium transition-all transform animate-auto-hero-primary active:scale-95 inline-flex items-center justify-center w-full sm:w-auto"
            href="/test"
          >
            Inizia il Test di Efficienza <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
          </Link>
        </section>

      </div>
    </main>
  );
}
