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
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione di fluttuazione leggera compatibile con i Server Components */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Sfondo decorativo */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Ricerca Lead & Data Mining
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Lead Generation / Estrazione dati e intelligenza competitiva
          </p>
        </div>

        {/* Introduzione */}
        <div className="mb-16 text-base leading-relaxed text-indigo-100/70">
          <p>
            Smettila di cercare database obsoleti o profili manualmente. Utilizziamo algoritmi avanzati per estrarre, incrociare, pulire e strutturare liste di potenziali clienti target da qualsiasi risorsa web in tempo reale.
          </p>
        </div>

        {/* Griglia Benefici Fluttuanti */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {benefici.map((b, idx) => {
            const duration = 4.2 + idx * 0.4;
            const delay = idx * 0.3;
            return (
              <div 
                key={idx} 
                className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)]"
                style={{ animation: `gentleFloat ${duration}s ease-in-out infinite`, animationDelay: `${delay}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
                    {b.icona}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{b.titolo}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {b.descrizione}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scenario Operativo Fluttuante */}
        <div 
          className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] mb-8"
          style={{ animation: "gentleFloat 5.8s ease-in-out infinite", animationDelay: "1.2s" }}
        >
          <div className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
              📊
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Automazione del Flusso Commerciale</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Un'architettura software proprietaria esegue scansioni cicliche del web per rilevare specifici parametri (cambi di organico, nuove registrazioni, keyword attive), estrae l'anagrafica aziendale verificata e popola i campi del tuo CRM, pronta per essere lavorata dal tuo team commerciale.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Fluttuante */}
        <div 
          className="rounded-xl border border-gray-800 bg-gray-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)] text-center relative overflow-hidden"
          style={{ animation: "gentleFloat 6.2s ease-in-out infinite", animationDelay: "1.5s" }}
        >
          <h3 className="text-xl font-bold text-white mb-2">Quanti contatti qualificati stai perdendo?</h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            Calcola quanto tempo risparmierebbe il tuo team commerciale delegando la ricerca dei dati ai nostri sistemi automatici di mining.
          </p>
          <Link 
            href="/test"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 active:scale-95"
          >
            Inizia il Test di Efficienza
          </Link>
        </div>

        {/* Pulsante Torna alla Home */}
        <div className="mt-20">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}
