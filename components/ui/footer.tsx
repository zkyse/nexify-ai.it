export default function IlNostroMetodoPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione combinata di fluttuazione e rotazione lieve */}
      <style>{`
        @keyframes advancedFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(0.5deg); 
          }
        }
        @keyframes advancedFloatReverse {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
          }
          50% { 
            transform: translateY(-6px) rotate(-0.5deg); 
          }
        }
      `}</style>

      {/* Sfondo decorativo */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Il Nostro Metodo
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Dall'analisi dei flussi all'ecosistema automatizzato
          </p>
        </div>

        {/* Introduzione */}
        <div className="mb-16 text-base leading-relaxed text-indigo-100/70">
          <p>
            In Nexify non crediamo nelle soluzioni standardizzate. Ogni azienda ha i suoi colli di bottiglia, i suoi software e le sei abitudini. Il nostro metodo scientifico è progettato per mappare l'esistente, eliminare il lavoro superfluo e integrare sistemi intelligenti senza stravolgere la tua operatività.
          </p>
        </div>

        {/* I 4 Step con Fluttuazione e Rotazione */}
        <div className="space-y-8">
          
          {/* Step 1 - Fluttuazione + Rotazione Oraria */}
          <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] [animation:advancedFloat_5s_ease-in-out_infinite]">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
                01
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Discovery & Mappatura dei Processi</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Analizziamo i flussi di lavoro attuali del tuo team. Identifichiamo le azioni ripetitive (inserimento dati manuale, email di follow-up, passaggi tra CRM e fogli di calcolo) che sottraggono tempo prezioso.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Fluttuazione + Rotazione Antioraria (Fuori sincrono) */}
          <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] [animation:advancedFloatReverse_5.5s_ease-in-out_infinite] [animation-delay:0.4s]">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
                02
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ingegnerizzazione dell'Architettura</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Progettiamo la logica dell'automazione. Scegliamo i connettori ideali, definiamo le regole di routing delle informazioni e strutturiamo i prompt per gli agenti IA affinché rispondano esattamente secondo le tue linee guida aziendali.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Fluttuazione + Rotazione Oraria Lenta */}
          <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] [animation:advancedFloat_6s_ease-in-out_infinite] [animation-delay:0.8s]">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
                03
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Integrazione & Sviluppo (Make, OpenAI, API)</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Sviluppiamo materialmente gli scenari e i flussi. Colleghiamo i tuoi software (WhatsApp, CRM, Email, Gestionali interni) assicurando transiti stabili, sicuri, crittografati e veloci.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Fluttuazione + Rotazione Antioraria Lenta */}
          <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] [animation:advancedFloatReverse_6.5s_ease-in-out_infinite] [animation-delay:1.2s]">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
                04
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Testing, Monitoraggio e Ottimizzazione</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Prima del rilascio definitivo effettuiamo stress-test su tutti i flussi. Una volta online, monitoriamo i log per assicurarci che nessuna automazione fallisca e ottimizziamo le performance in base all'uso reale.
                </p>
              </div>
            </div>
          </div>

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
