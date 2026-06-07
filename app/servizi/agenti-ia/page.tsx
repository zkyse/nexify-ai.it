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
    <main className="min-h-screen bg-gray-950 text-gray-100 pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden animate-fade-in">
      
      {/* INIEZIONE DELLE ANIMAZIONI SPECIFICHE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pageFadeIn {
          0% { opacity: 0; transform: translate3d(0, 15px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes cardFadeInUp {
          0% { opacity: 0; transform: translate3d(0, 20px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes ambientGlow {
          0%, 100% { transform: translate3d(-50%, 0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate3d(-50%, -10px, 0) scale(1.1); opacity: 1; filter: blur(140px); }
        }
        .animate-fade-in {
          animation: pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glow {
          animation: ambientGlow 8s ease-in-out infinite;
        }
        .animate-card {
          opacity: 0;
          animation: cardFadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Sfondo con Griglia Cyberpunk di Nexify */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none animate-glow" />

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Breadcrumb / Torna Indietro */}
        <Link href="/" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 mb-8 group w-fit">
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span> Torna alla Home
        </Link>

        {/* HERO SECTION */}
        <section className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            Soluzioni Core
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight">
            Agenti IA su Misura
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl">
            Sviluppiamo assistenti e agenti virtuali intelligenti progettati specificamente sulle logiche della tua azienda. Membri del team digitali in grado di ragionare, elaborare dati complessi e liberare il tuo personale dai task alienanti.
          </p>
        </section>

        {/* SEZIONE BENEFICI (GRIGLIA CYBER CON ANIMAZIONE DELLE CARD) */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Perché integrare un Agente IA nei tuoi processi</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefici.map((b, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/60 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:bg-gray-900/60 group hover:scale-[1.01] animate-card"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="text-2xl mb-4 p-2 bg-gray-950 rounded-lg w-fit border border-gray-800 group-hover:border-indigo-500/20 transition-colors">
                  {b.icona}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 group-hover:text-indigo-400 transition-colors">
                  {b.titolo}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {b.descrizione}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COME FUNZIONA / CASO D'USO */}
        <section className="mb-24 p-8 rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-900/20 border border-gray-800">
          <h2 className="text-xl font-bold text-white mb-4">Un esempio pratico di application</h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            L'agente IA monitora i tuoi canali di ingresso, estrae le informazioni rilevanti da documenti o messaggi disordinati, aggiorna autonomamente il tuo CRM, e risponde al cliente finale simulando perfettamente la competenza di un account manager senior. Il tutto in meno di 60 secondi.
          </p>
          <div className="h-[1px] bg-gradient-to-r from-gray-800 via-indigo-500/30 to-transparent w-full" />
        </section>

        {/* CALL TO ACTION (INTERNA) */}
        <section className="text-center p-10 rounded-2xl bg-gray-950 border border-indigo-500/20 relative shadow-2xl shadow-indigo-500/5 overflow-hidden
          before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-indigo-500/10 before:to-transparent before:pointer-events-none">
          <h2 className="text-2xl font-bold text-white mb-3">Pronto a delegare l'inefficienza?</h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-8">
            Calcola esattamente quante ore e risorse puoi risparmiare ogni mese grazie a un Agente IA configurato per la tua attività.
          </p>
          <Link 
            href="/test" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/20"
          >
            Avvia il Test di Efficienza
          </Link>
        </section>

      </div>
    </main>
  );
}
