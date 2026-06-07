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
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden animate-fade-in">
      
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
          0%, 100% { transform: translate3d(-50%, 0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate3d(-50%, -10px, 0) scale(1.1); opacity: 0.8; filter: blur(140px); }
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

      {/* Sfondo con Griglia di Nexify */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none animate-glow" />

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Breadcrumb / Torna Indietro */}
        <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 mb-8 group w-fit">
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span> Torna alla Home
        </Link>

        {/* HERO SECTION */}
        <section className="mb-20">
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            Lead Generation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-tight">
            Ricerca Lead & Data Mining
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Smettila di cercare clienti manualmente. Utilizziamo algoritmi avanzati per estrarre, pulire e qualificare liste di potenziali partner e clienti da qualsiasi fonte web, consegnandoti solo dati pronti per la vendita.
          </p>
        </section>

        {/* SEZIONE BENEFICI (STILE IDENTICO AL TUO COMPONENTE CORRENTE) */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">Potenzia il tuo reparto commerciale</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefici.map((b, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 group hover:scale-[1.01] animate-card"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="text-xl mb-4 p-2 bg-slate-950 rounded-xl w-fit border border-slate-800">
                  {b.icona}
                </div>
                <h3 className="text-lg font-semibold text-white transition-colors">
                  {b.titolo}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {b.descrizione}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COME FUNZIONA / CASO D'USO */}
        <section className="mb-24 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 relative overflow-hidden
          before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-indigo-500/20 before:to-transparent">
          <h2 className="text-xl font-bold text-white mb-4">Caso d'uso: Estrazione Automatica B2B</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Immagina un sistema che ogni lunedì mattina scansiona directory di settore, social professionali e mappe, individua le aziende che hanno appena pubblicato un annuncio di lavoro o cambiato sede, ne estrae l'email del CEO e carica tutto sul tuo CRM. Senza che tu debba muovere unito.
          </p>
        </section>

        {/* CALL TO ACTION (CON LO STILE DEL TUO CONTAINER PRINCIPALE) */}
        <section className="text-center p-10 rounded-2xl bg-slate-950 border border-slate-800 relative shadow-2xl shadow-indigo-500/5 overflow-hidden
          before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-indigo-500/5 before:to-transparent before:pointer-events-none">
          <h2 className="text-2xl font-bold text-white mb-3">Quanti lead stai perdendo oggi?</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto mb-8">
            Calcola quanto tempo risparmierebbe il tuo team commerciale delegando la ricerca dei dati ai nostri sistemi automatici di mining.
          </p>
          <Link 
            href="/test" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/10"
          >
            Inizia il Test di Efficienza
          </Link>
        </section>

      </div>
    </main>
  );
}
