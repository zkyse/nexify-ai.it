"use client";

import Link from "next/link";

export default function AgentiIAPage() {
  const benefici = [
    {
      titolo: "Automazione Decisionale",
      descrizione: "L'agente non esegue solo comandi statici, ma analizza il contesto e sceglie la migliore azione in linea con le tue linee guida aziendali.",
      icona: "🧠"
    },
    {
      titolo: "Operatività H24/7",
      descrizione: "Zero tempi morti. L'assistente virtuale risponde, elabora e smista ticket, dati o lead in totale autonomia, anche nei weekend.",
      icona: "⚡"
    },
    {
      titolo: "Integrazione Totale",
      descrizione: "Si collega nativamente con i tuoi software già in uso (CRM, database, Slack, WhatsApp) senza stravolgere i tuoi flussi di lavoro.",
      icona: "🔌"
    },
    {
      titolo: "Riduzione Errori al 100%",
      descrizione: "Elimina le sviste umane nel data-entry e nella qualificazione. Precisione matematica su ogni singola operazione ripetitiva.",
      icona: "🛡️"
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
        @keyframes pulseButtonHero { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); box-shadow: 0 4px 20px rgba(99,102,241,0.4); } }

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

      {/* STRATO PIOGGIA CONCEPTUALE (PERSONALIZZATA AGENTI IA) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="rain-stream left-[5%] text-[#818cf8]/15 text-[8px] blur-[1px]" style={{ animationDuration: '18s', animationDelay: '0s' }}>AI_AGENT_DEPLOY</div>
        <div className="rain-stream left-[28%] text-[#a855f7]/10 text-[9px] blur-[1px]" style={{ animationDuration: '22s', animationDelay: '4s' }}>NEURAL_NET_SYNC</div>
        <div className="rain-stream left-[52%] text-[#6366f1]/15 text-[8px]" style={{ animationDuration: '19s', animationDelay: '1s' }}>LLM_PROCESSING</div>
        <div className="rain-stream left-[73%] text-[#22d3ee]/10 text-[9px] blur-[2px]" style={{ animationDuration: '25s', animationDelay: '7s' }}>DECISION_MAKING</div>
        
        <div className="rain-stream left-[12%] text-[#c084fc]/35 text-[11px]" style={{ animationDuration: '12s', animationDelay: '2s', textShadow: '0 0 4px rgba(192,132,252,0.2)' }}>AUTONOMOUS_OPS</div>
        <div className="rain-stream left-[42%] text-[#38bdf8]/30 text-[10px]" style={{ animationDuration: '14s', animationDelay: '0.8s', textShadow: '0 0 4px rgba(56,189,248,0.2)' }}>INTELLIGENT_BOT</div>
        
        <div className="rain-stream left-[18%] text-[#22d3ee]/55 text-[12px]" style={{ animationDuration: '6.5s', animationDelay: '1.5s', textShadow: '0 0 8px rgba(34,211,238,0.4)' }}>SMART_AGENTS</div>
        <div className="rain-stream left-[65%] text-[#6366f1]/65 text-[14px]" style={{ animationDuration: '8s', animationDelay: '2.5s', textShadow: '0 0 10px rgba(99,102,241,0.5)' }}>CORE_INTELLIGENCE</div>
      </div>

      {/* STRATO GRIGLIA PROSPETTICA */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 20s linear infinite", transform: "translateZ(0)" }} />
      </div>

      {/* STRATO NEBULOSE / NEON BLOB */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-indigo-600/10 blur-[100px]" style={{ animation: "cosmicNebulaPerfect 40s linear infinite", transform: "translateZ(0)" }} />
        <div className="absolute bottom-[-10%] right-[-20%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-purple-600/6 blur-[110px]" style={{ animation: "cosmicNebulaPerfect 35s linear infinite reverse", transform: "translateZ(0)" }} />
      </div>

      {/* STRUTTURA CONTENUTI */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 w-full relative z-10">
        
        {/* Torna alla Home */}
        <Link href="/" className="text-xs text-indigo-300/70 hover:text-white transition-colors flex items-center gap-2 mb-10 group w-fit">
          <span className="transform group-hover:-translate-x-1 transition-transform inline-block">&lt;-</span> Torna alla Home
        </Link>

        {/* HERO SECTION */}
        <section className="space-y-4 mb-16 animate-card" style={{ animationDelay: '0.1s' }}>
          <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-400 bg-gray-900/90 border border-gray-800/70 rounded-full px-3 py-1">
            Soluzioni Core
          </span>
          <h1 className="bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-4xl sm:text-5xl font-bold text-transparent tracking-tight leading-[1.1]">
            Agenti IA su Misura
          </h1>
          <p className="text-base md:text-lg text-indigo-200/65 max-w-3xl leading-relaxed">
            Sviluppiamo assistenti e agenti virtuali intelligenti progettati specificamente sulle logiche della tua azienda. Membri del team digitali in grado di ragionare, elaborare dati complessi e liberare il tuo personale dai task più alienanti.
          </p>
        </section>

        {/* GRIGLIA BENEFICI (CONTENITORI CHAT COMPONENTE STYLE) */}
        <section className="mb-16">
          <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-6">Integrazione & Performance</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefici.map((b, idx) => (
              <div 
                key={idx} 
                className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/30 group animate-card"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-center text-sm mb-4">
                    {b.icona}
                  </div>
                  <h3 className="text-sm font-bold text-gray-200 tracking-tight group-hover:text-indigo-400 transition-colors uppercase">
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

        {/* APPLICAZIONE PRATICA (STILE CONTENITORE MESSAGGI) */}
        <section className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-6 mb-16 animate-card" style={{ animationDelay: '0.6s' }}>
          <span className="block text-[8px] font-bold tracking-wider mb-2 uppercase text-indigo-400">
            Esempio Operativo
          </span>
          <h2 className="text-base font-bold text-gray-200 mb-2">Scenario di Integrazione Aziendale</h2>
          <p className="text-xs text-indigo-200/65 leading-relaxed">
            L'agente IA monitora i tuoi canali di ingresso, estrae le informazioni rilevanti da documenti o messaggi disordinati, aggiorna autonomamente il tuo CRM e risponde al cliente finale simulando perfettamente la competenza di un operatore reale. Il tutto in meno di 60 secondi.
          </p>
        </section>

        {/* CALL TO ACTION ACCENTATA */}
        <section className="border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-8 text-center relative overflow-hidden animate-card" style={{ animationDelay: '0.7s' }}>
          <div className="absolute w-48 h-48 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 blur-[40px]" />
          <h2 className="text-xl font-bold text-gray-100 mb-2">Pronto a delegare l'inefficienza?</h2>
          <p className="text-xs text-indigo-200/65 max-w-md mx-auto mb-6">
            Calcola esattamente quante ore e risorse puoi risparmiare ogni mese grazie a un Agente IA configurato per la tua attività.
          </p>
          <Link 
            className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-md rounded-xl py-3 px-6 text-sm font-medium transition-all transform animate-auto-hero-primary active:scale-95 inline-flex items-center justify-center w-full sm:w-auto"
            href="/test"
          >
            Avvia il Test di Efficienza <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
          </Link>
        </section>

      </div>
    </main>
  );
}
